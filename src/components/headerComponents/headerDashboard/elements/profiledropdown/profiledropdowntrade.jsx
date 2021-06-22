import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../../../stores";
import { useDispatch, useSelector } from "react-redux";
// Import Images
import profilelogo from "../../../../../assets/img/header/headerdashboard/profile.svg";
import keamananlogo from "../../../../../assets/img/header/headerdashboard/keamanan.svg";
import riwayatlogo from "../../../../../assets/img/header/headerdashboard/riwayat.svg";
import Translate from "../../../../../i18n/Translate";
import { IoUserWebSocket } from "../../../../../configuration/IoWebSocket";

function ProfileDropdown() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profileReducer);

  const logoutUser = () => {
    logout(dispatch, IoUserWebSocket, profile.email);
  }
  return (
    <div className="btn-group ml-3 d-sm-flex d-none">
      <div
        className="ci-dropdown-btn-profile"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="ci-username-text-profile ml-2 mr-2 d-none d-lg-inline-block">
          <h6 className="ci-username">
            <span>{Translate("hd_selamat_datang")}</span>
            {profile.username}
          </h6>
        </div>
        {/* <div className="rounded avatar avatar-30 d-none d-md-inline-block ci-dropdown-btn-profile-arrow">
          <i className="fas fa-chevron-down ci-dropdown-btn-profile-arrow-icons"></i>
        </div> */}
      </div>

      <div
        className="dropdown-menu dropdown-menu-right pt-0 mt-3 overflow-hidden ci-dropdown-menu-profile active"
        aria-labelledby="dropdownMenuButton"
      >
        <div className="dropdown-item ci-dropdown-menu-profile-item">
          <Link className="ci-link-dropdownHeader" to={`/profile`}>
            <div className="row">
              <div className="col-auto align-self-center">
                <img src={profilelogo} alt="profilelogo" />
              </div>
              <div className="col pl-0">
                <p className="mb-0 font-bold">{Translate("hd_profile_saya")}</p>
                <p className="mb-1 small text-white text-trucated">
                  {Translate("hd_informasi_data_diri")}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="dropdown-item ci-dropdown-menu-profile-item">
          <Link className="ci-link-dropdownHeader" to={`/riwayat`}>
            <div className="row">
              <div className="col-auto align-self-center">
                <img src={riwayatlogo} alt="riwayatlogo" />
              </div>
              <div className="col pl-0">
                <p className="mb-0 font-bold">{Translate("hd_riwayat")}</p>
                <p className="mb-1 small text-white text-trucated">
                  {Translate("hd_lihat_riwayat_transaksi_anda")}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="dropdown-item ci-dropdown-menu-profile-item">
          <Link className="ci-link-dropdownHeader" to={`/keamanan`}>
            <div className="row">
              <div className="col-auto align-self-center">
                <img src={keamananlogo} alt="keamananlogo" />
              </div>
              <div className="col pl-0">
                <p className="mb-0 font-bold">
                  {Translate("hd_keamanan_akun")}
                </p>
                <p className="mb-1 small text-white text-trucated">
                  {Translate("hd_atur_keamanan")}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="dropdown-item ci-dropdown-menu-profile-item pt-3 pb-3">
          <div
            onClick={async () => logoutUser()}
            className="row ci-link-dropdownHeader-logout"
          >
            <div className="col-auto align-self-center">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <div className="col pl-0">
              <p className="mb-0 text-danger">{Translate("hd_keluar")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropdown;
