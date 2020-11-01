import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreatePledgeForm() {
    const [pledge, setNewPledge] = useState({
        project_id: "",
        pledge_quantity: "",
        pledge_description: "",
        sup_facilities: false,
        sup_resources: false,
        sup_exposure: false,
        sup_expertise: false,
        anonymous: false,
        terms_privacy: true,
        is_fulfilled: false,
        project: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewPledge((prevPledge) => ({
            ...prevPledge, [id]: value,
        }));
    }

    const postData = async () => {
        const token = window.localStorage.getItem("token")

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}pledges/createpledge/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(pledge),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
            window.localStorage.setItem("project", response.project);
        });
    };

    return (
        <form className="create-form">
            <h1>Create New Pledge</h1>
            <p>Enter the details here to describe what support you can provide.</p>
            <p>The quantity refers to 'hours' of time you are making yourself, the facilities or the resources available for.</p>
            <p>You need to be logged in to create a pledge. Click here to <Link to="/login">Login</Link>.</p>

            <label htmlFor="project_id">Which project are you pledging to support? (Enter the Project ID number) </label>
            <input
                type="number"
                id="project_id"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="pledge_quantity">How much time can you offer?</label>
            <input
                type="number"
                id="pledge_quantity"
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="pledge_description">Describe how you can provide support</label>
            <input
                type="textarea"
                id="pledge_description"
                placeholder="Write a short description here of what you are offering to help with, including how much of each item if applicable."
                required
                onChange={handleChange}
            />
            <br/>
            What you can provide SUPPORT for? (tick all that apply):&nbsp;
            <label htmlFor="sup_facilities">Facilities: </label>
            <input
                type="checkbox"
                id="sup_facilities"
                onChange={handleChange}
                />
            &nbsp;
            <label htmlFor="sup_resources">Resources: </label>
            <input
                type="checkbox"
                id="sup_resources"
                onChange={handleChange}
                />
            &nbsp;
            <label htmlFor="sup_exposure">Exposure: </label>
            <input
                type="checkbox"
                id="sup_exposure"
                onChange={handleChange}
                />
            &nbsp;
            <label htmlFor="sup_expertise">Expertise: </label>
            <input
                type="checkbox"
                id="sup_expertise"
                onChange={handleChange}
                />
            <br/>
            Are you happy to be recognised for your support?&nbsp;
            <label>Yes: </label>
            <input 
                type="radio"
                id="anonymous"
                value="false"
                onChange={handleChange}
            />
            &nbsp;
            <label>No: </label>
            <input 
                type="radio"
                id="anonymous"
                value="true"
                onChange={handleChange}
            />
            <br/>
            Please confirm that you have read and accept the Terms and Privacy statements
            <label htmlFor="terms_privacy">Confirmed: </label>
            <input
                type="radio"
                id="terms_privacy"
                value="true"
                onChange={handleChange}
                />
                &nbsp;
            <label>No: </label>
            <input 
                type="radio"
                id="terms_privacy"
                value="false"
                onChange={handleChange}
            />
            <br/>
            Have you already provided the support?&nbsp;
            <label>Yes: </label>
            <input 
                type="radio"
                id="is_fulfilled"
                value="true"
                onChange={handleChange}
            />
            &nbsp;
            <label>No: </label>
            <input 
                type="radio"
                id="is_fulfilled"
                value="false"
                onChange={handleChange}
            />
            <br/>
            
            <label htmlFor="project">Please confirm which project are you pledging to support? (Enter the Project ID number) </label>
            <input
                type="number"
                id="project"
                onChange={handleChange}
            />
            <br/>
            <br/>
            
            <h3>Confirm the details below are correct, then submit your pledge.</h3>
            <p>Pledge Amount: { pledge.pledge_quantity }</p>
            <p>Pledge Description: { pledge.pledge_description }</p>
            <p>Support Facilities: { pledge.sup_facilities ? "true" : "false" }</p>
            <p>Support Resources: { pledge.sup_resources ? "true" : "false" }</p>
            <p>Support Exposure: { pledge.sup_exposure ? "true" : "false" }</p>
            <p>Support Expertise: { pledge.sup_expertise ? "true" : "false" }</p>
            <p>Anonymous: { pledge.anonymous }</p>
            <p>Terms and Privacy: { pledge.terms_privacy }</p>
            <p>Pledge Fulfilled: { pledge.is_fulfilled }</p>
            <p>Project ID: { pledge.project_id }</p>
            <br/>
            <br/>
            Submit your pledge:
            <button
                type="submit"
                onClick={ handleSubmit }
            >
            Submit Pledge
            </button>
            <br/>
        </form>
    );
}

export default CreatePledgeForm;