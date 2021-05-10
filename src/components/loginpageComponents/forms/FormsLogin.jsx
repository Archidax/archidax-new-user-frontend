import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login, generateGeetest, getIpUser } from '../../../stores'
import { useDispatch, useSelector } from 'react-redux'
import { RGCaptcha } from 'react-geetest-captcha';

function LoadingGeetest (props){
    return (
        <p className="label-title" style={{
            display: props.loading.loading ? 'block' : 'none'
        }}>Menunggu verifikasi bot...</p>
    )
}

function FormsLogin() {
    const dispatch = useDispatch()
    const test = {
        iconsEyes: "far fa-eye-slash",
        typeInputs: "password"
    }
    // const user = useSelector(state => state.userReducer)
    const [eyes, setEyes] = React.useState(test)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [valGeetest, setValGeetest] = useState(false)
    const [geetest_challenge, setGeetest_challenge] = useState("")
    const [geetest_seccode, setGeetest_seccode] = useState("")
    const [geetest_validate, setGeetest_validate] = useState("")
    // const [loadingGeetest, setLoadingGeetest] = useState(true)
    
    const userIP = useSelector(state => state.userReducer.userIP)

    const onSeenPassword = (prop) => {
        if(eyes.typeInputs === "text"){
            setEyes({
                ...eyes,
                iconsEyes: "far fa-eye-slash",
                typeInputs: "password"
            })
        }else if(eyes.typeInputs === "password"){
            setEyes({
                ...eyes,
                iconsEyes: "far fa-eye",
                typeInputs: "text"
            })
        }
    }

    const history = useHistory()
    const handleClickLogin = (e) => {
        e.preventDefault()
        dispatch({type: "SET_LOADING", data: true})
        login(dispatch, {
            email,
            password,
            geetest_challenge,
            geetest_seccode,
            geetest_validate
        }, remember, history, userIP)
    }
    useEffect(() => {
        (async() => {
            try{
                let tmp = await localStorage.getItem('codeouser')
                if(tmp) {
                    setEmail(tmp)
                    setRemember(true)
                }
                // generateGeetest(dispatch)
                getIpUser(dispatch)
            }catch(err) {

            }
        })()
        return () => {
            dispatch({type: "CLEAN_GETEST"})
        }
    }, [dispatch])


    const CAPTCHA_NAME = 'CryptoIndexCAPTCHA';


    return (
        <form className="ci-loginForm mt-4">
            <div className="row">
                <div className="col-lg-12 mt-3 mb-2">
                    <div className="form-group position-relative">
                        <label className="font-14 text-white mb-0">Email Anda <span className="text-danger">*</span></label>
                        <div className="input-group ci-inputDefault-border">
                            <div className="ci-inputDefault-border-appendL">
                                <i className="far fa-envelope ci-inputDefault-border-appendL-icon text-white"></i>
                            </div>
                            <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control ci-inputDefault-border-input" placeholder="Email" name="email" required=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mt-2 mb-3">
                    <div className="form-group position-relative">
                        <label className="font-14 text-white mb-0">Kata Sandi <span className="text-danger">*</span></label>
                        <div className="input-group ci-inputDefault-border">
                            <div className="ci-inputDefault-border-appendL">
                                <i data-feather="key" className="fas fa-key ci-inputDefault-border-appendL-icon text-white"></i>
                            </div>
                            <input onChange={e => setPassword(e.target.value)} value={password} type={`${eyes.typeInputs}`} className="form-control ci-inputDefault-border-input" placeholder="Kata Sandi" required=""/>
                            <div className="ci-inputDefault-border-appendR" onClick={onSeenPassword} style={{cursor: "pointer"}}>
                                <i data-feather="key" className={`${eyes.iconsEyes} ci-inputDefault-border-appendR-icon text-white`}></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 mb-4">
                    <div className="d-flex justify-content-between">
                        <div className="form-group">
                            <div className="custom-control custom-switch switch-secondary">
                                <input onChange={() => setRemember(!remember)} checked={remember} type="checkbox" className="custom-control-input" id="customSwitchSuccess"/>
                                <label className="font-12 custom-control-label text-muted text-white" for="customSwitchSuccess">Ingat saya</label>
                            </div>
                        </div>
                        <div className="form-group d-flex align-items-center">
                            <p className="forgot-pass mb-0"><Link to={"/forget-password"} className="text-white font-weight-bold font-12 d-flex">Lupa kata sandi ?</Link></p>
                        </div>
                    </div>
                </div>
                <div style={{position: 'relative !important'}} id="geetest" className="col-lg-12 mb-4">

                    <RGCaptcha
                        name={CAPTCHA_NAME}
                        width="100%"
                        lang="id"
                        product="float"
                        loadingComponent={(loading) => <LoadingGeetest loading={loading} />}
                        onSuccess={(e) => {
                            setGeetest_challenge(e.geetest_challenge)
                            setGeetest_seccode(e.geetest_seccode)
                            setGeetest_validate(e.geetest_validate)
                            setValGeetest(true)
                            if(email && password){
                                login(dispatch, {
                                    email,
                                    password,
                                    geetest_challenge,
                                    geetest_seccode,
                                    geetest_validate
                                }, remember, history, userIP)
                            }
                        }}
                        data={() => {return generateGeetest()}
                            // axios
                            // .then(resp => {?zxx
                            //     const/;s { captchxa } = (resp && resp.data) || {};
                            //     // conso\le.log(captcha);
                            //     // {
                            //     //   "gt": "e385d274eeedb650fa008875ff7b14a2",
                            //     //   "challenge": "f4873d2af972a38811814f644920b8ab",
                            //     //   "success": 1,
                            //     // }
                            //     return captcha;
                            // })
                        }
                    />
                </div>

                <div className="col-lg-12 mb-0">
                    <button className="ci-btn-warning ci-md w-100 font-weight-bold ci-btn-authAnim-1" onClick={handleClickLogin} disabled={!valGeetest}>Masuk</button>
                </div>
                
                <div className="col-12 text-center">
                    <p className="mb-0 mt-3"><small className="text-white mr-2">Belum punya akun ?</small> <Link className="text-white font-weight-bold" to="/register">Daftar</Link></p>
                </div>
            </div>
        </form>
    )
}

export default FormsLogin;