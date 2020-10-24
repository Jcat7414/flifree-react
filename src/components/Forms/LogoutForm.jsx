import React from "react";
import { useHistory } from "react-router-dom";

function LogoutForm() {
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        window.localStorage.clear("")
        history.push("/projects")
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default LogoutForm;