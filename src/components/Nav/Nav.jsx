import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div>
                FLI FREE
            </div>
            <div>
                <Link to="/">Home</Link>
                &nbsp;&nbsp;
                <Link to="/projects">Projects</Link>
                &nbsp;&nbsp;
                <Link to="/about">About</Link>
                &nbsp;&nbsp;
                <Link to="/login">Login</Link>
                &nbsp;&nbsp;
                <Link to="/createproject">Create Project</Link>
                
            </div>
        </nav>
    );
}

export default Nav;