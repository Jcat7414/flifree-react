import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import NeedsFacilities from "../components/ProjectNeeds/NeedsFacilities";
import NeedsResources from "../components/ProjectNeeds/NeedsResources";
import NeedsExposure from "../components/ProjectNeeds/NeedsExposure";
import NeedsExpertise from "../components/ProjectNeeds/NeedsExpertise";
import ProjectStage from "../components/ProjectNeeds/ProjectStage";
import { Link} from "react-router-dom";
// import { render } from "@testing-library/react";
// import dateFormat from "dateformat";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ projects: [], pledges: [], updates: [] });
    const { id } = useParams();

    useEffect(() => {
        // const token = window.localStorage.getItem("token")

        fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`, {
        headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Token ${token}`
        },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, [id]);
  

    class IsOpen extends Component {
        constructor(props) {
            super(props)

            this.state = {
                isOpen: projectData.is_open
            }
        }

        render() {
            return (
            this.state.isOpen ?
                <div><a href="../login/">Pledge your support</a></div> :
                <div>This project is currently closed for new pledges.</div>
            )
        }
    };

    const pdate = new Date(projectData.date_created)
    const projectDate = pdate.getDate() + "-" + pdate.getMonth() + "-" + pdate.getFullYear();

    const udate = new Date(projectData.update_date)
    console.log(udate)

    return (
    <div>
        <img src={ projectData.project_image } alt="" />
        <h2>{ projectData.project_name }</h2>
        <h3><Link to={`/users/${ projectData.owner }`}>{ projectData.founder }</Link></h3>
        <p>{ projectData.project_intro }</p>
        <NeedsFacilities projectData={ projectData } />
        <NeedsResources projectData={ projectData } />
        <NeedsExposure projectData={ projectData } />
        <NeedsExpertise projectData={ projectData } />
        {/* <ProjectStage /> */}
        <ProjectStage projectData={ projectData } />

        <IsOpen />
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
                    </li>
                );
            })}
        </ul>
        <IsOpen />
        <h3>Current Pledges: </h3>
        <ul>
            {projectData.pledges.map((pledgeData, key) => {
                return (
                    <li key={key}>
                        { pledgeData.pledge_quantity } hours from <Link to={`/users/${pledgeData.owner}`}>{ pledgeData.supporter }</Link>
                    </li>
                );
            })}
        </ul>
        <IsOpen />
        <p>Created on: { projectDate }</p>
        <br/>
        {/* if the logged in user is the owner, then show the option to amend the project */}
        {/* add a link to the work edit */}
        <p>Edit this project</p>
        <p>Return to <Link to="/projects">All Projects</Link></p>
    </div>
    );
}

export default ProjectPage;