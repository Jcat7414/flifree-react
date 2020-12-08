import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function ProjectsByPage() {
    const ownerUserName = window.localStorage.getItem("ownerUserName");
    const ownerFirstName = window.localStorage.getItem("ownerFirstName");

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/owner/${ownerUserName}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
        });
    }, []);


    return (
        <div id="projects">
            <div>
                <h1>Projects by { ownerFirstName }</h1>
            </div>
            <ul id="project-list">
                {projectList.map((projectData, key) => {

                    return (
                        <li key={key}>
                            <ProjectCard key={key} projectData={projectData} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectsByPage;