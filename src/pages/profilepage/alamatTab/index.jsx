import React, { useState, useEffect  } from 'react'
import { useHistory } from "react-router-dom";
import Dropdown from '../../../components/dropdown'
import { useSelector, useDispatch } from 'react-redux'
import { postAddress } from '../../../stores'
import province from '../../provinces'
import { kodePosFormatError } from '../../../stores/errorHandler'
import OTP from '../../../components/otp'
import Translate from '../../../i18n/Translate';

export default function AlamatTab (){
    const dispatch = useDispatch()

    const kyc = useSelector(state => state.kycReducer)
    const history = useHistory()

    const [street, setStreet] = useState("")
    const [provinces, setProvinces] = useState("")
    const [kota, setKota] = useState("")
    const [kodePos, setKodePos] = useState("")


    const [kotaArr, setKotaArr] = useState([])
    
    
    const changeAddress = () => {
        kodePosFormatError(kodePos, () => {
            postAddress(dispatch, {street, provinces, districtOrCity: kota, zipcode: kodePos})
        })
    }
    useEffect(() => {
        setKota("")
        setKotaArr(province[provinces])
    }, [provinces])
    
    return (
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
                    }} className="ci-text-white mb-0"><i className="fas fa-arrow-circle-left edit-button mr-2" /> {Translate('ue_kembali')}</p>
                </div>
            </div>
            
            <div className="row no-gutters bg-homepage2 p-4">
                <div className="col-12">
                    <p className="label-title-top mb-0 font-roboto">{Translate('ua_ubah_alamat')}</p>
                </div>
                <div className="col-12 mt-1 mb-5">
                    <p className="label-title mb-0">{Translate('ua_text_lengkapi')}</p>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">{Translate('ua_alamat_lama')}</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="col-12">
                                <p className="ci-text-white mb-1 label-title2">
                                    {kyc.alamat}
                                </p>
                            </div>
                            <div className="col-12">
                                <p className="ci-text-white mb-1 label-title2">
                                    {kyc.kota}
                                </p>
                            </div>
                            <div className="col-12">
                                <p className="ci-text-white mb-1 label-title2">
                                    {kyc.provinsi}
                                </p>
                            </div>
                            <div className="col-12">
                                <p className="ci-text-white mb-1 label-title2">
                                    {kyc.kodePos}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">{Translate('ua_alamat_baru')}</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="input-group ci-inputDefault-bg">
                                <input type="text" placeholder="Alamat domisili"  value={street} onChange={e => setStreet(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">{Translate('ua_provinsi')}</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <Dropdown value={provinces} onChange={setProvinces} dataOptions={Object.keys(province)} searchBar={true}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">{Translate('ua_kota')}</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <Dropdown  value={kota} onChange={setKota} dataOptions={kotaArr} searchBar={true}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">{Translate('ua_kode_pos')}</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="input-group ci-inputDefault-bg">
                                <input type="number" placeholder="Kode Pos domisili" value={kodePos} onChange={e => {
                                    if(e.target.value.length <= 5)setKodePos(e.target.value)}} className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                        <p className="ci-text-white mb-0 label-title">{Translate('ue_pin_sms')}</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row no-gutters">
                                <div className="col-6 col-md-8">
                                    <div className="input-group ci-inputDefault-bg">
                                        <input type="text" placeholder="Pin OTP" className="form-control ci-inputDefault-bg-input ci-pd"/>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 d-flex justify-content-center pl-3">
                                    <OTP />
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className="col-12 splitter d-flex justify-content-end mt-5">
                    <button onClick={changeAddress} className="ci-btn-warning ci-md mt-3">{Translate('ue_simpan')}</button>
                </div>
            </div>
        </div>
        
        </>
    )
}