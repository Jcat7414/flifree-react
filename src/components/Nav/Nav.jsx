import React from "react";
import { Link, useHistory } from "react-router-dom";

function Nav() {
    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <nav>
            <ul>
                <li className="logo"><Link to="/"><img src="https://res.cloudinary.com/flifree/image/upload/v1604306955/fli_free_ih8xj0.png" alt="fli free logo"></img></Link></li>
                <li className="dropdown">
                    <a href="#" onClick={handleClick} className="dropbtn">Menu</a>
                    <div className="dropdown-content">
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/createuser">Sign Up</Link>
                        <Link to="/createproject">Create Project</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;