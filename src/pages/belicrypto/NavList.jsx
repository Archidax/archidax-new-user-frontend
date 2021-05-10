import React from 'react'

// Import Images
import BTCIcons from '../../assets/img/feelogo/Bitcoin_BTC.svg'
import ETHIcons from '../../assets/img/feelogo/Ethereum_ETH.svg'
import BNBIcons from '../../assets/img/feelogo/Binance_BNB.svg'
import TRXIcons from '../../assets/img/feelogo/Tron_TRX.svg'
import AAVEIcons from '../../assets/img/feelogo/Aave_AAVE.svg'
import AOAIcons from '../../assets/img/feelogo/Aurora_AOA.svg'
import COTIIcons from '../../assets/img/feelogo/Coti_COTI.svg'
import UNIIcons from '../../assets/img/feelogo/Uniswap_UNI.svg'
import XLMIcons from '../../assets/img/feelogo/Stellar_XLM.svg'
import USDTIcons from '../../assets/img/feelogo/Tether_USDT.svg'
import CGOLDIcons from '../../assets/img/feelogo/Cgold_CGOLD.svg'
import WAVESIcons from '../../assets/img/feelogo/Waves_WAVES.svg'
import SUSHIIcons from '../../assets/img/feelogo/Sushi_SUSHI.svg'
import LINKIcons from '../../assets/img/feelogo/Chainlink_LINK.svg'
import LTCIcons from '../../assets/img/feelogo/Litecoin_LTC.svg'

function NavList({className}) {
    return (
        <div className={`col-12 col-md-4 ${className}`}>
            <div className="row">
                <div className="col-12">
                    <div className="form-group position-relative">
                        <div className="input-group ci-inputDefault-border">
                            <input type="text" className="form-control ci-inputDefault-border-input ci-pd" placeholder="Cari" name="search" required=""/>
                            <div className="ci-inputDefault-border-appendR">
                                <i className="fas fa-search ci-inputDefault-border-appendR-icon text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="list-group" id="list-tab" role="tablist" style={{height: "240px", overflowY: "auto"}}>
                        <a className="list-group-item list-group-item-action ci-list-panduan active d-flex justify-content-between align-items-center" id="beliBTC-crypto-list" data-toggle="list" href="#beliBTC-cypto" role="tab">
                            <img src={BTCIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli BTC (Bitcoin)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliETH-crypto-list" data-toggle="list" href="#beliETH-crypto" role="tab">
                            <img src={ETHIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli ETH (Ethereum)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliBNB-crypto-list" data-toggle="list" href="#beliBNB-crypto" role="tab">
                            <img src={BNBIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli BNB (Binance)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliTRX-crypto-list" data-toggle="list" href="#beliTRX-crypto" role="tab">
                            <img src={TRXIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli TRX (Tron)</span>
                        </a>
                        {/* <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliDOGE-crypto-list" data-toggle="list" href="#beliDOGE-crypto" role="tab">
                            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/1.png`}/>
                            <span>Beli Doge (Doge)</span>
                        </a> */}
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliAAVE-crypto-list" data-toggle="list" href="#beliAAVE-crypto" role="tab">
                            <img src={AAVEIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli AAVE (AAVE)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliAOA-crypto-list" data-toggle="list" href="#beliAOA-crypto" role="tab">
                            <img src={AOAIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli AOA (Aurora)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliCOTI-crypto-list" data-toggle="list" href="#beliCOTI-crypto" role="tab">
                            <img src={COTIIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli COTI (Coti)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliUNI-crypto-list" data-toggle="list" href="#beliUNI-crypto" role="tab">
                            <img src={UNIIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli UNI (Uniswap)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliXLM-crypto-list" data-toggle="list" href="#beliXLM-crypto" role="tab">
                            <img src={XLMIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli XLM (Stellar)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliUSDT-crypto-list" data-toggle="list" href="#beliUSDT-crypto" role="tab">
                            <img src={USDTIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli USDT (Tether)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliCGOLD-crypto-list" data-toggle="list" href="#beliCGOLD-crypto" role="tab">
                            <img src={CGOLDIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli CGOLD (Codeo Gold)</span>
                        </a>

                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliWAVES-crypto-list" data-toggle="list" href="#beliWAVES-crypto" role="tab">
                            <img src={WAVESIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli Waves (Waves)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliSUSHI-crypto-list" data-toggle="list" href="#beliSUSHI-crypto" role="tab">
                            <img src={SUSHIIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli SushiSwap (SUSHI)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliLINK-crypto-list" data-toggle="list" href="#beliLINK-crypto" role="tab">
                            <img src={LINKIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli Chainlink (LINK)</span>
                        </a>
                        <a className="list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center" id="beliLTC-crypto-list" data-toggle="list" href="#beliLTC-crypto" role="tab">
                            <img src={LTCIcons} className="img-fluid" width={30} alt="..."/>
                            <span>Beli LTC (Litecoin)</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavList
