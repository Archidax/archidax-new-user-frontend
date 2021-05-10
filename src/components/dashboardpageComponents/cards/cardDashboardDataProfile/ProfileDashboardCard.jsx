import React from "react";
import photoProfile from "../../../../assets/img/photo.jpeg";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import googlelogo from "../../../../assets/img/dashboard/logo/google.png";
import keylogo from "../../../../assets/img/dashboard/logo/key.png";
import dateFormat from "dateformat";

function ProfileDashboardCard() {
  const history = useHistory();
  const profile = useSelector((state) => state.profileReducer);
  const kyc = useSelector((state) => state.kycReducer);
  const loading = useSelector((state) => state.loadingReducer);
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12 col-md-4 align-items-center d-sm-flex d-none">
          <img
            style={{
              // height: "80%",
              // maxHeight: "100px",
              minHeight: "100px",
              width: "100%",
              objectPosition: "center",
              objectFit: "cover",
              // width: "100%",
              borderRadius: "5px",
              boxShadow: "2px 1px 11px 0px rgba(0,0,0,0.75)",
            }}
            className="img-fluid"
            src={profile.foto ? profile.foto : photoProfile}
            alt="img"
          />
        </div>
        <div className="col-12 col-md-8 mt-2">
          <div className="row">
            <div className="col-12 col-md-12 mb-0">
              <h5 className="font-24">
                {profile.namaLengkap}
                {/* <span style={{ color: "blue" }}><i className="fas fa-check-circle"></i></span> */}
              </h5>
            </div>
            <div className="col-12 col-md-12">
              <div className="d-flex justify-content-start mb-2 font-14">
                {profile.email}
              </div>
            </div>
            <div className="col-12">
              {kyc && kyc.approved_status ? (
                <div
                  style={{
                    border: "1px solid #00A2E0",
                    borderRadius: "4px",
                    color: "#00A2E0",
                    cursor: "default",
                    padding: "2px 0",
                    maxWidth: "150px",
                  }}
                  className="text-center"
                >
                  <p className=" mb-0 lable-title">Terverifikasi</p>
                </div>
              ) : kyc &&
                kyc.kycStatus === "2" &&
                !kyc.approved_status &&
                kyc.isFinish ? (
                <div
                  style={{
                    border: "1px solid #F9BD00",
                    borderRadius: "4px",
                    color: "#F9BD00",
                    cursor: "default",
                    padding: "2px 0",
                    maxWidth: "150px",
                  }}
                  className="text-center"
                >
                  <p className=" mb-0 lable-title">Menunggu verifikasi</p>
                </div>
              ) : (
                <button
                  onClick={() => {
                    if (!kyc.kycStatus) {
                      history.push("/verification/step1");
                    } else if (kyc.kycStatus === "1") {
                      history.push("/verification/step2");
                    }
                  }}
                  className="ci-btnOL-danger w-100"
                  style={{
                    cursor: "pointer",
                    padding: "2px 0",
                    maxWidth: "150px",
                  }}
                >
                  Belum verifikasi
                </button>
              )}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-12 col-lg-12">
              <p className="font-14 mb-1">
                <span className="text-gold">IP address : </span>
                {loading.ip}
              </p>
              <p className="font-14 mb-1">
                <span className="text-gold">Terakhir online : </span>
                {`${dateFormat(loading.lastLoggin, "HH:MM dd-mm-yyyy")}`}
              </p>
            </div>
            {/* <div className="col-12 col-md-4 text-right">
              <button
                onClick={() => {
                  history.push("/profile");
                }}
                className="w-100 px-5 py-2 ci-btn-custom-1 font-12"
              >
                Ubah Profil
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="row mt-2 justify-content-between">
        <div className="col-12 col-md-6 mt-2">
          <Link to="/keamanan">
            <div className="container-fluid p-3 border bg-google">
              {/* <i className="fab fa-google"></i> */}
              <img src={googlelogo} alt="googlelogo" height={40} />
              <div className="font-12 font-bold">Google Authenticator</div>
              <div className="font-12">
                {profile.googlefa ? "Aktif" : "Not Active"}
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-6 mt-2 ">
          <Link to="/keamanan">
            <div className="container-fluid p-3 border bg-key">
              {/* <i className="fas fa-key"></i> */}
              <img src={keylogo} alt="keylogo" height={40} />
              <div className="font-12 font-bold">PIN</div>
              <div className="font-12">
                {profile.pin ? "Aktif" : "Not Active"}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileDashboardCard;
