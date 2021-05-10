import React, { useState } from "react";
import warning from "../../assets/img/warning.png";
import { createPin } from "../../stores";
import { useDispatch } from "react-redux";
import OTP from "../otp";

export default function AktifkanPin() {
  const dispatch = useDispatch();
  const [nomor_pin, setNomor_pin] = useState("");
  const [nomor_pin2, setNomor_pin2] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [showPin2, setShowPin2] = useState(false);
  const activate = (e) => {
    e.preventDefault();
    // var find = document.getElementById("aktifkanPin").remove()

    createPin(dispatch, { nomor_pin });
  };
  return (
    <div
      className="modal fade"
      id="aktifkanPin"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-ubah-password">
          <div className="modal-header modal-header-custom">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" style={{ color: "white" }}>
                &times;
              </span>
            </button>
          </div>
          <div className="modal-body modal-body-custom">
            <h1>Aktifkan Pin</h1>
            <div className="container">
              <div className="row warning-ubah-password">
                <div className="col-1">
                  <img src={warning} alt="warning" />
                </div>
                <div className="col-11">
                  <p className="text-warning-custom">
                    Simpan dan jangan beritahukan kode PIN anda kepada siapa
                    pun, termasuk ke tim support Cryptoindex.
                  </p>
                </div>
              </div>
            </div>
            <form>
              <div className="form-group row no-gutters">
                <label
                  htmlFor="inputPin label-input"
                  className="col-sm-4 col-form-label"
                >
                  Pin
                </label>
                <div className="col-sm-8 input-group ci-inputDefault-bg">
                  <input
                    value={nomor_pin}
                    onChange={(e) => setNomor_pin(e.target.value)}
                    type={showPin ? "text" : "password"}
                    className="form-control ci-inputDefault-bg-input ci-pd"
                    id="inputPin"
                  />
                  <div className="ci-inputDefault-bg-appendR">
                    <i
                      onClick={() => setShowPin(!showPin)}
                      className={
                        showPin
                          ? "far fa-eye-slash ci-inputDefault-bg-appendR-icon"
                          : "far fa-eye ci-inputDefault-bg-appendR-icon"
                      }
                    ></i>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <label
                  htmlFor="inputKonfirmasiPin label-input"
                  className="col-sm-4 col-form-label"
                >
                  Konfirmasi Pin
                </label>
                <div className="col-sm-8 input-group ci-inputDefault-bg">
                  <input
                    value={nomor_pin2}
                    onChange={(e) => setNomor_pin2(e.target.value)}
                    type={showPin2 ? "text" : "password"}
                    className="form-control ci-inputDefault-bg-input ci-pd"
                    id="inputKonfirmasiPin"
                  />
                  <div className="ci-inputDefault-bg-appendR">
                    <i
                      onClick={() => setShowPin2(!showPin2)}
                      className={
                        showPin2
                          ? "far fa-eye-slash ci-inputDefault-bg-appendR-icon"
                          : "far fa-eye ci-inputDefault-bg-appendR-icon"
                      }
                    ></i>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <label
                  htmlFor="inputPinSms label-input"
                  className="col-sm-4 col-form-label"
                >
                  PIN SMS
                </label>
                <div className="col-sm-5 input-group ci-inputDefault-bg">
                  <input
                    type="password"
                    className="form-control ci-inputDefault-bg-input ci-pd"
                    id="inputPinSms"
                  />
                </div>
                <div className="col-sm-3 pl-3">
                  <OTP />
                  {/* <button  className="ci-btn-lg ci-btn-custom-1 button-kirim w-100">Kirim PIN</button> */}
                </div>
              </div>
            </form>
            <button
              onClick={activate}
              disabled={!(nomor_pin && nomor_pin2 && nomor_pin2 === nomor_pin)}
              className="ci-btn-lg ci-btn-custom-1 w-100 pt-2 pb-2"
            >
              Aktifkan Pin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
