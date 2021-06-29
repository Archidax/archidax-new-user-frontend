import React, { useEffect, useState } from 'react'
import RiwayatSetorCrypto from './table/TableHistorySetorCrypto';
import { useDispatch, useSelector } from 'react-redux';
import { generateAddress, getMyAssets, getMyBalance } from '../../../stores';
import ReactQRCode from 'react-qr-code'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Translate from "../../../i18n/Translate";
// Instruksi
import AOAInstructions from './setorinstructions/AOAInstructions'
import BNBInstructions from './setorinstructions/BNBInstructions'
import BTCInstructions from './setorinstructions/BTCInstructions';
import CGOLDInstructions from './setorinstructions/CGOLDInstructions'
import COTIInstructions from './setorinstructions/COTIInstructions'
import ETHInstructions from './setorinstructions/ETHInstructions'
import LTCInstructions from './setorinstructions/LTCInstructions'
import SUSHIInstructions from './setorinstructions/SUSHIInstructions'
import TRXInstructions from './setorinstructions/TRXInstructions'
import USDTInstructions from './setorinstructions/USDTInstructions'
import WAVESInstructions from './setorinstructions/WAVESInstructions'
import XLMInstructions from './setorinstructions/XLMInstructions';
import LINKInstructions from './setorinstructions/LINKInstructions';
import UNIInstructions from './setorinstructions/UNIInstructions';

import { useHistory, useParams } from 'react-router-dom';
import DropdownCoin from './DropdownCoin';
import USDTCoin from '../../../assets/img/trade/cryptologo/Tether_USDT.svg'

// Coin libs
import GenericInstructions from './setorinstructions/GenericInstructions';
import { getCoinIcon } from '../../../helpers/coins';
import { convertNumber } from '../../../assets/js';

function SetorCryptoTabs() {
    const coinDetails = useSelector(state => state.setorCryptoReducer.coinDetails)
    const { coinCode } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const [copied, setCopied] = useState(false)
    const { listingList } = useSelector(state => state.pasarTradingReducer
        )
    const [coinIcon, setCoinIcon] = useState(getCoinIcon("BTC"))
    const [closePrice, setClosePrice] = useState(0)
    useEffect(() => {
        getMyAssets(dispatch)
    }, [coinCode])

    // Generate Address
    const aktifkan = () => {
        generateAddress(coinCode, dispatch)
    }

    const getDepoInstuctions = (coinCode) => {
        coinCode = coinCode.toUpperCase()
        switch (coinCode) {
            case "AOA":
                return <AOAInstructions />
            case "BNB":
                return <BNBInstructions />
            case "BTC":
                return <BTCInstructions />
            case "CGOLD":
                return <CGOLDInstructions />
            case "COTI":
                return <COTIInstructions />
            case "ETH":
                return <ETHInstructions />
            case "LTC":
                return <LTCInstructions />
            case "SUSHI":
                return <SUSHIInstructions />
            case "TRX":
                return <TRXInstructions />
            case "USDT":
                return <USDTInstructions />
            case "WAVES":
                return <WAVESInstructions />
            case "XLM":
                return <XLMInstructions />
            case "LINK":
                return <LINKInstructions />
            case "UNI":
                return <UNIInstructions />
            default:
                return <GenericInstructions />;
        }
    }
    
    const assets = useSelector(state => state.walletReducer.assets)
    const [coinSelected, setCoinSelected] =useState(null)
    useEffect(() => {
        // setAddress("")
        setCoinSelected(null)
        const found = assets.find(el => el.type === coinCode)
        if (found) {
            setCoinSelected(found)
        }
        // console.log(found, "<<<adr")
    }, [coinCode, assets])

    return (
        <div className="container-fluid">
            <div className="row border-top mt-3 border-warning">
                <div className="dol-12 col-md-12 p-0">
                    <h3 className="ml-2 text-gold font-bold font-16 label-title-top my-4">Setor Kripto</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 p-0">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-12 col-md-6 font-12 pr-sm-5 text-white mt-2" style={{ borderRight: "1px solid #777777" }}>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <div className="dropdown mt-2">
                                                <button disabled className="btn ci-btn-custom-1 dropdown-toggle pr-5 ci-dropdown-toggle-custom w-100 pb-4 rounded-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <div className="row align-items-center mt-1">
                                                        <div className="col-5 text-center">
                                                            <img src={
                                                                coinIcon
                                                            } alt="" className="img-fluid ml-2" width={34} />
                                                        </div>
                                                        <div className="col-7 flex-column text-left">
                                                            <span className="font-14 font-weight-bold mb-0">{coinCode}</span>
                                                            <span className="font-12">{!coinSelected ? "" : coinSelected.detail_crypto.assetName}</span>
                                                        </div>
                                                    </div>
                                                </button>

                                                <DropdownCoin data={listingList} action="setor-crypto" />
                                            </div>

                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="row">
                                                <div className="col-5">
                                                    <p className="mb-2 mt-2 text-white">{Translate('db_saldoactive')}</p>
                                                </div>
                                                <div className="col-7">
                                                    <p className="text-right mb-2 mt-2 text-white">{!coinSelected ? 0 : coinSelected.balance} {coinCode}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <p className="mb-2 mt-2 text-white">{Translate('db_frozenbalance')}</p>
                                                </div>
                                                <div className="col-7">
                                                    <p className="text-right mb-2 mt-2 text-white">{!coinSelected ? 0 : coinSelected.frozen_balance} {coinCode}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <p className="mb-2 mt-2 text-white">{Translate('db_asset_estimate')}</p>
                                                </div>
                                                <div className="col-7">
                                                    <p className="text-right mb-2 mt-2 text-white">{convertNumber.toMoney(!coinSelected ? 0 : coinSelected.detail_crypto.price24h_close * coinSelected.balance, "USDT ")}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 mt-4">
                                            {/* Instruksi tergantung jenis koin */}
                                            {
                                                getDepoInstuctions(coinCode)

                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 font-12 text-white pl-sm-5 mt-2">
                                    {
                                        coinSelected === null  ? (
                                            <div className="text-center mt-4">
                                                <div className="my-3 font-14">You haven't activated deposit address for {coinCode}</div>
                                                <button className="px-5 py-3 ci-bg-secondary font-12 text-white border-0" onClick={() => aktifkan()}>Activate</button>
                                            </div>
                                        ) :
                                            (
                                                <div className="row justify-content-center text-center">
                                                    <div className="col-12 col-md-12">
                                                        <ReactQRCode value={coinSelected.Address } size={150} />
                                                    </div>

                                                    <div className="col-12 col-md-10">
                                                        <label for="address" className="font-14 col-form-label text-left">{Translate('db_harap_setor')}</label>
                                                        <div className="input-group ci-inputDefault-bg">
                                                            <input type="text" className="form-control ci-inputDefault-bg-input font-13" id="address" placeholder={coinSelected.Address} disabled />
                                                            <div className="ci-inputDefault-bg-appendR d-block justify-content-center p-1">
                                                                <CopyToClipboard
                                                                    text={coinSelected.Address}
                                                                    onCopy={() => {
                                                                        setCopied(true)
                                                                        setTimeout(() => {
                                                                            setCopied(false)
                                                                        }, 5000)
                                                                    }}
                                                                >
                                                                    <div className="d-flex">
                                                                        <i className={`${copied ? "text-success" : ""} mt-1 far fa-copy ci-inputDefault-bg-appendR-icon font-18`} style={{ cursor: "pointer" }}></i>
                                                                        {copied ? <span className="mt-1 ml-2 px-1 bg-success text-white rounded">Copied!</span> : ""}
                                                                    </div>
                                                                </CopyToClipboard>
                                                            </div>
                                                        </div>
                                                        <div style={{ border: "2px dashed yellow" }} className="my-2 p-3 text-white rounded-lg">
                                                            <div className="row px-5">
                                                                <div className="col-2"><i class="fas w-100 fa-4x fa-exclamation-triangle text-warning"></i></div>
                                                                <div>
                                                                    <p>Please kindly press this confirmation button after you send your balance to this address.</p>
                                                                    <button className="border-0 p-2 ci-bg-warning px-4 text-dark">Yes, I have deposited</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-12 p-0">
                    <RiwayatSetorCrypto coinCode={coinCode} />
                </div>
            </div>
        </div>
    )
}

export default SetorCryptoTabs