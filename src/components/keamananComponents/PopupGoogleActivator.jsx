import React, { useState, useEffect } from 'react'
import playstoreImg from '../../assets/img/playstore.png'
import appstoreImg from '../../assets/img/appstore.png'
// import QRImg from '../../assets/img/QR.png'
import { useDispatch, useSelector } from 'react-redux'
import { get2FA, verifyGAuth } from '../../stores/index'
import ReactCodeInput from 'react-code-input'

function PopupGoogleActivator() {
    const gCode = useSelector(state => state.keamananReducer.gCode)
    const [password, setPassword] = useState('')
    const [kode, setKode] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        get2FA(dispatch)
    }, [dispatch])

    const aktifkan = (e) => {
        e.preventDefault()
        verifyGAuth({ userToken: kode, userPass: password }, dispatch)
    }

    return (
        <div className="modal fade" tabindex="-1" role="dialog" id="popupGoogleActivator">
            {/* {JSON.stringify(gCode)} */}
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content ci-bg-secondary">
                    <div className="modal-header border-0">
                        <div className="col-11 d-flex justify-content-center">
                            <div className="modal-title font-14 font-bold">Aktifkan Google Authenticator</div>
                        </div>
                        <div className="col-1">
                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className="modal-body ci-bg-secondary">
                        <div className="row p-4">
                            <div className="col-12 col-md-6">
                                <h3 className="text-white font-13 font-bold">Mengapa harus menggunakan Google Authenticator?</h3>
                                <ul className="p-0 pl-3">
                                    <li>Melindungi akun dari hacker.</li>
                                    <li>Dana lebih aman.</li>
                                    <li>Mudah digunakan.</li>
                                    <li>Bisa di-install di Android, iPhone, iPad, dan Komputer/Laptop.</li>
                                </ul>
                                <p className="font-12 text-white">Unduh dan pasang aplikasi Google Authenticator</p>
                                <div className="my-3 d-flex justify-content-center">
                                    <img src={playstoreImg} alt="playstoreImg" className="m-2" />
                                    <img src={appstoreImg}  alt="appstoreImg" className="m-2" />
                                </div>
                                <div className="row d-flex align-content-center my-2">
                                    <div className="col-12 col-md-4">
                                        Password Akun
                                    </div>
                                    <div className="col-12 col-md-8 ci-inputDefault-bg">
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control ci-inputDefault-bg-input ci-pd" />
                                    </div>
                                </div>
                                <div className="row d-flex align-content-center my-2">
                                    <div className="col-12 col-md-4">
                                        Kode Authenticator
                                    </div>
                                    <div className="col-12 col-md-8 w-100">
                                        <ReactCodeInput
                                            type="number"
                                            fields={6}
                                            onChange={(e) => setKode(e)}
                                        />
                                    </div>
                                </div>
                                <div className="row p-3">
                                    <button className="w-100 border-0 py-2 ci-bg-gold" onClick={(e) => aktifkan(e)}>Aktifkan</button>
                                </div>

                            </div>
                            <div className="col-12 col-md-6">
                                <p className="font-12 mb-3">Scan barcode di bawah dengan Google Authenticator, kemudian masukan PIN yang dihasilkan</p>
                                <div className="d-flex justify-content-center">
                                    <img src={gCode} alt="gCode" />
                                </div>
                                {/* <div className="d-flex justify-content-center my-3">
                                    <div className="ci-bg-primary px-4 py-2">4821154526 <i className="far fa-copy ml-3"></i></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupGoogleActivator
