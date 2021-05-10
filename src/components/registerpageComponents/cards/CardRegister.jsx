import React from "react";
import logo from "../../../assets/img/cryptoIndex/logo2d.png";
// import logo from "../../../assets/img/cryptoIndex/logo2d.png";

// Import Form
import FormsRegister from "../forms/FormsRegister";

function CardRegister() {
  return (
    <div className="card ci-auth-form-card pl-4 pr-4 pl-sm-5 pr-sm-5 border-0">
      <div className="card-body p-0">
        {/* <div className="card-title text-center font-weight-bold ci-auth-form-card-title d-flex flex-direction-col"> */}
        <div className="text-center">
          <img src={logo} alt="logo" height={60} />
          <h4 className="font-weight-bold ci-auth-form-card-title mt-3 text-white">
            Pendaftaran
          </h4>
          <h6 className="text-white font-12">Selamat datang di CryptoIndex</h6>
        </div>

        {/* Form Login */}
        <FormsRegister />
      </div>
    </div>
  );
}

export default CardRegister;
