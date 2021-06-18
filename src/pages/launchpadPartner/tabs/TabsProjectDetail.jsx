import React, { useEffect, useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
// import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
// import HeaderHomePage from '../../components/headerComponents/headerHomePage'

import fb_grey from '../../../assets/img/launchpad/fb_grey.svg'
import twitter_grey from '../../../assets/img/launchpad/twitter_grey.svg'
import linkedin_grey from '../../../assets/img/launchpad/linkedin_grey.svg'
import fbwarna from '../../../assets/img/launchpad/facebook-warna.svg'
import twitterwarna from '../../../assets/img/launchpad/twitter-warna.svg'
import linkedinwarna from '../../../assets/img/launchpad/linkedin-warna.svg'
import telegramwarna from '../../../assets/img/launchpad/telegram-warna.svg'
import youtubewarna from '../../../assets/img/launchpad/youtube-warna.svg'
import dokumen from '../../../assets/img/launchpad/dokumen.svg'
// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router'

function TabsProjectDetail() {
    const teams = [
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
    ]
    return (
        <div className="container-fluid mt-5 mb-5">
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
                    <div className="row no-gutters mt-4">
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
                </div>
                <div className="col-12 col-xl-6">
                    <p className="text-white mb-4 font-roboto font-18">Tim</p>
                    <div className="row no-gutters">
                        {
                            teams.map((val, index) => {

                            return <div key={index} className="col-3 d-flex flex-column justify-content-start align-items-center mb-5">
                                <img style={{
                                    height: "120px",
                                    width: "120px",
                                    borderRadius: "100%"
                                }} src={val.img} />
                                <p className="text-white mb-0 mt-2">{val.name}</p>
                                <p className="text-white mb-0">{val.job}</p>
                                <div className="d-flex justify-content-around mt-2">
                                    <a href="#" style={{
                                        height: '20px',
                                        width: '20px'
                                    }}  className="mr-2">
                                        <img style={{
                                            height: '20px',
                                            width: '20px',
                                            verticalAlign: 'top'
                                        }} src={fb_grey}  />
                                    </a> 
                                    <a href="#" style={{
                                        height: '20px',
                                        width: '20px'
                                    }}>
                                        <img style={{
                                            height: '20px',
                                            width: '20px',
                                            verticalAlign: 'top'
                                        }} src={twitter_grey}  />
                                    </a> 
                                    <a href="#" style={{
                                        height: '20px',
                                        width: '20px'
                                    }}  className="ml-2">
                                        <img style={{
                                            height: '20px',
                                            width: '20px',
                                            verticalAlign: 'top'
                                        }} src={linkedin_grey}  />
                                    </a> 
                                </div>
                            </div>
                            } )
                        }
                    </div>
                    <div className="row no-gutters mb-4">
                        <div className="col-12">
                            <p className="text-white mb-2 font-roboto font-16">Dokumen</p>
                            <div>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid white',
                                    color: 'white',
                                }} className="mr-3">
                                    <div className="d-flex align-items-center p-2">
                                        <img style={{
                                            height: '20px',
                                            width: '20px'
                                        }} src={dokumen} className="mr-2" />
                                        <p className="font-roboto font-12 mb-0">
                                            Whitepaper
                                        </p>
                                    </div>
                                </button>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid white',
                                    color: 'white',
                                }} className="mr-3">
                                    <div className="d-flex align-items-center p-2">
                                        <img style={{
                                            height: '20px',
                                            width: '20px'
                                        }} src={dokumen} className="mr-2" />
                                        <p className="font-roboto font-12 mb-0">
                                            Presentasi
                                        </p>
                                    </div>
                                </button>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid white',
                                    color: 'white',
                                }} className="mr-3">
                                    <div className="d-flex align-items-center p-2">
                                        <img style={{
                                            height: '20px',
                                            width: '20px'
                                        }} src={dokumen} className="mr-2" />
                                        <p className="font-roboto font-12 mb-0">
                                            Ringkasan Berita
                                        </p>
                                    </div>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <p className="text-white mb-2 font-roboto font-16">Sosial Media</p>
                            <div>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border: 'none',
                                }} className="font-roboto font-14 mt-2 mr-2 mb-2 ml-0 align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img style={{
                                            height: '20px',
                                            width: '20px'
                                        }} src={fbwarna} className="mr-2" />
                                        <p className="text-white mb-0">
                                            Facebook
                                        </p>
                                    </div>
                                </button>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border: 'none',
                                }} className="font-roboto font-14 mt-2 mr-2 mb-2 ml-0 align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img style={{
                                            height: '20px',
                                            width: '20px'
                                        }} src={twitterwarna} className="mr-2" />
                                        <p className="text-white mb-0">
                                            Twitter
                                        </p>
                                    </div>
                                </button>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border: 'none',
                                }} className="font-roboto font-14 mt-2 mr-2 mb-2 ml-0 align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img style={{
                                            height: '20px',
                                            width: '20px'
                                        }} src={linkedinwarna} className="mr-2" />
                                        <p className="text-white mb-0">
                                            LinkedIn
                                        </p>
                                    </div>
                                </button>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border: 'none',
                                }} className="font-roboto font-14 mt-2 mr-2 mb-2 ml-0 align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img style={{
                                            height: '20px',
                                            width: '20px'
                                        }} src={telegramwarna} className="mr-2" />
                                        <p className="text-white mb-0">
                                            Telegram
                                        </p>
                                    </div>
                                </button>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border: 'none',
                                }} className="font-roboto font-14 mt-2 mr-2 mb-2 ml-0 align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img style={{
                                            height: '20px',
                                            width: '20px'
                                        }} src={youtubewarna} className="mr-2" />
                                        <p className="text-white mb-0">
                                            Youtube
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default TabsProjectDetail
