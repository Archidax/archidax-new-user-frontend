import React from "react";
import { useDispatch } from "react-redux";

import PopUp from "../../popUps/index";
import VoucherKhusus from "./VoucherKhusus";
import VoucherUmum from "./VoucherUmum";
import RiwayatBuatVoucher from "./Riwayat";
import { baseAxios } from "../../../stores";

export default function BuatVoucher() {
  const dispatch = useDispatch();

  const createVoucherRequest = (
    data,
    setDisableSend = false,
    setShowPopupKonfirmasiOTP = false,
    retries = 3,
  ) => {
    PopUp.showLoading();
    baseAxios({
      method: "POST",
      url: "/voucher/create",
      data: { ...data },
      headers: {
        jwttoken: localStorage.token,
      },
    })
      .then(({ data }) => {
        PopUp.close();
        PopUp.fire({
          title: "Pembuatan Voucher Berhasil",
          text: data.message,
        });
        dispatch({ type: "UNSHIFT_VOUCHER_HISTORY", data: data.voucher });
      })
      .catch((err) => {
        PopUp.close();
        PopUp.fire({
          title: "Terjadi Kesalahan",
          text:
            err.response && err.response.data && err.response.data.message
              ? err.response.data.message
              : err.message,
        });
        if (err.message === "Network Error") {
          if (retries > 0) {
            setTimeout(() => {
              PopUp.close();
              createVoucherRequest(data, retries - 1);
            }, 5000);
          }
        } else {
          if (setShowPopupKonfirmasiOTP) {
            setShowPopupKonfirmasiOTP(true);
          }
        }
      })
      .finally(() => {
        // console.log('masuk')
        if (setDisableSend) {
          setDisableSend(false);
        }
      });
  };

  return (
    <div>
      <div className="row mt-4">
        <VoucherUmum createVoucherRequest={createVoucherRequest} />
        <VoucherKhusus createVoucherRequest={createVoucherRequest} />
      </div>
      <div className="row px-3 py-2">
        <div className="col-12 bg-homepage2 br-5">
          <RiwayatBuatVoucher />
        </div>
      </div>
    </div>
  );
}
