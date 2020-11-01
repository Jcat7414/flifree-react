import React from "react";
import { Link } from "react-router-dom";

function ConfirmPledge () {
    return (
        <div>
            <img src="https://res.cloudinary.com/flifree/image/upload/v1604218641/Thank_you_zunwxt.jpg" alt="Thank you in many languages on bright coloured paper."></img>
            <h1>Thank you!</h1>
            <p>Your pledge has been received.</p>
            <p>Our team will be in touch soon to discuss the finer details.</p>
            <p>Encourage your family and friends to pledge their support too. Share your pledge on Facebook, Twitter or LinkedIn.</p>
            <p>Learn about other <Link to="/users">Motivated Migrants</Link> who need help to start to Fli Free.</p>
            <Link to="/projects"><button type="button" href="/projects">View Projects</button></Link>
            <p>If you have any questions, please <Link to="/contact">contact us</Link>!</p>
        </div>
    );
}

export default ConfirmPledge;