import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import moment from 'moment'

// import images
import MyTradesLaunchpad from '../../../assets/img/my_tradesLaunchpad.svg'
import { getMyIEOPortfolioDetails } from '../../../stores'

function MyTrades() {
    const trueLogin = useSelector(state => state.userReducer.isLogin)
    const IEO = useSelector(state => state.launchpadReducer.IEODetails)
    const transactions = useSelector(state => state.launchpadReducer.myIEOPortfoliodDetails)
    const dispatch = useDispatch()
    const history = useHistory()

    const [idCoin, setIdCoin] = useState(null)

    useEffect(() => {
        if (IEO._id) {
            getMyIEOPortfolioDetails(IEO._id, dispatch)
        }
    }, [IEO])

    return (
        <>
            {
                trueLogin !== true ? (
                    <div className="container-fluid">
                        <div className="row no-gutters mb-2 py-5 justify-content-center align-items-center">
                            <div className="col-12 col-md-4 text-center d-none d-sm-block">
                                <img src={MyTradesLaunchpad} alt="..." className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-4">
                                <p className="font-weight-bold text-white font-roboto font-24 mb-0 text-center" style={{ letterSpacing: "1.2px" }}>You Must Login First !</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container-fluid">
                        <div className="row no-gutters mb-2 py-5 justify-content-center align-items-center">
                            <div className="table-wrapper-dashboard table-responsive">
                                <table
                                    className="table ci-table-custom mb-0 table-borderless"
                                    id="dashboard-table"
                                >
                                    <thead className="my-4">
                                        <th
                                            className="ci-tableHeads-custom text-white font-13"
                                            scope="col"
                                            style={{ height: "60px", verticalAlign: "middle" }}
                                        >
                                            No
                                        </th>
                                        <th
                                            className="ci-tableHeads-custom text-white font-13"
                                            scope="col"
                                            style={{ height: "60px", verticalAlign: "middle" }}
                                        >
                                            Date
                                        </th>
                                        <th
                                            className="ci-tableHeads-custom text-white font-13"
                                            scope="col"
                                            style={{ height: "60px", verticalAlign: "middle" }}
                                        >
                                            Amount (Coin)
                                        </th>
                                        <th
                                            className="ci-tableHeads-custom text-white font-13"
                                            scope="col"
                                            style={{ height: "60px", verticalAlign: "middle" }}
                                        >
                                            Value
                                        </th>
                                    </thead>
                                    <tbody className="mt-3">
                                        {
                                            transactions && transactions.data && transactions.data[0] ? (transactions.data[0].data.map((el, index) => {
                                                return (
                                                    <tr style={{ height: "45px" }}>
                                                        <td className="ci-verti-align-middle text-white font-14">
                                                            {index+1}
                                                        </td>
                                                        <td className="ci-verti-align-middle text-white font-14">
                                                            {moment(el.date).format("YYYY-MM-DD hh:mm")}
                                                        </td>
                                                        <td className="ci-verti-align-middle text-white font-14">
                                                            {el.amount} USDT
                                                        </td>
                                                        <td className="ci-verti-align-middle text-white font-14">
                                                            {el.total}
                                                    </td>
                                                    </tr>
                                                )
                                            })) : (
                                                <tr>
                                                    <td colSpan="4">No Records</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }
        </>


    )
}

export default MyTrades
