import React, { useState, useEffect } from "react";
import PledgeCard from "../components/PledgeCard/PledgeCard";

function PledgesPage() {
    const [pledgeList, setPledgeList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
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
    }, []);
console.log(pledgeList)
    console.log(setPledgeList)
    return (
        <div id="pledge-list">
            <h1>FLI FREE PLEDGES</h1>
            {pledgeList.map((pledgeData, key) => {
                return <PledgeCard key={key} pledgeData={pledgeData} />;
            })}
        </div>
    );
}

export default PledgesPage;