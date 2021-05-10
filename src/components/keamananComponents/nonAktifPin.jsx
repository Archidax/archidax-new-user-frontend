import React, { useState } from 'react';
import warning from "../../assets/img/warning.png"
import {disablePin} from '../../stores'
import {useDispatch} from 'react-redux'
import OTP from '../otp'


export default function NonAktifPin() {
  const dispatch = useDispatch()
  const [showPin, setShowPin] = useState(false)
  const [nomor_pin, setNomor_pin] = useState("")
  const disable = (e) => {
    e.preventDefault()
    // var find = document.getElementById("nonAktifPin").remove()
    
    disablePin(dispatch,{ nomor_pin })
  }
  return (
    <div className="modal fade" id="nonAktifPin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-ubah-password">
          <div className="modal-header modal-header-custom p-2">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style={{color:"white"}}>&times;</span>
            </button>
          </div>
          <div className="modal-body modal-body-custom">
            <p className="label-title-top text-center">Non-Aktifkan PIN</p>
            <div className="container">
              <div className="row warning-ubah-password mb-4">
                <div className="col-1 d-flex align-items-center">
                  <img src={warning} alt="logo" />
                </div>
                <div className="col-11 d-flex align-items-center">
                  <p className="text-warning-custom mb-0">PIN akan dihapus dari database setelah dinonaktifkan</p>
                </div>
              </div>
            </div>
            <form>
              <div className="form-group row no-gutters">
                <label htmlFor="inputPin label-input" className="col-sm-4 col-form-label">PIN</label>
                <div className="col-sm-8 input-group ci-inputDefault-bg">
                  <input value={nomor_pin} onChange={e => setNomor_pin(e.target.value)} type={!showPin ? "password" : "text"} className="form-control ci-inputDefault-bg-input ci-pd" id="inputPin"/>
                  <div className="ci-inputDefault-bg-appendR">
                    <i onClick={() => setShowPin(!showPin)} className={!showPin ? "far fa-eye ci-inputDefault-bg-appendR-icon": "far fa-eye-slash ci-inputDefault-bg-appendR-icon"}></i>
                  </div>
                </div>
              </div>
              <div className="form-group row no-gutters">
                <label htmlFor="inputPinSms label-input" className="col-sm-4 col-form-label label-title">Pin SMS</label>
                <div className="col-sm-5 input-group ci-inputDefault-bg pl-2">
                  <input type="password" className="form-control ci-inputDefault-bg-input ci-pd" id="inputPinSms"/>
                </div>
                <div className="col-sm-3 d-flex justify-content-center pl-2 button-otp">
                  <OTP />
                </div>
              </div>
            </form>
            <button onClick={disable} className="ci-btn-warning ci-md mt-3 w-100">Non-Aktifkan PIN</button>
          </div>
        </div>
      </div>
      </div>
  )
}
