import React, { useState, useEffect } from 'react'

import { otpRequest } from '../../../../stores'

function KonfirmasiOTP(props) {
    
    const { sendPin, editInputData } = props

    const title = props.value.title; 
    const text = props.value.text;

    const [resendTimeout, setResendTimeout] = useState(0)
    const [disableSend, setDisableSend] = useState(false)
    const [disableResend, setDisableResend] = useState(false)

    const sendOtp = () => {
        setDisableSend(true)
        sendPin(setDisableSend)
    }

    const submitForm = e => {
        e.preventDefault()
        sendOtp()
    }

    const resendOtp = () => {
        if(resendTimeout <= 0) {
            otpRequest(setDisableSend, editInputData, setResendTimeout)
            // setResendTimeout(300)
        }
    }

    const parseTimer = (timer) => {
        let min = Math.floor(timer/60)
        let sec = Math.floor(timer - (min * 60))
        if(sec < 10){
            sec = '0'+sec
        }
        return min+':'+sec
    }

    useEffect(() => {
        if(resendTimeout > 0) {
            setDisableResend(true)
            setTimeout(() => {
                setResendTimeout(resendTimeout - 1)
            }, 1000)
        } else {
            setDisableResend(false)
        }
    },[resendTimeout])

    // useEffect(() => {
    //     if(props.showPopupKonfirmasiOTP){
    //         console.log('kirim')
    //         resendOtp()
    //     }
    // },[props.showPopupKonfirmasiOTP])

    return (
        <div className={props.showPopupKonfirmasiOTP ? 'show-popup' : 'hide-popup'}>
        <div className="card ci-customCard-1 text-wrapper">
            <div className="card-header top-side">
                <p style={{
                    textAlign: 'center'
                }} className="mb-0 p-1 font-roboto text-dark font-bold font-20" >{title}</p>
            </div>
            <div className="card-body p-4 pl-5 pr-5">
                <div className="container">
                    <form onSubmit={ e => submitForm(e)}>
                        <div className="row my-2">
                            <div className="col-12 col-md-12">
                                <p style={{ textAlign: 'center' }} className="ci-text-white mb-0 font-12">{text}</p>
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <label for="Pin_SMS" className="font-16 font-weight-bold text-white col-12 col-md-3 col-form-label">Pin SMS</label>
                            <div className="col-12 col-md-6">
                                <div className="input-group ci-inputDefault-bg">
                                    <input onChange={(e) => editInputData(e.target.value, 'code')} required type="number" className="form-control ci-inputDefault-bg-input ci-pd" id="Pin_SMS" />
                                </div>
                            </div>
                            <div className="col-12 col-md-3 pl-1">
                                <button type="button" onClick={() => resendOtp()} disabled={disableResend} className="ci-btnOL-warning w-100 h-100">
                                    {
                                        disableResend ?
                                            <> {parseTimer(resendTimeout)}</>
                                        :
                                            <> Kirim Pin </>

                                    }
                                </button>
                            </div>
                        </div>
                        <div className="row mt-4 d-flex justify-content-center">
                            <div className="col-12 col-md-4 d-flex justify-content-center">
                                <button type="submit" disabled={disableSend} className="ci-btn-warning ci-lg w-100">
                                    {
                                        disableSend ?
                                            <div class="spinner-border text-danger" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        :
                                            <> Kirim </>
                                    }
                                </button>
                            </div>
                            <div className="col-12 col-md-4 d-flex justify-content-center">
                                <button type="button" onClick={() => props.setShowPopupKonfirmasiOTP(false)} className="ci-btn-danger ci-lg w-100">Batal</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
    // return (
    //     <div className="modal fade active" id="konfirmasiOTP" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //         <div className="modal-dialog" role="document">
    //             <div className="modal-content ci-bg-primary">
    //                 <div className="modal-header ci-bg-primary">
    //                     <div className="col-11 d-flex justify-content-center">
    //                         <h5 className="modal-title font-14 font-bold" id="exampleModalLabel">Konfirmasi OTP</h5>
    //                     </div>
    //                     <div className="col-1">
    //                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                             <span aria-hidden="true">&times;</span>
    //                         </button>
    //                     </div>
    //                 </div>
    //                 <div className="modal-body p-3">
    //                     <div className="d-flex justify-content-center">
    //                         <p className="text-bold text-center">Kami telah mengirimkan kode OTP ke hp anda dengan nomor 628XXXXXXX003 kemudian masukkan PIN ke isian di atas.</p>
    //                     </div>
    //                     <div className="row my-3 d-flex align-items-center">
    //                         <div className="col-3">
    //                         PIN SMS
    //                         </div>
    //                         <div className="col-6">
    //                             <input type="number" className="py-2 w-100 ci-bg-secondary border-0 text-white font-bold"/>
    //                         </div>
    //                         <div className="col-3">
    //                             <button className="py-2 px-2 border-1 border-warning ci-bg-primary text-gold">Kirim PIN</button>
    //                         </div>
    //                     </div>
    //                     <button className="py-3 w-100 border-0 ci-bg-secondary text-white text-bold">Kirim</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default KonfirmasiOTP
