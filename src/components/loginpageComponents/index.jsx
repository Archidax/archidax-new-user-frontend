import React from "react";

// Import Card
import CardLogin from "./cards/CardLogin";

function Login() {
    return (
        <div className="container-fluid ax-account-body ax-accountbg-login">
            <div className="row vh-100 ">
                <div className="col-12 align-self-center">
                    <div className="ax-auth-page">
                        <CardLogin />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
