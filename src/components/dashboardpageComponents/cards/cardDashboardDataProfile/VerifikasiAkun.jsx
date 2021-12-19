import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Translate from "../../../../i18n/Translate";
function VerifikasiAkun() {
  const kyc = useSelector((state) => state.kycReducer);
  // console.log(kyc);
  return (
    <div className="container-fluid">
      <div className="row mt-4 mb-1">
        <div className="col-12 col-md-12">
          <h6 className="font-20 text-gold font-weight-bold">
            {Translate("db_verifikasi_akun")}
          </h6>
          <p className="font-17 mt-3">{Translate("db_langkah_verifikasi")}</p>
        </div>
      </div>
      <div className="row mt-3 mb-4 justify-content-between">
        <div className="col-6 col-md-6">
          <div className="container-fluid px-0">
            <div className="mb-2 font-15 font-bold">
              <i
                className={
                  kyc.kycStatus === "1" || kyc.isFinish
                    ? "fas fa-check-circle mr-2"
                    : "far fa-circle mr-2"
                }
              ></i>
              {Translate("db_langkah1")}{" "}
            </div>
            <div className="font-15">{Translate("db_akses_pasar_trading")}</div>
          </div>
        </div>
        <div className="col-6 col-md-6">
          <div className="container-fluid px-0">
            <div className="mb-2 font-15 font-bold">
              <i
                className={
                  kyc.isFinish
                    ? "fas fa-check-circle mr-2"
                    : "far fa-circle mr-2"
                }
              ></i>
              {Translate("db_langkah2")}{" "}
            </div>
            <div className="font-15">{Translate("db_akses_tarik_dana")}</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/verification/step1">
          <h6 className="text-gold mt-2 mr-2" style={{ fontWeight: "700" }}>
            {Translate("db_verivikasi_sekarang")}
          </h6>
        </Link>
      </div>
    </div>
  );
}

export default VerifikasiAkun;
