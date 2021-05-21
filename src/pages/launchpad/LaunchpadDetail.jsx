import React from 'react'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'
import Tim from './launchpaddetailsTabs/Tim'

function LaunchpadDetail() {

    return (
        <div className="panduan-pengguna">
            <HeaderHomePage />

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12 col-xl-6">
                        <img src="https://picsum.photos/id/237/1920/1080"
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                        <div className="row no-gutters mt-4 ">
                            <div className="col-12">
                                <p className="text-white mb-0 font-roboto font-16">Pengenalan Projek</p>
                                <article className="artikel ci-text-white font-12 mt-2" style={{letterSpacing: "0.8px"}}>
                                    {/* {parse()} */}
                                    kagussusususuusususu
                                </article>
                            </div>
                        </div>
                        <div className="row no-gutters mt-4 mb-4">
                            <div className="col-12">
                                <p className="text-white mb-2 font-roboto font-16">Detail Token</p>
                                <div className="pl-4">
                                    <div className="row no-gutters mb-2">
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Name</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Name</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Website Project</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-gold font-roboto font-14 mb-0">Name</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Waktu Mulai Penjualan Token</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Name</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Waktu Akhir Penjualan Token</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Name</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Pasokan Token</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Name</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">harga Token</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Name</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Jumlah Pembelian Minimum</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Name</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Protocol Token</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Name</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Distribusi Token</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-white font-roboto font-14 mb-0">Name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="row no-gutters">
                            <div className="col-12">
                                <p className="text-white mb-2 font-roboto font-16">Sosial Media</p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-6">
                        
                        
                    </div>
                </div>

                <ul
                    className="nav nav-pills mb-0 font-14"
                    id="pills-tab"
                    role="tablist"
                >
                    <li className="nav-item col-4 p-0">
                        <a
                            className="nav-link text-center ci-tabs-launchpad font-weight-bold active"
                            id="detail-token-tabs"
                            data-toggle="pill"
                            href="#pills-detailToken"
                            role="tab"
                            aria-controls="pills-detailToken"
                            aria-selected="true"
                            style={{ borderRadius: "6px 0px 0px 0px", padding: "20px 0" }}
                        >
                            Detail Token
                        </a>
                    </li>
                    <li className="nav-item col-4 p-0">
                        <a
                            className="nav-link text-center ci-tabs-launchpad font-weight-bold"
                            id="tim-tab"
                            data-toggle="pill"
                            href="#pills-team"
                            role="tab"
                            aria-controls="pills-team"
                            aria-selected="false"
                            style={{ borderRadius: "6px 6px 0px 0px", padding: "20px 0" }}
                        >
                            Team
                        </a>
                    </li>
                    <li className="nav-item col-4 p-0">
                        <a
                            className="nav-link text-center ci-tabs-launchpad font-weight-bold"
                            id="my-trades"
                            data-toggle="pill"
                            href="#pills-myTrades"
                            role="tab"
                            aria-controls="pills-myTrades"
                            aria-selected="false"
                            style={{ borderRadius: "0px 6px 0px 0px", padding: "20px 0" }}
                        >
                            My Trade
                        </a>
                    </li>
                </ul>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12">
                        <div className="card ci-customCard-1" style={{borderRadius: "0px 0px 6px 6px"}}>
                            <div className="card-body">

                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-detailToken"
                                        role="tabpanel"
                                        aria-labelledby="detail-token-tabs"
                                    >
                                            1
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-team"
                                        role="tabpanel"
                                        aria-labelledby="tim-tabs"
                                    >
                                        <Tim />
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-myTrades"
                                        role="tabpanel"
                                        aria-labelledby="my-trades"
                                    >
                                        3
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 col-md-12">
                        <div className="card ci-customCard-1" style={{borderRadius: "6px"}}>
                            <div className="card-body">

                                <div className="container-fluid">
                                    <p className="mb-2 font-roboto font-16 text-gold">Dokumen</p>
                                    <div className="row mb-4">
                                        <div className="col-12 col-md-4">
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                border: '1px solid white',
                                                color: 'white',
                                            }} className="font-roboto w-100 font-12 mr-2 p-2">Whitepaper</button>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                border: '1px solid white',
                                                color: 'white',
                                            }} className="font-roboto w-100 font-12 p-2">Presentasi</button>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                border: '1px solid white',
                                                color: 'white',
                                            }} className="font-roboto w-100 font-12 p-2">Ringkasan Berita</button>
                                        </div>
                                    </div>

                                    <hr style={{borderColor: "#373f55"}}/>

                                    <div className="row">
                                        <div className="col-12 col-md-2">
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                color: 'white',
                                                border: 'none',
                                            }} className="font-roboto font-12 m-2">Facebook</button>
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                color: 'white',
                                            }} className="font-roboto font-12 m-2">Twitter</button>
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                color: 'white',
                                            }} className="font-roboto font-12 m-2">LinkedIn</button>
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                color: 'white',
                                            }} className="font-roboto font-12 m-2">Telegram</button>
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                border: 'none',
                                                color: 'white',
                                            }} className="font-roboto font-12 m-2">Youtube</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterHomePage />
        </div>
    )
}

export default LaunchpadDetail
