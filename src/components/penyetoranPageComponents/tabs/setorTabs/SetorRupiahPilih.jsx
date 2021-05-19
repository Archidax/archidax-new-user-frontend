import React, { useState, useEffect } from 'react'
import SetorRupiahLanjutan from './SetorRupiahLanjutan'
import { createPenyetoranQRIS, createSetorRupiah } from '../../../../stores/setorrupiah/functions'
import { useDispatch, useSelector } from 'react-redux'
import { checkInProgressSetor } from '../../../../stores/setorrupiah/functions'
// import DropdownCustom from '../../../dropdown'
import { convertNumber } from '../../../../assets/js'

import { methods } from '../../../../assets/payments'
import DropdownPayment from './DropdownPayment'
// import PickPayment from './PickPayment'

function SetorRupiahPilih() {
    const [nominal, setNominal] = useState(0)
    const [customNominal, setCustomNominal] = useState(0)
    const [metodePembayaran, setMetodePembayaran] = useState('')
    const [langkah, setLangkah] = useState(1)

    const isExist = useSelector(state => state.setorRupiahReducer.isExist)

    useEffect(() => {
        if (isExist) {
            setLangkah(2)
        }
    }, [isExist])

    const dispatch = useDispatch()
    useEffect(() => {
        checkInProgressSetor(dispatch)
    }, [dispatch])

    const pickNominal = (e, num) => {
        setCustomNominal(0)
        e.preventDefault()
        setNominal(num)
    }

    const lanjutkan = () => {
        let amount= !customNominal ? nominal : customNominal
        if(metodePembayaran.includes("QRIS_")) {
            createPenyetoranQRIS(amount, metodePembayaran, dispatch, setLangkah(2))
        } else {
            createSetorRupiah(metodePembayaran, amount, dispatch, setLangkah(2))
        }
    }

    return (
        <>
            <div className="border border-info m-0 mt-3 p-3 tab2" style={langkah === 1 ? { display: 'block' } : { display: 'none' }}>
                <div className="mb-3">
                    <div className="label-title2 mb-2">Please fill the form below!</div>
                    <div className="px-2">
                        <div className="row">
                            <div onClick={(e) => pickNominal(e, 10)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 10 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>$ 10</div>
                            <div onClick={(e) => pickNominal(e, 25)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 25 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>$ 25</div>
                            <div onClick={(e) => pickNominal(e, 50)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 50 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>$ 50</div>
                            <div onClick={(e) => pickNominal(e, 100)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 100 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>$ 100</div>
                        </div>
                        <div className="row">
                            <div onClick={(e) => pickNominal(e, 250)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 250 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>$ 250</div>
                            <div onClick={(e) => pickNominal(e, 1000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 1000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>$ 1000</div>
                            <div onClick={(e) => pickNominal(e, 2500)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 2500 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>$ 2500</div>
                            <div onClick={(e) => pickNominal(e, 5000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 5000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>$ 5000</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row pb-2">
                        <div className="col-12 col-md-4 label-title2">
                            Amount
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="input-group ci-inputDefault-bg">
                                <input onChange={(e) => {
                                    let num = convertNumber.toString(e.target.value)
                                    let test = isNaN(num)
                                    if (!test) {
                                        setCustomNominal(convertNumber.toString(e.target.value))
                                    }
                                }} value={customNominal === 0 ? convertNumber.toMoney(nominal) : convertNumber.toMoney(customNominal)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" style={{ backgroundColor: "#2C355A" }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 label-title2">
                            Payment Method
                        </div>
                        <div className="col">
                            {/* <DropdownCustom dataOptions={metode} value={metodePembayaran} onChange={setMetodePembayaran}/> */}
                            <DropdownPayment data={methods} onChange={setMetodePembayaran} value={metodePembayaran} />
                            {/* <PickPayment onChange={setMetodePembayaran} value={metodePembayaran}/> */}
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-direction m-0 px-0 justify-content-end pt-2">
                    <button className="ci-btn-warning ci-md mt-3 px-4 py-2" disabled={!nominal && !customNominal ? true : false} onClick={() => lanjutkan()}>Continue</button>
                </div>
            </div>
            <div style={langkah === 2 ? { display: "block" } : { display: "none" }}>
                <SetorRupiahLanjutan metode={metodePembayaran} />
            </div>
        </>
    )
}

export default SetorRupiahPilih
