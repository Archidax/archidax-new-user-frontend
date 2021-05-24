import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Dropdown from '../../../components/dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { putEmergency} from '../../../stores'
import { telefonFormatError } from '../../../stores/errorHandler'
import OTP from '../../../components/otp'
import Translate from '../../../i18n/Translate';

export default function KontakDaruratTab(){
    const history = useHistory()
    const dispatch = useDispatch()

    const kyc = useSelector(state => state.kycReducer)

    const [newNamaKerabat, setNewNamaKerabat] = useState("")
    const [newHubunganKerabat, setNewHubunganKerabat] = useState("")
    const [newNomorTelefonKerabat, setNewNomorTelefonKerabat] = useState("")
    const [pin, setPin] = useState("")

    const arrKeluarga = [
        "Ayah",
        "Ibu",
        "Suami",
        "Istri",
        "Kakak",
        "Adik"
    ]

    const putEmergencyKontak = () => {
        telefonFormatError(newNomorTelefonKerabat, () => {
            putEmergency(dispatch, {
                familyName: newNamaKerabat,
                familyNumber: "+62"+newNomorTelefonKerabat,
                familyRelation: newHubunganKerabat
            })
        })
    }

    // useEffect(() => {
    //     if(!kyc.namaKerabat){
    //         readMe(dispatch)
    //     }
    // }, []);
    
    return (
        <>
        <div className="p-4" >
            <div className="row no-gutters mb-4">
                <div className="col-12">
                    <p 
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                            history.replace('/profile')
                    }} className="ci-text-white mb-0"><i className="fas fa-arrow-circle-left edit-button mr-2" />{Translate('ue_kembali')}</p>
                </div>
            </div>
            <div className="row no-gutters bg-homepage2 p-4">
                <div className="col-12 mb-4">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <p className="label-title-top mb-0 font-roboto">{Translate('uk_ubah_kontak_darurat')}</p>
                        </div>
                        <div className="col-12">
                            <p className="label-title mb-0">{Translate('uk_text_kontak')}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row no-gutters">
                        <div className="col-md-12 col-lg-6">
                            <div className="row no-gutters">
                                <div className="col-12 mb-4">
                                    <p className="label-title-top mb-0 font-18">{Translate('uk_kontak_darurat_lama')}</p>
                                </div>
                            </div>
                            <div className="row no-gutters mb-3">
                                <div className="col-12 col-md-6 d-flex align-items-center">
                                    <p className=" mb-0 label-title">{Translate('pr_nama_kerabat')}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="mb-0  label-title2">{kyc.namaKerabat}</p>
                                </div>
                            </div>
                            <div className="row no-gutters mb-3">
                                <div className="col-12 col-md-6 d-flex align-items-center">
                                    <p className=" mb-0 label-title">{Translate('pr_hubungan_kerabat')}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="mb-0  label-title2">{kyc.hubunganKerabat}</p>
                                </div>
                            </div>
                            <div className="row no-gutters mb-3">
                                <div className="col-12 col-md-6 d-flex align-items-center">
                                    <p className=" mb-0 label-title">{Translate('pr_nomor_kerabat')}</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="mb-0  label-title2">{kyc.nomorTelefonKerabat}</p>
                                </div>
                            </div>

                        </div>
                        <div className="second-section col-md-12 col-lg-6 pl-md-0 pl-lg-4">
                            <div className="row no-gutters">

                                <div className="col-12">
                                    <p className="label-title-top mb-0 font-18">{Translate('uk_kontak_darurat_baru')}</p>
                                </div>
                                <div className="col-12 mb-4">
                                    <p className="label-title mb-0">{Translate('uk_text_lengkapi')}</p>
                                </div>
                                <div className="col-12 mb-2">
                                    <div className="row no-gutters mb-3">
                                        <div className="col-12 col-md-4 d-flex align-items-center">
                                            <p className="mb-0 label-title">{Translate('pr_nama_kerabat')}</p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="input-group ci-inputDefault-bg">
                                                <input placeholder="Nama kerabat anda" type="text" value={newNamaKerabat} onChange={e => setNewNamaKerabat(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-3">
                                        <div className="col-12 col-md-4 d-flex align-items-center">
                                            <p className=" mb-0 label-title">{Translate('pr_hubungan_kerabat')}</p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <Dropdown onChange={setNewHubunganKerabat} value={newHubunganKerabat} dataOptions={arrKeluarga} />
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-3">
                                        <div className="col-12 col-md-4 d-flex align-items-center">
                                            <p className=" mb-0  label-title">{Translate('pr_nomor_kerabat')}</p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="input-group ci-inputDefault-bg">
                                                <input type="text" placeholder="Nomor telefon kerabat anda" value={"+62 - "+ newNomorTelefonKerabat} onChange={e => {
                                                    if(e.target.value === "+62 - " || parseInt(e.target.value[e.target.value.length - 1])){
                                                        setNewNomorTelefonKerabat(e.target.value.slice(6))
                                                    }
                                                }} className="form-control ci-inputDefault-bg-input ci-pd"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-3">
                                        <div className="col-12 col-md-4 d-flex align-items-center">
                                        <p className="mb-0 label-title">{Translate('ue_pin_sms')}</p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="row no-gutters">
                                                <div className="col-6">
                                                    <div className="input-group ci-inputDefault-bg">
                                                        <input placeholder="Pin OTP" type="text"value={pin} onChange={e => setPin(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd"/>
                                                    </div>
                                                </div>
                                                <div className="col-6 d-flex justify-content-center pl-3">
                                                    <OTP />
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-12 splitter d-flex justify-content-end mt-5">
                    <button onClick={putEmergencyKontak} className="ci-btn-warning ci-md mt-3">{Translate('ue_simpan')}</button>
                </div>
            </div>
        </div>
        
        </>
    )
}