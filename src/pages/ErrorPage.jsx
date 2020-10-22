import React from "react";
import { Link } from "react-router-dom";

function ErrorMessage() {
    return (
        <div>
            <h2>Sorry, this is not the page you were looking for.</h2>
            <p>Click <Link to="/">here</Link>to start again.</p>
        </div>
    )
}

export default ErrorMessage;