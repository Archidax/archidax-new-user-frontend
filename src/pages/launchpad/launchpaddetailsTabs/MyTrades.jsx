import React, { useState } from 'react'

// import images
import MyTradesLaunchpad from '../../../assets/img/my_tradesLaunchpad.svg'

function MyTrades() {
    const [trueLogin, setTrueLogin] = useState(true)
    return (
        <>
            {
                trueLogin===true? (
                    <div className="container-fluid">
                        <div className="row no-gutters mb-2 py-5 justify-content-center align-items-center">
                            <div className="col-12 col-md-4 text-center d-none d-sm-block">
                                <img src={MyTradesLaunchpad} alt="..." className="img-fluid"/>
                            </div>
                            <div className="col-12 col-md-4">
                                <p className="font-weight-bold text-white font-roboto font-24 mb-0 text-center" style={{letterSpacing: "1.2px"}}>You Must Login First !</p>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className="container-fluid">
                        <div className="row no-gutters mb-2 py-5 justify-content-center align-items-center">
                            <div className="table-wrapper-dashboard table-responsive">
                                <table
                                    className="table ci-table-custom mb-0 table-borderless"
                                    id="dashboard-table"
                                >
                                    <thead className="my-4">
                                        <th
                                            className="ci-tableHeads-custom text-white"
                                            scope="col"
                                            style={{ height: "60px", verticalAlign: "middle" }}
                                        >
                                            No
                                        </th>
                                        <th
                                            className="ci-tableHeads-custom text-white"
                                            scope="col"
                                            style={{ height: "60px", verticalAlign: "middle" }}
                                        >
                                            Date
                                        </th>
                                        <th
                                            className="ci-tableHeads-custom text-white"
                                            scope="col"
                                            style={{ height: "60px", verticalAlign: "middle" }}
                                        >
                                            Payment
                                        </th>
                                        <th
                                            className="ci-tableHeads-custom text-white"
                                            scope="col"
                                            style={{ height: "60px", verticalAlign: "middle" }}
                                        >
                                            Amount (Coin)
                                        </th>
                                    </thead>
                                    <tbody className="mt-3">
                                        <tr style={{ height: "45px" }}>
                                            <td className="ci-verti-align-middle text-white font-14">
                                                1
                                            </td>
                                            <td className="ci-verti-align-middle text-white font-14">
                                                12/12/2021
                                            </td>
                                            <td className="ci-verti-align-middle text-white font-14">
                                                100 USDT
                                            </td>
                                            <td className="ci-verti-align-middle text-white font-14">
                                                20
                                            </td>
                                        </tr>
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
