import React from "react";
import { Link } from "react-router-dom";

function HomePage() {

    return (
        <div id="home-page">
            <img src="https://res.cloudinary.com/flifree/image/upload/v1603150947/You_Can_Help_x0ioey.jpg" alt=""></img>
            <h1>HELP YOUR NEIGHBOUR FLI FREE</h1>
            <p>You have skills. Your neighbours have skills. New members of your neighbourhood could use a hand.
                <br/>Do you know what with?</p>
            <p>Fli Free helps you connect with people in your local area who are learning to start their own business, that need some help.</p>
            <p>They may need:</p>
            <ol className="needs-list">
                <li className="needs">Access to FACILITIES</li>
                <li className="needs">RESOURCES to get started</li>
                <li className="needs">Help getting EXPOSURE</li>
                <li className="needs">Advice from EXPERTS</li>
            </ol>
            <p>Your support will help to foster local integration.</p>
            <h3>Your support will help your neighbour <span>FLI FREE</span></h3>
            <Link to="/projects"><button type="button" href="#">View Projects</button></Link>
            &nbsp;&nbsp;
            <Link to="/about"><button type="button" href="/about">About Fli Free</button></Link>
            &nbsp;&nbsp;
        </div>
    );
}

export default HomePage;