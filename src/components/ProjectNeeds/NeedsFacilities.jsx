import React, { Component } from "react";

class NeedsFacilities extends Component {

    constructor(props) {
        super(props)

        this.state = {
            needsFacilities: true
        }
    }

    render() {
        return (
            this.state.needsFacilities ?
            <div>Needs Facilities</div> :
            <div>No Facilities Needed</div>
        )
    }
}

export default NeedsFacilities