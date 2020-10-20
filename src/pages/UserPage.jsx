import React, { useState, useEffect, Components } from "react";
import { useParams, Link } from "react-router-dom";

function UserPage() {
    const [userData, setUserData] = useState({ users: [] });
    const { id } = useParams();

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        fetch(`${process.env.REACT_APP_API_URL}users/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        });
    }, [id]);

    return (
        <div>
            <img src={ userData.image } alt="" />
            <h2>{ userData.first_name }&nbsp;{ userData.last_name }</h2>
            <p>{ userData.location }</p>
            <p>{ userData.bio }</p>
            <p>See Projects for <Link to={`/projects/owner/${userData.username}`}>{ userData.first_name }</Link></p>
            <p>See Pledges by <Link to={`/pledges/${userData.username}`}>{ userData.first_name }</Link></p>

        </div>
    );
}

export default UserPage;
