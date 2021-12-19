import React from "react";

import Translate from "../../../i18n/Translate";

import AssetCrypto from "./cardDashboardWallets/AssetCrypto";
import walletlogo from "../../../assets/img/dashboard/logo/wallet.svg";
import assetcryptologo from "../../../assets/img/dashboard/logo/assetcrypto.svg";

import { useSelector } from "react-redux";
import { convertNumber } from "../../../assets/js";

import { Link } from "react-router-dom";

function CardDashboardWallets() {
  const assets = useSelector((state) => state.walletReducer.assets);
  const est = useSelector((state) => state.walletReducer.est);
  const saldo = useSelector((state) => state.walletReducer.saldo);

  return (
    <div className="card text-white bg-dashboard-wallet">
      <div className="card-body">
        <div
          className="mt-2 py-3 px-3 rounded"
          style={{ border: "0.2px solid grey" }}
        >
          <div
            className="d-flex flex-direction-row"
            style={{ verticalAlign: "middle" }}
          >
            <div className="ml-1">
              <img src={walletlogo} alt="walletlogo" height={17} />
            </div>
            <div>
              <h6 className="ml-3 text-gold font-bold font-16 label-title-top">
                {Translate('db_wallet')}
              </h6>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <h6 className="font-bold font-12 text-gold mb-0">
                {Translate('db_estimasi_nilai_aset')}
              </h6>
              <p className="font-15" style={{ fontWeight: "bold" }}>
                USDT {convertNumber.toMoney(Math.round(est))}
              </p>
            </div>
            <div className="col">
              <h6 className="font-bold font-12 text-gold mb-0">{Translate('db_saldo')}</h6>
              <p className="font-15" style={{ fontWeight: "bold" }}>
                USDT {convertNumber.toMoney(Math.round(saldo))}
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-3 pt-3">
          <div className="col-12 col-md-12">
            <div
              className="d-flex flex-direction-row mt-3"
              style={{ verticalAlign: "middle" }}
            >
              <div className="ml-1">
                <img src={assetcryptologo} alt="assetcryptologo" height={17} />
              </div>
              <div>
                <h6 className="ml-3 text-gold font-bold font-16 label-title-top">
                  {Translate('db_aset_crypto')}
                </h6>
              </div>
            </div>
            <div className="my-3">
              <AssetCrypto data={assets} />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-12">
            <Link to="/wallet">
              <button className="ci-btn-secondary ci-lg w-100 ci-bg-success text-white mt-3">
                {Translate("selengkapnya")}
                <i className="fas fa-angle-double-right ml-3"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDashboardWallets;
