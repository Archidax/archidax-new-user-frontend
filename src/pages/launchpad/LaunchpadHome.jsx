import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/headerComponents/headerDashboard';
import imagaCoin from '../../assets/img/btcImage.png';
import { useHistory } from 'react-router';
import { getAllIEOProjects } from '../../stores';
import { useDispatch } from 'react-redux';

function LaunchpadHome() {

    const history = useHistory()

    const datas = [
        { title: "BTC", button: "ACTIVE" },
        { title: "BTC", button: "DONE" },
        { title: "BTC", button: "ACTIVE" },
        { title: "BTC", button: "DONE" },
        { title: "BTC", button: "ACTIVE" },
        { title: "BTC", button: "ACTIVE" },
        { title: "BTC", button: "DONE" },
        { title: "BTC", button: "ACTIVE" },
    ]

    const dispatch = useDispatch()
    useEffect(() => {
        getAllIEOProjects(dispatch)
    }, [])

    return (
        <div className="wrapper">
            <HeaderDashboard />
            <div className="jumbotron launchpad-banner">
                <h3 className="text-white text-center font-24 mb-4">Archidax Launchpad</h3>
                <div className="row d-flex justify-content-center">
                    <div className="col col-md-2">
                        <button
                            onClick={() => history.push('/launchpad/project-submission')}
                            className="ci-btn-warning w-100 py-2">Submit your project</button>
                    </div>
                    <div className="col col-md-2">
                        <button
                            onClick={() => history.push('/launchpad/my-portofolio')}
                            className="ci-btnOL-secondary w-100 py-2"
                        >
                            My Portofolio
                        </button>
                    </div>
                </div>
            </div>
            <div className="content-launchpad container">
                <div className="row">
                    <div className="col-12 col-md-2 mb-3">
                        <button className="ci-btn-tabsBars w-100 py-2">ALL</button>
                    </div>
                    <div className="col-12 col-md-2  mb-3">
                        <button className="ci-btn-tabsBars w-100 py-2">ACTIVE</button>
                    </div>
                    <div className="col-12 col-md-2  mb-3">
                        <button className="ci-btn-tabsBars w-100 py-2">DONE</button>
                    </div>
                </div>
                <div className="row py-2">
                    {
                        datas.map((data, index) => (
                            <div className="col col-md-4 col-lg-3 mb-4">
                                <div className="card ci-bg-primary">
                                    <div className="card-body py-0 px-0 ">
                                        <img
                                            onClick={() => history.push('/launchpad/:index')}
                                            src={imagaCoin} alt="" className="w-100 rounded"
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <div className="d-flex justify-content-between align-items-center py-3">
                                            <div className="text-white d-flex align-items-center justify-content-between">
                                                <h3 className="font-20 mb-0">{data.title}</h3>
                                                <h4 className="font-16 mb-0 font-bolder3 ml-4">Bitcoin</h4>
                                            </div>
                                            <button className="ci-btn-success">{data.button}</button>
                                        </div>
                                        <div className="text-white text-justify pr-3">
                                            <p>IP5G is a high-tech public chain based on blockchain technology jointly created by the world's top blockchain technology team and 5G technology team.</p>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12 col-md-12 d-flex align-items-center justify-content-between">
                                                <p className="mb-0 font-14 text-secondary">Currancy</p>
                                                <p className="mb-0 font-16 text-white">ETH,USD,USDT</p>
                                            </div>
                                            <div className="col-12 col-md-12 d-flex align-items-center justify-content-between">
                                                <p className="mb-0 font-14 text-secondary">Stock</p>
                                                <p className="mb-0 font-15 text-white">1.000.000.000</p>
                                            </div>
                                            <div className="col-12 col-md-12 text-white d-flex align-items-center justify-content-between">
                                                <p className="mb-0 font-14 text-secondary">Start Date</p>
                                                <p className="mb-0 font-15 ci-text-up">9-2-2021 10:00</p>
                                            </div>
                                            <div className="col-12 col-md-12 text-white d-flex align-items-center justify-content-between">
                                                <p className="mb-0 font-14 text-secondary">End Date</p>
                                                <p className="mb-0 font-15 ci-text-down">2-2-2021 10:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default LaunchpadHome
