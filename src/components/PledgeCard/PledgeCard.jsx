import React from "react";
import { Link } from "react-router-dom";
import IsFulfilled from "./IsFulfilled";
import "./PledgeCard.css"

function PledgeCard(props) {
    const { pledgeData } = props;
    return (
        <div className="pledge-card">
            <Link to={`/pledges/${pledgeData.id}`}>
                <h4>Supporting Project # { pledgeData.project_id }</h4>
                <p># Hours Pledged: { pledgeData.pledge_quantity }</p>
                <IsFulfilled pledgeData={ pledgeData }/>
            </Link>
        </div>
    );
}

export default PledgeCard;