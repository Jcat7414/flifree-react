import React, { Component } from "react";

class NeedsResources extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            this.props.projectData.needs_resources ?
            <div>Needs Resources</div> :
            <div>No Resources Needed</div>
        )
    }
}

export default NeedsResources