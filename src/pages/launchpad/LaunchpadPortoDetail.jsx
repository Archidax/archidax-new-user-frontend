import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'
import { useHistory } from 'react-router'

function LaunchpadPortoDetail() {
    const history = useHistory();

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
                        <span className="text-white">Kembali</span>
                    </div>
                </div>
                <div className="mt-5 mb-4">
                    <h3 className="font-20 text-gold font-bold">Detail Koin</h3>
                </div>
                <div className="row">
                    
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        <table className="table text-white ci-bg-secondary">
                            <thead>
                                <th>No</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Total</th>
                            </thead>
                            <tbody className="ci-bg-primary">
                                <tr>
                                    <td>1</td>
                                    <td>17 Agustus 1945</td>
                                    <td>1000 KBJ</td>
                                    <td>10000000 USD</td>
                                </tr>
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
