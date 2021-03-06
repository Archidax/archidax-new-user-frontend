import React from "react";

import Translate from "../../../i18n/Translate";

import AssetCrypto from "./cardDashboardWallets/AssetCrypto";
import walletlogo from "../../../assets/img/dashboard/logo/wallet.svg";
import assetcryptologo from "../../../assets/img/dashboard/logo/assetcrypto.svg";

//import { getMyAssets } from "../../../stores/index";
import { useSelector } from "react-redux";
import { convertNumber } from "../../../assets/js";

// Icons
// import BNBCoin from "../../../assets/img/trade/cryptologo/Binance_BNB.svg";
// import BTCCoin from "../../../assets/img/trade/cryptologo/Bitcoin_BTC.svg";
// import BTTCoin from "../../../assets/img/trade/cryptologo/Bittorent_BTT.svg";
// import ADACoin from "../../../assets/img/trade/cryptologo/Aave_AAVE.svg";
// import CGOLDCoin from "../../../assets/img/trade/cryptologo/Cgold_CGOLD.svg";
// import DOGECoin from "../../../assets/img/trade/cryptologo/Aave_AAVE.svg";
// import ETHCoin from "../../../assets/img/trade/cryptologo/Ethereum_ETH.svg";
// import LTCCoin from "../../../assets/img/trade/cryptologo/Litecoin_LTC.svg";
// import MONEROCoin from "../../../assets/img/trade/cryptologo/Aave_AAVE.svg";
// import USDTCoin from "../../../assets/img/trade/cryptologo/Tether_USDT.svg";
// import TRXCoin from "../../../assets/img/trade/cryptologo/Tron_TRX.svg";
// import WAVESCoin from "../../../assets/img/trade/cryptologo/Waves_WAVES.svg";
// import XLMCoin from "../../../assets/img/trade/cryptologo/Stellar_XLM.svg";
import { Link } from "react-router-dom";

function CardDashboardWallets() {
  const assets = useSelector((state) => state.walletReducer.assets);
  const est = useSelector((state) => state.walletReducer.est);
  const saldo = useSelector((state) => state.walletReducer.saldo);

  return (
    <div className="card text-white bg-dashboard-wallet">
      {/* <p>{JSON.stringify(assets)}</p> */}
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
                Wallet
              </h6>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <h6 className="font-bold font-12 text-gold mb-0">
                Estimasi Nilai Aset
              </h6>
              <p className="font-15" style={{ fontWeight: "bold" }}>
                Rp.{convertNumber.toMoney(Math.round(est))}
              </p>
            </div>
            <div className="col">
              <h6 className="font-bold font-12 text-gold mb-0">Saldo</h6>
              <p className="font-15" style={{ fontWeight: "bold" }}>
                Rp.{convertNumber.toMoney(Math.round(saldo))}
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
                  Asset Crypto
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
                <i class="fas fa-angle-double-right ml-3"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDashboardWallets;
