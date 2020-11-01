import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {        
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}api-token-auth/`, 
        {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        }
        );
        return response.json();
    };
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
        postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("user", credentials.username);
        history.push("/projects");
        });
        }
    };

    return (
        <form className="login-form">
            <h2>It is great to see you again!</h2>
            <p>Log in to continue</p>
            <div>
                <label htmlFor="username">Enter your username: </label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}
                />
            </div>
            &nbsp;
            <div>
                <label htmlFor="password">Enter your password: </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <p id="password-reset">Reset Password</p>
            <div>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </div>
            <p>New to Fli Free? Sign Up</p>
            <div>
                <button type="button" href="/about">Learn more about Fli Free</button>
            </div>
            &nbsp;
        </form>
    );
}

export default LoginForm;