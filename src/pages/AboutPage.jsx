import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <img src="https://res.cloudinary.com/flifree/image/upload/v1603150946/Helping_Hands_ettm9s.jpg" alt=""></img>
            <h1>About Fli Free</h1>
            <p>Fli Free stands for "Fostering Local Integration, through sharing of Facilities, Resources, Exposure and Expertise.</p>
            <h2>Where did Fli Free start?</h2>
            <p>As part of the Zero to Startup program by the team from Canvas Coworking in Toowoomba (Queensland, Australia) we have identified that there are many motivated migrants now residing in our beautiful city. These people are looking for opportunities to connect with their neighbours and local businesses. They want to contribute to the community they now call home. They want to share their skills, knowledge, passions and experience. They want to make a living, provide for their families and be independant.</p>
            <p>Meet our <Link to="/users">Motivated Migrants</Link></p>
            <h2>How does Fli Free help motivated migrants?</h2>
            <p>Starting a new business is hard. Even if you were born in Australia, learning all of the elements of business, understanding the rules and regulations, and knowing what to do first is challenging.</p>
            <p>Add to that, the complexity that comes from having been raised in a different part of the world, with different rules, customs and expectations. It is more than difficult to do on your own, it is almost impossible.</p>
            <p>This is why we have created Fli Free. A platform for motivated migrants to share their story and explain what they need help with, in order to be able to get started in business.</p>
            <p>Which relies on the support, generosity and kindness of other people in the community.</p>
            <p>See our <Link to="/users">Super Supporters</Link></p>
            <h2>What type of help is required?</h2>
            <p>The platform does not ask for any cash payment. All projects are seeking time. Some examples include:</p>
            <div>
                <h3>Facilities</h3>
                <ul>
                    <li>the use of a mechanical workshop</li>
                    <li>a seat in a beauty salon</li>
                    <li>access to a commercial kitchen</li>
                    <li>a desk in a shared office</li>
                </ul>
            </div>
            <div>
                <h3>Resources</h3>
                <ul>
                    <li>sewing machine</li>
                    <li>welding equipment</li>
                    <li>kiln</li>
                    <li>computer</li>
                </ul>
            </div>
            <div>
                <h3>Exposure</h3>
                <ul>
                    <li>photography session</li>
                    <li>guest on a podcast</li>
                    <li>interview for blog</li>
                    <li>television news interview</li>
                    <li>magazine article</li>
                    <li>accompanying to a networking event</li>
                </ul>
            </div>
            <div>
                <h3>Expertise</h3>
                <ul>
                    <li>creating legal documents</li>
                    <li>setting up bookkeeping systems</li>
                    <li>setting up a business entity</li>
                    <li>developing a brand</li>
                    <li>building a website</li>
                    <li>setting up and using social media</li>
                    <li>creating and editing marketing materials</li>
                    <li>understanding rules and regulations</li>
                    <li>applying for licences and insurance</li>
                </ul>
            </div>
            <p>The Fli Free plaform is a project created by Joy Taylor as part of the She Codes Plus program.</p>
            <p>Wondering what it takes to be involved? Find more <Link to="/terms">details here</Link>.
</p>
        </div>
    );
}

export default About;