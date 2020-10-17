import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { oneProject } from "../data";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
           headers: {
           'Authorization': `Token ${token}`
           }
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, [id]);
    console.log(projectData)

    return (
    <div>
        <h2>{ projectData.project_name }</h2>
        <h3>Created on: { projectData.date_created }</h3>
        <h3>{`Status: ${ projectData.is_open }`}</h3>
        <h3>Pledges: </h3>
        <ul>
            {projectData.pledges.map((pledgeData, key) => {
                return (
                    <li key={key}>
                        { pledgeData.pledge_quantity } from { pledgeData.owner }
                    </li>
                );
            })}
        </ul>
    </div>
    );
}

export default ProjectPage;