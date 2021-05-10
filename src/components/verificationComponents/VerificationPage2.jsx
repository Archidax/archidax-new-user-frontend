import React, { useEffect, useRef, useState } from 'react'

// components
// import VerificationStep from '../../stores/index'
import Dropdown from '../../components/dropdown'

// images
import max3mb from '../../assets/img/max3mb.svg'
import ktp from '../../assets/img/ktp.svg'
import selfie from '../../assets/img/selfie.svg'
import { useHistory } from 'react-router-dom'
import {imageSizeError} from '../../stores/errorHandler'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { verifyStepTwo } from "../../stores/kyc/functions";

function VerificationPage2() {
    const [typeid, setTypeId] = useState("")
    const [selfieImg, setSelfieImg] = useState(null)
    const [idCardImg, setIdCardImg] = useState(null)

    // Click to upload
    const hiddenFileInput = useRef(null)
    const hiddenFileInput2 = useRef(null)
    const hiddenClickUpload = () => {
        hiddenFileInput.current.click()
    }
    const hiddenClickUpload2 = () => {
        hiddenFileInput2.current.click()
    }

    // go back
    const history = useHistory()
    const handleBack = (e) => {
        e.preventDefault()
        history.replace("/")
    }

    // functions
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        verifyStepTwo(dispatch, {
            typeid: typeid,
            files: [idCardImg, selfieImg]
        }, history, status)
    }
    
    // sudah verifikasi step 2
    const status = useSelector(state => state.kycReducer.isFinish)
    useEffect(() => {
        if (status) {
            history.replace('/verification/waiting')
        }
    }, [history,status])

    return (
        <div className="container-fluid p-4" style={{ minHeight: "92vh" }}>
            <div className="text-white p-3" style={{ backgroundColor: "#151933", border: "none" }}>
                <p className="label-title-top mb-2">Verifikasi Akun</p>
                <p className="label-title mb-0">Lengkapi data-data berikut sesuai dengan petunjuk di atas.</p>
                <p className="label-title mb-0">Kami akan menutup akun apabila mencoba mengirimkan data yang tidak serius.</p>
                <div className="p-3 border mt-3">
                    {/* <div className="d-flex justify-content-center mb-5">
                        <VerificationStep step1={true} />
                    </div> */}
                    <form encType="multipart/form-data">
                        <div className="row mb-5 no-gutters">
                            <div className="col-12 col-md-6 p-2">
                                <div className="row no-gutters">
                                    <div className="col-12 col-md-6 pr-1">
                                        <img src={idCardImg?  URL.createObjectURL(idCardImg) : max3mb} style={{
                                            borderRadius: "15px",
                                            backgroundColor: 'grey',
                                            height: '180px',
                                            width: '240px',
                                            objectPosition: 'center',
                                            objectFit: 'cover',
                                            cursor: 'pointer',
                                        }} alt="idCardImg" className="img-fluid w-100" onClick={hiddenClickUpload} />
                                        <input type="file" id="idCard" name="idCard" ref={hiddenFileInput} onChange={(e) => {
                                            if(e.target.files[0]){
                                                imageSizeError(e.target.files[0], 1000000, () => setIdCardImg(e.target.files[0]))
                                            }else {
                                                setIdCardImg(null)
                                            }
                                        }} accept=".png, .jpg, .jpeg" style={{ display: "none" }} />
                                    </div>
                                    <div className="col-12 col-md-6  pl-1">
                                        <img src={ktp} style={{
                                            borderRadius: "15px",
                                            backgroundColor: 'grey',
                                            height: '180px',
                                            width: '240px',
                                            objectPosition: 'center',
                                            objectFit: 'cover',
                                        }} alt="ktp" className="img-fluid w-100" />
                                        <p className="label-title2 font-12 mt-2">Contoh foto dokumen yang benar</p>
                                    </div>
                                    <div className="col-12 mt-3 ">
                                        <Dropdown dataOptions={["KTP", "PASPOR"]} onChange={setTypeId} value={typeid} searchBar={false} />
                                        <p className="font-10 label-title-top mt-3 mb-0">Kartu Tanda Pengenal</p>
                                        <ul style={{
                                            listStyleType: 'none'
                                        }} className="pl-0">
                                            <li className="label-title2">- Foto kartu identitas harus berwarna.</li>
                                            <li className="label-title2">- Semua bagian dokumen harus terlihat jelas.</li>
                                            <li className="label-title2">- Foto kartu identitas tidak boleh miring.</li>
                                            <li className="label-title2">- Teks pada dokumen harus mudah dibaca. </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-md-6 p-2">
                                <div className="row no-gutters">
                                    <div className="col-12 col-md-6 pr-1">
                                        <img src={selfieImg?  URL.createObjectURL(selfieImg) : max3mb} style={{
                                            borderRadius: "15px",
                                            backgroundColor: 'grey',
                                            height: '180px',
                                            width: '240px',
                                            objectPosition: 'center',
                                            objectFit: 'cover',
                                            cursor: 'pointer',
                                        }} alt="selfieImg" className="img-fluid w-100" onClick={hiddenClickUpload2} />
                                        <input type="file" id="selfie" name="selfie" ref={hiddenFileInput2} onChange={(e) => {
                                            if(e.target.files[0]){
                                                imageSizeError(e.target.files[0], 1000000, () => setSelfieImg(e.target.files[0]))
                                            }else {
                                                setSelfieImg(null)
                                            }
                                        }} accept=".png, .jpg, .jpeg" style={{ display: "none" }} />
                                    </div>
                                    <div className="col-12 col-md-6 pl-1">
                                        <img src={selfie} style={{
                                            borderRadius: "15px",
                                            backgroundColor: 'grey',
                                            height: '180px',
                                            width: '240px',
                                            objectPosition: 'center',
                                            objectFit: 'cover',
                                        }} alt="selfie" className="img-fluid w-100" />
                                        <p className="label-title2 font-12 mt-2">Contoh foto diri yang benar</p>
                                    </div>
                                    <div className="col-12">
                                        <p className="font-10 label-title-top mt-3 mb-0">Verifikasi Wajah</p>
                                        <ul style={{
                                            listStyleType: 'none'
                                        }} className="pl-0">
                                            <li  className="label-title2">- Foto muka harus cerah dan jelas menghadap kamera.</li>
                                            <li  className="label-title2">- Foto harus berwarna.</li>
                                            <li  className="label-title2">- Seluruh wajah terlihat jelas (tidak terpotong, tanpa flash, tidak menggunakan kacamata, topi, masker/cadar).</li>
                                        </ul>

                                    </div>
                                </div>

                                {/* <div>
                                </div> */}
                            </div>
                        </div>
                    </form>
                    <div className="m-0 d-flex justify-content-between">
                        <button onClick={(e) => handleBack(e)} className="px-3 py-2 px-md-5 py-md-2 border-0 mt-3 mr-2 text-white" style={{ backgroundColor: "#2C355A" }}>Batalkan</button>
                        <button onClick={(e) => handleSubmit(e)} className="px-3 py-2 px-md-5 py-md-2 border-0 mt-3" style={{ backgroundColor: "#F9BD00" }}>Ajukan KYC</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationPage2
