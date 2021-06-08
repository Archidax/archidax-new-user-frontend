import React, { useEffect, useState } from 'react'

// Import Tabs
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'

// Import Tabs Content
import DetailToken from './launchpaddetailsTabs/DetailToken'
import MyTrades from './launchpaddetailsTabs/MyTrades'
import Tim from './launchpaddetailsTabs/Tim'

// Import Tabs Content Form
import EthTabsForm from './launchpaddetailForm/EthTabsForm'
import UsdTabsForm from './launchpaddetailForm/UsdTabsForm'
import UsdtTabsForm from './launchpaddetailForm/UsdtTabsForm'
import WavesTabsForm from './launchpaddetailForm/WavesTabsForm'
import { Link, useHistory, useParams } from 'react-router-dom'
import { buyIEOCoin, getIEOProjectByPhaseId, getUserBalance } from '../../stores'
import { useDispatch, useSelector } from 'react-redux'

import HTMLParse from 'html-react-parser'
import BuyingForm from './launchpaddetailForm/BuyingForm'


function LaunchpadDetail({ data }) {
    const detail = useSelector(state => state.launchpadReducer.IEODetails)
    const userBalance = useSelector(state => state.launchpadReducer.IEODetails)
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    // Get Details
    useEffect(() => {
        getIEOProjectByPhaseId(id, dispatch, history)
        // getUserBalance()
    }, [])

    // Handle Buying Coin
    const [price, setPrice] = useState(100)
    const [coin, setCoin] = useState("")
    const [amount, setAmount] = useState(0)
    const [total, setTotal] = useState(0)
    const [coinPair, setCoinPair] = useState("")
    const [pricePerPair, setPricePerPair] = useState("")
    const [pricePercentage, setPricePercentage] = useState(0)

    // User Balance
    const [balance, setBalance] = useState(1000)

    // Buy
    const buy = () => {
        const data = {
            amount,
            total,
            type: detail.currency_base,
            price: detail.price
        }
        buyIEOCoin(id, data, dispatch)
    }

    // handle dynamic input


    return (
        <div className="panduan-pengguna">
            <HeaderHomePage />
            {
                detail && (
                    <div className="container mt-5 mb-5">
                        <div className="row mb-3 mt-2">
                            <div className="col-12 col-md-3">
                                <Link to={"/launchpad"}>
                                    <i className="fas fa-arrow-left"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-xl-6">
                                <img src={detail.coin_image}
                                    style={{
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                                <div className="row no-gutters mt-4 ">
                                    <div className="col-12">
                                        <p className="text-gold mb-0 font-roboto font-16">Project Introduction</p>
                                        <article className="artikel ci-text-white font-11 mt-2 text-justify" style={{ letterSpacing: "0.8px" }}>
                                            {/* {parse()} */}
                                            <h3 className="label-title text-gold my-1">Name: {detail.asset_name}</h3>
                                            <h3 className="label-title text-gold">Industry: {detail.industry}</h3>
                                            <div className="label-title">
                                                {/* {
                                                    HTMLParse(detail.project_detail)
                                                } */}
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-xl-6 mt-sm-0 mt-3 ">

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-12">
                                        <div className="card ci-customCard-1" style={{ borderRadius: "0px 0px 6px 6px" }}>
                                            <div className="card-body">

                                                <div className="tab-content" id="pills-tabContent">
                                                    <div
                                                        className="tab-pane fade show active"
                                                        id="pills-ethLaunchpad"
                                                        role="tabpanel"
                                                        aria-labelledby="eth-tabs"
                                                    >
                                                        <h4 className="text-danger">{`Price: ${price}`}{`Amount: ${amount}`}{`Total: ${total}`}</h4>

                                                        <BuyingForm
                                                            coinPair="ETH"
                                                            amount={amount}
                                                            setAmount={setAmount}
                                                            total={total}
                                                            setTotal={setTotal}
                                                            pricePercentage={pricePercentage}
                                                            setPricePercentage={setPricePercentage}
                                                            price={price}
                                                            setPrice={setPrice}
                                                            balance={balance}
                                                            buy={buy}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <ul
                            className="nav nav-pills mb-0 font-14 mt-4"
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
                                <div className="card ci-customCard-1" style={{ borderRadius: "0px 0px 6px 6px" }}>
                                    <div className="card-body">

                                        <div className="tab-content" id="pills-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="pills-detailToken"
                                                role="tabpanel"
                                                aria-labelledby="detail-token-tabs"
                                            >
                                                <DetailToken />
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
                                                <MyTrades data={detail} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 col-md-12">
                                <div className="card ci-customCard-1" style={{ borderRadius: "6px" }}>
                                    <div className="card-body">

                                        <div className="container-fluid">
                                            <p className="mb-2 font-roboto font-16 text-gold">Dokumen</p>
                                            <div className="row mb-4">
                                                <div className="col-12 col-md-4">
                                                    <a href={detail.doc_whitepaper} target="blank">
                                                        <button style={{
                                                            backgroundColor: 'transparent',
                                                            border: '1px solid white',
                                                            color: 'white',
                                                        }} className="font-roboto w-100 font-12 mr-2 p-2">Whitepaper</button>
                                                    </a>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <a href={detail.doc_presentation} target="blank">
                                                        <button style={{
                                                            backgroundColor: 'transparent',
                                                            border: '1px solid white',
                                                            color: 'white',
                                                        }} className="font-roboto w-100 font-12 p-2">Presentasi</button>
                                                    </a>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <a href={detail.doc_executiveSummary} target="blank">
                                                        <button style={{
                                                            backgroundColor: 'transparent',
                                                            border: '1px solid white',
                                                            color: 'white',
                                                        }} className="font-roboto w-100 font-12 p-2">Ringkasan Berita</button>
                                                    </a>
                                                </div>
                                            </div>

                                            <hr style={{ borderColor: "#373f55" }} />

                                            <div className="row justify-content-center">
                                                <div className="col-12 col-md-2">
                                                    <button style={{
                                                        backgroundColor: '#3b5998',
                                                        borderRadius: "4px",
                                                        color: 'white',
                                                        border: 'none',
                                                    }} className="font-roboto w-100 py-2 text-center font-12 m-2">Facebook</button>
                                                </div>
                                                <div className="col-12 col-md-2">
                                                    <button style={{
                                                        backgroundColor: '#00acee',
                                                        borderRadius: "4px",
                                                        border: 'none',
                                                        color: 'white',
                                                    }} className="font-roboto w-100 py-2 text-center font-12 m-2">Twitter</button>
                                                </div>
                                                <div className="col-12 col-md-2">
                                                    <button style={{
                                                        backgroundColor: '#0e76a8',
                                                        borderRadius: "4px",
                                                        border: 'none',
                                                        color: 'white',
                                                    }} className="font-roboto w-100 py-2 text-center font-12 m-2">LinkedIn</button>
                                                </div>
                                                <div className="col-12 col-md-2">
                                                    <button style={{
                                                        backgroundColor: '#0088cc',
                                                        borderRadius: "4px",
                                                        border: 'none',
                                                        color: 'white',
                                                    }} className="font-roboto w-100 py-2 text-center font-12 m-2">Telegram</button>
                                                </div>
                                                <div className="col-12 col-md-2">
                                                    <button style={{
                                                        backgroundColor: '#FF0000',
                                                        borderRadius: "4px",
                                                        border: 'none',
                                                        color: 'white',
                                                    }} className="font-roboto w-100 py-2 text-center font-12 m-2">Youtube</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
            <FooterHomePage />
        </div>
    )
}

export default LaunchpadDetail
