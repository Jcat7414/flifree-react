import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";


function UserCard(props) {
    const { userData } = props;
    return (
        <div className="user-card">
            <Link to={`/users/${userData.id}`}>
                <img src={ userData.image } alt="" />
                <h3>{ userData.first_name +" "+ userData.last_name }</h3>
                <h4>{ userData.location }</h4>
            </Link>
        </div>
    );
}

export default UserCard;