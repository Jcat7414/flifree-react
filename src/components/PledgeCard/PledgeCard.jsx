import React from "react";
import { Link } from "react-router-dom";
import "./PledgeCard.css"

function PledgeCard(props) {
    const { pledgeData } = props;
    return (
        <div className="pledge-card">
            <Link to={`/pledges/${pledgeData.id}`}>
                <h3>{ pledgeData.supporter }</h3>
                <h4>{ pledgeData.project_id }</h4>
            </Link>
        </div>
    );
}

export default PledgeCard;