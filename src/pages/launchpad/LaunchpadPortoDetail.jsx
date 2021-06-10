import React, { useEffect } from 'react'
import { Jumbotron } from 'react-bootstrap'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getMyIEOPortfolioDetails } from '../../stores'
import moment from 'moment'

function LaunchpadPortoDetail() {
    const transactions = useSelector(state => state.launchpadReducer.myIEOPortfoliodDetails)
    const { idCoin } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        getMyIEOPortfolioDetails(idCoin, dispatch)
    }, [])
    return (
        <div className="panduan-pengguna">
            <HeaderHomePage />

            <Jumbotron className="panduan-pengguna-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font-weight-bold text-gold">My Portofolio</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-4 col-md-2" onClick={() => history.push("/launchpad/my-portofolio")} style={{ cursor: "pointer" }}>
                        <i className="fas fa-arrow-left edit-button mr-1 text-white bg-transparent pl-0" />
                        <span className="text-white">Back</span>
                    </div>
                </div>
                <div className="mt-5 mb-4">
                    <h3 className="font-20 text-gold font-bold">Coin Detail</h3>
                </div>

                {
                    transactions && transactions.data && (
                        <div className="row d-flex justify-content-between text-white mt-3">
                            <div className="col-4 d-flex">
                                <div className="mr-2">
                                    <img src={transactions.data[0].coinImage} style={{ width: "45px" }} alt="logo" />
                                </div>
                                <div className="mr-4">
                                    <div className=""><span className="font-bold text-gold">{transactions.data[0].currency_quote}</span></div>
                                    <div className=""><span className="">{transactions.data[0].asset_name}</span></div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6">
                                        <div className=""><span className="font-bold text-gold">Total Coin</span></div>
                                        <div className=""><span className="">{transactions.data[0].totalEarn} {transactions.data[0].currency_quote}</span></div>
                                    </div>
                                    <div className="col-6">
                                        <div className=""><span className="font-bold text-gold">Value Estimation</span></div>
                                        <div className=""><span className="">{transactions.data[0].totalPayment} {transactions.data[0].currency_base}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
                <div className="row mt-3">
                    <div className="col-12">
                        <table className="table text-white ci-bg-secondary table-borderless">
                            <thead>
                                <th>No</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Total</th>
                            </thead>
                            <tbody className="ci-bg-primary">
                                {
                                    transactions && transactions.data ? (
                                        transactions.data[0].data.map((el, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{moment(el.date).format("YYYY-MM-DD hh:mm")}</td>
                                                    <td>{el.amount} KBJ</td>
                                                    <td>{el.total} USD</td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="4">No records</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



            <FooterHomePage />
        </div>
    )
}

export default LaunchpadPortoDetail
