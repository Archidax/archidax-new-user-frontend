import React from "react";
import { Link, useLocation } from "react-router-dom";

// Import Images
import logoIcon from "../../../assets/img/logoArchidax.png";
import profilelogo from "../../../assets/img/header/headerdashboard/profile.svg";
import keamananlogo from "../../../assets/img/header/headerdashboard/keamanan.svg";
import riwayatlogo from "../../../assets/img/header/headerdashboard/riwayat.svg";
// import logoIcon from "../../../assets/img/cryptoIndex/logo2dtext.png";

import dashboardIcon from "../../../assets/affiliasi/dashboard-icon.svg";
import pasarIcon from "../../../assets/affiliasi/pasar-icon.svg";
import voucherIcon from "../../../assets/affiliasi/voucher-icon.svg";
import bantuanIcon from "../../../assets/affiliasi/bitcoin-icon.svg";
import affiliasiIcon from "../../../assets/affiliasi/affiliasi-icon.svg";
import blogIcon from "../../../assets/affiliasi/blog-icon.svg";
import walletIcon from "../../../assets/affiliasi/wallet-icon.svg";
import LaunchpadIcon from "../../../assets/affiliasi/launchpad-icon.svg";

// Import redux
import { logout } from "../../../stores";
import { useDispatch } from "react-redux";
import Translate from "../../../i18n/Translate";

export default function SidebarDashboard(props) {
  const dispatch = useDispatch();
  const locationSidebar = useLocation();

  return (
    <>
      <div  className={`close-click ${props.activeSidebar}`} onClick={props.onClickActiveSidebar}>

      </div>
      <nav id="sidebar" className={`${props.activeSidebar}`}>
        <div className="sidebar-header">
          {/* Logo sidebar */}
          <Link to={"/home"} className="logo ci-baseLogo-link">
            <img
              src={logoIcon}
              alt="Crypto Index"
              className="logo-icon img-fluid w-75"
              style={{ width: "80%" }}
            />
          </Link>
          {/* Logo sidebar ends */}
        </div>

        <div className="sidebar-body">
          <ul className="list-unstyled ci-ulSideBar mb-0 pb-2">
            <li className="ci-liSideBar">
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={"/"}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <img src={dashboardIcon} alt="dashboardIcon" className="ml-1 mr-3" />
                    {Translate('si_dashboard')}
                  </span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={`/wallet`}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/wallet" ? "active" : ""
                    }`}
                  >
                    <img src={walletIcon} alt="walletIcon" className="mr-3" />
                    {Translate('si_wallet')}
                  </span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={"/pasar"}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/pasar" ? "active" : ""
                    }`}
                  >
                    <img src={pasarIcon} alt="pasarIcon" className="mr-3" />
                    {Translate('si_pasar')}
                  </span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={`/voucher`}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/voucher" ? "active" : ""
                    }`}
                  >
                    <img src={voucherIcon} alt="voucherIcon" className="mr-3" />
                    {Translate('si_voucher')}
                  </span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={`/program-afiliasi`}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/program-afiliasi"
                        ? "active"
                        : ""
                    }`}
                  >
                    <img src={affiliasiIcon} alt="affiliasiIcon" className="mr-3" />
                    {Translate('si_program')}
                  </span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={`/berita`}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/berita" ? "active" : ""
                    }`}
                  >
                    <img src={blogIcon} alt="blogIcon" className="mr-3" />
                    {Translate('si_berita')}
                  </span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={`/bantuan`}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/bantuan" ? "active" : ""
                    }`}
                  >
                    <img src={bantuanIcon} alt="bantuanIcon" className="mr-3" />
                    {Translate('si_bantuan')}
                  </span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={`/launchpad-partner`}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/launchpad-partner" ? "active" : ""
                    }`}
                  >
                    <img src={LaunchpadIcon} alt="LaunchpadIcon" className="mr-3" />
                    {Translate('Launchpad Partner')}
                  </span>
                </Link>
              </div>
              {/* </ul> */}
            </li>
          </ul>

          <ul className="list-unstyled ci-ulSideBar pt-0 d-sm-none d-block mb-0 pb-1">
            <h3 className="font-18 font-weight-bold ml-3" style={{color: "#dfb332"}}>Pengaturan</h3>
            <div className="ml-3 mb-2" style={{width: "80px", height: "2px", background: "#F9ba42"}}></div>
            <li className="ci-liSideBar">
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={"/profile"}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/profile" ? "active-white" : ""
                    }`}
                  >
                    <img src={profilelogo} alt="profilelogo" className="ml-1 mr-3" />
                    Profile
                  </span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={`/riwayat`}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/riwayat" ? "active-white" : ""
                    }`}
                  >
                    <img src={riwayatlogo} alt="riwayatlogo" className="mr-3" />
                    Riwayat
                  </span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className={`ci-nav-link`} to={"/keamanan"}>
                  <span
                    className={`ci-spanText pt-2 pb-2 pl-3 font-14 ${
                      locationSidebar.pathname === "/keamanan" ? "active-white" : ""
                    }`}
                  >
                    <img src={keamananlogo} alt="keamananlogo" className="mr-3" />
                    Pasar
                  </span>
                </Link>
              </div>
            </li>
          </ul>

          <ul className="list-unstyled d-block d-sm-none ci-ulSideBar py-0">
            <li className="ci-liSideBar">
              <div className="nav-item">
                <div className={`ci-nav-link`} style={{paddingRight: "20px"}}>
                  <button onClick={async () => {logout(dispatch);}} className="ci-btn-danger py-1 w-100"><i className="fas fa-sign-out-alt"></i>Keluar</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
