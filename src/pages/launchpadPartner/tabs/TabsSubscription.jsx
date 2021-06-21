import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import EthCoin from "../../../assets/img/iconsCoin/EtheriumCoin.png";
import { downloadMyLaunchpadSubcsription, getPartnerLaunchpadStats, getPartnerLaunchpadSubs } from '../../../stores';
import TidakAdaData from '../datas/TidakAdaData';
import Pagination from 'react-js-pagination'
import moment from 'moment'

function TabsSubscription() {
    const subs = useSelector(state => state.partnerLaunchpadReducer.myLaunchpadSubscription)
    const tableHead = ["Date", "Amount", "Total"]
    const { id } = useParams()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const dispatch = useDispatch()
    useEffect(() => {
        getPartnerLaunchpadStats(id, dispatch)
    }, [])

    useEffect(() => {
        getPartnerLaunchpadSubs(id, limit, page, dispatch)
    }, [])

    const exportToCSV = () => {
        downloadMyLaunchpadSubcsription()
    }

    return (
        <>
            <div className="row justify-content-between no-gutters mb-3">
                <div className="col-12 col-md-6">
                    <div className="launchpad-partner-stats">
                        <div className="card ci-customCard-1 my-1">
                            <div className="card-body p-2 d-flex justify-content-around align-items-center">
                                <img src={EthCoin} alt="..." width="40" height="40" />
                                <span className="mb-0 text-white font-weight-bold">ETH</span>
                            </div>
                        </div>
                        <div className="card ci-customCard-1 my-1">
                            <div className="card-body p-2 d-flex justify-content-around align-items-center">
                                <span className="mb-0 text-white font-14">Round : </span>
                                <span className="mb-0 text-white font-weight-bold font-22">1</span>
                            </div>
                        </div>
                        <div className="card ci-customCard-1 my-1">
                            <div className="card-body p-2 d-flex justify-content-around align-items-center">
                                <span className="mb-0 text-white font-18 testis">Price : </span>
                                <span className="mb-0 text-white font-weight-bold font-18">0.875</span>
                            </div>
                        </div>
                        <div className="card ci-customCard-1 my-1">
                            <div className="card-body p-2 d-flex justify-content-around align-items-center">
                                <span className="mb-0 text-white font-14">Status : </span>
                                <span className="mb-0 text-white font-weight-bold font-18">Pending</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <p className="mb-0 font-16 text-white">Countdown :</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="box" style={{ display: 'grid', gridTemplateColumns: '0.25fr 0.1fr 0.25fr 0.1fr 0.25fr 0.1fr 0.25fr' }}>
                                <div className="box-time py-1" style={{ border: '1px solid #FFFFFF', borderRadius: '8px', color: 'white', textAlign: 'center' }}>
                                    <p className="mb-0 font-32 font-digital">03</p>
                                    <p className="mb-0 font-16">Day</p>
                                </div>
                                <div className="box-time d-flex justify-content-center align-items-center">
                                    <p className="font-24 text-white mb-0">:</p>
                                </div>
                                <div className="box-time py-1" style={{ border: '1px solid #FFFFFF', borderRadius: '8px', color: 'white', textAlign: 'center' }}>
                                    <p className="mb-0 font-32 font-digital">03</p>
                                    <p className="mb-0 font-16">Hour</p>
                                </div>
                                <div className="box-time d-flex justify-content-center align-items-center">
                                    <p className="font-24 text-white mb-0">:</p>
                                </div>
                                <div className="box-time py-1" style={{ border: '1px solid #FFFFFF', borderRadius: '8px', color: 'white', textAlign: 'center' }}>
                                    <p className="mb-0 font-32 font-digital">03</p>
                                    <p className="mb-0 font-16">Min</p>
                                </div>
                                <div className="box-time d-flex justify-content-center align-items-center">
                                    <p className="font-24 text-white mb-0">:</p>
                                </div>
                                <div className="box-time py-1" style={{ border: '1px solid #FFFFFF', borderRadius: '8px', color: 'white', textAlign: 'center' }}>
                                    <p className="mb-0 font-32 font-digital">03</p>
                                    <p className="mb-0 font-16">Sec</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="card"
                style={{ minHeight: "62vh", borderRadius: "0px", background: "transparent", border: "4px solid #1C233F" }}
            >
                <div className="card-body">
                    <div className="container-fluid mt-2 mb-5">

                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-4 mb-4">
                                <div className="card-launchpad-partner">
                                    <div className="card-body">
                                        <h3 className="font-16 my-2 text-white">Total Participants</h3>
                                        <div className="d-flex align-items-center justify-content-between my-2">
                                            <h3 className="mb-0 font-24 text-white">600</h3>
                                            <img src={EthCoin} alt="" width={35} />
                                        </div>
                                        <h3 className="font-16 my-2 font-normal text-white">Users</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 mb-4">
                                <div className="card-launchpad-partner ">
                                    <div className="card-body">
                                        <h3 className="font-16 my-2 text-white ">Total Sales</h3>
                                        <div className="d-flex align-items-center justify-content-between  my-2 ">
                                            <h3 className="mb-0 font-24 text-white">10.000</h3>
                                            <img src={EthCoin} alt="" width={35} />
                                        </div>
                                        <h3 className="font-16 my-2 font-normal text-white">USD</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 mb-4">
                                <div className="card-launchpad-partner">
                                    <div className="card-body">
                                        <h3 className="font-16 my-2 text-white ">Achieve</h3>
                                        <div className="d-flex align-items-center justify-content-between  my-2 ">
                                            <h3 className="mb-0 font-24 text-white">20%</h3>
                                            <img src={EthCoin} alt="" width={35} />
                                        </div>
                                        <h3 className="font-16 my-2 font-normal text-white">Percentage</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-between" >
                            <div className="col col-md-3 d-flex align-items-center">
                                <h3 className="font-18 text-white mb-0">Subscription History</h3>
                            </div>
                            <div className="col col-md-2">
                                <button onClick={() => downloadMyLaunchpadSubcsription(id)} className={`ci-btn-primary w-100 py-2`} style={{ background: "#2c355a" }}>
                                    Export to CSV
                                </button>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-hover border-0">
                                        <thead className="ci-bg-primary text-white" style={{ borderBottom: "1px solid #F9BD00" }}>
                                            <tr>
                                                {
                                                    tableHead.map((head, index) => {
                                                        return (
                                                            <th scope="col" style={{ border: "none" }} key={index}>{head}</th>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                subs ? (
                                                    subs.data.map((item, index) => {
                                                        return (
                                                            <tr key={index} className="text-white">
                                                                <td className="border-0 ci-text-blueLight">{moment(item.createdAt).format("DD/MM/YYYY hh:mm")}</td>
                                                                <td className="border-0 ci-text-blueLight">{item.amount} {item.currency_quote}</td>
                                                                <td className="border-0 ci-text-blueLight">{item.total} {item.currency_base}</td>
                                                            </tr>
                                                        )
                                                    })
                                                ) : <TidakAdaData />
                                            }
                                            {
                                                subs && subs.data.length > 10 ?
                                                    <Pagination
                                                        itemClass="page-item"
                                                        linkClass="page-link"
                                                        activePage={page}
                                                        itemsCountPerPage={limit}
                                                        pageRangeDisplayed={5}
                                                        totalItemsCount={subs.data.totalDocs}
                                                        onChange={(e) => setPage(e)}
                                                        prevPageText={<i class="fas fa-angle-left"></i>}
                                                        nextPageText={<i class="fas fa-angle-right"></i>}
                                                        firstPageText={<i class="fas fa-angle-double-left"></i>}
                                                        lastPageText={<i class="fas fa-angle-double-right"></i>}
                                                    />
                                                    :
                                                    ""
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabsSubscription
