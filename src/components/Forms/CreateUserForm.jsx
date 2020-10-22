import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateUserForm() {
    const [user, setNewUser] = useState({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        image: "",
        bio: "",
        phone: "",
        location: "",
        newsletter_signup: "",
        terms_privacy: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    }

    const postData = async() => {
        // const token = window.localStorage.getItem("token")

        const response = await fetch(
        `${process.env.REACT_APP_API_URL}users/createuser`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Token ${token}`
            },
            body: JSON.stringify(user),
        }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
            window.localStorage.setItem("user", response.user);
        });
    };

    return (
        <form className="create-form">
            <h1>Welcome to Fli Free!</h1>
            <p>Sign up to join as a Founder or a Supporter, or both!</p>

            <label htmlFor="first_name">Your first name</label>
            <input
                type="text"
                id="first_name"
                placeholder="Your First Name"
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="last_name">Your last name</label>
            <input
                type="text"
                id="last_name"
                placeholder="Your Last Name"
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="phone">Your phone number</label>
            <input
                type="text"
                id="phone"
                placeholder=""
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="email">Your Email</label>
            <input
                type="text"
                id="email"
                placeholder=""
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="location">Which city/town do you live in?</label>
            <input
                type="text"
                id="location"
                placeholder=""
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="image">Add a Profile Photo</label>
            <input
                type="url"
                id="image"
                placeholder="Paste a link to a URL of your profile photo"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="username">Create a Username</label>
            <input
                type="text"
                id="username"
                placeholder="Create a Username"
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="password">Create a password</label>
            <input
                type="password"
                id="password"
                placeholder="Minimum 8 characters"
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="newsletter_signup">Sign me up to the Fli Free newsletter</label>
            <input
                type="checkbox"
                id="newsletter"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="terms_privacy">I agree to the <Link to="/terms">Terms</Link> and have read and understand the <Link to="/privacy">Privacy Policy</Link></label>
            <input
                type="checkbox"
                id="terms_privacy"
                required
                onChange={handleChange}
            />
            <br/>
            <br/>
            <button
                type="submit"
                onClick={ handleSubmit }
            >Sign Up</button>
            <br/>

            <p>First Name: { user.first_name }</p>
            <p>Last Name: { user.last_name }</p>
            <p>Phone: { user.phone }</p>
            <p>Email: { user.email }</p>
            <p>Location: { user.location }</p>
            <p>Image: {user.image }</p>
            <p>Username: { user.username }</p>
            <p>Password: { user.password }</p>
            <p>Newsletter: { user.newsletter_signup ? "true" : "false" }</p>
            <p>Terms: { user.terms_privacy ? "true" : "false" }</p>
        </form>
    );
}

export default CreateUserForm;