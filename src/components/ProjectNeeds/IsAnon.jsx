import React from "react";
import { Link } from "react-router-dom";

function IsAnon (props) {
    const { pledgeData } = props;
    const IsAnon = pledgeData.anonymous

    return (
        IsAnon ?
        <div>{ pledgeData.pledge_quantity } hours from an anonymous supporter.</div> :
        <div>{ pledgeData.pledge_quantity } hours from <Link to={`/users/${pledgeData.owner}`}>{ pledgeData.supporter }</Link></div>
    );
}

export default IsAnon;