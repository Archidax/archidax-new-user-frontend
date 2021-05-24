import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'
import Dropdown from '../../components/dropdown'

function LaunchpadPorto() {
    
    return (
        <div className="panduan-pengguna">
            <HeaderHomePage />
            
            <Jumbotron className="panduan-pengguna-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font-weight-bold text-gold">Project Submission</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <div className="container mt-5 mb-5">
                
                <div className="row no-gutters">
                    <div className="col-12 col-xl-6 MARTIN">
                       
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-12 pr-2">
                        <div className="row no-gutters mb-2">
                            <div style={{
                                borderBottom: '1px solid white'
                            }} className="col-12 d-flex align-items-center">
                                <p style={{
                                    fontWeight: '800',
                                    letterSpacing: "1px"
                                }} className="ci-text-white font-roboto font-18 mb-2">Token Detail</p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 pr-2">
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Name</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Symbol</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Initial Symbol</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Type</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Decimal</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Amount Asset Circulating Supply</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Currency Base</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Currency Quote</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Coin Image</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg-input ci-pd p-1">
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
                                                Upload Image
                                            </label>
                                            <input
                                                style={{
                                                display: "none",
                                                }}
                                                onChange={(e) => {
                                                    // imageSizeError(e.target.files[0], 1000000, () =>
                                                    // setImg(e.target.files[0])
                                                    // );
                                                    }
                                                }
                                                id="inputFile"
                                                type="file"
                                                accept=".png, .jpg, .jpeg"
                                            />
                                             {/* <div className="pl-3 unggah-flex">
                                                 <span className="ci-text-white label-title font-13">
                                                    {img ? img.name : "Belum memilih file.."}
                                                 </span>
                                                 <span className="ci-text-white mb-0 font-10">
                                                 {Translate('ue_ukuran_file')}
                                                </span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 pl-2">
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Sale Start-Time</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Sale End-Time</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Supply</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Price</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Minimum Purchase Amount</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Protocol</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Distribution</p>
                                    </div>
                                    <div className="col-12">
                                        <Dropdown  searchBar={false} />
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Distribution</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <textarea  type="text" style={{
                                            resize: 'none'
                                            }} className="form-control ci-inputDefault-bg-input ci-pd" rows={4}/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-12 col-xl-12 AMEL">
                       
                    </div>
                </div>
            </div>

            <FooterHomePage />
        </div>
    )
}

export default LaunchpadPorto
