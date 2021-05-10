import React from 'react'
import { Link, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom'
import SetorCryptoTabs from './tabs/SetorCryptoTabs';
import TarikCryptoTabs from './tabs/TarikCryptoTabs';

import setorIcon from '../../assets/img/setor-tarik/setor.png'


function TransactionCrypto() {
    const {path} = useRouteMatch();
    let location = useLocation();

    return (
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="nav nav-tabs row" id="myTab" role="tablist" style={{borderBottom: "0px"}}>
                        <Link className="col-6 col-md-3 ci-links" to={"/crypto/setor-crypto/BTC"}>
                            <button 
                                className={`nav-link btn ci-btn-custom-1 w-100 ci-btn-tabsSetorTarik px-5 py-3 font-16 font-bold border-0 ${
                                    location.pathname.includes("/crypto/setor-crypto")  ? "active" : ""
                                }`}
                                style={{borderRadius: "2px"}}
                            >
                                <img src={setorIcon} alt="setorIcon" className="mr-2"/> Setor Crypto
                            </button>
                        </Link>
                        <Link className="col-6 col-md-3 ci-links" to={"/crypto/tarik-crypto/BTC"}>
                            <button 
                                className={`nav-link btn ci-btn-custom-1 w-100 ci-btn-tabsSetorTarik px-5 py-3 font-16 font-bold border-0 ${
                                    location.pathname.includes("/crypto/tarik-crypto") ? "active" : ""
                                }`}
                                style={{borderRadius: "2px"}}
                            >
                                <img src={setorIcon} alt="setorIcon" style={{transform: "rotate(90deg)"}} className="mr-2"/> Tarik Crypto
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12 col-md-12">
                    <Switch>
                        <Route path={`${path}/tarik-crypto/:coinCode`}>
                            <TarikCryptoTabs />
                        </Route>
                        <Route path={`${path}/setor-crypto/:coinCode`}>
                            <SetorCryptoTabs />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default TransactionCrypto
