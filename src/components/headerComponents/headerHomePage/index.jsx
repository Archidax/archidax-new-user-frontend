import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../../assets/img/logoArchidax.png";
import giflogo from "../../../assets/img/header/headerhomepage/blip.gif";
import Flags from "../headerDashboard/elements/flagsdropdown";

import spotmarketlogo from "../../../assets/img/homepage/fitur/spot_market.svg";
import launchpadlogo from "../../../assets/img/homepage/fitur/launchpad.svg";
import derivativelogo from "../../../assets/img/homepage/fitur/derivative.svg";
import archiswaplogo from "../../../assets/img/homepage/fitur/archiswap.svg";
import archibotlogo from "../../../assets/img/homepage/fitur/archibot.svg";
import lendmarklogo from "../../../assets/img/homepage/fitur/lendmark.svg";
import digifundlogo from "../../../assets/img/homepage/fitur/digifund.svg";
import archiratorlogo from "../../../assets/img/homepage/fitur/archirator.svg";

import Translate from "../../../i18n/Translate";
import { Col } from "react-bootstrap";

function HeaderHomePage(props) {
  // eslint-disable-next-line
  const { flag } = props;
  const { PairSymbol } = useSelector((state) => state.pasarTradingReducer);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-transparent px-5 py-3 font-roboto ${props.bg_normal}`}
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
        className="navbar-toggler custom-toggler2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars" aria-hidden="true" style={{ color: "white" }}></i>
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
            <div class="dropdown">
              <div
                class="dropdown-toggle nav-link text-white font-18 text-center text-center "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-th-large mr-2" style={{ color: "#f9ba42" }}></i>
              </div>
              <div
                class="dropdown-menu py-0 bg-dropdown-homepage"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="row">
                  <div className="col">
                    <div className="card-body-dd-homepage">
                      <a
                        className="d-flex justify-content-center align-items-center dd-homepage
                       "
                        href={"/launchpad"}
                      >
                        <div>
                          <img src={spotmarketlogo} width="38px" />
                        </div>
                        <div className="ml-2 text-white">
                          <h6 className="mb-0">Spot Market</h6>
                          <p className="mb-0 font-11">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body-dd-homepage">
                      <a
                        className="d-flex justify-content-center align-items-center dd-homepage
                       "
                        href={"/launchpad"}
                      >
                        <div>
                          <img src={launchpadlogo} width="38px" />
                        </div>
                        <div className="ml-2 text-white">
                          <h6 className="mb-0">Launchpad</h6>
                          <p className="mb-0 font-11">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body-dd-homepage">
                      <a
                        className="d-flex justify-content-center align-items-center dd-homepage
                       "
                        href={"/launchpad"}
                      >
                        <div>
                          <img src={derivativelogo} width="38px" />
                        </div>
                        <div className="ml-2 text-white">
                          <h6 className="mb-0">Derivative</h6>
                          <p className="mb-0 font-11">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body-dd-homepage">
                      <a
                        className="d-flex justify-content-center align-items-center dd-homepage
                       "
                        href={"/launchpad"}
                      >
                        <div>
                          <img src={archiswaplogo} width="38px" />
                        </div>
                        <div className="ml-2 text-white">
                          <h6 className="mb-0">Archiswap</h6>
                          <p className="mb-0 font-11">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card-body-dd-homepage">
                      <a
                        className="d-flex justify-content-center align-items-center dd-homepage
                       "
                        href={"/launchpad"}
                      >
                        <div>
                          <img src={archibotlogo} width="38px" />
                        </div>
                        <div className="ml-2 text-white">
                          <h6 className="mb-0">Archibot</h6>
                          <p className="mb-0 font-11">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body-dd-homepage">
                      <a
                        className="d-flex justify-content-center align-items-center dd-homepage
                       "
                        href={"/launchpad"}
                      >
                        <div>
                          <img src={lendmarklogo} width="38px" />
                        </div>
                        <div className="ml-2 text-white">
                          <h6 className="mb-0">Lendmark</h6>
                          <p className="mb-0 font-11">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body-dd-homepage">
                      <a
                        className="d-flex justify-content-center align-items-center dd-homepage
                       "
                        href={"/launchpad"}
                      >
                        <div>
                          <img src={digifundlogo} width="38px" />
                        </div>
                        <div className="ml-2 text-white">
                          <h6 className="mb-0">Digifund</h6>
                          <p className="mb-0 font-11">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body-dd-homepage">
                      <a
                        className="d-flex justify-content-center align-items-center dd-homepage
                       "
                        href={"/launchpad"}
                      >
                        <div>
                          <img src={archiratorlogo} width="38px" />
                        </div>
                        <div className="ml-2 text-white">
                          <h6 className="mb-0">Archirator</h6>
                          <p className="mb-0 font-11">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
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
          <li className="nav-item mx-2 nav-keuangan">
            <a
              className="nav-link text-white font-18 text-center"
              href={"/launchpad"}
            >
              {/* {Translate("hh_keuangan")} */}
              Launchpad
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
