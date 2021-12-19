import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login, generateGeetest, validateGeetest, getIpUser } from '../../../stores'
import { useDispatch, useSelector } from 'react-redux'
import { RGCaptcha, reset } from 'react-geetest-captcha';


function LoadingGeetest (props){
    return (
        <p className="label-title text-center" style={{
            display: props.loading.loading ? 'block' : 'none'
        }}>Waiting for bot verification ...</p>
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
    const [loadingGeetest, setLoadingGeetest] = useState(true)
    
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
    }, [])


    const CAPTCHA_NAME = 'CryptoIndexCAPTCHA';


    return (
        <form className="form-horizontal ax-auth-form my-4">
            <div className="form-group">
                <label className="text-gray2" for="email">Email</label>
                <div className="input-group mb-3">
                    <span className="auth-form-icon">
                        <i className="fas fa-users ci-text-blueLight"></i> 
                    </span>                                                                                                              
                    <input 
                    onChange={e => setEmail(e.target.value)} value={email} 
                    type="text" className="form-control text-white" id="email" placeholder="Email" name="email" required=""/>
                </div>                                    
            </div>

            <div className="form-group">
                <label className="text-gray2" for="password">Password</label>                                            
                <div className="input-group mb-3"> 
                    <span className="auth-form-icon" onClick={onSeenPassword} style={{cursor: "pointer"}}>
                        <i className={`${eyes.iconsEyes} ci-text-blueLight`}></i> 
                    </span>                                                       
                    <input 
                    onChange={e => setPassword(e.target.value)} value={password} type={`${eyes.typeInputs}`} 
                    className="form-control text-white" id="password" placeholder="password" name="password" required=""/>
                </div>                               
            </div>

            <div className="form-group row my-4">
                <div className="col-12">
                    <RGCaptcha
                        name={CAPTCHA_NAME}
                        width="100%"
                        lang="en"
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
            </div>

            <div className="form-group row mt-4 mb-4">
                <div className="col-sm-6">
                    <div className="custom-control custom-switch switch-secondary">
                        <input onChange={() => setRemember(!remember)} checked={remember} type="checkbox" className="custom-control-input" id="customSwitchSuccess"/>
                        <label className="font-12 custom-control-label text-muted text-white" for="customSwitchSuccess">Remember me</label>
                    </div>
                </div>
            </div>

            <div className="form-group mb-4 mt-4 row">
                <div className="col-12">
                    <button className="ci-btn-warning ci-md w-100 font-weight-bold" style={{background: "#f9ba42", borderRadius: "8px"}} onClick={handleClickLogin} disabled={!valGeetest}>Login</button>
                </div>
            </div> 

            <div className="row">
                <div className="col-12 col-md-12 text-center">
                    <label className="font-12 text-muted text-white mb-0">Don't have an account ?</label><span className="text-gold font-12 ml-2" style={{cursor: "pointer"}} onClick={() => history.push('/register')}>Sign up</span>
                </div>
            </div>
        </form>
    )
}

export default FormsLogin
