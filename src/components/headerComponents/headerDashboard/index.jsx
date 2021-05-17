import React from "react";
// import { useRouteMatch } from "react-router-dom";

// Import Elements
import FlagsDropdownHeader from "./elements/flagsdropdown";
import NotificationDropdownHeader from "./elements/notificationdropdown";
import ProfileDropdownHeader from "./elements/profiledropdown";
import WalletsDropdownHeader from "./elements/walletsdropdown";

import logoIcon from "../../../assets/img/logoArchidax.png";

function HeaderDashboard(props) {
  // const { url } = useRouteMatch();

  // console.log("URL", url);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light pt-3 pb-3"
        style={{ background: "#151933" }}
      >
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-3 d-flex align-items-center">
              <div
                onClick={props.onClickActiveSidebar}
                id="sidebarCollapse"
                className="ci-iconBurger"
              >
                <div className="ci-bar"></div>
                <div className="ci-bar"></div>
                <div className="ci-bar"></div>
              </div>
            </div>

            <div
              className="col-7 d-sm-none d-block justify-content-end"
              id="navbarSupportedContent"
            >
              <img
                src={logoIcon}
                alt="Crypto Index"
                className="logo-icon img-fluid w-75 ml-3"
                style={{ width: "80%" }}
              />
            </div>

            <div
              className="col-2 col-sm-9 d-flex justify-content-end"
              id="navbarSupportedContent"
            >
              {/* icons dropwdowns starts */}
              {/* flag dropdown */}
              <FlagsDropdownHeader setLocale={props.setLocale} flag={props.flag} />

              {/* wallet dropdown */}
              <WalletsDropdownHeader />

              {/* notofication dropdown*/}
              <NotificationDropdownHeader />

              {/* profile dropdown*/}
              <ProfileDropdownHeader />
              {/* icons dropwdowns starts */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderDashboard;
