import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import PopupForgetPassword from './popupforgetpassword'
import { forgetEmail } from '../../stores'
import {emailFormatError} from '../../stores/errorHandler'



function ForgetPassword() {
    const [email, setEmail] = useState("")
    const [showPopUpForgetPassword, setShowPopUpForgetPassword] = React.useState(false)

    const reset = () => {
        if(emailFormatError(email)){
            
        }else {
            forgetEmail(null, {email}, () => {
                setEmail("")
            })
        }
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
                                        <h4 className="font-28 text-center">Lupa Password</h4>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-12 mb-1 mt-1">
                                        <label className="font-14 text-white mb-0">Email</label>
                                        <div className="input-group ci-inputDefault-border">
                                            <div className="ci-inputDefault-border-appendL">
                                                <i className="far fa-envelope ci-inputDefault-border-appendL-icon"></i>
                                            </div>
                                            <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control ci-inputDefault-border-input" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 col-md-12 mb-1 mt-1">
                                        
                                    </div>

                                    <div className="col-12 col-md-12 mb-1 mt-1">
                                        <button onClick={reset} className="ci-btn-warning ci-md w-100 font-weight-bold">
                                            Reset Password
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
                <PopupForgetPassword showPopUpForgetPassword={showPopUpForgetPassword} setShowPopUpForgetPassword={setShowPopUpForgetPassword} value={
                    {
                        title: "Periksa Email Konfirmasi",
                        text: "Kami telah mengirimkan email konfirmasi ke alamat email anda. Silahkan klik link di dalamnya untuk melanjutkan proses merubah password."
                    }
                } />
            </div>
        </section>
    )
}

export default ForgetPassword