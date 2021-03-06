import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Waiting from '../waitingComponent'
import { postEmail, getStatus } from '../../../stores'
import { useSelector, useDispatch } from 'react-redux'
import { emailFormatError, imageSizeError} from '../../../stores/errorHandler'
import OTP from '../../../components/otp'

export default function EmailRequestTab () {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profileReducer)
    const loading = useSelector(state => state.loadingReducer)

    const history = useHistory()
    // const [showPopUp, setShowPopUp] = useState(false)
    // const [showPopUpSimpan, setShowPopUpSimpan] = useState(false)
   

    // const [emailLama, setEmailLama] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [img, setImg] = useState(undefined)
    const [alasan, setAlasan] = useState("")
    const [pin, setPin] = useState("")
    const [requestId, setRequestId] = useState("")
    const [disableSimpan, setDisableSimpan] = useState(true)

    const changeEmail = () => {
        emailFormatError(newEmail, () => {
            const formData = new FormData()
            formData.append('email', profile.email)
            formData.append('newEmail', newEmail)
            formData.append('file', img)
            formData.append('reasonChange', alasan)
            formData.append('request_id', requestId)
            formData.append('code', pin)            
            postEmail(dispatch, formData)
        })
        
    }

    const handleRequestId = (value) => {
        setDisableSimpan(false)
        setRequestId(value)
    }


    // const sendPinSMS = (pin) => {
    //     setShowPopUpSimpan(true)
    // }
    useEffect(() => {
       getStatus(dispatch)
    }, [dispatch])

    return (
        loading.emailVerification ? 
        <Waiting />
        :
        <>
        <div className="container-fluid p-4" >
            <div className="row no-gutters mb-4">
                <div className="col-12">
                    <p 
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                            history.replace('/profile')
                    }} className="ci-text-white mb-0"><i className="fas fa-arrow-circle-left edit-button mr-2" /> Kembali ke profil</p>
                </div>
            </div>
            
            <div className="row no-gutters bg-homepage2 p-4">
                <div className="col-12">
                    <p className="label-title-top mb-0 font-roboto">Ubah Email</p>
                </div>
                <div className="col-12 mt-1 mb-5">
                    <p className="label-title mb-0">Lengkapi isian berikut untuk mengajukan penggantian alamat email.</p>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">Email Lama</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="input-group ci-inputDefault-bg">
                                <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" value={profile.email} disabled/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">Email Baru</p>
                        </div>
                        <div className="col-12 col-md-8 ">
                            <div className="input-group ci-inputDefault-bg">
                                <input type="text" placeholder="Email baru anda" className="form-control ci-inputDefault-bg-input ci-pd" value={newEmail} onChange={e => setNewEmail(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">Kartu Identitas ( KTP / SIM / Passport )</p>
                        </div>
                        <div className="col-12 col-md-8 ">
                            <div className="row input-custom-file no-gutters">
                                

                                <div
                                    className="col-12"
                                    style={{ background: "#2F3552", borderRadius: "5px" }}
                                >
                                    <div className="input-group ci-inputDefault-bg p-2">
                                    <label
                                        for="inputFile"
                                        className="mb-0 ml-4"
                                        style={{
                                        background: "#454964",
                                        color: "white",
                                        padding: "5px 14px",
                                        borderRadius: "4px",
                                        }}
                                    >
                                        Unggah
                                    </label>
                                    <input
                                        style={{
                                        display: "none",
                                        }}
                                        onChange={(e) => {
                                        imageSizeError(e.target.files[0], 1000000, () =>
                                        setImg(e.target.files[0])
                                        );
                                        }}
                                        id="inputFile"
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                    />
                                    <div className="pl-3 unggah-flex">
                                        <span className="ci-text-white label-title font-13">
                                        {img ? img.name : "Belum memilih file.."}
                                        </span>
                                        <span className="ci-text-white mb-0 font-10">
                                        Maksimal ukuran file 1MB
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                
                                {/* <div className="col-12">
                                    <label for="inputFile">Unggah</label>
                                    <input style={{
                                        display: 'none'
                                    }} onChange={e => {
                                        imageSizeError(e.target.files[0], 1000000, () => {
                                            setImg(e.target.files[0])
                                        })
                                    }} id="inputFile" type="file" accept=".png, .jpg, .jpeg"/>
                                    <span className="ci-text-white label-title pl-3">{img ? img.name : "Belum memilih file.."}</span>
                                </div>
                                <div className="col-12">
                                    <p className="ci-text-white font-12 mb-0">Maksimal ukuran file 1MB.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">Alasan Penggantian</p>
                        </div>
                        <div className="col-12 col-md-8 ">
                            <div className="input-group ci-inputDefault-bg">
                                <textarea placeholder="Alasan mengganti email..." type="text" value={alasan} onChange={e => setAlasan(e.target.value)} style={{
                                    resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={5} textarea/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                        <p className="ci-text-white mb-0 label-title">PIN SMS</p>
                        </div>
                        <div className="col-12 col-md-8 ">
                            <div className="row no-gutters">
                                <div className="col-6 col-md-8 ">
                                    <div className="input-group ci-inputDefault-bg">
                                        <input type="text" placeholder="Pin OTP" value={pin} onChange={e => setPin(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd"/>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 d-flex justify-content-center pl-3">
                                    <OTP handleData={handleRequestId} />
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className="col-12 splitter d-flex justify-content-end mt-3">
                    <button disabled={disableSimpan} onClick={changeEmail} className="ci-btn-warning ci-md mt-3">Simpan</button>
                </div>
            </div>
        </div>
        </>
    )
}