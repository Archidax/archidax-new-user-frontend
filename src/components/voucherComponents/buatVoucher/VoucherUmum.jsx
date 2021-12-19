import React, { useState } from "react";
import { useSelector } from 'react-redux'

import { hidePhoneNumber } from '../../../helpers'
import PopupBuatVoucherUmum from './popUps/PopupBuatVoucherUmum'
import PopupKonfirmasiOTP from "./popUps/PopupKonfirmasiOTP";
import PopUp from '../../popUps/index'
import Translate from "../../../i18n/Translate";

export default function VoucherUmum(props) {

  const { createVoucherRequest } = props
  const { telefon } = useSelector((state) => state.profileReducer)

  const [showPopupBuatVocherUmum, setShowPopupBuatVocherUmum] = useState(false)
  const [showPopupKonfirmasiOTP, setShowPopupKonfirmasiOTP] = useState(false)

  const [data, setData] = useState({
    nominal: '',
    request_id: '',
    code: ''
  })

  const sendPin = (setDisableSend) => {
    if (data.request_id) {
      createVoucherRequest(data, setDisableSend, setShowPopupKonfirmasiOTP)
      setShowPopupKonfirmasiOTP(false)
    } else {
      PopUp.fire({
        title: 'Request Tidak valid',
        text: 'Mohon kirim ulang kode otp'
      })
      setShowPopupKonfirmasiOTP(true)
      setDisableSend(false)
    }
  }

  const submitForm = e => {
    e.preventDefault()
    setShowPopupKonfirmasiOTP(true)
  }

  const setInputData = (e, type) => {
    setData({
      ...data,
      [type]: e.target.value
    })
  }

  const editInputData = (val, type) => {
    setData({
      ...data,
      [type]: val
    })
  }

  return (
    <div className="col-12 col-md-6 p-3">
      <div className="card ci-customCard-1 text-white h-100">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="font-18 text-gold font-bold label-title-top">{Translate('vc_umum')}</div>
            </div>
          </div>

          <form onSubmit={e => submitForm(e)}>
            <div className="mt-3 row">
              <div className="col-12 col-md-3 ci-text-white lable-title mb-1">
                <p className="ci-text-white mb-0 font-12">{Translate('vc_nominal_rupiah')}</p>
              </div>
              <div className="col-12 col-md-9 flex-column">
                <div className="input-group ci-inputDefault-bg">
                  <input value={data.nominal} required onChange={e => setInputData(e, 'nominal')} type="number" className="form-control ci-inputDefault-bg-input ci-pd" />
                </div>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-12 col-md-12">
                <ul style={{ paddingLeft: "25px", border: "0.5px dashed #f9bd00" }} className="font-12 mt-4 mb-md-5 mb-0 py-2 rounded mb-3">
                  <li className="font-12">
                    {Translate('vc_text_maks_penarikan')}
                  </li>
                  <li className="font-12">
                    {Translate('vc_text_penarikan')}
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-12 w-100 justify-content-end d-flex mt-0">
                <button className="ci-btnOL-secondary ci-lg ci-bg-warning border-0 text-dark" type='submit' > {Translate('vc_buat_voucher')} </button>
              </div>
            </div>
          </form>

        </div>
      </div>
      <PopupBuatVoucherUmum showPopupBuatVocherUmum={showPopupBuatVocherUmum} setShowPopupBuatVocherUmum={setShowPopupBuatVocherUmum} value={
        {
          title: "Satu Langkah Lagi!",
          text: `Kami telah mengirimkan email konfirmasi ke alamat email anda. Silahkan klik link di dalamnya untuk melanjutkan proses penarikan.`
        }
      } />
      <PopupKonfirmasiOTP editInputData={editInputData} sendPin={sendPin} createVoucherRequest={createVoucherRequest} showPopupKonfirmasiOTP={showPopupKonfirmasiOTP} setShowPopupKonfirmasiOTP={setShowPopupKonfirmasiOTP} value={
        {
          title: "Konfirmasi OTP",
          text: `Kami telah mengirimkan kode OTP ke hp anda dengan nomor ${hidePhoneNumber(telefon, 6, 2)} kemudian masukkan PIN ke isian di atas.`
        }
      } />
    </div>
  );
}
