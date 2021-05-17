import React, { useState } from "react";
import { useSelector } from "react-redux";

import { hidePhoneNumber } from "../../../helpers";
import PopupBuatVoucherKhusus from "./popUps/PopupBuatVoucherKhusus";
import PopupKonfirmasiOTP from "./popUps/PopupKonfirmasiOTP";
import PopUp from "../../popUps/index";
import Translate from "../../../i18n/Translate";

export default function VoucherKhusus(props) {
  const { createVoucherRequest } = props;
  const { telefon } = useSelector((state) => state.profileReducer);

  const [data, setData] = useState({
    nominal: "",
    recipient_email: "",
    pin_pencairan: "",
    request_id: "",
    code: "",
  });
  const [showPopupKonfirmasiOTP, setShowPopupKonfirmasiOTP] = useState(false);
  const [showPopupBuatVocherKhusus, setShowPopupBuatVocherKhusus] = useState(
    false,
  );

  const submitForm = (e) => {
    e.preventDefault();
    setShowPopupKonfirmasiOTP(true);
  };

  const setInputData = (e, type) => {
    setData({
      ...data,
      [type]: e.target.value,
    });
  };

  const editInputData = (val, type) => {
    setData({
      ...data,
      [type]: val,
    });
  };

  const sendPin = (setDisableSend) => {
    if (data.request_id) {
      createVoucherRequest(data, setDisableSend, setShowPopupKonfirmasiOTP);
      setShowPopupKonfirmasiOTP(false);
    } else {
      PopUp.fire({
        title: "Request Tidak valid",
        text: "Mohon kirim ulang kode otp",
      });
      setShowPopupKonfirmasiOTP(true);
      setDisableSend(false);
    }
  };

  return (
    <div className="col-12 col-md-6 p-3">
      <div className="card ci-customCard-1 text-white h-100">
        <form onSubmit={(e) => submitForm(e)}>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="label-title-top">{Translate('vc_khusus')}</div>
              </div>
            </div>

            <div className="mt-3 row">
              <div className="col-12 col-md-3 ci-text-white lable-title mb-1">
                <p className="ci-text-white mb-0 font-12">{Translate('vc_nominal_rupiah')}</p>
              </div>
              <div className="col-12 col-md-9 flex-column">
                <div className="input-group ci-inputDefault-bg">
                  <input
                    type="number"
                    value={data.nominal}
                    onChange={(e) => setInputData(e, "nominal")}
                    required
                    className="form-control ci-inputDefault-bg-input ci-pd"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 row">
              <div className="col-12 col-md-3 ci-text-white lable-title mb-1">
                <p className="ci-text-white mb-0 font-12">{Translate('vc_email_penerima')}</p>
              </div>
              <div className="col-12 col-md-9 flex-column">
                <div className="input-group ci-inputDefault-bg">
                  <input
                    type="email"
                    value={data.recipient_email}
                    onChange={(e) => setInputData(e, "recipient_email")}
                    required
                    className="form-control ci-inputDefault-bg-input ci-pd"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 row">
              <div className="col-12 col-md-3 ci-text-white lable-title mb-1">
                <p className="ci-text-white mb-0 font-12">{Translate('vc_pin_pencairan')}</p>
              </div>
              <div className="col-12 col-md-9 flex-column">
                <div className="input-group ci-inputDefault-bg">
                  <input
                    type="number"
                    value={data.pin_pencairan}
                    onChange={(e) => setInputData(e, "pin_pencairan")}
                    required
                    className="form-control ci-inputDefault-bg-input ci-pd"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12">
                <ul style={{ paddingLeft: "25px", border: "0.5px dashed #f9bd00"  }} className="font-12 mt-4 py-2 rounded">
                  <li className="font-12">
                    {Translate('vc_text_maks_penarikan')}
                  </li>
                  <li className="font-12">
                    {Translate('vc_text_penarikan')}
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 w-100 justify-content-end d-flex mt-md-2 mt-0">
                <button type="submit" className="ci-btnOL-secondary ci-lg ci-bg-warning border-0 text-dark">
                  {" "}
                  {Translate('vc_buat_voucher')}{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <PopupBuatVoucherKhusus
        showPopupBuatVocherKhusus={showPopupBuatVocherKhusus}
        setShowPopupBuatVocherKhusus={setShowPopupBuatVocherKhusus}
        value={{
          title: "Voucher berhasil dibuat !",
          text: `CTI-IDR-ABCDEFGH-IJKLMNOP-QRSTUVWX-YZ123456-7890ABCD`,
        }}
      />
      <PopupKonfirmasiOTP
        editInputData={editInputData}
        sendPin={sendPin}
        createVoucherRequest={createVoucherRequest}
        showPopupKonfirmasiOTP={showPopupKonfirmasiOTP}
        setShowPopupKonfirmasiOTP={setShowPopupKonfirmasiOTP}
        value={{
          title: "Konfirmasi OTP",
          text: `Kami telah mengirimkan kode OTP ke hp anda dengan nomor ${hidePhoneNumber(
            telefon,
            6,
            2,
          )} kemudian masukkan PIN ke isian di atas.`,
        }}
      />
    </div>
  );
}
