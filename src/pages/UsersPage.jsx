import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";

function UsersPage() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserList(data);
        });
    }, []);

    return (
        <div id="user-list">
            <h1>MOTIVATED MIGRANTS AND SUPER SUPPORTERS</h1>
            {userList.map((userData, key) => {
                return <UserCard key={key} userData={userData} />;
            })}
        </div>
    );
}

export default UsersPage;