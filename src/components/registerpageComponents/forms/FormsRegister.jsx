import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import {register } from '../../../stores'
import { useDispatch } from 'react-redux'
import { emailFormatError, telefonFormatError } from '../../../stores/errorHandler'
import PopUps from '../../popUps'
import SyaratdanKetentuanComponents from '../../syaratpengguna/SyaratPenggunaComponents'


function FormsRegister({navigation}) {
    const dispatch = useDispatch()
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [username, setUsername] = useState("")
    const [checkAgree, setCheckAgree] = useState(false)
    const search = useLocation().search
    const ref = new URLSearchParams(search).get('ref');

    const history = useHistory()

    const test = {
        iconsEyes: "far fa-eye-slash",
        typeInputs: "password"
    }
    const [eyes, setEyes] = React.useState(test)
    const [eyes2, setEyes2] = React.useState(test)

    const onSeenPassword = (prop) => {
        if(eyes.typeInputs === "password"){
            setEyes({
                ...eyes,
                iconsEyes: "far fa-eye",
                typeInputs: "text"
            })
        }else if(eyes.typeInputs === "text"){
            setEyes({
                ...eyes,
                iconsEyes: "far fa-eye-slash",
                typeInputs: "password"
            })
        }
    }
    const onSeenPassword2 = (prop) => {
        if(eyes2.typeInputs === "password"){
            setEyes2({
                ...eyes2,
                iconsEyes: "far fa-eye",
                typeInputs: "text"
            })
        }else if(eyes2.typeInputs === "text"){
            setEyes2({
                ...eyes2,
                iconsEyes: "far fa-eye-slash",
                typeInputs: "password"
            })
        }
    }
    const handleClickRegister = (e) => {
        e.preventDefault()
        if (emailFormatError(email)){
            
        }else if(telefonFormatError(phone)){
            
        }else {
            let tmp = ref ? 
            {
                noTlp:phone,
                username,
                email,
                password,
                ref: ref ? ref : ""
            } : 
            {
                noTlp:phone,
                username,
                email,
                password
            }
            console.log(tmp,"<<<<<<<<<")
            register(dispatch, tmp, history)
        }
    }

    return (
        <>
            <form className="ci-registerForm mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group position-relative mb-4">
                            <label className="font-14 text-white mb-0">Username</label>
                            <div className="input-group ci-inputDefault-border">
                                <div className="ci-inputDefault-border-appendL">
                                    <i data-feather="user" className="fas fa-user ci-inputDefault-border-appendL-icon text-white"></i>
                                </div>
                                <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control ci-inputDefault-border-input" placeholder="Username" name="username" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group position-relative mb-4">
                            <label className="font-14 text-white mb-0">Email</label>
                            <div className="input-group ci-inputDefault-border">
                                <div className="ci-inputDefault-border-appendL">
                                    <i data-feather="email" className="fas fa-envelope ci-inputDefault-border-appendL-icon text-white"></i>
                                </div>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control ci-inputDefault-border-input" placeholder="Email" name="email" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group position-relative mb-4">
                            <label className="font-14 text-white mb-0">Nomor HP utama</label>
                            <div className="input-group ci-inputDefault-border">
                                <div className="ci-inputDefault-border-appendL">
                                    <i data-feather="user" className="fas fa-phone-alt ci-inputDefault-border-appendL-icon text-white"></i>
                                </div>
                                <input value={phone} onChange={e => setPhone(e.target.value)} type="number" className="form-control ci-inputDefault-border-input" placeholder="08120000000" name="phone" required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group position-relative mb-4">
                            <label className="font-14 text-white mb-0">Password</label>
                            <div className="input-group ci-inputDefault-border">
                                <div className="ci-inputDefault-border-appendL">
                                    <i data-feather="key" className="fas fa-key ci-inputDefault-border-appendL-icon text-white"></i>
                                </div>
                                <input value={password} onChange={e => setPassword(e.target.value)} type={`${eyes.typeInputs}`} className="form-control ci-inputDefault-border-input" placeholder="Kata Sandi" required=""/>
                                <div className="ci-inputDefault-border-appendR" onClick={onSeenPassword} style={{cursor: "pointer"}}>
                                    <i data-feather="key" className={`${eyes.iconsEyes} ci-inputDefault-border-appendR-icon text-white`}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group position-relative mb-4">
                            <label className="font-14 text-white mb-0">Ketik ulang password</label>
                            <div className="input-group ci-inputDefault-border">
                                <div className="ci-inputDefault-border-appendL">
                                    <i data-feather="key" className="fas fa-key ci-inputDefault-border-appendL-icon text-white"></i>
                                </div>
                                <input value={password2} onChange={e => setPassword2(e.target.value)} type={`${eyes2.typeInputs}`} className="form-control ci-inputDefault-border-input" placeholder="Ulangi Kata Sandi" required=""/>
                                <div className="ci-inputDefault-border-appendR" onClick={onSeenPassword2} style={{cursor: "pointer"}}>
                                    <i data-feather="key" className={`${eyes2.iconsEyes} ci-inputDefault-border-appendR-icon text-white`}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mb-4 mt-2">
                        <div className="d-flex justify-content-between">
                            <div className="form-group mb-0">
                                <div className="custom-control custom-switch switch-secondary">
                                    <input onChange={() => setCheckAgree(!checkAgree)} type="checkbox" className="custom-control-input" id="customSwitchSuccess"/>
                                    <label className="font-12 custom-control-label text-muted text-white" for="customSwitchSuccess">Saya menyetujui 
                                        <Link className="link-syarat-ketentuan" onClick={()=> {PopUps.syaratPengguna({
                                            title: "Syarat dan Kesepakatan Pengguna",
                                            content: <SyaratdanKetentuanComponents />
                                        })}}> syarat dan kesepakatan </Link> 
                                    yang berlaku</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mb-0">
                        <button onClick={handleClickRegister} className="ci-btn-warning ci-md w-100 font-weight-bold ci-btn-authAnim-2" disabled={!(email && phone && username && (password === password2) && checkAgree)}>Register</button>
                    </div>

                    <div className="col-12 text-center">
                        <p className="mb-0 mt-3"><small className="text-white mr-2">Sudah punya akun ?</small> <Link className="text-white font-weight-bold" to="/login" style={{borderBottom:"1px solid white"}}>Masuk</Link><small className="text-white ml-2">Sekarang</small></p>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormsRegister