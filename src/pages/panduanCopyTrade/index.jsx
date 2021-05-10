import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'

// Import Content
// import MemahamiApaituCrypto from './content/MemahamiApaituCrypto'
// import KeuntunganCrypto from './content/KeuntunganCrypto'
// import PersiapanTrading from './content/PersiapanTrading'
// import MariMemulai from './content/MariMemulai'
// import MengaktifkanGoogleAuthenticator from './content/MengaktifkanGoogleAuthenticator'
// import DepositdanPenarikanRupiah from './content/DepositdanPenarikanRupiah'
// import DepositdanPenarikanKripto from './content/DepositdanPenarikanKripto'
// import MetodeInstanLimit from './content/MetodeInstanLimit'

// Import Components
// import NavListPanduan from './NavList'
// import DropdownListPanduan from './DropdownList'
// import HelpNav from './HelpNav'

import GambarCopy from '../../assets/img/copytradebenefit.png'

function PanduanPengguna() {
    return (
        <div className="panduan-pengguna">
            <HeaderHomePage />
            
            <Jumbotron className="panduan-pengguna-copy-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font-weight-bold text-gold">Copy Trade</h1>
                        </div>
                        <div className="col-12">
                            <p>
                                Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <div className="container mt-5 mb-4">

                <div className="row">
                    <div className="col-12 mb-5">
                        <h3 className="text-center text-white font-roboto">Apa itu Copy Trade?</h3>
                        <div className="oval mt-4" />
                        <p className="text-justify text-white mt-5 font-roboto font-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, commodi perspiciatis officiis temporibus itaque veritatis corporis aspernatur veniam vel eum quaerat facilis nisi nesciunt odit soluta sit deleniti enim labore.</p>
                    </div>
                    <div className="col-12 mb-5">
                        <h3 className="text-center text-white  font-roboto">Keuntungan Copy Trade</h3>
                        <div className="oval mt-4" />
                        <div className="row no-gutters mt-5">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="benefit-card benefit-card p-3 p-sm-4 m-2">
                                    <div className="d-flex justify-content-center">
                                        <img src={GambarCopy} alt="img"/>
                                    </div>
                                    <p className="text-justify text-white mt-2 font-roboto font-13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia rerum impedit doloribus quae voluptate excepturi culpa magnam praesentium modi voluptatibus quibusdam voluptatum et consectetur ratione dolorum temporibus, sit sed?</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="benefit-card benefit-card p-3 p-sm-4 m-2">
                                    <div className="d-flex justify-content-center">
                                        <img src={GambarCopy} alt="img"/>
                                    </div>
                                    <p className="text-justify text-white mt-2 font-roboto font-13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia rerum impedit doloribus quae voluptate excepturi culpa magnam praesentium modi voluptatibus quibusdam voluptatum et consectetur ratione dolorum temporibus, sit sed?</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="benefit-card benefit-card p-3 p-sm-4 m-2">
                                    <div className="d-flex justify-content-center">
                                        <img src={GambarCopy} alt="img"/>
                                    </div>
                                    <p className="text-justify text-white mt-2 font-roboto font-13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia rerum impedit doloribus quae voluptate excepturi culpa magnam praesentium modi voluptatibus quibusdam voluptatum et consectetur ratione dolorum temporibus, sit sed?</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="benefit-card benefit-card p-3 p-sm-4 m-2">
                                    <div className="d-flex justify-content-center">
                                        <img src={GambarCopy} alt="img"/>
                                    </div>
                                    <p className="text-justify text-white mt-2 font-roboto font-13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia rerum impedit doloribus quae voluptate excepturi culpa magnam praesentium modi voluptatibus quibusdam voluptatum et consectetur ratione dolorum temporibus, sit sed?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <h3 className="text-center text-white font-roboto">Langkah Menggunakan Copy Trade</h3>
                        <div className="oval mt-4" />
                        <div className="row no-gutters mt-5">
                            <div className="col-12 col-md-6 p-3 order-1">
                                <img className="step-card" src="https://picsum.photos/300/200" />
                            </div>
                            <div className="col-12 col-md-6 p-3 order-2 d-flex justify-content-center align-items-center">
                                <p className="text-white m-0 font-roboto font-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore optio veniam a soluta adipisci inventore, quidem nesciunt fugiat nemo neque eveniet doloribus recusandae doloremque id temporibus sunt, sed consequatur?</p>
                            </div>
                            <div className="col-12 col-md-6 p-3 order-3 order-md-4">
                                <img className="step-card" src="https://picsum.photos/300/200" />
                            </div>
                            <div className="col-12 col-md-6 p-3 order-4 order-md-3 d-flex justify-content-center align-items-center">
                                <p className="text-white m-0 font-roboto font-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore optio veniam a soluta adipisci inventore, quidem nesciunt fugiat nemo neque eveniet doloribus recusandae doloremque id temporibus sunt, sed consequatur?</p>
                            </div>
                            <div className="col-12 col-md-6 p-3 order-5">
                                <img className="step-card" src="https://picsum.photos/300/200" />
                            </div>
                            <div className="col-12 col-md-6 p-3 order-6 d-flex justify-content-center align-items-center">
                                <p className="text-white m-0 font-roboto font-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, labore optio veniam a soluta adipisci inventore, quidem nesciunt fugiat nemo neque eveniet doloribus recusandae doloremque id temporibus sunt, sed consequatur?</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

            <FooterHomePage />
        </div>
    )
}

export default PanduanPengguna
