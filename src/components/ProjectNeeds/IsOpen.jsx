import React from "react";
import { Link } from "react-router-dom";

function IsOpen (props) {
    const { projectData } = props;
    const IsOpen = projectData.is_open

    return (
        IsOpen ?
        <div><a href="../createpledge/">Pledge your support</a></div> :
        <div>This project is currently closed for new pledges.</div>
    );
}

export default IsOpen;