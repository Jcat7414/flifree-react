import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PledgePage() {
    const [pledgeData, setPledgeData] = useState({ pledges: []});
    const { id } = useParams();

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        fetch(`${process.env.REACT_APP_API_URL}pledges/${id}/`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setPledgeData(data);
        });
    }, [id]);

    return (
        <div>
            <h2>{ pledgeData.supporter }</h2>
            <h3>{ pledgeData.pledge_quantity }</h3>
            <p>{ pledgeData.pledge_description }</p>
        </div>
    );
}

export default PledgePage;