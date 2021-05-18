import React from "react";
import { Link, useHistory } from "react-router-dom";

import walletIcon from "../../../../../assets/affiliasi/wallet-icon.svg";
import EthCoin from "../../../../../assets/img/iconsCoin/EtheriumCoin.png";
import IDRlogo from "../../../../../assets/img/Rp.svg";
import { 
  // useDispatch, 
  useSelector 
} from "react-redux";
import { convertNumber } from "../../../../../assets/js";
import Translate from "../../../../../i18n/Translate";

function WalletsDropdownHeader() {
  const { assets, est, saldo } = useSelector((state) => state?.walletReducer);
  // const dispatch = useDispatch();
  const history = useHistory();
  const selectCoin = (code) => {
    history.push(`/crypto/setor-crypto/${code}`);
    console.log(code, "<<code");
  };

  return (
    <div className="btn-group ml-3 mr-2 d-sm-flex d-none">
      <button
        className="ci-dropdown-btn-wallets d-flex justify-content-center"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="d-flex align-items-center px-4 py-1 ci-dropdown-btn-wallets-text font-12">
          <img src={walletIcon} alt="walletIcon" className="mr-3" />
          {Translate('hd_wallet')}
        </span>
      </button>
      <div
        className="dropdown-menu dropdown-menu-right ci-dropdown-menu-wallets pt-0"
        aria-labelledby="dropdownMenuButton"
      >
        <div
          className="container-fluid"
          style={{ background: "#F9BA42", borderRadius: "4px 4px 0 0" }}
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
                <h6 className="text-dark mb-1 lable-title text-left font-13 font-bolder">
                  {Translate("hd_saldo")} :{" "}
                </h6>
                <h6 className="text-dark mb-0 lable-title text-left font-14 font-bolder2">
                  {convertNumber.toMoney(Math.round(saldo),'$')}
                </h6>
              </div>
              <div className="py-2">
                <h6 className="text-dark mb-1 lable-title text-right font-13 font-bolder">
                  {Translate('hd_estimasi_nilai_aset')} :
                </h6>
                <h6 className="text-dark mb-0 lable-title text-right font-14 font-bolder2">
                  {convertNumber.toMoney(Math.round(est),'$')}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ci-dropdown-menu-wallets-scrollbar mt-2 mb-4">
          <div className="w-100">
            {/* IDR */}
            <div className="row align-items-center my-2">
              <div className="col-2 col-md-2">
                <img src={IDRlogo} className="img-fluid" alt="IDR" width={35} />
              </div>

              <div className="col-4 col-md-4">
                <p className="text-white lable-title mb-0">USD</p>
              </div>
              <div className="col-3 col-md-3 pr-1">
                <Link to={`/wallet/setor-rupiah`}>
                  <button className="ci-btn-success ci-sm w-100">{Translate('hd_setor')}</button>
                </Link>
              </div>
              <div className="col-3 col-md-3 pl-1">
                <Link to={`/wallet/setor-rupiah`}>
                  <button className="ci-btn-danger ci-sm w-100">{Translate('hd_tarik')}</button>
                </Link>
              </div>
            </div>
            {/* IDR */}
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
                      <p className="text-white lable-title mb-0">
                        {items.type}
                      </p>
                    </div>
                    <div className="col-3 col-md-3 pr-1">
                      <Link to={`/crypto/setor-crypto/${items.type}`}>
                        <button
                          className="ci-btn-success ci-sm w-100"
                          onClick={() => selectCoin(items.type)}
                        >
                          {Translate('hd_setor')}
                        </button>
                      </Link>
                    </div>
                    <div className="col-3 col-md-3 pl-1">
                      <Link to={`/crypto/tarik-crypto/${items.type}`}>
                        <button className="ci-btn-danger ci-sm w-100">
                          {Translate('hd_tarik')}
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

export default WalletsDropdownHeader;
