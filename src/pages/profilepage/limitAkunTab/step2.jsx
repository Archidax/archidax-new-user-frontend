import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Waiting from '../waitingComponent'
import { useSelector, useDispatch } from 'react-redux'
import { postLimit2 } from '../../../stores'
import {convertNumber} from '../../../assets/js'

export default function UbahLimitStep2 () {
    const history = useHistory()
    const dispatch = useDispatch()
    
    const loading = useSelector(state => state.loadingReducer)
    const kyc = useSelector(state => state.kycReducer)

    // const [showPopUpSimpan, setShowPopUpSimpan] = useState(false)
    const [check, setCheck] = useState(false)
    const [quiz, setQuiz] = useState({
        quiz1: {
            question: 'Terangkan hal yang membuat Anda membutuhkan kenaikan limit penarikan.',
            answer: '',
        },
        quiz2: {
            question: 'Terangkan tujuan penggunaan dari kenaikan limit penarikan ini.',
            answer: '',
        },
        quiz3: {
            question: 'Nama layanan pihak ketiga yang Anda gunakan untuk menyimpan Bitcoin.',
            answer: '',
        },
        quiz4: {
            question: 'Jelaskan tujuan Anda memiliki akun di CRYPTOINDEX.',
            answer: '',
        },
        quiz5: {
            question: 'Jika Anda seorang trader, strategi apa yang akan Anda jalankan.',
            answer: '',
        },
        quiz6: {
            question: 'Berikan nilai estimasi dari volume trading yang akan Anda jalankan di CRYPTOINDEX (dalam IDR).',
            answer: '',
        },
        quiz7: {
            question: 'Terangkan mengenai bisnis Anda, produk atau layanan utama dari bisnis tersebut dan siapa yang menjadi pengguna layanan atau produk dari bisnis Anda.',
            answer: '',
        },
        quiz8: {
            question: 'Terangkan sumber dana Anda. Jika berasal dari pekerjaan, mohon sebutkan nama perusahaan dan posisi Anda, atau jika dari sumber lain mohon jelaskan dengan jelas dan ringkas.',
            answer: '',
        },
        quiz9: {
            question: 'Dimana Anda melakukan perdagangan Bitcoin selain di CRYPTOINDEX.',
            answer: '',
        },
    })
    const { quiz1,quiz2,quiz3,quiz4,quiz5,quiz6,quiz7,quiz8,quiz9 } = quiz

    const handleQuiz = (value, type) => {
        setQuiz({
            ...quiz,
            [type]: {
                ...quiz[type],
                answer: value
            }
        })
    }

    const sendLimit = () => {
        postLimit2(dispatch, { ...quiz })
    }

    return (
        loading.limitVerification && loading.limitVerification.review ?
        <Waiting /> :
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
                <div className="col-12 col-md-6">
                     <div className="row no-gutters">
                        <div className="col-12">
                            <p className="label-title-top mb-0 font-roboto">Ubah Kenaikan Limit Penarikan</p>
                        </div>
                        <div className="col-12">
                            <p className="label-title mb-0">Lengkapi isian berikut untuk mengajukan kenaikan limit penarikan.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                     <div className="row no-gutters">
                        <div className="col-12 d-flex justify-content-end">
                            <p className="label-title2 mb-0">Limit saat ini</p>
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
                                backgroundColor:  '#DFB331',
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
                    <div className="row no-gutters mb-3">
                        <div className="col-12 col-md-4">
                            <p className=" label-title">
                                Mohon untuk mengisi pertanyaan berikut dengan jelas dan lengkap!
                            </p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-end">
                            <p className=" mb-1 label-title2">{quiz1.question}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <textarea onChange={e => handleQuiz(e.target.value, 'quiz1')} type="text" style={{
                                resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={2}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-end">
                            <p className=" mb-1 label-title2">{quiz2.question}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <textarea onChange={e => handleQuiz(e.target.value, 'quiz2')} type="text" style={{
                                resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={2}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-end">
                            <p className=" mb-1 label-title2">{quiz3.question}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <textarea onChange={e => handleQuiz(e.target.value, 'quiz3')} type="text" style={{
                                resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={2}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-end">
                            <p className=" mb-1 label-title2">{quiz4.question}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <textarea onChange={e => handleQuiz(e.target.value, 'quiz4')} type="text" style={{
                                resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={2}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-end">
                            <p className=" mb-1 label-title2">{quiz5.question}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <textarea onChange={e => handleQuiz(e.target.value, 'quiz5')} type="text" style={{
                                resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={2}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-end">
                            <p className=" mb-1 label-title2">{quiz6.question}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <textarea onChange={e => handleQuiz(e.target.value, 'quiz6')} type="text" style={{
                                resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={2}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-end">
                            <p className=" mb-1 label-title2">{quiz7.question}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <textarea onChange={e => handleQuiz(e.target.value, 'quiz7')} type="text" style={{
                                resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={2}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-end">
                            <p className=" mb-1 label-title2">{quiz8.question}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <textarea onChange={e => handleQuiz(e.target.value, 'quiz8')} type="text" style={{
                                resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={2}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-end">
                            <p className=" mb-1 label-title2">{quiz9.question}</p>
                            <div className="input-group ci-inputDefault-bg">
                                <textarea onChange={e => handleQuiz(e.target.value, 'quiz9')} type="text" style={{
                                resize: 'none'
                                }} className="form-control ci-inputDefault-bg-input ci-pd" rows={2}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3  d-flex flex-column justify-content-center">
                        <div className="form-check">
                            <input onChange={e => {
                                setCheck(!check)
                            }} className="form-check-input" type="checkbox" value="" id="flexCheckDefaultAgree" />
                            <label className="form-check-label ci-text-white" for="flexCheckDefaultAgree">
                                Saya setuju dengan <span style={{color: '#F9BD00', textDecoration: 'underline'}}>Syarat dan Ketentuan</span>
                            </label>
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-12 px-5 d-flex justify-content-end">
                    <button onClick={sendLimit} style={{maxWidth: '120px'}} className="ci-btn-warning ci-md mt-4" disabled={!check}>Simpan</button>
                </div>
            </div>
        </div>
        
        </>
    )
}