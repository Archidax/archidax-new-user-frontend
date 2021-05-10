import React, { useState, useEffect  } from 'react'
import { useHistory } from "react-router-dom";
import Dropdown from '../../../components/dropdown'
import { useSelector, useDispatch } from 'react-redux'
import { postAddress } from '../../../stores'
import province from '../../provinces'
import { kodePosFormatError } from '../../../stores/errorHandler'
import OTP from '../../../components/otp'

export default function AlamatTab (){
    const dispatch = useDispatch()

    const kyc = useSelector(state => state.kycReducer)
    const history = useHistory()

    // const [showPopUp, setShowPopUp] = useState(false)
    // const [showPopUpSimpan, setShowPopUpSimpan] = useState(false)

    const [street, setStreet] = useState("")
    const [provinces, setProvinces] = useState("")
    const [kota, setKota] = useState("")
    const [kodePos, setKodePos] = useState("")


    const [kotaArr, setKotaArr] = useState([])
    

    // const sendPinSMS = (pin) => {
    //     setShowPopUpSimpan(true)
    // }
    
    const changeAddress = () => {
        kodePosFormatError(kodePos, () => {
            postAddress(dispatch, {street, provinces, districtOrCity: kota, zipcode: kodePos})
        })
    }
    useEffect(() => {
        setKota("")
        setKotaArr(province[provinces])
    }, [provinces])
    
    // useEffect(() => {
    //     if(!kyc.alamat) {
    //         readMe(dispatch)
    //     }
    // }, [])
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
                    }} className="ci-text-white mb-0"><i className="fas fa-arrow-circle-left edit-button mr-2" /> Kembali ke profil</p>
                </div>
            </div>
            
            <div className="row no-gutters bg-homepage2 p-4">
                <div className="col-12">
                    <p className="label-title-top mb-0 font-roboto">Ubah Alamat</p>
                </div>
                <div className="col-12 mt-1 mb-5">
                    <p className="label-title mb-0">Lengkapi isian berikut untuk mengajukan penggantian alamat.</p>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">Alamat Lama</p>
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
                            <p className="ci-text-white mb-0 label-title">Alamat Baru</p>
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
                            <p className="ci-text-white mb-0 label-title">Provinsi</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <Dropdown value={provinces} onChange={setProvinces} dataOptions={Object.keys(province)} searchBar={true}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">Kota</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <Dropdown  value={kota} onChange={setKota} dataOptions={kotaArr} searchBar={true}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">Kode Pos</p>
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
                        <p className="ci-text-white mb-0 label-title">PIN SMS</p>
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
                    <button onClick={changeAddress} className="ci-btn-warning ci-md mt-3">Simpan</button>
                </div>
            </div>
        </div>
        
        </>
    )
}