import React from "react";
import { Link } from "react-router-dom";

function UnauthMessage () {
    return (
        <div>
            <h2>Unauthorised Action</h2>
            <p>This option is only available for an authorised user.</p>
            <p>If you are an authorised user, please <Link to="/login">login</Link> and try again.</p>
        </div>
    )
}

export default UnauthMessage;