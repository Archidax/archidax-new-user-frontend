import React from "react";
import {
  Link,
  // useRouteMatch
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logocryptoindex from "../../../assets/img/logoArchidax.png";

// Import Elements
import FlagsDropdownHeader from "./elements/flagsdropdown";
import WalletsDropdownHeaderTrade from "./elements/walletsdropdown/WalletsDropdownHeaderTrade";
import NotificationDropdownHeader from "./elements/notificationdropdown";
import ProfileDropdownHeader from "./elements/profiledropdown";

import ProtectedPagePasar from "../../tradeComponents/card/HalamanLoginHeader";
import ProtectedPagePasar2 from "../../tradeComponents/card/HalamanLoginPasar";

function HeaderDashboard(props) {
  const { mode } = useSelector((state) => state.daynightReducer);
  // const { url } = useRouteMatch();

  // console.log("URL", url);
  return (
    <>
      <nav
        className={`col-12 p-1 ${
          mode ? "navbar-dark bg-header-dark" : "bg-header"
        } navbar navbar-expand-lg py-3 px-4`}
      >
        <Link to="/home">
          <img
            src={logocryptoindex}
            alt="logocryptoindex"
            className="logo-trade-responsive"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mx-5 mt-2 mt-lg-0">
            <li class="nav-item mx-2">
              <Link to="/">
                <h6 className="mb-0 font-16">Dashboard</h6>
              </Link>
            </li>
            <ProtectedPagePasar2>
              <li class="nav-item mx-2">
                <Link to="/pasar">
                  <h6 className="mb-0 font-16">Trade</h6>
                </Link>
              </li>
            </ProtectedPagePasar2>
          </ul>
          <ProtectedPagePasar>
            <form class="form-inline my-2 my-lg-0">
              <FlagsDropdownHeader setLocale={props.setLocale} />
              <WalletsDropdownHeaderTrade />
              <NotificationDropdownHeader />
              <ProfileDropdownHeader />
            </form>
          </ProtectedPagePasar>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg bg-trade-header navbar-light pt-3 pb-3">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-6 d-flex align-items-center">
              <div
                onClick={props.onClickActiveSidebar}
                id="sidebarCollapse"
                className="ci-iconBurger"
              >
                <div className="ci-bar"></div>
                <div className="ci-bar"></div>
                <div className="ci-bar"></div>
              </div>
              <div className="ml-4 ">
                <Link to="/home">
                  <img
                    src={logocryptoindex}
                    alt="logocryptoindex"
                    width="170"
                  />
                </Link>
              </div>
              <div style={{ marginLeft: "90px" }}>
                <Link to="/">
                  <h6 className="mb-0 font-16">Beranda</h6>
                </Link>
              </div>
              <div className="ml-4">
                <Link to="/pasar">
                  <h6 className="mb-0 font-16">Pasar</h6>
                </Link>
              </div>
            </div>

            <div
              className="col-6 d-flex justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <div className="mx-3">
                <h6 className="mb-0 font-15 text-white">Advanced</h6>
              </div>
              <div className="mx-3">
                <h6 className="mb-0 font-15 text-white">Simple</h6>
              </div>
              <ProtectedPagePasar>
                <FlagsDropdownHeader setLocale={props.setLocale} />

                <WalletsDropdownHeaderTrade />

                <NotificationDropdownHeader />

                <ProfileDropdownHeader />
              </ProtectedPagePasar>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default HeaderDashboard;
