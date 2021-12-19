import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

// Import Card
import CardLogin from "./cards/CardLogin";

function Login() {
    const history = useHistory()
    
    const { isLogin } = useSelector((state) => state.userReducer)

    useEffect(() => {
        if(isLogin){
            history.replace("/")
        }
    }, [isLogin])
    
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
