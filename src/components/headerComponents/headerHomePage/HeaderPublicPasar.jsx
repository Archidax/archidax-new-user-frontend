import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logoArchidax.png";
import Flags from "../headerDashboard/elements/flagsdropdown";

// import Translate from "../../../i18n/Translate";

// tampilan ini dipakai user belum login
// headers

function HeaderPublicPasar(props) {

  return (
    <nav className="navbar navbar-expand-lg bg-homepage navbar-light px-5 py-3 font-roboto">
      <Link to="/">
        <a className="navbar-brand" href="#top">
          <img src={logo} alt="logocryptoindex" width="220" />
        </a>
      </Link>
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
      <Flags setLocale={props.setLocale} />
      {/* <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item mx-2">
              <Link to="/login">
                <a className="nav-link text-white font-18 text-center" href={"#Login"}>
                  {Translate("hh_masuk")}
                </a>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/register">
                <a className="nav-link text-white font-18 text-center" href={"#Register"}>
                  {Translate("hh_daftar")}
                </a>
              </Link>
            </li>
          </ul>
      </div>
     */}
    </nav>
  );
}

export default HeaderPublicPasar;
// eslint-disable-next-line