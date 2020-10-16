import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/projects`, {
            headers: {
                "Content_Type": "application/json",
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
        <div id="project-list">
            <h1>FLIFREE PROJECTS</h1>
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    );
}

export default HomePage;