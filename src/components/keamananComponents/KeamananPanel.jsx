import React, { useEffect } from "react";
import UbahPassword from "./ubahPassword";
import AktifkanPin from "./aktifkanPin";
import PopupGoogleActivator from "./PopupGoogleActivator";
import NonAktifPin from "./nonAktifPin";
import NonAktifGoogle from "./nonAktifGoogle";
import GoogleAuthPopUpBerhasil from "./googleAuthPopUpBerhasil";
import { toggleModal } from "../../helpers/functions";
import { useDispatch, useSelector } from "react-redux";
import AktifkanGAuth from "./AktifkanGAuth";
import { readMe } from "../../stores/index";

function KeamananPanel() {
  const profile = useSelector((state) => state.profileReducer);
  const isGAuth = useSelector((state) => state.profileReducer.googlefa);
  const isGAuthLogin = useSelector((state) => state.profileReducer.passed2fa);
  const dispatch = useDispatch();
  useEffect(() => {
    readMe(dispatch);
  }, [dispatch]);
  return (
    <div>
      <p className="label-title-top">Keamanan Akun</p>
      <h6 className="label-title2">
        Harap gunakan kata sandi dan Google Authenticator untuk memastikan
        perlindungan maksimal dari akun Anda.
      </h6>
      <div className="row d-flex align-items-center py-2 mt-3">
        <div className="col-6 d-flex align-items-center">
          <i className="fas fa-lock mr-3"></i>
          <p className="label-title2 mb-0">Password</p>
        </div>
        <div className="col-6">
          <button
            className="ci-btn-warning ci-lg w-100"
            data-toggle="modal"
            data-target="#ubahPassword"
          >
            <h6 className="mb-0">Ganti</h6>
          </button>
          {/* <button className="ci-btn-warning ci-lg w-100" onClick={() => toggleModal('#popupGoogleActivator')}>Ganti</button> */}
        </div>
      </div>
      <div className="row d-flex align-items-center py-2">
        <div className="col-6 d-flex align-items-center">
          <i className="fab fa-google mr-3"></i>
          <p className="label-title2 mb-0">Google Authenticator</p>
        </div>
        <div className="col-6">
          {!isGAuth ? (
            <button
              className="ci-btn-warning ci-lg w-100"
              data-toggle="modal"
              data-target="#popupGoogleActivator"
            >
              <h6 className="mb-0">Aktifkan</h6>
            </button>
          ) : isGAuth && !isGAuthLogin ? (
            <button
              className="ci-btn-success ci-lg w-100"
              data-toggle="modal"
              data-target="#AktifkanGAuth"
            >
              <h6 className="mb-0">Hidupkan</h6>
            </button>
          ) : (
            <button
              className="ci-btn-danger ci-lg w-100"
              data-toggle="modal"
              data-target="#nonAktifGoogle"
            >
              <h6 className="mb-0">Matikan</h6>
            </button>
          )}
        </div>
      </div>
      <div className="row d-flex align-items-center py-2">
        <div className="col-6 d-flex align-items-center">
          <i className="fas fa-key mr-3"></i>
          <p className="label-title2 mb-0">PIN</p>
        </div>
        <div className="col-6">
          {profile.pin ? (
            <button
              className="ci-btn-warning ci-lg w-100"
              data-toggle="modal"
              data-target="#nonAktifPin"
            >
              <h6 className="mb-0">Non-Aktifkan</h6>
            </button>
          ) : (
            <button
              className="ci-btn-warning ci-lg w-100"
              data-toggle="modal"
              data-target="#aktifkanPin"
            >
              <h6 className="mb-0">Aktifkan</h6>
            </button>
          )}
        </div>
      </div>
      <UbahPassword toggleModal={toggleModal} />
      <AktifkanPin />
      <PopupGoogleActivator />
      <NonAktifPin />
      <NonAktifGoogle />
      <GoogleAuthPopUpBerhasil />
      <AktifkanGAuth />
    </div>
  );
}

export default KeamananPanel;
