import React, { useState } from "react";
// import PencairanVoucherGagal from "./popUps/PencairanVoucherGagal";

export default function VoucherKhusus(props) {
  const { redeemVoucherRequest } = props;

  const [data, setData] = useState({
    kode_voucher: "",
    pin_pencairan: "",
  });

  const changeInput = (e, type) => {
    setData({
      ...data,
      [type]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    redeemVoucherRequest(data, setData);
  };
  // const [showPopupVocherKhusus, setShowPopupVocherKhusus] = React.useState(false)

  // const balance = "1.000.000";
  return (
    <div className="col-12 col-md-6 p-3">
      <form onSubmit={(e) => submitForm(e)}>
        <div className="card ci-customCard-1 text-white h-100">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="font-18 text-gold font-bold label-title-top">
                  Voucher Khusus
                </div>
              </div>
            </div>

            <div className="mt-3 row">
              <div className="col-12 col-md-3">
                <p className="ci-text-white mb-0 font-12">Kode Voucher</p>
              </div>
              <div className="col-12 col-md-9 flex-column">
                <div className="input-group ci-inputDefault-bg">
                  <input
                    required
                    value={data.kode_voucher}
                    onChange={(e) => changeInput(e, "kode_voucher")}
                    className="form-control ci-inputDefault-bg-input ci-pd"
                  />
                </div>
                <div className="font-10 mt-2 text-white-50">
                  <span className="font-bold mr-2 text-gold">
                    * Format voucher:
                  </span>
                  CTI-IDR-ABCDEFGH-IJKLMNOP-QRSTUVWX-YZ123456-7890ABCD
                </div>
              </div>
            </div>
            <div className="mt-3 row">
              <div className="col-12 col-md-3 text-white lable-title">
                <p className="ci-text-white mb-0 font-12">PIN Pencairan</p>
              </div>
              <div className="col-12 col-md-9 flex-column">
                <div className="input-group ci-inputDefault-bg">
                  <input
                    required
                    value={data.pin_pencairan}
                    onChange={(e) => changeInput(e, "pin_pencairan")}
                    className="form-control ci-inputDefault-bg-input ci-pd"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12">
                <ul style={{ paddingLeft: "25px", border: "0.5px dashed #f9bd00" }} className="font-12 mt-4 py-2 rounded">
                  <li className="font-12">
                    Anda bisa mencairkan kode voucher yang anda miliki dengan memasukkan kode voucher tersebut pada form di atas.
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 w-100 justify-content-end d-flex mt-md-2 mt-0">
                <button
                  type="submit"
                  className="ci-btnOL-secondary ci-lg ci-bg-warning border-0 text-dark"
                  data-toggle="modal"
                  data-target="#pencairanVoucherGagal"
                >
                  {" "}
                  Cairkan{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* <PencairanVoucherGagal showPopupVocherKhusus={showPopupVocherKhusus} setShowPopupVocherKhusus={setShowPopupVocherKhusus} value={
        {
          title: "Gagal !!!",
          text: `Voucher yang anda masukan salah.`
        }
      }/> */}
    </div>
  );
}
