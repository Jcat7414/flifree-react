import React, { Component } from "react";

class NeedsExpertise extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            this.props.projectData.needs_expertise ?
            <div>Needs Expertise</div> :
            <div>No Expertise Needed</div>
        )
    }
}

export default NeedsExpertise