import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChartNilaiAsset from "../chart/ChartNilaiAsset";
import bgAsset from "../../../assets/img/wallet/bg-asset.png";

import { useDispatch, useSelector } from "react-redux";
import { convertNumber } from "../../../assets/js";
import { getPriceEstimation, getMyProfit } from "../../../stores";
import dateFormat from 'dateformat'
import Translate from "../../../i18n/Translate";

function NilaiAsset() {
  const est = useSelector((state) => state.walletReducer.est);
  const {saldo,assets} = useSelector((state) => state.walletReducer);
  const btcPrice = useSelector(state => state.tarikCryptoReducer.coinPrice)
  const [initialSymbol, setInitialSymbol] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState(dateFormat(new Date(),"yyyy-mm-dd"));
  const [dataProfit, setDataProfit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(()=>{
    getPriceEstimation('bitcoin', dispatch)
  },[dispatch]);

  useEffect(() => {
    if(initialSymbol) {
      getMyProfit(initialSymbol, dateFrom, dateTo, (val) => {
        setDataProfit(val)
      }, (isLoading) => {
        setIsLoading(isLoading)
      })
    }
  }, [dispatch])

  return (
    <>
      <div className="col-12 col-md-5 d-sm-block d-none font-9 m-0">
        <ChartNilaiAsset />
      </div>

      <div className="col-12 col-md-7">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12 col-md-6 my-1">
                  <span className="font-14 text-gold font-bold">
                    {Translate('wal_estimasi_nilai_aset')}
                  </span>
                  <h5 className="text-white mb-0 font-bold font-17">
                    Rp.{convertNumber.toRupiah(est)}
                  </h5>
                  {
                    btcPrice?
                    <span className="font-13 text-secondary">
                      ~ {est / btcPrice} BTC
                    </span>:
                    <span className="font-13 text-secondary">
                      ~ 
                    </span>
                  }
                </div>
                <div className="col-12 col-md-6 my-1 mb-3">
                  <span className="font-12 text-gold font-bold">Saldo</span>
                  <h5 className="text-white mb-0 font-bold font-17">
                    Rp.{convertNumber.toRupiah(saldo)}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-12">
                  <Link to={`/wallet/setor-rupiah`}>
                    <button className="w-100 ci-btn-custom-1 pr-2 py-2 ci-button-setor-tarik text-white ci-bg-success">
                      <i class="far fa-credit-card my-2 ml-2 mr-2"></i>
                      <span className="font-14 font-bold">
                        {Translate('wal_setor_tarik_rupiah')}
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-6 my-2">
              <div
                className="card"
                style={{
                  background: "#1C233F",
                  border: "1px solid #2C355A",
                  backgroundImage: `url(${bgAsset})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right bottom",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="font-14 p-0 font-bold text-white mb-0">
                        {Translate('wal_akumulasi_profit')}
                      </h4>
                      <hr
                        style={{ borderColor: "white", marginBottom: "4px" }}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-between align-items-end">
                    <div className="col-12 col-md-10">
                      <div className="row no-gutters">
                        <div className="col-12 col-md-6">
                          <label
                            className="font-12 mb-0 text-gold"
                            htmlFor="mulai"
                          >
                            {Translate('wal_tanggal_mulai')}
                          </label>
                          <input
                            type="date"
                            className="font-12 p-0 form-control ci-input-date-border-bottom"
                            value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}
                            max={dateFormat(new Date(),"yyyy-mm-dd")}
                          />
                        </div>

                        <div className="col-12 col-md-6">
                          <label
                            className="font-12 mb-0 text-gold"
                            htmlFor="akhir"
                          >
                            {Translate('wal_tanggal_akhir')}
                          </label>
                          <input
                            type="date"
                            className="font-12 p-0 form-control ci-input-date-border-bottom"
                            value={dateTo} onChange={(e) => setDateTo(e.target.value)} min={dateFormat(dateFrom,"yyyy-mm-dd")}
                            max={dateFormat(new Date(),"yyyy-mm-dd")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-2 my-2 p-0">
                      <div className="col-12 d-flex justify-content-end align-items-end">
                        <button onClick={() => {
                          getMyProfit(initialSymbol, dateFrom, dateTo,(val) => {
                            setDataProfit(val)
                          }, (isLoading) => {
                            setIsLoading(isLoading)
                          })
                        }} disabled={initialSymbol&&!isLoading?false:true} className="btn rounded-circle bg-warning">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-8">
                      {
                        dataProfit&&
                        <div className="form-group mb-0 font-bold font-14 text-white py-1 pl-2">
                          Rp.{convertNumber.toMoney(Math.round(dataProfit.totalProfit))}
                        </div>
                      }
                    </div>
                    {
                      assets&&assets.length&&
                      <div className="col-4 pl-1 d-flex align-items-end justify-content-end">
                        <select
                          className="btn text-white ci-input-select-default py-1"
                          id="inputGroupSelect01"
                          value={initialSymbol} onChange={ (e) => {setInitialSymbol(e.target.value)} }
                        >
                          <option selected value="" disabled>
                            Pilih...
                          </option>
                          {
                            assets.map((el, index) => {
                              if(el.detail_crypto&&el.detail_crypto.active&&!el.detail_crypto.in_repair) {
                                return(
                                  <option value={el.type}>{el.type}</option>
                                )
                              }
                              return (null);
                            })
                          }
                        </select>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 my-2">
              <div
                className="card"
                style={{
                  background: "#1C233F",
                  border: "1px solid #2C355A",
                  backgroundImage: `url(${bgAsset})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right bottom",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="card-body font-12">
                  <div className="row">
                    <div className="col-5">
                      <p className="mb-2 mt-2 text-white">{Translate('wal_maker_fees')}</p>
                    </div>
                    <div className="col-7">
                      <p className="text-right mb-2 mt-2 text-white">0%</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <p className="mb-2 mt-2 text-white">{Translate('wal_taker_fees')}</p>
                    </div>
                    <div className="col-7">
                      <p className="text-right mb-2 mt-2 text-white">0,25%</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <p className="mb-2 mt-2 text-white">{Translate('wal_trading_volume')}</p>
                    </div>
                    <div className="col-7">
                      <p className="text-right mb-2 mt-2 text-white">
                      {
                        dataProfit?
                          convertNumber.toRupiah(dataProfit.totalVolumeIdr)
                        :0
                      } IDR
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="mb-2 mt-2 text-white">
                        {Translate('wal_24h_withdrawal_limit')}
                      </p>
                    </div>
                      <div className="col-6">
                        <p className="text-right mb-2 mt-2 text-white">0 BTC</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NilaiAsset;
