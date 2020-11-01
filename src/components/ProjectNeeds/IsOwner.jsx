import userEvent from "@testing-library/user-event";
import React from "react";
import { Link } from "react-router-dom";

function IsOwner (props) {
    const { projectData } = props;
    const user = window.localStorage.getItem("user_id")
    const IsOwner = projectData.owner === user
    
    return (
        IsOwner ?
        <div>User is the project owner</div> :
        <div>User is not the project owner</div>
    );
}

export default IsOwner;