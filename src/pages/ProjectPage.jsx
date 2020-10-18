import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
// import NeedsFacilities from "../components/ProjectNeeds/NeedsFacilities";
// import NeedsResources from "../components/ProjectNeeds/NeedsResources";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ projects: [], pledges: [], updates: [], users: [] });
    const { id } = useParams();

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
           headers: {
           'Authorization': `Token ${token}`
           }
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, [id]);

    class NeedsFacilities extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                needsFacilities: projectData.needs_facilities
            }
        }
    
        render() {
            return (
                this.state.needsFacilities ?
                <div>Needs Facilities</div> :
                <div>No Facilities Needed</div>
            )
        }
    };

    class NeedsResources extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                needsResources: projectData.needs_resources
            }
        }
    
        render() {
            return (
                this.state.needsResources ?
                <div>Needs Resources</div> :
                <div>No Resources Needed</div>
            )
        }
    };

    class NeedsExposure extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                needsExposure: projectData.needs_exposure
            }
        }
    
        render() {
            return (
                this.state.needsExposure ?
                <div>Needs Exposure</div> :
                <div>No Exposure Needed</div>
            )
        }
    };

    class NeedsExpertise extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                needsExpertise: projectData.needs_expertise
            }
        }
    
        render() {
            return (
                this.state.needsExpertise ?
                <div>Needs Expertise</div> :
                <div>No Expertise Needed</div>
            )
        }
    };

    class ProjectStage extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                isStart: projectData.project_stage === "Start",
                isTrial: projectData.project_stage === "Trial",
                isAdjust: projectData.project_stage === "Adjust",
                isRetail: projectData.project_stage === 'Retail'
            }
        }
    
        render() {
            if (this.state.isStart)  {
                return (
                    <div>Stage: Start</div>
                )
            } else {
                if (this.state.isTrial) {
                    return (
                        <div>Stage: Trial</div>
                    )
                } else {
                if (this.state.isAdjust) {
                    return (
                        <div>Stage: Adjust</div>
                    )
                }
            }}
            return (
                <div>Stage: Retail</div>
            )
        };
    };

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

    return (
    <div>
        <h3>{`Status: ${ projectData.is_open }`}</h3>
        <img src={ projectData.project_image } />
        <h2>{ projectData.project_name }</h2>
        <h3>{ projectData.founder }</h3>
        <p>{ projectData.project_intro }</p>
        <NeedsFacilities />
        <NeedsResources />
        <NeedsExposure />
        <NeedsExpertise />
        <ProjectStage />
        <IsOpen />
        <h3>Founder Story:</h3>
        <p>{ projectData.project_story }</p>
        
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
        <IsOpen />
        <h3>Current Pledges: </h3>
        <ul>
            {projectData.pledges.map((pledgeData, key) => {
                return (
                    <li key={key}>
                        { pledgeData.pledge_quantity } hours from Supporter # { pledgeData.owner }
                    </li>
                );
            })}
        </ul>
        <IsOpen />
        <p>Created on: { projectData.date_created }</p>
        
    </div>
    );
}

export default ProjectPage;