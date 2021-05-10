import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import {changePass} from '../../stores'
import {useDispatch} from 'react-redux'

function UbahPassword() {
    const dispatch = useDispatch()
    const history = useHistory()
    const search = useLocation().search
    const id = new URLSearchParams(search).get('id');
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    
    const sendPass = () => {
        changePass(dispatch, {jwttoken: id, newPassword: password}, history)
    }
    return (
        <section className="container-fluid ci-auth cover-user" style={{backgroundColor: "#0B0C22"}}>
            <div className="row align-items-center justify-content-center" style={{height: "100vh"}}>

                <div className="col-12 col-md-3">
                    <div className="card text-white" style={{background: "#151933", borderRadius: "8px"}}>
                        <div className="card-body">
                            <div className="container mb-4">
                                <div className="row mt-3 mb-4">
                                    <div className="col-12 col-md-12">
                                        <h4 className="font-28 text-center" style={{color: "#F9BD00"}}>Lupa Password</h4>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-12 col-md-12">
                                        <div className="card" style={{background: "#ED4C5C"}}>
                                            <div className="card-body d-flex pb-2 pt-3">
                                                <i className="fas fa-exclamation-triangle" style={{color: "black"}}></i>
                                                <ul style={{paddingLeft: "30px"}}>
                                                    <li className="font-12 text-justify font-weight-bold mb-2" style={{color: "black", lineHeight: "14px"}}>Untuk tujuan keamanan, akun Anda akan dikunci setelah Anda mengatur ulang kata sandi. Anda dapat membuka akun yang terkunci dengan memverifikasi nomor ponsel Anda.</li>
                                                    {/* <li className="font-12 text-justify font-weight-bold" style={{color: "black", lineHeight: "14px"}}>Jangan gunakan kata sandi yang sama dengan situs web lain! Minimal harus 8 karakter, mengandung huruf besar, huruf kecil, angka, atau simbol.</li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-12 mb-2 mt-2">
                                        <label className="font-14 text-white mb-0">Password Baru</label>
                                        <div className="input-group ci-inputDefault-border">
                                            <div className="ci-inputDefault-border-appendL">
                                                <i className="fas fa-key ci-inputDefault-border-appendL-icon"></i>
                                            </div>
                                            <input value={password} onChange={e => setPassword(e.target.value)} type={show1 ? "text" : "password"} className="form-control ci-inputDefault-border-input" placeholder="Password Baru" aria-label="Password Baru" />
                                            <div className="ci-inputDefault-border-appendR">
                                                <i onClick={() => setShow1(!show1)} className={show1 ? "fas fa-eye-slash ci-inputDefault-border-appendR-icon": "fas fa-eye ci-inputDefault-border-appendR-icon"}></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 mb-2 mt-2">
                                        <label className="font-14 text-white mb-0">Konfirmasi Password Baru</label>
                                        <div className="input-group ci-inputDefault-border">
                                            <div className="ci-inputDefault-border-appendL">
                                                <i className="fas fa-key ci-inputDefault-border-appendL-icon"></i>
                                            </div>
                                            <input value={password2} onChange={e => setPassword2(e.target.value)} type={show2 ? "text" : "password"} className="form-control ci-inputDefault-border-input" placeholder="Konfirmasi Password Baru" aria-label="Konfirmasi Password Baru" />
                                            <div className="ci-inputDefault-border-appendR">
                                            <i onClick={() => setShow2(!show2)} className={show2 ? "fas fa-eye-slash ci-inputDefault-border-appendR-icon": "fas fa-eye ci-inputDefault-border-appendR-icon"}></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* <div className="col-12 col-md-12 mb-1 mt-1">
                                        <div className="progress" style={{height: "8px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "75%", background: "#00AA00"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className="font-13">Kekuatan Password : <span className="font-weight-bold" style={{color: "#00AA00"}}>Kuat</span></label>
                                    </div> */}

                                    <div className="col-12 col-md-12 mb-1 mt-3">
                                        <button onClick={sendPass} disabled={(password2!==password)||!password||!password2} className="ci-btn-warning ci-md w-100 font-weight-bold">
                                            Ubah Password
                                        </button>
                                    </div>
                                </div>

                                <div className="row mt-4 mb-3 justify-content-between">
                                    <div className="col-12 col-md-5">
                                        <Link to={"/login"} className="d-flex align-items-center">
                                            <i className="fas fa-sign-in-alt font-14" />
                                            <p className="font-13 mb-0 ml-2">Masuk</p>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <Link to={"/register"} className="d-flex align-items-center justify-content-end">
                                            <i className="fas fa-user-plus font-12" />
                                            <p className="font-13 mb-0 ml-2">Daftar Akun</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <PopupUbahPassword showPopUpForgetPassword={showPopUpForgetPassword} setShowPopUpForgetPassword={setShowPopUpForgetPassword} value={
                    {
                        title: "Sukses",
                        text: "Anda telah berhasil mengatur ulang kata sandi Anda."
                    }
                } /> */}
            </div>
        </section>
    )
}

export default UbahPassword
