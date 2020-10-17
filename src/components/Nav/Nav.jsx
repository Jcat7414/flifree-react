import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            &nbsp;&nbsp;
            {/* <Link to="/projects">Project</Link> */}
        </nav>
    );
}

export default Nav;