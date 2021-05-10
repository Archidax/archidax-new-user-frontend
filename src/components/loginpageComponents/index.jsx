import React from "react";
import { Link } from "react-router-dom";

// Import Card
import CardLogin from "./cards/CardLogin";

function Login() {
  return (
    <>
      <div className="ci-btn-back ci-p-right-100rem rounded d-none d-sm-block">
        <Link to="/" className="btn btn-icon btn-soft-primary p-0 m-0">
          <i className="fas fa-home p-0 m-0"></i>
        </Link>
      </div>

      <section className="container-fluid ci-auth cover-user bg-white">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-12 col-md-4 d-flex justify-content-center flex-column ci-auth-form">
            {/* Card Login */}
            <CardLogin />
            {/* End Card Login */}
          </div>

          <div className="col-12 col-md-12 d-none d-md-block bg-login"></div>
        </div>
      </section>
    </>
  );
}

export default Login;
