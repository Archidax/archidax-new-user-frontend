import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../../../stores";
import { useDispatch, useSelector } from "react-redux";
// Import Images
import profilelogo from "../../../../../assets/img/header/headerdashboard/profile.svg";
import keamananlogo from "../../../../../assets/img/header/headerdashboard/keamanan.svg";
import riwayatlogo from "../../../../../assets/img/header/headerdashboard/riwayat.svg";

function ProfileDropdown() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profileReducer);
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
        {/* <figure className="rounded avatar avatar-30">
                    <img style={{
                            objectPosition: 'center',
                            objectFit: 'cover'
                        }} src={profile.foto ? profile.foto : userimage} alt="crypto_index" />
                </figure> */}
        <div className="ci-username-text-profile ml-2 mr-2 d-none d-lg-inline-block">
          <h6 className="ci-username">
            <span>Welcome,</span>
            {profile.username}
          </h6>
        </div>
        <div className="rounded avatar avatar-30 d-none d-md-inline-block ci-dropdown-btn-profile-arrow">
          <i className="fas fa-chevron-down ci-dropdown-btn-profile-arrow-icons"></i>
        </div>
      </div>

      <div
        className="dropdown-menu dropdown-menu-right pt-0 mt-3 overflow-hidden ci-dropdown-menu-profile active"
        aria-labelledby="dropdownMenuButton"
      >
        {/* <div className="text-center rounded ci-dropdown-menu-profile-imgBG">
                    <img src={backgroundimage} className="img-fluid" alt="crypto_index" />
                </div>
                <div className="text-center ci-dropdown-menu-profile-img">
                    <figure className="avatar avatar-90 mx-auto shadow">
                        <img style={{
                            objectPosition: 'center',
                            objectFit: 'cover'
                        }} src={profile.foto ? profile.foto : userimage} alt="crypto_index img-fluid" />
                    </figure>
                </div> */}
        {/* <div className="text-center ci-dropdown-menu-profile-textName">
                    <h5 className="text-center mb-0 text-white">{profile.namaLengkap}</h5>
                    <p className="text-center text-secondary font-13 text-white">Jakarta, Indonesia</p>
                </div> */}
        <div className="dropdown-item ci-dropdown-menu-profile-item">
          <Link className="ci-link-dropdownHeader" to={`/profile`}>
            <div className="row">
              <div className="col-auto align-self-center">
                <img src={profilelogo} alt="profilelogo" />
              </div>
              <div className="col pl-0">
                <p className="mb-0 font-bold">Profile Saya</p>
                <p className="mb-1 small text-white text-trucated">
                  Informasi data diri Anda
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
                <p className="mb-0 font-bold">Riwayat</p>
                <p className="mb-1 small text-white text-trucated">
                  Lihat riwayat transaksi Anda
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
                <p className="mb-0 font-bold">Keamanan Akun</p>
                <p className="mb-1 small text-white text-trucated">
                  Atur keamanan akun Anda
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* <div className="dropdown-item ci-dropdown-menu-profile-item">
                    <Link className="ci-link-dropdownHeader" to={`/profile`}>
                        <div className="row">
                            <div className="col-auto align-self-center">
                                <i className="fas fa-house-user"></i>
                            </div>
                            <div className="col pl-0">
                                <p className="mb-0">KYC</p>
                                <p className="mb-1 small text-mute text-trucated">
                                    Proses verifikasi akun
                                </p>
                            </div>
                        </div>
                    </Link>    
                </div> */}
        <div className="dropdown-item ci-dropdown-menu-profile-item pt-3 pb-3">
          <div
            onClick={async () => {
              logout(dispatch);
            }}
            className="row ci-link-dropdownHeader-logout"
          >
            <div className="col-auto align-self-center">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <div className="col pl-0">
              <p className="mb-0 text-danger">Keluar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropdown;
