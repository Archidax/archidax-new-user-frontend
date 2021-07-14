import React from 'react'
import { useState } from 'react'
import OTP from '../../otp/index'

// Import Table
import RiwayatTarikCrypto from './table/TableHistoryTarikCrypto'

import { getMyAssets, getMyBalance, transferCrypto } from '../../../stores/index'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TarikInstructions from './tarikinstructions/TarikInstructions'
import DropdownCoin from './DropdownCoin'
import { getCoinIcon } from '../../../helpers'
import { fees } from '../../../assets/fee'

function TarikCryptoTabs() {
    const { coinCode } = useParams()

    const [memo, setMemo] = useState('')
    const [amount, setAmount] = useState(0)
    const [customAmount, setCustomAmount] = useState(0)
    const [withdrawAddress, setWithdrawAddress] = useState('')
    const [totalTerimaBersih, setTotalTerimaBersih] = useState(0)
    const [code, setCode] = useState('')
    const request_id = useSelector(state => state.kycReducer.requestId)
    const { listingList } = useSelector(state => state.pasarTradingReducer)

    const { assets } = useSelector(state => state.walletReducer)
    const [myWallet, setMyWallet] = useState({
        Address: "",
        balance: 0,
        isMaintained: false,
        frozen_balance: 0,
        _id: "",
        user: "",
        type: "",
        detail_crypto: {
            assetName: "",
            symbol: "",
            icon: "",
            active: true,
            price24h_open: 0,
            price24h_close: 0,
            price24h_high: 0,
            price24h_low: 0,
            price24h_volume: 0,
            price24h_priceVolume: 0,
            price24h_change: 0
        }
    })
    useEffect(() => {
        const found = assets.find(el => el.type === coinCode)
        console.log(found)
        if (found) setMyWallet(found)
    }, [assets, coinCode])

    const [coinName, setCoinName] = useState("")
    const [closePrice, setClosePrice] = useState(0)
    const dispatch = useDispatch()
    const history = useHistory()

    // starting
    useEffect(() => {
        setAmount(0)
        setCustomAmount(0)
        setWithdrawAddress('')
        setTotalTerimaBersih(0)
        if (coinCode === "USDT") {
            setClosePrice(0)
            setCoinName("USDT Tether")
        } else {
            const found = listingList.find(coin => coin.initialSymbol === coinCode.toUpperCase())
            if (coinCode === "TRON") {
                history.push("/crypto/setor-crypto/TRX")
            } else if (!found) {
                history.push("/crypto/setor-crypto/BTC")
            } else {
                setClosePrice(found.price_24hour.price24h_close)
                setCoinName(found.assetName)
            }
        }
    }, [coinCode, listingList, history, dispatch])

    // Picking percentage
    const setPercentAmount = (e, num) => {
        setCustomAmount(0)
        e.preventDefault()
        setAmount(myWallet.balance * (num / 100))
    }

    // Fee withdraw depends on coin
    const [feeWD, setFeeWD] = useState({
        coin: null,
        minimumWithdraw: 0,
        feeWithdraw: 0,
        ETHNetwork: true
    })
    useEffect(() => {
        const found = fees.find(el => el.coin === coinCode)
        if (found) setFeeWD(found)
        else setFeeWD({
            coin: coinCode,
            minimumWithdraw: 0,
            feeWithdraw: "Need update fee for: ",
            ETHNetwork: false
        })
    }, [coinCode])

    // Olah data
    useEffect(() => {
        // ETH Network
        if (feeWD.ETHNetwork) {
            if (customAmount !== 0) {
                let archidaxFee = customAmount * (0.5 / 100)
                console.log(customAmount - archidaxFee, closePrice)
                setTotalTerimaBersih((customAmount - archidaxFee) * closePrice)
            } else {
                let archidaxFee = amount * (0.5 / 100)
                setTotalTerimaBersih((amount - archidaxFee) * closePrice)
            }
        } else {
            // Others
            if (customAmount !== 0) {
                let archidaxFee = customAmount * (0.5 / 100)
                setTotalTerimaBersih((customAmount - (feeWD.feeWithdraw + archidaxFee)) * closePrice)
            } else {
                let archidaxFee = amount * (0.5 / 100)
                setTotalTerimaBersih((amount - (feeWD.feeWithdraw + archidaxFee)) * closePrice)
            }
        }
    }, [amount, customAmount, closePrice])

    // Kirim
    const kirim = (e) => {
        e.preventDefault()
        let data
        if (coinCode === "XLM") {
            data = {
                amount: customAmount === 0 ? amount : customAmount,
                toAddress: withdrawAddress,
                request_id: request_id,
                memo: memo,
                code: code
            }
        } else {
            data = {
                amount: customAmount === 0 ? amount : customAmount,
                toAddress: withdrawAddress,
                request_id: request_id,
                code: code
            }
        }
        transferCrypto(coinCode, data, history)
    }

    return (
        <div className="container-fluid">
            <div className="row border-top mt-3 border-warning">
                <div className="dol-12 col-md-12 p-0">
                    <h3 className="ml-2 text-gold font-bold font-16 label-title-top my-4">Withdraw Crypto</h3>
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
                                                <button className="disabled btn ci-btn-custom-1 dropdown-toggle pr-5 ci-dropdown-toggle-custom w-100 pb-4 rounded-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <div className="row align-items-center mt-1">
                                                        <div className="col-5 text-center">
                                                            <img src={
                                                                getCoinIcon(coinCode)
                                                            } alt="" className="img-fluid ml-2" width={34} />
                                                        </div>
                                                        <div className="col-7 flex-column text-left">
                                                            <span className="font-14 font-weight-bold mb-0">{coinCode}</span>
                                                            <span className="font-12">{coinName}</span>
                                                        </div>
                                                    </div>
                                                </button>

                                                <DropdownCoin data={listingList} action="tarik-crypto" />
                                            </div>

                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="row">
                                                <div className="col-5">
                                                    <p className="mb-2 mt-2 text-white">Active Balance</p>
                                                </div>
                                                <div className="col-7">
                                                    <p className="text-right mb-2 mt-2 text-white">{myWallet.balance} {coinCode}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <p className="mb-2 mt-2 text-white">Frozen Balance</p>
                                                </div>
                                                <div className="col-7">
                                                    <p className="text-right mb-2 mt-2 text-white">{myWallet.frozen_balance} {coinCode}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <p className="mb-2 mt-2 text-white">Estimated USDT</p>
                                                </div>
                                                <div className="col-7">
                                                    <p className="text-right mb-2 mt-2 text-white">{closePrice * myWallet.balance} USDT</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 mt-4">
                                            <TarikInstructions feeWD={feeWD} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 font-12 text-white pl-sm-5 mt-2">
                                    <form>
                                        <div className="form-group row">
                                            <label for="Jumlah_penarikanCrypto" className="font-14 col-12 col-md-4 col-form-label">Amount {coinCode}</label>
                                            <div className="col-12 col-md-8">
                                                <div className="input-group ci-inputDefault-bg">
                                                    <input onChange={(e) => setCustomAmount(e.target.value)} value={customAmount === 0 ? amount : customAmount} type="number" className="form-control ci-inputDefault-bg-input ci-pd" id="Jumlah_penarikanCrypto" />
                                                </div>
                                                {
                                                    customAmount > myWallet.balance && (
                                                        <div className="ci-bg-danger py-1 px-2 rounded mt-2">Your balance is not sufficient</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12 col-md-4"></div>
                                            <div className="col-12 col-md-8">
                                                <div className="row">
                                                    <div className="col-3 col-md-3 pr-1">
                                                        <button className="ci-btnOL-secondary pt-2 pb-2 w-100 h-100" onClick={(e) => setPercentAmount(e, 25)}>25%</button>
                                                    </div>
                                                    <div className="col-3 col-md-3 px-1">
                                                        <button className="ci-btnOL-secondary pt-2 pb-2 w-100 h-100" onClick={(e) => setPercentAmount(e, 50)}>50%</button>
                                                    </div>
                                                    <div className="col-3 col-md-3 px-1">
                                                        <button className="ci-btnOL-secondary pt-2 pb-2 w-100 h-100" onClick={(e) => setPercentAmount(e, 75)}>75%</button>
                                                    </div>
                                                    <div className="col-3 col-md-3 pl-1">
                                                        <button className="ci-btnOL-secondary pt-2 pb-2 w-100 h-100" onClick={(e) => setPercentAmount(e, 100)}>100%</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="Alamat_penarikan_crypto" className="font-14 col-12 col-md-4 col-form-label">Withdraw Address</label>
                                            <div className="col-12 col-md-8">
                                                <div className="input-group ci-inputDefault-bg">
                                                    <input onChange={(e) => setWithdrawAddress(e.target.value)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" id="Alamat_penarikan_crypto" />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            coinCode.toUpperCase() === "XLM" ?
                                                <div className="form-group row">
                                                    <label for="Memo_penarikan_crypto" className="font-14 col-12 col-md-4 col-form-label">Memo</label>
                                                    <div className="col-12 col-md-8">
                                                        <div className="input-group ci-inputDefault-bg">
                                                            <input onChange={(e) => setMemo(e.target.value)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" id="Memo_penarikan_crypto" />
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                ""
                                        }
                                        <div className="form-group row">
                                            <label for="Biaya_penarikan" className="font-14 col-12 col-md-4 col-form-label">Withdraw Fee</label>
                                            <div className="col-12 col-md-8">
                                                <div className="input-group ci-inputDefault-bg">
                                                    <input type="number" className="form-control ci-inputDefault-bg-input ci-pd" id="Biaya_penarikan" placeholder={`${feeWD && feeWD.ETHNetwork ? "ETH gas fee will be deducted from amount you will receive" : `${feeWD.feeWithdraw} ${feeWD.coin}`}`} disabled />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="Total_terima_bersih" className="font-14 col-12 col-md-4 col-form-label">Total Received</label>
                                            <div className="col-12 col-md-8">
                                                <div className="input-group ci-inputDefault-bg">
                                                    <input type="number" className="form-control ci-inputDefault-bg-input ci-pd" id="Total_terima_bersih" placeholder={totalTerimaBersih > 0 ? `${totalTerimaBersih} USDT` : `0 USDT`} disabled />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="Pin_SMS" className="font-14 col-12 col-md-4 col-form-label">Pin SMS</label>
                                            <div className="col-8 col-md-6">
                                                <div className="input-group ci-inputDefault-bg">
                                                    <input type="number" onChange={(e) => setCode(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd" id="Pin_SMS" />
                                                </div>
                                            </div>
                                            <div className="col-4 col-md-2 pl-1">
                                                {/* <button className="ci-btnOL-secondary w-100 h-100">
                                                    Kirim Pin
                                                </button> */}
                                                <OTP className="py-2" />
                                            </div>
                                        </div>

                                        <div className="row mt-5 mb-2 justify-content-end">
                                            <div className="col-12 col-md-3">
                                                <button onClick={(e) => kirim(e)} className="ci-btn-warning pt-2 pb-2 text-dark font-weight-bold w-100 h-100">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-12 p-0">
                    <RiwayatTarikCrypto />
                </div>
            </div>
        </div>
    )
}

export default TarikCryptoTabs