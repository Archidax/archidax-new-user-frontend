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
        if(metodePembayaran.includes("QRIS_")) {
            createPenyetoranQRIS(customNominal === 0 ? nominal : customNominal, metodePembayaran, dispatch, setLangkah(2))
        } else {
            createSetorRupiah(metodePembayaran, { amount: customNominal === 0 ? nominal : customNominal }, dispatch, setLangkah(2))
        }
    }

    return (
        <>
            <div className="border border-info m-0 mt-3 p-3 tab2" style={langkah === 1 ? { display: 'block' } : { display: 'none' }}>
                <div className="mb-3">
                    <div className="label-title2 mb-2">Lengkapi informasi deposit di bawah:</div>
                    <div className="px-2">
                        <div className="row">
                            <div onClick={(e) => pickNominal(e, 10000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 10000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>Rp. 10.000</div>
                            <div onClick={(e) => pickNominal(e, 25000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 25000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>Rp. 25.000</div>
                            <div onClick={(e) => pickNominal(e, 50000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 50000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>Rp. 50.000</div>
                            <div onClick={(e) => pickNominal(e, 100000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 100000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>Rp. 100.000</div>
                        </div>
                        <div className="row">
                            <div onClick={(e) => pickNominal(e, 250000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 250000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>Rp. 250.000</div>
                            <div onClick={(e) => pickNominal(e, 1000000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 1000000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>Rp. 1000.000</div>
                            <div onClick={(e) => pickNominal(e, 2500000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 2500000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>Rp. 2.500.000</div>
                            <div onClick={(e) => pickNominal(e, 5000000)} className={`px-1 py-2 col-6 col-md-3 ci-bg-secondary text-center d-flex align-items-center justify-content-center font-bold font-14 ${nominal === 5000000 && customNominal === 0 ? "active-price" : ""}`} style={{ border: "4px solid #0b0c22", cursor: "pointer" }}>Rp. 5.000.000</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row pb-2">
                        <div className="col-12 col-md-4 label-title2">
                            Jumlah Setor
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
                            Metode Pembayaran
                        </div>
                        <div className="col">
                            {/* <DropdownCustom dataOptions={metode} value={metodePembayaran} onChange={setMetodePembayaran}/> */}
                            <DropdownPayment data={methods} onChange={setMetodePembayaran} value={metodePembayaran} />
                            {/* <PickPayment onChange={setMetodePembayaran} value={metodePembayaran}/> */}
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-direction m-0 px-0 justify-content-end pt-2">
                    <button className="ci-btn-warning ci-md mt-3 px-4 py-2" disabled={nominal === 0 && customNominal === 0 && customNominal === "" ? true : false} onClick={() => lanjutkan()}>Lanjutkan</button>
                </div>
            </div>
            <div style={langkah === 2 ? { display: "block" } : { display: "none" }}>
                <SetorRupiahLanjutan metode={metodePembayaran} />
            </div>
        </>
    )
}

export default SetorRupiahPilih
