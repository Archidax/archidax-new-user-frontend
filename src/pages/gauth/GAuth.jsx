import React, { useEffect, useState } from 'react'
import ReactCodeInput from 'react-code-input'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginGAuth } from '../../stores/index'
import { getAndSaveIP } from '../../stores/index'

function GAuth() {
    const [code, setCode] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const loginWithGAuth = (e) => {
        e.preventDefault()
        loginGAuth({ userToken: code }, dispatch, history)
    }
    useEffect(() => {
        getAndSaveIP(dispatch)
    }, [dispatch])

    return (
        <div className="container-fluid account-body ci-bg-primary">

            <div className="row vh-100 d-flex justify-content-center">
                <div className="col-4 align-self-center">
                    <div className="auth-page">
                        <div className="card auth-card shadow-lg">
                            <div className="card-body ci-bg-secondary text-white">
                                <div className="px-3">

                                    <div className="text-center text-white">
                                        <h4 className="mt-0 mb-3 m-4 text-gold">Google Authenticator</h4>
                                        <p className="text-white mb-0">Masukkan kode yang terkirim ke app Google Activator melanjutkan ke login.</p>
                                    </div>

                                    <form className="form-horizontal">
                                        <div className="form-group d-flex justify-content-center">
                                            {/* <label className="ci-text-blueLight" for="gcode">Code</label>                                             */}
                                            {/* <div className="input-group mb-3">                                              
                                                <input type="number" className="form-control" id="gcode" placeholder="Masukan code"/>
                                            </div>                                */}
                                            <ReactCodeInput
                                                type="number"
                                                fields={6}
                                                onChange={(e) => setCode(e)}
                                            />
                                        </div>

                                        {/* <div className="form-group row mt-4 mb-4">
                                            <div className="col-sm-6">
                                                <div className="custom-control custom-switch switch-success">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitchSuccess"/>
                                                    <label className="custom-control-label text-muted" for="customSwitchSuccess">Ingat saya</label>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="form-group mb-4 mt-4 row">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button className="btn btn-primary" onClick={(e) => loginWithGAuth(e)}>
                                                    Masuk
                                            </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GAuth