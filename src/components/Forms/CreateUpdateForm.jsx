import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateUpdateForm() {
    const [update, setNewUpdate] = useState({
        project_id: "",
        update_name: "",
        update_content: "",
        author: "",
        owner: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewUpdate((prevUpdate) => ({
            ...prevUpdate, [id]: value,
        }));
    }

    const postData = async () => {
        const token = window.localStorage.getItem("token")

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}updates/createupdate/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(update),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
            window.localStorage.setItem("updateby", response.author);
        });
    };

    return (
        <form className="create-form">
            <h1>Create New Update</h1>
            <p>Write the details of your progress here, so that your supporters and potential supporters know what you have been working on since creating your project.</p>
            <p>You need to be logged in to create an update. Click here to <Link to="/login">Login</Link>.</p>

            <label htmlFor="project_id">Which project are you writing an update for?</label>
            <input
                type="number"
                id="project_id"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="update_name">Title for your update</label>
            <input
                type="text"
                id="update_name"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="update_content">Write your update story here</label>
            <input
                text="textarea"
                id="update_content"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="owner">Your User ID number</label>
            <input
                type="number"
                id="owner"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="author">Your first and last names</label>
            <input
                type="text"
                id="author"
                onChange={handleChange}
            />
            <br/>
            <br/>

            <h3>Check the details below are correct, then Submit.</h3>
            <p>Project ID: { update.project_id }</p>
            <p>Update Title: { update.update_name }</p>
            <p>Update Details: { update.update_content }</p>
            <p>Your Username: { update.owner }</p>
            <p>Your Full Name: { update.author }</p>

            Are you ready to publish your update?
            <button
                type="submit"
                onClick={ handleSubmit }
            >
            Publish Update
            </button>
            <br/>
        </form>
    );
}

export default CreateUpdateForm;
