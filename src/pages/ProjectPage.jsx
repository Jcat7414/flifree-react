import React, { useState, useEffect, Component } from "react";
import { Link, useParams } from "react-router-dom";
import NeedsFacilities from "../components/ProjectNeeds/NeedsFacilities";
import NeedsResources from "../components/ProjectNeeds/NeedsResources";
import NeedsExposure from "../components/ProjectNeeds/NeedsExposure";
import NeedsExpertise from "../components/ProjectNeeds/NeedsExpertise";
import ProjectStage from "../components/ProjectNeeds/ProjectStage";
import IsOpen from "../components/ProjectNeeds/IsOpen";
import IsAnon from "../components/ProjectNeeds/IsAnon";
import IsOwner from "../components/ProjectNeeds/IsOwner";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ projects: [], pledges: [], updates: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`, {
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, [id]);
  

    const pdate = new Date(projectData.date_created)
    const projectDate = pdate.getDate() + "-" + pdate.getMonth() + "-" + pdate.getFullYear();

    return (
    <div>
        <img src={ projectData.project_image } alt="" />
        <h2>{ projectData.project_name }</h2>
        <h3><Link to={`/users/${ projectData.owner }`}>{ projectData.founder }</Link></h3>
        {/* <IsOwner projectData={ projectData }/> */}
        <p>{ projectData.project_intro }</p>
        <NeedsFacilities projectData={ projectData } />
        <NeedsResources projectData={ projectData } />
        <NeedsExposure projectData={ projectData } />
        <NeedsExpertise projectData={ projectData } />
        {/* <ProjectStage /> */}
        <ProjectStage projectData={ projectData } />

        <IsOpen projectData={ projectData }/>
        <h3>Founder Story:</h3>
        <p>{ projectData.project_story }</p>
        <h3>Details of what is needed:</h3>
        <p>{ projectData.project_needs }</p>
        <h3>FAQs:</h3>
        <p>{ projectData.project_faq }</p>
        <h3>Project Updates: </h3>
        <ul>
            {projectData.updates.map((updateData, key) => {
                return (
                    <li key={key}>
                        <h4>{ updateData.update_name }</h4>
                        <p>{ updateData.update_content }</p>
                        <p>{ updateData.update_date }</p>
                    </li>
                );
            })}
        </ul>
        <IsOpen projectData={ projectData }/>
        <h3>Current Pledges: </h3>
        <ul>
            {projectData.pledges.map((pledgeData, key) => {
                return (
                    <li key={key}>
                        <IsAnon pledgeData={ pledgeData }/>
                    </li>
                );
            })}
        </ul>
        <IsOpen projectData={ projectData }/>
        <p>Created on: { projectDate }</p>
        <br/>
        {/* if the logged in user is the owner, then show the option to amend the project */}
        <p>Edit this <Link to={`/editproject/${ projectData.id }`}>project</Link></p>
        <p>Write an <Link to="/createupdate">Update</Link> for this project.</p>
        <p>Return to <Link to="/projects">All Projects</Link></p>
    </div>
    );
}

export default ProjectPage;