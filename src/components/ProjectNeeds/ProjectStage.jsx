// import React, { Component } from "react";

// class ProjectStage extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isStart: projectData.project_stage === "Start",
//             isTrial: projectData.project_stage === "Trial",
//             isAdjust: projectData.project_stage === "Adjust",
//             isRetail: projectData.project_stage === 'Retail'
//         }
//     }

//     render() {
//         if (this.state.isStart)  {
//             return (
//                 <div>Stage: Start</div>
//             )
//         } else {
//             if (this.state.isTrial) {
//                 return (
//                     <div>Stage: Trial</div>
//                 )
//             } else {
//             if (this.state.isAdjust) {
//                 return (
//                     <div>Stage: Adjust</div>
//                 )
//             }
//         }}
//         return (
//             <div>Stage: Retail</div>
//         )
//     };
// };


import React from "react";

function ProjectStage(props) {
    const { projectData } = props;
console.log(projectData && projectData.project_stage)

// switch statement to determine which stage response to use

    return (
        <div>{ projectData.project_stage }</div>
    )

};

export default ProjectStage;
