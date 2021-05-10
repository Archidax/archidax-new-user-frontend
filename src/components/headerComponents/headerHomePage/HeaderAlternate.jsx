import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.svg";
import Flags from "../headerDashboard/elements/flagsdropdown";

import Translate from "../../../i18n/Translate";

function HeaderAlternate(props) {
  return (
    // <div style={{ background: "transparent" }}>
    //   <Link to="/login">Login</Link>
    //   <Link to="/register">Register</Link>
    // </div>
    <nav className="navbar navbar-expand-lg bg-homepage navbar-light px-5 py-3 font-roboto">
        <a className="navbar-brand" href={"/home"}>
          <img src={logo} alt="logocryptoindex" width="220" />
        </a>
      {/* <Link to="/home">
      </Link> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ background: "white" }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mx-5">
          <li className="nav-item active mx-2">
            <a
              className="nav-link text-white font-18 text-center text-center"
              href="/" alt="#"
            >
              {Translate("hh_beranda")}
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              className="nav-link text-white font-18 text-center"
              href="/pasar"
            >
              {Translate("hh_pasar")}
            </a>
          </li>
          {/* <li className="nav-item mx-2">
            <a className="nav-link text-white font-18 text-center" href="#">
              Launchpad
            </a>
          </li> */}
          <li className="nav-item mx-2">
            <a className="nav-link text-white font-18 text-center" href="#keuangan">
              {Translate("hh_keuangan")}
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-white font-18 text-center" href="#dapp">
              {/* {Translate("hh_forum")} */}
              DAPP
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Flags setLocale={props.setLocale} />
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item mx-2">
                <a className="nav-link text-white font-18 text-center" href={"/login"}>
                  {Translate("hh_masuk")}
                </a>
              {/* <Link to="/login">
              </Link> */}
            </li>
            <li className="nav-item mx-2">
                <a className="nav-link text-white font-18 text-center" href={"/register"}>
                  {Translate("hh_daftar")}
                </a>
              {/* <Link to="/register">
              </Link> */}
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
}

export default HeaderAlternate;
