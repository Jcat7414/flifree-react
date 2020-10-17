import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { oneProject } from "../data";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ projects: [], pledges: [], updates: [] });
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

    function needsFacilities(props) {
        return <h4>Needs Facilities</h4>;
    }

    function noFacilities(props) {
        return <h4>No Facilities Needed</h4>
    }

    function Facilities(props) {
        const facility = projectData.needs_facilities;
        if (facility) {
            return <needsFacilities />;
        }
        return <noFacilities />;
    }

    return (
    <div>
        <img src={ projectData.project_image } />
        <h2>{ projectData.project_name }</h2>
        <h3>{ projectData.founder }</h3>
        <p>{ projectData.project_intro }</p>
        <Facilities />
        {/* <p>Created on: { projectData.date_created }</p> */}
        {/* <h3>{`Status: ${ projectData.is_open }`}</h3> */}
        <a href="../login/">Pledge your support</a>
        <h3>Current Pledges: </h3>
        <ul>
            {projectData.pledges.map((pledgeData, key) => {
                return (
                    <li key={key}>
                        { pledgeData.pledge_quantity } hours from Supporter # { pledgeData.owner }
                    </li>
                );
            })}
        </ul>
        <h3>Founder Story:</h3>
        <p>{ projectData.project_story }</p>
        <h3>FAQs:</h3>
        <p>{ projectData.project_faq }</p>
        <h3>Project Updates: </h3>
        <ul>
            {projectData.updates.map((updateData, key) => {
                return (
                    <li key={key}>
                        <h4>{ updateData.update_name }</h4>
                        <p>{ updateData.update_content }</p>
                        <p>{ updateData.update_date }</p>
                    </li>
                );
            })}
        </ul>
    </div>
    );
}

export default ProjectPage;