import React, { useState } from 'react';
import { useEffect } from 'react';
import warning from "../../assets/img/warning.png"
import OTP from '../otp'
import { requestPasswordChange } from '../../stores'

export default function UbahPassword(props) {
  const { toggleModal } = props
  const [data, setData] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
    request_id: '',
    code: '',
  })
  const [errMsg, setErrMsg] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
    passwordMatch: '',
    request_id: '',
    code: '',
  })
  const [disableSend, setDisableSend] = useState(false)

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)


  const handleData = (value, type) => {
    setData({
      ...data,
      [type]: value
    })
  }

  const clearData = () => {
    setData({
      password: '',
      newPassword: '',
      confirmPassword: '',
      request_id: '',
      code: '',
    })
  }

  const handleErrMsg = (value, type) => {
    setErrMsg({
      ...errMsg,
      [type]: value
    })
  }

  const handleDisableSend = () => {
    if(disableSend){
      return true
    }
    //
    if(!data.password || !data.newPassword || !data.confirmPassword || !data.code){
      return true
    }
    //
    if(data.password && data.newPassword && data.confirmPassword && data.code){
      if(data.password.length < 8){
        if(!errMsg.password) {
          handleErrMsg('Password minimal 8 karakter', 'password')
        }
      } else {
        if(errMsg.password) {
          handleErrMsg('', 'password')
        }
      }
      //
      if(data.newPassword.length < 8){
        if(!errMsg.newPassword) {
          handleErrMsg('Password minimal 8 karakter', 'newPassword')
        }
      } else {
        if(errMsg.newPassword) {
          handleErrMsg('', 'newPassword')
        }
      }
      //
      if(data.confirmPassword.length < 8){
        if(!errMsg.confirmPassword) {
          handleErrMsg('Password minimal 8 karakter', 'confirmPassword')
        }
      } else {
        if(errMsg.confirmPassword) {
          handleErrMsg('', 'confirmPassword')
        }
      }
      //
      if(data.newPassword !== data.confirmPassword){
        if(!errMsg.confirmPassword) {
          handleErrMsg('Password baru tidak sama', 'confirmPassword')
        }
      } else {
        if(errMsg.confirmPassword) {
          handleErrMsg('', 'confirmPassword')
        }
      }
      if(errMsg.password || errMsg.newPassword || errMsg.confirmPassword || errMsg.confirmPassword){
        return true
      }
    }
    //
    return false
  }

  const submitForm = (e) => {
    e.preventDefault()
    setDisableSend(true)
    requestPasswordChange(data, setDisableSend, toggleModal, clearData)
  }

  useEffect(() => {
    clearData()
    return () => clearData()
  },[])


  return (
    <div className='modal fade' id="ubahPassword" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-ubah-password">
          <div className="modal-header modal-header-custom p-2">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style={{color:"white"}}>&times;</span>
            </button>
          </div>
          <div className="modal-body modal-body-custom">
            <p className="label-title-top text-center">Ubah Password</p>
            <div className="container">
              <div className="row warning-ubah-password mb-4">
                <div className="col-1 d-flex align-items-center">
                  <img src={warning} alt="warning" />
                </div>
                <div className="col-11">
                  <p className="text-warning-custom mb-0">Mengubah kata sandi Anda akan mengeluarkan Anda dari semua perangkat, termasuk ponsel Anda. Anda harus memasukkan kata sandi baru di semua perangkat Anda.</p>
                </div>
              </div>
            </div>
            <form onSubmit={(e)=>submitForm(e)}>
              <div className="form-group row no-gutters">
                <label htmlFor="inputPasswordLama label-input" className="col-sm-4 col-form-label label-title">Password Lama</label>
                <div className="col-sm-8 input-group ci-inputDefault-bg  d-flex align-items-center  pl-2">
                  <input value={data.password} type={show ? "text" : "password"} onChange={e => handleData(e.target.value,'password')} className="form-control ci-inputDefault-bg-input ci-pd" id="inputPasswordLama"/>
                  {/* <input value={passwordLama} type={show ? "text" : "password"} onChange={e => setPasswordLama(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd" id="inputPasswordLama"/> */}
                  <div className="ci-inputDefault-bg-appendR">
                    <i onClick={() => setShow(!show)}  className={!show ? "far fa-eye-slash ci-inputDefault-bg-appendR-icon" : "far fa-eye ci-inputDefault-bg-appendR-icon"}></i>
                  </div>
                </div>
                {
                  errMsg.password && <div className='text-right text-danger col-12'>{errMsg.passwordLama}</div>
                }
              </div>
              <div className="form-group row no-gutters">
                <label htmlFor="inputPasswordBaru label-input" className="col-sm-4 col-form-label label-title">Password Baru</label>
                <div className="col-sm-8 input-group ci-inputDefault-bg  d-flex align-items-center pl-2">
                  <input type={show2 ? "text" : "password"} value={data.newPassword} onChange={e => handleData(e.target.value, 'newPassword')} className="form-control ci-inputDefault-bg-input ci-pd" id="inputPasswordBaru"/>
                  {/* <input type={show2 ? "text" : "password"} value={passwordBaru} onChange={e => setPasswordBaru(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd" id="inputPasswordBaru"/> */}
                  <div className="ci-inputDefault-bg-appendR">
                    <i onClick={() => setShow2(!show2)}  className={!show2 ? "far fa-eye-slash ci-inputDefault-bg-appendR-icon" : "far fa-eye ci-inputDefault-bg-appendR-icon"}></i>
                  </div>
                </div>
                {
                  errMsg.newPassword && <div className='text-right text-danger col-12'>{errMsg.passwordBaru}</div>
                }
              </div>
              <div className="form-group row no-gutters">
                <label htmlFor="inputPasswordKonfirmasilabel-input" className="col-sm-4 col-form-label label-title">Konfirmasi Password</label>
                <div className="col-sm-8 input-group ci-inputDefault-bg d-flex align-items-center  pl-2">
                  <input type={show3 ? "text" : "password"} value={data.confirmPassword} onChange={e => handleData(e.target.value, 'confirmPassword')} className="form-control ci-inputDefault-bg-input ci-pd" id="inputPasswordKonfirmasi"/>
                  {/* <input type={show3 ? "text" : "password"} value={password2} onChange={e => setPassword2(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd" id="inputPasswordKonfirmasi"/> */}
                  <div className="ci-inputDefault-bg-appendR">
                    <i onClick={() => setShow3(!show3)}  className={!show3 ? "far fa-eye-slash ci-inputDefault-bg-appendR-icon" : "far fa-eye ci-inputDefault-bg-appendR-icon"}></i>
                  </div>
                </div>
                {
                  errMsg.confirmPassword && <div className='text-right text-danger col-12'>{errMsg.passwordBaruKonfirmasi}</div>
                }
                {
                  errMsg.passwordMatch && <div className='text-right text-danger col-12'>{errMsg.passwordMatch}</div>
                }
              </div>
              <div className="form-group row no-gutters">
                <label htmlFor="inputPasswordPin label-input" className="col-sm-4 col-form-label label-title">PIN SMS</label>
                <div className="col-sm-4 input-group ci-inputDefault-bg  pl-2">
                  <input value={data.code} onChange={e => handleData(e.target.value, 'code')} type="password" className="form-control ci-inputDefault-bg-input ci-pd" id="inputPasswordPin"/>
                </div>
                <div className="col-sm-4 d-flex justify-content-center pl-2 button-otp">
                  <OTP handleData={handleData} />
                </div>
              </div>
                {
                  errMsg.code && <div className='text-right text-danger col-12'>{errMsg.code}</div>
                }
              <button className="ci-btn-warning ci-md mt-3 w-100" disabled={handleDisableSend()}>
                {
                  disableSend ?
                    <>
                    <div className="spinner-border spinner-border-grow spinner-border-sm text-danger mr-2" role="status">
                      <span className="sr-only">Loading...</span> 
                    </div> Processing...
                    </>
                  :
                  <>Ubah Password</>
                }
              </button>
            </form>
            {/* <button onClick={sendlimit} style={{maxWidth: '120px'}} className="ci-btn-warning ci-md mt-4">Simpan</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
