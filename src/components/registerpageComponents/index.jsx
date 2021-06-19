import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Import Card
import CardRegister from "./cards/CardRegister";
import ComingSoonRegister from "./cards/ComingSoonRegister";

function Register() {
  const history = useHistory();

  const { isLogin } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (isLogin) {
      history.replace("/");
    }
  }, [isLogin]);

  return (
    <div className="container-fluid ax-account-body ax-accountbg-register">
      <div className="row vh-100 ">
        <div className="col-12 align-self-center">
          <div className="ax-auth-page">
            {/* <CardRegister /> */}
            <ComingSoonRegister />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
