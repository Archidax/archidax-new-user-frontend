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
import { useParams } from 'react-router'
import { getMyLaunchpadDetail } from '../../../stores'
import { useDispatch, useSelector } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router'

import HTMLParse from 'html-react-parser'
import moment from 'moment'

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


    const detail = useSelector(state => state.partnerLaunchpadReducer.myLaunchpadDetail)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        getMyLaunchpadDetail(id, dispatch)
    }, [])
    return (
        <div
            className="card"
            style={{ borderRadius: "0px", background: "transparent", border: "4px solid #1C233F" }}
        >
            {
                detail && (
                    <div className="card-body">
                        <div className="container-fluid mt-5 mb-5">
                            <div className="row">
                                <div className="col-12 col-xl-6">
                                    <img src={!detail ? "#" : detail.coin_image}
                                        style={{
                                            width: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                    <div className="row no-gutters mt-4 ">
                                        <div className="col-12">
                                            <p className="mb-0 font-roboto text-gold font-bold font-16">Project Introduction</p>
                                            <article className="artikel ci-text-white font-12 mt-2" style={{ letterSpacing: "0.8px" }}>
                                                {/* {parse()} */}
                                                {
                                                    HTMLParse(!detail ? "<p></p>" : detail.project_detail)

                                                }
                                            </article>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mt-4">
                                        <div className="col-12">
                                            <p className="mb-2 font-roboto font-16 text-gold font-bold">Token Detail</p>
                                            <div className="pl-0">
                                                <div className="row no-gutters mb-2">
                                                    <div className="col-6">
                                                        <p className="text-white font-roboto font-14 mb-0">Project Name</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="text-white font-roboto font-14 mb-0">{detail.project_name}</p>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters mb-2">
                                                    <div className="col-6">
                                                        <p className="text-white font-roboto font-14 mb-0">Website Project</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="text-gold font-roboto font-14 mb-0">{detail.project_website}</p>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters mb-2">
                                                    <div className="col-6">
                                                        <p className="text-white font-roboto font-14 mb-0">Amount Circulating Supply</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="text-white font-roboto font-14 mb-0">{detail.amount_circulating_supply}</p>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters mb-2">
                                                    <div className="col-6">
                                                        <p className="text-white font-roboto font-14 mb-0">Token Protocol</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="text-white font-roboto font-14 mb-0">{detail.token_protocol}</p>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters mb-2">
                                                    <div className="col-6">
                                                        <p className="text-white font-roboto font-14 mb-0">Token Distribution</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="text-white font-roboto font-14 mb-0">{detail.token_distribution}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6">
                                    <div className="row no-gutters mb-4">
                                        <div className="col-12">
                                            <p className="mb-2 font-roboto text-gold font-bold font-16">Token Detail</p>
                                            <div className="pl-0">
                                                {
                                                    detail && detail.phase_details.map((el, index) => {
                                                        return (
                                                            <div className="row no-gutters mb-3">
                                                                <div className="col-3">
                                                                    <p className="text-gold font-16 font-weight-bold mb-0">Phase {index + 1}</p>
                                                                </div>
                                                                <div className="col-6">
                                                                    <p className="text-white font-roboto font-14 font-weight-bold mb-0" style={{ letterSpacing: "2px" }}>Price : <span style={{ letterSpacing: "0.6px" }} className="text-white font-weight-normal font-14">{el.token_price} {el.coin_selected}</span></p>
                                                                    <p className="text-white font-roboto font-14 font-weight-bold mb-0" style={{ letterSpacing: "2px" }}>Amount : <span style={{ letterSpacing: "0.6px" }} className="text-white font-weight-normal font-14">{el.amount}</span></p>
                                                                    <p className="text-white font-roboto font-14 font-weight-bold mb-0" style={{ letterSpacing: "2px" }}>Currency Base : <span style={{ letterSpacing: "0.6px" }} className="text-white font-weight-normal font-14">{el.coin_selected}</span></p>
                                                                    <p className="text-white font-roboto font-14 font-weight-bold mb-0" style={{ letterSpacing: "2px" }}>Minimum Purchase : <span style={{ letterSpacing: "0.6px" }} className="text-white font-weight-normal font-14">${el.minimum_purchase_amount}</span></p>
                                                                    <p className="text-white font-roboto font-14 font-weight-bold mb-0" style={{ letterSpacing: "2px" }}>Start Date : <span style={{ letterSpacing: "0.6px" }} className="text-white font-weight-normal font-14">{moment(el.start_sale_time).format("DD / MM / YYYY : hh:mm")}</span></p>
                                                                    <p className="text-white font-roboto font-14 font-weight-bold mb-0" style={{ letterSpacing: "2px" }}>End Date : <span style={{ letterSpacing: "0.6px" }} className="text-white font-weight-normal font-14">{moment(el.end_sale_time).format("DD / MM / YYYY : hh:mm")}</span></p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gold font-bold mb-4 font-roboto font-18">Team</p>
                                    <div className="row no-gutters">
                                        {
                                            detail.team.map((val, index) => {

                                                return <div key={index} className="col-3 d-flex flex-column justify-content-start align-items-center mb-5">
                                                    <img style={{
                                                        height: "120px",
                                                        width: "120px",
                                                        borderRadius: "100%"
                                                    }} src={val.photo} />
                                                    <p className="text-white mb-0 mt-2">{val.memberName}</p>
                                                    <p className="text-white mb-0">{val.position}</p>
                                                    <div className="d-flex justify-content-around mt-2">
                                                        <a href={val.facebook} target="blank" style={{
                                                            height: '20px',
                                                            width: '20px'
                                                        }} className="mr-2">
                                                            <img style={{
                                                                height: '20px',
                                                                width: '20px',
                                                                verticalAlign: 'top'
                                                            }} src={fb_grey} />
                                                        </a>
                                                        <a href={val.twitter} target="blank" style={{
                                                            height: '20px',
                                                            width: '20px'
                                                        }}>
                                                            <img style={{
                                                                height: '20px',
                                                                width: '20px',
                                                                verticalAlign: 'top'
                                                            }} src={twitter_grey} />
                                                        </a>
                                                        <a href={val.linkedin} target="blank" style={{
                                                            height: '20px',
                                                            width: '20px'
                                                        }} className="ml-2">
                                                            <img style={{
                                                                height: '20px',
                                                                width: '20px',
                                                                verticalAlign: 'top'
                                                            }} src={linkedin_grey} />
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="row no-gutters mb-4">
                                        <div className="col-12">
                                            <p className="text-white mb-2 font-roboto font-16">Document</p>
                                            <div>
                                                <a href={detail.doc_whitepaper} target="blank">
                                                    <button style={{
                                                        backgroundColor: 'transparent',
                                                        border: '1px solid white',
                                                        color: 'white',
                                                    }}
                                                        className="mr-3">
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
                                                </a>
                                                <a href={detail.doc_presentation} target="blank">
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
                                                                Presentation
                                                </p>
                                                        </div>
                                                    </button>
                                                </a>
                                                <a href={detail.doc_executiveSummary} target="blank">
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
                                                                Executive Summary
                                                </p>
                                                        </div>
                                                    </button>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters">
                                        <div className="col-12">
                                            <p className="text-white mb-2 font-roboto font-16">Sosial Media</p>
                                            <div>
                                                <a href={detail.facebook} target="blank">
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
                                                </a>
                                                <a href={detail.twitter} target="blank">
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
                                                </a>
                                                <a href={detail.linkedin} target="blank">
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
                                                </a>
                                                <a href={detail.telegram} target="blank">
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
                                                </a>

                                                <a href={detail.youtube} target="blank">
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
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TabsProjectDetail
