import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={ projectData.project_image } alt="" />
                <h3>{ projectData.project_name }</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;