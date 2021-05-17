import React from "react";
import { Link } from "react-router-dom";
import logoAX from "../../../assets/img/auth/arcdx.png";

// Import Form
import FormsLogin from "../forms/FormsLogin";

function CardLogin() {
  return (
    <div className="card ax-auth-card shadow-lg">
      <div className="card-body">
          <div className="px-3">
              <div className="ax-auth-logo-box">
                  <Link to={"/"} className="logo logo-admin">
                      <img src={logoAX} height="55" alt="logo" className="ax-auth-logo"/>
                  </Link>
              </div>
              
              <div className="text-center ax-auth-logo-text">
                  <h4 className="mt-0 mb-3 mt-4" style={{color: "#f9ba42"}}>Sign In</h4>
                  <p className="text-muted mb-0">Sign in to continue.</p>  
              </div>
              
              <FormsLogin />
          </div>
      </div>
    </div>
  );
}

export default CardLogin;
