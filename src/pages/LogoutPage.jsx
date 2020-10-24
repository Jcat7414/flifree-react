import React from "react";
import LogoutForm from "../components/Forms/LogoutForm";

function LogoutPage() {
    return (
        <div>
            <h2>Are you sure you want to logout?</h2>
            <LogoutForm />
        </div>
    );
}

export default LogoutPage;
