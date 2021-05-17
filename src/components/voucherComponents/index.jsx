import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BuatVoucher from "./buatVoucher/BuatVoucher";
import PencairanVoucher from "./pencairan/PencairanVoucher";

import { getVoucherHistories, getRedeemHistories } from "../../stores";
import CopyrightDashboard from "../footerComponents/copyrightComponents/CopyrightDashboard";

import Translate from '../../i18n/Translate';

function SetorTarik() {
  const { history } = useSelector((state) => state.voucherReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (history.length < 1) {
      getVoucherHistories(dispatch);
      getRedeemHistories(dispatch);
    }
  }, [history,dispatch]);

  return (
    <div>
      <div className="p-3">
        <div className="row">
          <div className="col-12 col-md-12">
            <div
              className="nav nav-tabs"
              id="myTab"
              role="tablist"
              style={{ borderBottom: "0px" }}
            >
              <button
                className="nav-link btn ci-btn-custom-1 ci-btn-tabsSetorTarik active px-5 py-3 font-16 font-bold border-0 mr-2"
                style={{ borderRadius: "2px", minWidth: "200px" }}
                id="setor-tab"
                data-toggle="tab"
                href="#setor"
                role="tab"
                aria-controls="setor"
                aria-selected="true"
              >
                {Translate('vc_pencairan')}
              </button>
              <button
                className="nav-link btn ci-btn-custom-1 ci-btn-tabsSetorTarik px-5 py-3 font-16 font-bold border-0"
                style={{ borderRadius: "2px", minWidth: "200px" }}
                id="tarik-tab"
                data-toggle="tab"
                href="#tarik"
                role="tab"
                aria-controls="tarik"
                aria-selected="false"
              >
                {Translate('vc_buat_voucher')}
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="setor"
                role="tabpanel"
                aria-labelledby="setor-tab"
              >
                <PencairanVoucher />
              </div>
              <div
                className="tab-pane fade"
                id="tarik"
                role="tabpanel"
                aria-labelledby="tarik-tab"
              >
                <BuatVoucher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetorTarik;
