import React, { useState } from 'react'
import { Redirect, useHistory } from "react-router-dom";
import Dropdown from '../../../components/dropdown'
import {  postLimit1 } from '../../../stores';
import { useDispatch, useSelector } from 'react-redux'
import Waiting from '../waitingComponent'
import { emailFormatError, idCardFormatError, imageSizeError } from '../../../stores/errorHandler'
import {convertNumber} from '../../../assets/js'
import listBank from '../../listBank';
import Translate from '../../../i18n/Translate';

export default function Step1 () {
    const history = useHistory()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loadingReducer)
    const kyc = useSelector(state => state.kycReducer)

    // const [showPopUpSimpan, setShowPopUpSimpan] = useState(false)

    const [full_name, setFull_name] = useState("")
    const [email, setEmail] = useState("")
    const [job, setJob] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [socialMedia, setSocialMedia] = useState("")

    const [idCardNumber, setIdCardNumber] = useState("")
    const [file, setFile] = useState(undefined)

    const [noRekening, setNoRekening] = useState("")
    const [bankName, setBankName] = useState("")

    const [limit, setLimit] = useState("")

    const sendlimit = () =>{
        if (emailFormatError(email)){
            
        }else if(idCardFormatError(idCardNumber)){

        }else {
            const formData = new FormData()
            formData.append('full_name', full_name)
            formData.append('email', email)
            formData.append('job', job)
            formData.append('companyName', companyName)
            formData.append('socialMedia', socialMedia)
            formData.append('idCardNumber', idCardNumber)
            formData.append('file',file)
            formData.append('noRekening', noRekening)
            formData.append('bankName', bankName)
            formData.append('nominalLimit', limit)
            postLimit1(dispatch, formData, history)
        }
    }




    return (
        loading.limitVerification && loading.limitVerification.review ?
        <Waiting /> :
        loading.limitVerification && !loading.limitVerification.isFinish ?
        <Redirect to="/profile/limit-akun/step2" /> :
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
                    }} className="ci-text-white mb-0"><i className="fas fa-arrow-circle-left edit-button mr-2" />{Translate('ue_kembali')}</p>
                </div>
            </div>
            
            <div className="row no-gutters bg-homepage2 p-4">
                <div className="col-6">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <p className="label-title-top mb-0 font-roboto">{Translate('ul_ubah_kenaikan_limit')}</p>
                        </div>
                        <div className="col-12">
                            <p className="label-title mb-0">{Translate('ul_text_lengkapi')}</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row no-gutters">
                        <div className="col-12 d-flex justify-content-end">
                            <p className="label-title2 mb-0">{Translate('ul_limit_saat_ini')}</p>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <p className="label-title-top mb-0 font-roboto">{convertNumber.toMoney(kyc.limit)}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row no-gutters p-5">
                        <div className="col-12 d-flex justify-content-center">
                            <div style={{
                                backgroundColor: '#DFB331',
                                width: '70px',
                                height: '70px',
                                borderRadius: '100%',
                            }}className="d-flex justify-content-center align-items-center left">
                                <i style={{
                                    color: 'black',
                                }} className="fas fa-user-alt font-26" />
                            </div>
                            <div style={{
                                height: '1px',
                                backgroundColor: 'white',
                                width: '100px',
                                position: 'relative',
                                top: '35px'
                            }} className="line" />
                            <div style={{
                                backgroundColor: '#AEB4CE' ,
                                width: '70px',
                                height: '70px',
                                borderRadius: '100%',
                            }}className="d-flex justify-content-center align-items-center right">
                                <i style={{
                                    color: 'black',
                                }} className="fas fa-user-alt font-26" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    borderBottom: '1px solid grey'
                }} className="col-12 px-0 px-md-5 pb-5">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" label-title">
                                {Translate('ul_informasi_pribadi')}
                            </p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('ul_nama_lengkap')}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <input value={full_name} onChange={e => setFull_name(e.target.value)} type="text"  className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('pr_email')}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <input value={email} onChange={e => setEmail(e.target.value)} type="text"  className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('ul_pekerjaan')}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <input value={job} onChange={e => setJob(e.target.value)} type="text"  className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        borderBottom: '1px solid white'
                    }} className="row pb-4">
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('ul_nama_perusahaan')}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('ul_akun_medsos')}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <input type="text" value={socialMedia} onChange={e => setSocialMedia(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                            <p className=" mb-1 mt-1 label-title2 font-12">Facebook, twitter, Instagram, dll.</p>
                        </div>
                    </div>
                    <div className="row no-gutters mt-3">
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" label-title">
                                {Translate('ul_kartu_identitas')}
                            </p>
                        </div>
                    </div>
                    <div style={{
                        borderBottom: '1px solid white'
                    }} className="row pb-4">
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('ul_nomor_kartu')}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <input type="number" value={idCardNumber} onChange={e => setIdCardNumber(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('ul_unggah_kartu')}</p>
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
                                        {Translate('ue_uanggah')}
                                    </label>
                                    <input
                                        style={{
                                        display: "none",
                                        }}
                                        onChange={(e) => {
                                        imageSizeError(e.target.files[0], 1000000, () =>
                                        setFile(e.target.files[0])
                                        );
                                        }}
                                        id="inputFile"
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                    />
                                    <div className="pl-3 unggah-flex">
                                        <span className="ci-text-white label-title font-13">
                                        {file ? file.name : "Belum memilih file.."}
                                        </span>
                                        <span className="ci-text-white mb-0 font-10">
                                       {Translate('ue_ukuran_file')}
                                        </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters pt-4">
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" label-title">
                                {Translate('ul_bank')}
                            </p>
                        </div>
                    </div>
                    <div style={{
                        borderBottom: '1px solid white'
                    }} className="row pb-4">
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('ul_noRek')}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <input type="number" value={noRekening} onChange={e => setNoRekening(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('ul_bank')}</p>
                            <Dropdown dataOptions={Object.keys(listBank)} onChange={setBankName} value={bankName} searchBar={true} />
                        </div>
                    </div>
                    <div className="row no-gutters pt-4">
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" label-title">
                                {Translate('ul_limit_baru')}
                            </p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-4 mb-2 mb-md-0">
                            <p className=" mb-1 label-title2">{Translate('ul_nomina_limit')}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <input type="number" value={limit} onChange={e => setLimit(e.target.value)} className="form-control ci-inputDefault-bg-input ci-pd"/>
                            </div>
                            {/* <div className="col-12"> */}
                            <p className="ci-text-white label-title  font-12 mb-0 mt-1">{Translate('ul_text_limit_penarikan')}</p>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-12 px-5 d-flex justify-content-end">
                    <button onClick={sendlimit} style={{maxWidth: '120px'}} className="ci-btn-warning ci-md mt-4">{Translate('ue_simpan')}</button>
                </div>
            </div>
        </div>
        
        </>
    )
}