import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <nav>
            <Link to="/terms">Terms</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/privacy">Privacy</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/contact">Contact</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/about">About</Link>
            <div><p>&copy; Joy Taylor 2020</p></div>
        </nav>
        
    );
}

export default Footer;