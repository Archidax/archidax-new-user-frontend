import React from "react";

// Import Card
import CardRegister from "./cards/CardRegister";

function Register() {
  return (
    <div className="container-fluid ax-account-body ax-accountbg-register">
      <div className="row vh-100 ">
        <div className="col-12 align-self-center">
          <div className="ax-auth-page">
            <CardRegister />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
