import React, { useState } from 'react'
// import { useHistory } from "react-router-dom";
import PopUpBuatAPI from '../popUpBuatApi'
import {ReactComponent as BelumAdaAPi} from '../../../assets/img/belum_ada_api.svg'

export default function ManajemenTab(){
    //const history = useHistory()
    const [showBuatApi, setShowBuatApi] = useState(false)
    // const [apis, setApis] = useState([])
    // const [showkey, setShowkey] = useState(true)
    const apis=[],showkey=true;
    
    return (
        <>
        <div className="p-4" >
            {
                showkey ?
                <div className="row no-gutters mb-4">
                    <div style={{
                        backgroundColor: "#ED4C5C"
                    }} className="col-12">
                        <p className="mb-0 py-3 px-5 text-center font-14"><i className="fas fa-exclamation-triangle pr-2"></i>Copy secret key di bawah sekarang! Simpan secret key dengan aman dan jangan sampai diketahui oleh orang lain. Selanjutnya secret key di halaman ini tidak akan ditampilkan.</p>
                    </div>
                    <div className="col-12 my-4">
                        <div className="row no-gutters align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="row no-gutters">
                                    <div div className="col-12">
                                        <div className="row no-gutters mb-3">
                                            <div div className="col-3 d-flex align-items-center">
                                                <p className="ci-text-white mb-0">API Key</p>
                                            </div>
                                            <div div className="col-9">
                                                <div className="d-flex input-custom-label-right">
                                                    <input type="text" className="" />
                                                    <i className="fas fa-copy font-22 ci-text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row no-gutters">
                                            <div div className="col-3 d-flex align-items-center">
                                                <p className="ci-text-white mb-0">Secret Key</p>
                                            </div>
                                            <div div className="col-9">
                                                <div className="d-flex input-custom-label-right">
                                                    <input type="text" className="" />
                                                    <i className="fas fa-copy font-22 ci-text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 pt-sm-4 pt-sm-4 pt-xs-4 pt-lg-0">
                                <div div className="col-12 d-flex px-md-1 px-lg-5 justify-content-around align-items-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="ci-text-white text-center">Scan QR Code</p>
                                        {/* <img id="photo-profile" src={null} className="bg-homepage-gray" alt="photo" /> */}
                                    </div>
                                    <div>
                                        <p className="mb-0 ci-text-white">atau</p>
                                    </div>
                                    <div>
                                        <button className="button-green"><i className="fas fa-cloud-download-alt font-20 pr-2"></i>Unduh Secret Key</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>:null
            }
            <div 
                className="bg-homepage2 profile-page-wrapper">
                <div className="row no-gutters p-4">
                    <div className="col-10">
                        <p className="mb-2 font-22 ci-text-white font-roboto">Manajemen API</p>
                        <p className="mb-0 font-16 ci-text-white font-roboto">Trade API bisa digunakan untuk integrasi dengan Robot Trading atau aplikasi lainnya.</p>
                    </div>
                    <div className="col-2 d-flex justify-content-end align-items-center">
                        <button
                        onClick={() => setShowBuatApi(true)} 
                        style={{
                            marginLeft: '15px'
                        }} className="button-transparant">Buat API</button>
                    </div>
                </div>
                <div className="row no-gutters p-4">
                    {
                        apis.length !== 0 ? 

                        <div style={{
                                border: '1px solid white'
                            }}
                            className="col-12 p-3">
                            <table style={{
                                background: '#00000000'
                            }}className="table table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col">Label</th>
                                    <th scope="col">API Key</th>
                                    <th scope="col">Tanggal Dibuat</th>
                                    <th scope="col">Ijin Akses</th>
                                    <th scope="col">API</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row ">Test</th>
                                        <td className="">OYTXQD4V-CSC9QVND-DCQPTUR4-EOT3ZLTC-BPMCVTWE</td>
                                        <td className="">2021-01-18 09:23</td>
                                        <td className="">VIEW, TRADE</td>
                                        <td className=""><i style={{
                                            backgroundColor: 'red'
                                        }} className="fas fa-times edit-button"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row ">Test</th>
                                        <td className="">OYTXQD4V-CSC9QVND-DCQPTUR4-EOT3ZLTC-BPMCVTWE</td>
                                        <td className="">2021-01-18 09:23</td>
                                        <td className="">VIEW, TRADE</td>
                                        <td className=""><i style={{
                                            backgroundColor: 'red'
                                        }} className="fas fa-times edit-button"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row ">Test</th>
                                        <td className="">OYTXQD4V-CSC9QVND-DCQPTUR4-EOT3ZLTC-BPMCVTWE</td>
                                        <td className="">2021-01-18 09:23</td>
                                        <td className="">VIEW, TRADE</td>
                                        <td className=""><i style={{
                                            backgroundColor: 'red'
                                        }} className="fas fa-times edit-button"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>:
                        <div className="col-12 p-5 d-flex flex-column justify-content-center align-items-center">
                            <BelumAdaAPi />
                            <p style={{
                                color: "#424766"
                            }} className="mb-0 mt-3">
                                Belum ada API
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
        <PopUpBuatAPI show={showBuatApi} setShow={setShowBuatApi} />
        </>
    )
}