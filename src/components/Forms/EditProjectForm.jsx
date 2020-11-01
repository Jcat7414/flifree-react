import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const EditProjectForm = (props) => {
    const [project, setProject] = useState(props.currentProject)
    const { id } = useParams();
    const history = useHistory();
    var statuscode = 0;

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setProject({ ...project, [id]: value })
    }

    const postData = async () => {   
        const token = window.localStorage.getItem("token")
     
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(project),
        })
        .then((response) => {
            statuscode=(response.status);
            console.log(statuscode);
            return response.json();
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
        .then((response) => {
            if(statuscode === 201) {
                setProject(response);
                history.push(`/projects/${id}`);
            } else {
                console.log(statuscode);
                history.push("/unauthorised");
            };
        });
    };


    return (
        <form className="create-form">
            <h1>Edit Project</h1>
            <p>Update the details of your project.</p>
            <p>You need to be logged in to edit your project. Click here to <Link to="/login">Login</Link></p>

            <label htmlFor="project_name">Your project name: </label>
            <input 
                type="text" 
                id="project_name"
                placeholder="{ project.project_name }"
                required
                // value={project.project_name}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_intro">Your Introduction: </label>
            <input
                type="textarea"
                id="project_intro"
                placeholder="Write a short description of what you do and what you need help with."
                // value={project_intro}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_goal">Your Goal: </label>
            <input
                type="number"
                id="project_goal"
                // value={project_goal}
                onChange={handleChange}
            />
            <br/>
            What do you NEED help with? (tick all that apply):&nbsp;
            <label htmlFor="needs_facilities">Facilities: </label>
            <input
                type="checkbox"
                id="needs_facilities"
                // checked="needs_facilities"
                onChange={handleChange}
                />
            &nbsp;
            <label htmlFor="needs_resources">Resources: </label>
            <input
                type="checkbox"
                id="needs_resources"
                // checked={needs_resources}
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
            Are you ready to open your project for pledges?&nbsp;
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
                // value={project_story}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_needs">Write more details about you need help with: </label>
            <input
                type="text"
                id="project_needs"
                // value={project_needs}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_faq">What questions and answers would you like to share? </label>
            <input
                type="text"
                id="project_faq"
                // value={project_faq}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="project_image">Copy the URL of an image that you would like to use: </label>
            <input
                type="url"
                id="project_image"
                // value={project_image}
                onChange={handleChange}
            />
            <br/>
            <br/>
            Submit your project:
            <button 
                type="submit"
                // value={create_project}
                onClick={ handleSubmit }
            >
            Submit
            </button>
            <br/>

            {/* <p>Project Name: { project.project_name }</p>
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
            <p>Project Image: { project.project_image }</p> */}
        </form>
    );
}

export default EditProjectForm;
