import React, { useState } from "react";
import Translate from "../../../i18n/Translate";

export default function VoucherUmum(props) {
  const { redeemVoucherRequest } = props;

  const [data, setData] = useState({
    kode_voucher: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    redeemVoucherRequest(data, setData);
  };



  return (
    <div className="col-12 col-md-6 p-3">
      <form onSubmit={(e) => submitForm(e)}>
        <div className="card ci-customCard-1 text-white h-100">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="font-18 text-gold font-bold label-title-top">
                  {Translate('vc_umum')}
                </div>
              </div>
            </div>

            <div className="mt-3 row">
              <div className="col-12 col-md-3 text-white lable-title">
                <p className="ci-text-white mb-0 font-12">{Translate('vc_kode_voucher')}</p>
              </div>
              <div className="col-12 col-md-9 flex-column">
                <div className="input-group ci-inputDefault-bg">
                  <input
                    required
                    value={data.kode_voucher}
                    onChange={(e) => setData({ kode_voucher: e.target.value })}
                    className="form-control ci-inputDefault-bg-input ci-pd"
                  />
                </div>
                <div className="font-10 mt-2 text-white-50">
                  <span className="font-bold mr-2 text-gold">
                    * {Translate('vc_format_voucher')}:
                  </span>
                  CTI-IDR-ABCDEFGH-IJKLMNOP-QRSTUVWX-YZ123456-7890ABCD
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 mb-3">
                <ul style={{ paddingLeft: "25px", border: "0.5px dashed #f9bd00" }} className="font-12 mt-4 py-2 rounded">
                  <li className="font-12">
                  {Translate('vc_text_redeem')}
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 w-100 justify-content-end d-flex mt-md-4 my-4">
                <button
                  type="submit"
                  className="ci-btnOL-secondary ci-lg ci-bg-warning border-0 text-dark"
                  data-toggle="modal"
                  data-target="#pencairanVoucherBerhasil"
                >
                  {" "}
                  {Translate('vc_cairkan')}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
