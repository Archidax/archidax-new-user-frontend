import React from "react";
import logo from "../../../assets/img/cryptoIndex/logo2d.png";

// Import Form
import FormsLogin from "../forms/FormsLogin";

function CardLogin() {
  return (
    <div className="card ci-auth-form-card pl-4 pr-4 pl-sm-5 pr-sm-5 border-0">
      <div className="card-body p-0">
        <div className="text-center">
          <img src={logo} alt="logo" height={60} />
          <h4 className="font-weight-bold ci-auth-form-card-title mt-3 text-white">
            Masuk
          </h4>
          {/* <h6 className="text-white font-13 mt-4">
            Harap pastikan anda memasukan URL yang benar
          </h6>
          <h6 className="text-white font-13 div-https">
            <span className="text-https">https://</span>cryptoindex.id
          </h6> */}
        </div>

        {/* Form Login */}
        <FormsLogin />
      </div>
    </div>
  );
}

export default CardLogin;
