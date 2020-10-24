import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logout from "../Forms/LogoutForm";

function Nav() {
    // const history = useHistory();
    // const handleLogout=() => {
    //     logout()(dispatch);
    // }

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
                &nbsp;&nbsp;
                <Link to="/createuser">Sign Up</Link>
                &nbsp;&nbsp;
                <button type="button"><Link to="/logout">Logout</Link></button>
            </div>
        </nav>
    );
}

export default Nav;