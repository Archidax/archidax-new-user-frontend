import React from 'react'

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
import { Link } from 'react-router-dom'

function LaunchpadDetail() {

    return (
        <div className="panduan-pengguna">
            <HeaderHomePage />

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
                        <img src="https://picsum.photos/id/237/1920/1080"
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                        <div className="row no-gutters mt-4 ">
                            <div className="col-12">
                                <p className="text-gold mb-0 font-roboto font-16">Project Introduction</p>
                                <article className="artikel ci-text-white font-11 mt-2 text-justify" style={{letterSpacing: "0.8px"}}>
                                    {/* {parse()} */}
                                    Name:
                                    ProperSix
                                    <br />
                                    Industry:
                                    Cryptocurrency, Exchange, Casino, White Label
                                    <br />
                                    <br />

                                    PSIX is a token with value that grows in relation to the company’s business activity.
                                    <br />
                                    <br />

                                    ProperSix consists of three core foundations – crypto casino, casino white label and cryptocurrency exchange.
                                    <br />
                                    <br />

                                    The value of your PSIX crypto investment is not based on the speculation from the traditional public trading. The value of each token grows proportionally with the financial activities taking place in the services and products that are integral parts of the ProperSix ecosystem - casino, exchange and casino white label solution. And that - is a game changer for you!
                                    <br />
                                    <br />

                                    ProperSix Exchange
                                    <br />
                                    Built on the latest, and arguably the best blockchain technology in the world enables us to provide the most secure, fastest and one of the cheapest external transaction-platforms on the market.
                                    <br />
                                    <br />

                                    User friendly
                                    <br />
                                    Fast Transactions
                                    <br />
                                    Fees way below average market fees
                                    <br />
                                    Multi-Level Security
                                    <br />
                                    Referral program
                                    <br />
                                    Drag and Drop user interface
                                    <br />
                                    Hot and Cold Wallets
                                    <br />
                                    <br />
                                    
                                    ProperSix Casino
                                    <br />
                                    A full-fledged crypto casino powered by a state-of-the-art blockchain. Transparent transactions, our own custom casino games and new exciting promotions every day. Together with extremely experienced partners our casino platform, with its main currency PSIX, is on a track to be one of the greatest crypto-supporting casinos in the world.

                                </article>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-12 col-xl-6 mt-sm-0 mt-3">
                        
                        <ul
                            className="nav nav-pills mb-0 font-14"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item col-3 p-0">
                                <a
                                    className="nav-link text-center ci-tabs-launchpad font-weight-bold active"
                                    id="eth-tabs"
                                    data-toggle="pill"
                                    href="#pills-ethLaunchpad"
                                    role="tab"
                                    aria-controls="pills-ethLaunchpad"
                                    aria-selected="true"
                                    style={{ borderRadius: "6px 0px 0px 0px", padding: "20px 0" }}
                                >
                                    ETH
                                </a>
                            </li>
                            <li className="nav-item col-3 p-0">
                                <a
                                    className="nav-link text-center ci-tabs-launchpad font-weight-bold"
                                    id="waves-tabs"
                                    data-toggle="pill"
                                    href="#pills-wavesLaunchpad"
                                    role="tab"
                                    aria-controls="pills-wavesLaunchpad"
                                    aria-selected="false"
                                    style={{ borderRadius: "0px 0px 0px 0px", padding: "20px 0" }}
                                >
                                    WAVES
                                </a>
                            </li>
                            <li className="nav-item col-3 p-0">
                                <a
                                    className="nav-link text-center ci-tabs-launchpad font-weight-bold"
                                    id="usd-tabs"
                                    data-toggle="pill"
                                    href="#pills-usdLaunchpad"
                                    role="tab"
                                    aria-controls="pills-usdLaunchpad"
                                    aria-selected="false"
                                    style={{ borderRadius: "0px 0px 0px 0px", padding: "20px 0" }}
                                >
                                    USD
                                </a>
                            </li>
                            <li className="nav-item col-3 p-0">
                                <a
                                    className="nav-link text-center ci-tabs-launchpad font-weight-bold"
                                    id="usdt-tabs"
                                    data-toggle="pill"
                                    href="#pills-usdtLaunchpad"
                                    role="tab"
                                    aria-controls="pills-usdtLaunchpad"
                                    aria-selected="false"
                                    style={{ borderRadius: "0px 6px 0px 0px", padding: "20px 0" }}
                                >
                                    USDT
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
                                                id="pills-ethLaunchpad"
                                                role="tabpanel"
                                                aria-labelledby="eth-tabs"
                                            >
                                                <EthTabsForm />
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-wavesLaunchpad"
                                                role="tabpanel"
                                                aria-labelledby="waves-tabs"
                                            >
                                                <WavesTabsForm />
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-usdLaunchpad"
                                                role="tabpanel"
                                                aria-labelledby="usd-tabs"
                                            >
                                                <UsdTabsForm />
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-usdtLaunchpad"
                                                role="tabpanel"
                                                aria-labelledby="usdt-tabs"
                                            >
                                                <UsdtTabsForm />
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
                        <div className="card ci-customCard-1" style={{borderRadius: "0px 0px 6px 6px"}}>
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
                                        <MyTrades />
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

            <FooterHomePage />
        </div>
    )
}

export default LaunchpadDetail
