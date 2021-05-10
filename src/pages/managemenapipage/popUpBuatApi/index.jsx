import React, {useState} from 'react'

export default function PopUpBuatApi (props) {
    const [showUrlCallback, setShowUrlCallback] = useState(false)
    return (
        <div className={props.show ? 'show-pop-up-api' : 'hide-pop-up-api'}>
            <div className="text-wrapper row no-gutters">
                <div className="col-12 d-flex justify-content-center">
                    <p className="p-5 ci-text-white font-24 m-0">Buat API</p>
                </div>
                <div className="col-12  pl-5 pr-5 pb-5 pt-0">
                    <div className="row no-gutters mb-3">
                        <div className="col-4 d-flex align-items-center">
                            <p className="ci-text-white m-0">Label API</p>
                        </div>
                        <div className="col-8">
                            <input className="input-custom"/>
                        </div>
                    </div>
                    <div className="row no-gutters mb-3">
                        <div className="col-4 d-flex align-items-center">
                            <p className="ci-text-white m-0">Ijin Akses</p>
                        </div>
                        <div className="col-8">
                            <div className="row no-gutters mb-2">
                                <div className="col-12 d-flex align-items-center">
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultView" />
                                        <label className="form-check-label ci-text-white" for="flexCheckDefaultView">
                                            View
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 d-flex align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultTrade" />
                                        <label className="form-check-label ci-text-white" for="flexCheckDefaultTrade">
                                            Trade
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 d-flex align-items-center">
                                    <div className="form-check">
                                        <input onClick={() => setShowUrlCallback(!showUrlCallback)} className="form-check-input" type="checkbox" value="" id="flexCheckDefaultDeposit" />
                                        <label className="form-check-label ci-text-white" for="flexCheckDefaultDeposit">
                                            Deposit & Withdraw
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        showUrlCallback ? 
                        <div className="row no-gutters mb-3">
                            <div className="col-4 d-flex align-items-center">
                                <p className="ci-text-white m-0">URL Callback</p>
                            </div>
                            <div className="col-8">
                                <input className="input-custom"/>
                            </div>
                            <div className="col-4 d-flex align-items-center">
                            </div>
                            <div className="col-8">
                                <p className="ci-text-white m-0 text-left font-12 mt-2">URL untuk menerima validasi permintaan withdraw dari API, baca Dokumentasi Trade API untuk mengetahui lebih lanjut.
                                </p>
                            </div>
                        </div> : null
                    }
                    <div className="row no-gutters mb-3">
                        <div className="col-4 d-flex align-items-center">
                            <p className="ci-text-white m-0">Label API</p>
                        </div>
                        <div className="col-8">
                            <div className="row no-gutters">
                                <div className="col-6">
                                    <input className="input-custom"/>
                                </div>
                                <div className="col-6 d-flex justify-content-center">
                                    <button className="button-transparant ml-2">Kirim PIN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters mb-3">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="form-check">
                                <input onChange={e => {
                                    console.log(e)
                                }} className="form-check-input" type="checkbox" value="" id="flexCheckDefaultAgree" />
                                <label className="form-check-label ci-text-white" for="flexCheckDefaultAgree">
                                    Saya setuju dengan <span style={{color: '#F9BD00', textDecoration: 'underline'}}>Syarat dan Ketentuan</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters ">
                        <div className="col-12 d-flex justify-content-center mt-3">
                            <button 
                                onClick={() => props.setShow(false)}
                                style={{
                            }} className="button-transparant">OK</button>
                        </div>
                    </div>

                </div>

                
            </div>
        </div>
    )
}