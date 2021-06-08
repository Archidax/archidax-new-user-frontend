import React, { useEffect, useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'

import fb_grey from '../../assets/img/launchpad/fb_grey.svg'
import twitter_grey from '../../assets/img/launchpad/twitter_grey.svg'
import linkedin_grey from '../../assets/img/launchpad/linkedin_grey.svg'
import fbwarna from '../../assets/img/launchpad/facebook-warna.svg'
import twitterwarna from '../../assets/img/launchpad/twitter-warna.svg'
import linkedinwarna from '../../assets/img/launchpad/linkedin-warna.svg'
import telegramwarna from '../../assets/img/launchpad/telegram-warna.svg'
import youtubewarna from '../../assets/img/launchpad/youtube-warna.svg'
import dokumen from '../../assets/img/launchpad/dokumen.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

function LaunchpadPorto() {
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
                    <h3 className="font-20 text-gold font-bold">Data Koin</h3>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group ci-inputDefault-border">
                            <input type="text" className="form-control ci-inputDefault-border-input ci-pd" placeholder="Cari" name="search" required="" />
                            <div className="ci-inputDefault-border-appendR">
                                <i className="fas fa-search ci-inputDefault-border-appendR-icon text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        <table className="table text-white ci-bg-secondary">
                            <thead>
                                <th>No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Total</th>
                                <th>Action</th>
                            </thead>
                            <tbody className="ci-bg-primary">
                                <tr>
                                    <td>1</td>
                                    <td><img alt="logo" src="#" /></td>
                                    <td>Coin Bijak</td>
                                    <td>100 KBJ</td>
                                    <td>10000 USD</td>
                                    <td><button className="px-2 py-1 ci-bg-secondary text-white border-0">See More</button></td>
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

export default LaunchpadPorto
