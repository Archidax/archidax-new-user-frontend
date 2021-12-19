import React from "react";

// Import
import TableAssetSaya from "./table/TableAssetSaya";
import NilaiAsset from "./wallet/NilaiAsset";

import CopyrightDashboard from "../footerComponents/copyrightComponents/CopyrightDashboard";
import Translate from "../../i18n/Translate";
import imagesLoading from '../../assets/img/cryptoIndex/logo2d.png'
import {useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Wallet() {
  const kyc = useSelector((state) => state.kycReducer);
  const history = useHistory()
  return (
    <div>
      <div className="px-3 pt-3" style={{ minHeight: "88vh" }}>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="card ci-customCard-1 bg-transparent">
              <div
                className="card-body ci-bg-primary rounded position-relative"
              >
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
                <div className="row">
                  <div className="col-12 col-md-12">
                    <h4 className="ml-2 text-gold font-bold font-16 label-title-top">
                      {Translate('wal_nilai_aset')}
                    </h4>
                  </div>
                </div>

                <div className="row">
                  
                  {/* <h3 style={{color: 'white'}}>lagi bug ya, nnti dlu, tertanda HAKIM</h3> */}
                  <NilaiAsset />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-12">
            <TableAssetSaya />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
