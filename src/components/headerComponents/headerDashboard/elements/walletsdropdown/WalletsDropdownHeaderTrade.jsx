import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { convertNumber } from "../../../../../assets/js";

import walletIcon from "../../../../../assets/affiliasi/wallet-icon.svg";
import EthCoin from "../../../../../assets/img/iconsCoin/EtheriumCoin.png";
import Translate from "../../../../../i18n/Translate";
import { selectCryptoToDepo } from "../../../../../stores";

function WalletsDropdownHeaderTrade() {
  const { assets, est, saldo } = useSelector((state) => state?.walletReducer);
  const { mode } = useSelector((state) => state.daynightReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const selectCoin = (code) => {
    history.push("/crypto/setor-crypto");
    selectCryptoToDepo(code, dispatch);
  };

  return (
    <div className="btn-group ml-3 mr-3">
      <button
        className="ci-dropdown-btn-wallets-trade d-flex justify-content-center"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="d-flex align-items-center px-4 py-1 ci-dropdown-btn-wallets-text font-12">
          <img src={walletIcon} alt="walletIcon" className="mr-2" />
          Wallet
        </span>
      </button>
      <div
        className="dropdown-menu dropdown-menu-right trade-wallet-dropdown pt-0"
        aria-labelledby="dropdownMenuButton"
        style={{
          backgroundColor: mode ? "#0c0c0c" : "white",
          border: mode ? "1px solid white" : "1px solid black",
        }}
      >
        <div
          className="container-fluid"
          style={{
            background: mode ? "#f9ba42" : "#00688F",
            borderRadius: "4px 4px 0 0",
          }}
        >
          <div className="w-100">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div className="py-2">
                <h6
                  className="mb-1 lable-title text-left font-13 font-bolder"
                  style={{ color: mode ? "black" : "white" }}
                >
                  {Translate("hd_saldo")} :{" "}
                </h6>
                <h6
                  className="mb-0 lable-title text-left font-14 font-bolder2"
                  style={{ color: mode ? "black" : "white" }}
                >
                  {convertNumber.toMoney(Math.round(saldo))},00 IDR
                </h6>
              </div>
              <div className="py-2">
                <h6
                  className="mb-1 lable-title text-right font-13 font-bolder"
                  style={{ color: mode ? "black" : "white" }}
                >
                  Nilai Asset Estimasi :
                </h6>
                <h6
                  className="mb-0 lable-title text-right font-14 font-bolder2"
                  style={{ color: mode ? "black" : "white" }}
                >
                  {convertNumber.toMoney(Math.round(est))},00 IDR
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ci-dropdown-menu-wallets-scrollbar mt-2 mb-4">
          <div className="w-100">
            {assets && assets.length ? (
              assets.map((items, itemIndex) => {
                return (
                  <div key={itemIndex} className="row align-items-center my-2">
                    {items.detail_crypto ? (
                      <div className="col-2 col-md-2">
                        <img
                          className="img-fluid"
                          src={items.detail_crypto.price_24hour.icon}
                          alt="..."
                          width={35}
                        />
                      </div>
                    ) : (
                      <div className="col-2 col-md-2">
                        <img
                          className="img-fluid"
                          src={EthCoin}
                          alt="..."
                          width={35}
                        />
                      </div>
                    )}
                    <div className="col-4 col-md-4">
                      <p
                        className="lable-title mb-0"
                        style={{ color: mode ? "white" : "black" }}
                      >
                        {items.type}
                      </p>
                    </div>
                    <div className="col-3 col-md-3 pr-1">
                      <Link to={`/crypto/setor-crypto/${items.type}`}>
                        <button className="ci-btn-success ci-sm w-100">
                          Setor
                        </button>
                      </Link>
                    </div>
                    <div className="col-3 col-md-3 pl-1">
                      <Link to={`/crypto/tarik-crypto/${items.type}`}>
                        <button
                          className="ci-btn-danger ci-sm w-100"
                          onClick={() => selectCoin(items.type)}
                        >
                          Tarik
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="row align-items-center my-2"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletsDropdownHeaderTrade;
