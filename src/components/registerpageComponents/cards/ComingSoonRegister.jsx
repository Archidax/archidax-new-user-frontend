import React from "react";
import { Link } from "react-router-dom";
import logoAX from "../../../assets/img/auth/arcdx.png";

// Import Form
import FormsRegister from "../forms/FormsRegister";

function ComingSoonRegister() {
  return (
    <div className="card ax-auth-card shadow-lg">
      <div className="card-body">
        <div className="px-3">
          <div className="ax-auth-logo-box">
            <Link to={"/"} className="logo logo-admin">
              <img
                src={logoAX}
                height="55"
                alt="logo"
                className="ax-auth-logo"
              />
            </Link>
          </div>

          <div className="text-center ax-auth-logo-text">
            <h4 className="mt-0 mb-3 mt-4 font-30" style={{ color: "#f9ba42" }}>
              Coming Soon
            </h4>
            {/* <p className="text-muted mb-0">Register to create your account.</p> */}
            <Link to={"/"} className="logo logo-admin">
              <p>Back to Homepage</p>
            </Link>
          </div>

          {/* <FormsRegister /> */}
        </div>
      </div>
    </div>
  );
}

export default ComingSoonRegister;
