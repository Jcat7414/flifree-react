import React from "react";

function ProjectStage(props) {
    const { projectData } = props;
    const stage = projectData.project_stage

    switch(stage) {
        case "Start":
            return <span>Start</span>
        case "Trial":
            return <span>Trial</span>
        case "Adjust":
            return <span>Adjust</span>
        case "Retail":
            return <span>Retail</span>
        default:
            return <span>Start</span>
    }
};

export default ProjectStage;
