import React, { Component } from "react";

class NeedsExposure extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            this.props.projectData.needs_exposure ?
            <div>Needs Exposure</div> :
            <div>No Exposure Needed</div>
        )
    }
}

export default NeedsExposure