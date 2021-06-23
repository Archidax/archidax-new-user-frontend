import React from "react";
import PricePasarTrading from "./cardPricePasarTrading/PricePasarTrading";
import { useSelector } from "react-redux";
import pasarlogo from "../../../assets/img/dashboard/logo/pasar.svg";
import Translate from "../../../i18n/Translate";
import imagesLoading from '../../../assets/img/cryptoIndex/logo2d.png'
import {useHistory} from 'react-router-dom'

function CardDashboardPasarTrading() {
  const { listingList } = useSelector(
    (state) => state.pasarTradingReducer,
  );
  const kyc = useSelector((state) => state.kycReducer);
  const history = useHistory()
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#151933",
        border: "none",
        marginBottom: "12px",
      }}
    >
      <div className="card-body position-relative">
        {
          kyc && !kyc.approved_status &&
          <div 
          onClick={() => {
            history.push("/verification/step1")
          }}
          style={{
            height: '100%',
            width: '100%',
            top: 0,
            left: 0 ,
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex:99999,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            cursor: 'pointer'
            
          }}>
            <img src={imagesLoading} style={{width: "100px", height: "100px"}} className="ci-loading-img mb-3" alt="Loading..."/>
            <p className="font-roboto text-white font-24 text-center">
              You haven't done your KYC. <br/>Please finish it to enjoy our feature!
            </p>
          </div>
        }
        <div className="d-flex flex-direction-row justify-content-between pl-1 pr-4 mb-2">
          <div className="d-flex flex-direction-row">
            <div
              className="d-flex flex-direction-row justify-content-center m-auto"
              style={{ verticalAlign: "middle" }}
            >
              <div className="ml-1">
                <img src={pasarlogo} alt="pasarlogo" height={17} />
              </div>
              <div>
                <h4 className="ml-3 text-gold font-bold font-16 label-title-top">
                  {Translate('db_pasar_title')}
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-end">
              <div className="ml-4 mb-0">
                <div className="input-group ci-inputDefault-border">
                  <input
                    type="text"
                    className="form-control ci-inputDefault-border-input ci-pd"
                    placeholder="Search"
                  />
                  <div className="ci-inputDefault-border-appendR">
                    <i className="fas fa-search ci-inputDefault-border-appendR-icon font-20 text-white "></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="outter-table-wrapper-dashboard">
              <div className="table-wrapper-dashboard table-responsive">
                <table
                  className="table ci-table-custom mb-0 table-borderless"
                  id="dashboard-table"
                >
                  <thead className="my-4">
                    <th
                      className="ci-tableHeads-custom text-white text-center"
                      scope="col"
                      style={{ height: "60px", verticalAlign: "middle" }}
                    >
                      {Translate('db_pasar_no')}
                    </th>
                    <th
                      className="ci-tableHeads-custom text-white"
                      scope="col"
                      style={{ height: "60px", verticalAlign: "middle" }}
                    >
                      {Translate('db_pasar_nama_koin')}
                    </th>
                    <th
                      className="ci-tableHeads-custom text-white"
                      scope="col"
                      style={{ height: "60px", verticalAlign: "middle" }}
                    >
                      {Translate('db_pasar_harga')}
                    </th>
                    <th
                      className="ci-tableHeads-custom text-white"
                      scope="col"
                      style={{ height: "60px", verticalAlign: "middle" }}
                    >
                      {Translate('db_pasar_perubahan')}
                    </th>
                    <th
                      className="ci-tableHeads-custom text-white"
                      scope="col"
                      style={{ height: "60px", verticalAlign: "middle" }}
                    >
                      {Translate('db_pasar_saldo_aktif')}
                    </th>
                    <th
                      className="ci-tableHeads-custom text-center text-white"
                      scope="col"
                      style={{ height: "60px", verticalAlign: "middle" }}
                    >
                      {Translate('db_pasar_aksi')}
                    </th>
                  </thead>
                  {listingList && listingList.length > 0 ? (
                    <PricePasarTrading data={listingList} />
                  ) : (
                    <tr>
                      <td>{Translate('db_data_tidak_ditemukan')}</td>
                    </tr>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDashboardPasarTrading;
