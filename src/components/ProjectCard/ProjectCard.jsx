import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link to={`/projects/${projectData.id}`}>
                <img src={ projectData.project_image } alt="" />
                <h3>{ projectData.project_name }</h3>
                <h4>{ projectData.founder }</h4>
            </Link>
        </div>
    );
}

export default ProjectCard;