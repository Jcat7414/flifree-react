import React from "react";
// import { allProjects } from "../data";
import { Link } from "react-router-dom";


function HomePage() {

    return (
        <div id="home-page">
            <img src="https://res.cloudinary.com/flifree/image/upload/v1603150947/You_Can_Help_x0ioey.jpg" alt=""></img>
            <h1>HELP NEW MEMBERS OF YOUR LOCAL COMMUNITY TO FLI FREE</h1>
            &nbsp;&nbsp;
            <p>You have skills. Your neighbours have skills. New members of your neighbourhood could use a hand. Do you know what with?</p>
            <p>Fli Free helps you connect with people in your local area who are learning to start their own business, that need some help.</p>
            <p>They might need:</p>
            <ul>
                <li>Access to Facilities</li>
                <li>Resources to get started</li>
                <li>Help getting Exposure in the community</li>
                <li>Advice from Experts</li>
            </ul>
            <p>Your support will help to foster local integration.</p>
            <h3>It will help your neighbour to FLI FREE</h3>
            <Link to="/projects"><button type="button" href="/projects">Projects</button></Link>
            &nbsp;&nbsp;
            <Link to="/about"><button type="button" href="/about">About Fli Free</button></Link>
            
        </div>
    );
}

export default HomePage;