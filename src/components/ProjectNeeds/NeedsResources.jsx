import React, { Component } from "react";

class NeedsResources extends Component {
    constructor (props) {
        super(props)
        const { projectData } = props;

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
}

export default NeedsResources