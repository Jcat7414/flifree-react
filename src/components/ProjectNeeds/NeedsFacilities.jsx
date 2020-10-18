import React, { Component } from "react";

class NeedsFacilities extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.projectData.needs_facilities ?
            <div>Needs Facilities</div> :
            <div>No Facilities Needed</div>
        )
    }
}

export default NeedsFacilities