import React from "react";

function IsFulfilled(props) {
    const { pledgeData } = props;
    const IsFulfilled = pledgeData.is_fulfilled 

    return (
        IsFulfilled ?
        <p>Pledge Fulfilled</p> :
        <p>Pledge Not Yet Fulfilled</p>
    )
}

export default IsFulfilled;