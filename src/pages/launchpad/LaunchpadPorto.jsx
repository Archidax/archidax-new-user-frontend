import React, { useEffect, useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getMyIEOPortfolio } from '../../stores'

function LaunchpadPorto() {
    const porto = useSelector(state => state.launchpadReducer.myIEOPortfolio)
    const dispatch = useDispatch()
    const history = useHistory();

    const [search, setSearch] = useState("")
    useEffect(() => {
        getMyIEOPortfolio(dispatch)
    }, [])

    const searchPorto = () => {
        getMyIEOPortfolio(dispatch, search)
    }

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
                    <div className="col-4 col-md-2" onClick={() => history.push("/launchpad")} style={{ cursor: "pointer" }}>
                        <i className="fas fa-arrow-left edit-button mr-1 text-white bg-transparent pl-0" />
                        <span className="text-white">Back</span>
                    </div>
                </div>
                <div className="mt-5 mb-4">
                    <h3 className="font-20 text-gold font-bold">Coin Data</h3>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group ci-inputDefault-border">
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                type="text" className="form-control ci-inputDefault-border-input ci-pd" placeholder="Search" name="search" required="" />
                            <div className="ci-inputDefault-border-appendR">
                                    <i onClick={() => searchPorto()} className="fas fa-search ci-inputDefault-border-appendR-icon text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        <table className="table text-white ci-bg-secondary table-borderless">
                            <thead>
                                <th>No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Total</th>
                                <th>Action</th>
                            </thead>
                            <tbody className="ci-bg-primary">
                                {
                                    porto && porto.data && porto.data.length > 0 ? (
                                        porto.data.map((el, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td><img alt="logo" src={el.coinImage} style={{ width: "30px" }} /></td>
                                                    <td>{el.asset_name}</td>
                                                    <td>{el.totalEarn} {el.currency_quote}</td>
                                                    <td>{el.totalPayment} {el.currency_base}</td>
                                                    <td><button className="px-2 py-1 ci-bg-secondary text-white border-0" onClick={() => history.push(`/launchpad/my-portofolio/${el._id}`)}>See Details</button></td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        <tr>
                                            <td className="text-center" colSpan="6">No records</td>
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

export default LaunchpadPorto
