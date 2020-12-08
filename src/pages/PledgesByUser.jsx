import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PledgeCard from "../components/PledgeCard/PledgeCard";

function PledgesByPage() {
    const ownerUserName = window.localStorage.getItem("ownerUserName");
    const ownerFirstName = window.localStorage.getItem("ownerFirstName");

    const [pledgeList, setPledgeList] = useState([]);
    const { id } = useParams;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}pledges/${ownerUserName}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setPledgeList(data);
        });
    }, [id]);


    return (
        <div id="pledge-list">
            <div>
                <h1>Pledges by { ownerFirstName }</h1>
            </div>
            <ul id="project-list">
                {pledgeList.map((pledgeData, key) => {
                    
                    return (
                        <li key={key}>
                            <PledgeCard key={key} pledgeData={pledgeData} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default PledgesByPage;