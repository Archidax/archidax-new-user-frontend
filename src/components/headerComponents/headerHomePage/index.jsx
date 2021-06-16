import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../assets/img/logoArchidax.png";
import giflogo from "../../../assets/img/header/headerhomepage/blip.gif";
import Flags from "../headerDashboard/elements/flagsdropdown";

import Translate from "../../../i18n/Translate";

function HeaderHomePage(props) {
  // eslint-disable-next-line
  const { flag } = props
  const { PairSymbol } = useSelector((state) => state.pasarTradingReducer);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-transparent px-5 py-3 font-roboto ${props.bg_normal}`}
    >
      <Link to="/home">
        <a
          className="navbar-brand"
          href={"#home"}
          target="_blank"
          rel="noreferrer"
        >
          <img src={logo} alt="logocryptoindex" width="200" />
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

      <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mx-5">
          {/* <div class="dropdown">
            <a
              class="btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-bars text-white" aria-hidden="true"></i>
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div> */}
          <li className="nav-item active mx-2">
            <a
              className="nav-link text-white font-18 text-center text-center"
              href="/"
            >
              {Translate("hh_beranda")}
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              className="nav-link text-white font-18 text-center"
              href={
                PairSymbol
                  ? `/pasar/${PairSymbol.toString().replace("/", "_")}`
                  : "/pasar/BTC_USDT"
              }
            >
              {Translate("hh_pasar")}
            </a>
          </li>
          {/* <li className="nav-item mx-2">
            <a className="nav-link text-white font-18 text-center" href="#">
              Launchpad
            </a>
          </li> */}
          <li className="nav-item mx-2 nav-keuangan">
            <a
              className="nav-link text-white font-18 text-center"
              href={"/keuangan"}
            >
              {Translate("hh_keuangan")}
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              className="nav-link text-white font-18 text-center"
              href="/panduan-pemula"
              style={{
                display: "flex",
                flexDirection: "row",
                position: "relative",
              }}
            >
              {/* {Translate("hh_forum")} */}
              <div>{Translate("hh_panduan_pemuala")}</div>
              <div style={{ position: "absolute", right: "-10px", top: "0px" }}>
                <img src={giflogo} alt="giflogo" style={{ width: "17px" }} />
              </div>
            </a>
          </li>
          <li className="nav-item mx-2">
            {/* <li className="nav-item mx-2">
            <a
              className="nav-link text-white font-18 text-center"
              href={"/panduan-copy-trade"}
            >
              Copy Trade
            </a>
          </li> */}
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Flags flag={flag} setLocale={props.setLocale} />
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item mx-2">
              <a
                className="nav-link text-white font-18 text-center"
                href={"/login"}
              >
                {Translate("hh_masuk")}
              </a>
              {/* <Link to="/login">
              </Link> */}
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-white font-18 text-center"
                href={"/register"}
              >
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

export default HeaderHomePage;
