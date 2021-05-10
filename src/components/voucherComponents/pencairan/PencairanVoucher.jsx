import React from "react";

import PopUp from "../../popUps/index";
import VoucherKhusus from "./VoucherKhusus";
import VoucherUmum from "./VoucherUmum";
import RiwayatPencairan from "./Riwayat";
import { baseAxios } from "../../../stores";

export default function PencairanVoucher() {
  const redeemVoucherRequest = (data, setData, retries = 3) => {
    PopUp.showLoading();
    baseAxios({
      method: "POST",
      url: "/voucher/redeem",
      data: { ...data },
      headers: {
        jwttoken: localStorage.token,
      },
    })
      .then(({ data }) => {
        PopUp.close();
        PopUp.fire({
          title: "Pencarian Voucher Berhasil",
          text: data.message,
        });
        setData({
          nominal: "",
          pin_pencairan: "",
        });
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
        if (retries > 0) {
          if (err.message === "Network Error") {
            setTimeout(() => {
              PopUp.close();
              redeemVoucherRequest(data, retries - 1);
            }, 5000);
          }
        }
      });
  };

  return (
    <div>
      <div className="row mt-4">
        <VoucherUmum redeemVoucherRequest={redeemVoucherRequest} />
        <VoucherKhusus redeemVoucherRequest={redeemVoucherRequest} />
      </div>
      <div className="row px-3 py-2">
        <div className="col-12 bg-homepage2 br-5">
          <RiwayatPencairan />
        </div>
      </div>
    </div>
  );
}
