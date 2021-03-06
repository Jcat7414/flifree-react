import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.css"



function CreateProjectForm () {
    const [project, setNewProject] = useState({
        project_name: "",
        project_intro: "",
        project_goal: "",
        needs_facilities: false,
        needs_resources: false,
        needs_exposure: false,
        needs_expertise: false,
        project_stage: "Start",
        project_story: true,
        project_needs: "",
        project_faq: "",
        project_image: "",
        is_open: true,
    });
    
    
    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewProject((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    }

    const postData = async () => {   
        const token = window.localStorage.getItem("token")
     
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/createproject/`, 
        {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(project),
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
            <h1>Create a New Project</h1>
            <p>Enter the details for your project in the boxes below. If you are not sure what to write, enter TBC and we can edit it later.</p>
            <p>You need to be logged in to create a project. Click here to <Link to="/login">Login</Link>.</p>

            <label htmlFor="project_name">What is your project name? </label>
            <input 
                type="text" 
                id="project_name"
                placeholder="Enter Project Name"
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_intro">Introduction: </label>
            <input
                type="textarea"
                id="project_intro"
                placeholder="Write a short description of what you do."
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_goal">How many hours of help are you seeking? </label>
            <input
                type="number"
                id="project_goal"
                onChange={handleChange}
            />
            <br/>
            What do you NEED help with? (tick all that apply):<br/>
            <label htmlFor="needs_facilities">Facilities: </label>
            <input
                type="checkbox"
                id="needs_facilities"
                onChange={handleChange}
                />
            &nbsp;
            <label htmlFor="needs_resources">Resources: </label>
            <input
                type="checkbox"
                id="needs_resources"
                onChange={handleChange}
                />
            &nbsp;
            <label htmlFor="needs_exposure">Exposure: </label>
            <input
                type="checkbox"
                id="needs_exposure"
                onChange={handleChange}
                />
            &nbsp;
            <label htmlFor="needs_expertise">Expertise: </label>
            <input
                type="checkbox"
                id="needs_expertise"
                onChange={handleChange}
                />
            <br/>
            <label htmlFor="project_stage">What stage is your business idea up to? </label>
            <select id="project_stage" onChange={handleChange}>
                <option value="Start">Start</option>
                <option value="Trial">Trial</option>
                <option value="Adjust">Adjust</option>
                <option value="Retail">Retail</option>
            </select>
            <br/>
            Are you ready to open your project for pledges?
            <br/>
            <label>Yes: </label>
            <input 
                type="radio"
                id="is_open"
                value="true"
                onChange={handleChange}
            />
            &nbsp;
            <label>No: </label>
            <input 
                type="radio"
                id="is_open"
                value="false"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_story">Tell us about your background: </label>
            <input
                type="text"
                id="project_story"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_needs">Write more details about you need help with: </label>
            <input
                type="text"
                id="project_needs"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_faq">What questions and answers would you like to share? </label>
            <input
                type="text"
                id="project_faq"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_image">Copy the URL of an image that you would like to use: </label>
            <input
                type="url"
                id="project_image"
                onChange={handleChange}
            />
            <br/>
            <br/>
            <h3>Check the details below are correct, then click Submit to publish your project.</h3>
            <p>Project Name: { project.project_name }</p>
            <p>Project Intro: { project.project_intro }</p>
            <p>Project Goal: { project.project_goal }</p>
            <p>Needs Facilities: { project.needs_facilities ? "true" : "false" }</p>
            <p>Needs Resources: { project.needs_resources ? "true" : "false" }</p>
            <p>Needs Exposure: { project.needs_exposure ? "true" : "false" }</p>
            <p>Needs Expertise: { project.needs_expertise ? "true" : "false" }</p>
            <p>Project Stage: { project.project_stage }</p>
            <p>Project Open: { project.is_open }</p>
            <p>Project Story: { project.project_story }</p>
            <p>Project Needs: { project.project_needs }</p>
            <p>Project FAQ: { project.project_faq }</p>
            <p>Project Image: { project.project_image }</p>

            <br/>
            <p>Are you ready to submit your project?</p>
            <button 
                type="submit"
                onClick={ handleSubmit }
            >
            Submit
            </button>
            <br/>
        </form>
    );
}


export default CreateProjectForm;