import React from 'react'
import { useState } from 'react'
import OTP from '../../otp/index'

// Import Table
import RiwayatTarikCrypto from './table/TableHistoryTarikCrypto'

import { getMyBalance, transferCrypto } from '../../../stores/index'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TarikInstructions from './tarikinstructions/TarikInstructions'
import DropdownCoin from './DropdownCoin'
import { getCoinIcon } from '../../../helpers'
import { convertNumber } from '../../../assets/js'
import USDTCoin from '../../../assets/img/trade/cryptologo/Tether_USDT.svg'
import { fees } from '../../../assets/fee'

function TarikCryptoTabs() {
    const { coinCode } = useParams()
    const coinDetails = useSelector(state => state.setorCryptoReducer.coinDetails)
    const coinPrice = useSelector(state => state.tarikCryptoReducer.coinPrice)
    const [amount, setAmount] = useState(0)
    const [customAmount, setCustomAmount] = useState(0)
    const [withdrawAddress, setWithdrawAddress] = useState('')
    const [memo, setMemo] = useState('')
    const [totalTerimaBersih, setTotalTerimaBersih] = useState(0)
    const [code, setCode] = useState('')
    const request_id = useSelector(state => state.kycReducer.requestId)
    const { listingList } = useSelector(state => state.pasarTradingReducer)


    const [coinName, setCoinName] = useState("")
    const [coinIcon, setCoinIcon] = useState(getCoinIcon("BTC"))
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
            setCoinIcon(USDTCoin)
            // getMyBalance(coinCode, dispatch)
        } else {
            const found = listingList.find(coin => coin.initialSymbol === coinCode.toUpperCase())
            if (coinCode === "TRON") {
                history.push("/crypto/setor-crypto/TRX")
            } else if (!found) {
                history.push("/crypto/setor-crypto/BTC")
            } else {
                setClosePrice(found.price_24hour.price24h_close)
                setCoinName(found.assetName)
                setCoinIcon(found.icon)
                getMyBalance(coinCode, dispatch)
            }
            // console.log(found, "found")
        }

    }, [coinCode, listingList, history, dispatch])

    const bal = 100
    const setPercentAmount = (e, num) => {
        setCustomAmount(0)
        e.preventDefault()
        setAmount(bal * (num / 100))
        // setAmount(coinDetails.balance * (num / 100))
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
        console.log(found, "<<fee")
        if (found) setFeeWD(found)
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
        const data = {
            amount: customAmount === 0 ? amount : customAmount,
            toAddress: withdrawAddress,
            request_id: request_id,
            code: code
        }
        transferCrypto(coinCode, data, history)
    }

    return (
        <div className="container-fluid">
            {/* <h1 className="text-danger">{bal}</h1>
            <h1 className="text-danger">{customAmount}</h1>
            <h1 className="text-danger">{amount}</h1>
            <h1 className="text-danger">{totalTerimaBersih}</h1> */}
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
                                                    <p className="text-right mb-2 mt-2 text-white">{coinDetails.balance} {coinCode}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <p className="mb-2 mt-2 text-white">Frozen Balance</p>
                                                </div>
                                                <div className="col-7">
                                                    <p className="text-right mb-2 mt-2 text-white">{coinDetails.frozen_balance} {coinCode}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <p className="mb-2 mt-2 text-white">Estimated USDT</p>
                                                </div>
                                                <div className="col-7">
                                                    <p className="text-right mb-2 mt-2 text-white">{coinPrice * coinDetails.balance} USDT</p>
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
                                                    <label for="Alamat_penarikan_crypto" className="font-14 col-12 col-md-4 col-form-label">Note</label>
                                                    <div className="col-12 col-md-8">
                                                        <div className="input-group ci-inputDefault-bg">
                                                            <input onChange={(e) => setMemo(e.target.value)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" id="Alamat_penarikan_crypto" />
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