import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/headerComponents/headerDashboard';
import imagaCoin from '../../assets/img/btcImage.png';
import { useHistory, useLocation } from 'react-router';
import { getAllIEOProjects } from '../../stores';
import { useDispatch, useSelector } from 'react-redux';
import { convertNumber } from '../../assets/js';
import moment from 'moment'
import HTMLParse from 'html-react-parser'

function useQuery() {
    return new URLSearchParams(useLocation().search);

}

function LaunchpadHome() {
    const projects = useSelector(state => state.launchpadReducer.allIEOProjects)
    const [view, setView] = useState([])
    const history = useHistory()
    const query = useQuery();
    const filter = query.get('filter')

    const dispatch = useDispatch()
    useEffect(() => {
        getAllIEOProjects(filter, dispatch)
        setView(projects)
    }, [filter])

    useEffect(() => {
        setView(projects)
    }, [projects])

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
                        <button className="ci-btn-tabsBars w-100 py-2" onClick={() => history.push('/launchpad')}>ALL</button>
                    </div>
                    <div className="col-12 col-md-2  mb-3">
                        <button className="ci-btn-tabsBars w-100 py-2" onClick={() => history.push('/launchpad?filter=active')} > ACTIVE</button>
                    </div>
                    <div className="col-12 col-md-2  mb-3">
                        <button className="ci-btn-tabsBars w-100 py-2" onClick={() => history.push('/launchpad?filter=done')} > DONE</button>
                    </div>
                </div>
                <div className="row py-2">
                    {view &&
                        view.map((data, index) => (
                            <div className="col col-md-4 col-lg-3 mb-4">
                                <div className="card ci-bg-primary p-2">
                                    <div className="card-body py-0 px-0 ">
                                        <img
                                            onClick={() => history.push(`/launchpad/${data._id.phaseId}`)}
                                            src={data.coin_image} alt="" className="w-100 rounded"
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <div className="d-flex justify-content-between align-items-center py-3">
                                            {/* <p className="text-danger">{JSON.stringify(data)}</p> */}
                                            <div className="text-white d-flex align-items-center justify-content-between">
                                                <h3 className="font-15 mb-0">{data.asset_name} <span className="font-13 mb-0 font-bolder3 ml-1">{`(Phase ${data.phase_number})`}</span></h3>

                                            </div>
                                            <button className={`${data.active === "ACTIVE" ? "ci-btn-success" : data.active === "PENDING" ? "ci-btn-danger" : "ci-btn-warning"} font-12`}>{data.active}</button>
                                        </div>
                                        <div className="text-white text-justify pr-3">
                                            {/* <p>{HTMLParse(data.project_detail)}</p> */}
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12 col-md-12 d-flex align-items-center justify-content-between">
                                                <p className="mb-0 font-14 text-secondary">Symbol</p>
                                                <p className="mb-0 font-14 text-white">{data.currency_quote}</p>
                                            </div>
                                            <div className="col-12 col-md-12 d-flex align-items-center justify-content-between">
                                                <p className="mb-0 font-14 text-secondary">Currency</p>
                                                <p className="mb-0 font-14 text-white">{data.currency_base}</p>
                                            </div>
                                            <div className="col-12 col-md-12 d-flex align-items-center justify-content-between">
                                                <p className="mb-0 font-14 text-secondary">Stock</p>
                                                <p className="mb-0 font-14 text-white">{convertNumber.toMoney(data.amount)}</p>
                                            </div>
                                            <div className="col-12 col-md-12 text-white d-flex align-items-center justify-content-between">
                                                <p className="mb-0 font-14 text-secondary">Start Date</p>
                                                {/* <p className="mb-0 font-14 ci-text-up"> {moment(data.start_sale_time).format('YYYY-MM-DD hh:mm')}</p> */}
                                                <p className="mb-0 font-14 ci-text-up"> {moment(data.start_sale_time).local().format('YYYY-MM-DD hh:mm')}</p>
                                            </div>
                                            <div className="col-12 col-md-12 text-white d-flex align-items-center justify-content-between">
                                                <p className="mb-0 font-14 text-secondary">End Date</p>
                                                <p className="mb-0 font-14 ci-text-down">{moment(data.end_sale_time).local().format('YYYY-MM-DD hh:mm')}</p>
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
