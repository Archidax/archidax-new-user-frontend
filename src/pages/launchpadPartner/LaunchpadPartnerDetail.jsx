import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import Translate from "../../i18n/Translate";
import { getAllMYLaunchpad, getMyLaunchpadDetail } from "../../stores";
import TabsProjectDetail from "./tabs/TabsProjectDetail";
import TabsSubscription from "./tabs/TabsSubscription";

function LaunchpadPartnerDetail() {
    const [tab, setTab] = useState("SUBSCRIPTION")

    return (
        <>
            <div className="container-fluid" style={{ minHeight: '50vh' }}>
                <div className="row mt-4 no-gutters">
                    <div className="col-12 col-md-12">
                        <Link to="/launchpad-partner">
                            <button
                                className="ci-btn-custom-1 py-1"
                                style={{ borderRadius: "2px", minWidth: "100px" }}
                            >
                                <i className="fas fa-arrow-left mr-2" />
                                {Translate('Back')}
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 col-md-12">
                        <div className="container-fluid">
                            <div
                                className="nav nav-tabs row"
                                id="myTab"
                                role="tablist"
                                style={{ borderBottom: "0px" }}
                            >
                                <button
                                    className="nav-link btn ci-btn-custom-1 ci-btn-tabsSetorTarik active px-5 py-3 font-16 font-bold border-0 mr-2"
                                    style={{ borderRadius: "2px", minWidth: "200px" }}
                                    id="Subscription-tab"
                                    data-toggle="tab"
                                    href="#Subscription"
                                    role="tab"
                                    aria-controls="Subscription"
                                    aria-selected="true"
                                    onClick={() => setTab("SUBSCRIPTION")}
                                >
                                    {Translate('Subscription')}
                                </button>
                                <button
                                    className="nav-link btn ci-btn-custom-1 ci-btn-tabsSetorTarik px-5 py-3 font-16 font-bold border-0"
                                    style={{ borderRadius: "2px", minWidth: "200px" }}
                                    id="ProjectDetail-tab"
                                    data-toggle="tab"
                                    href="#ProjectDetail"
                                    role="tab"
                                    aria-controls="ProjectDetail"
                                    aria-selected="false"
                                    onClick={() => setTab("PROJECT DETAILS")}
                                >
                                    {Translate('Project Detail')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 mb-5">
                    <div className="col-12 col-md-12">
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="Subscription"
                                role="tabpanel"
                                aria-labelledby="Subscription-tab"
                            >
                                {
                                    tab === "SUBSCRIPTION" && <TabsSubscription />
                                }
                            </div>
                            <div
                                className="tab-pane fade"
                                id="ProjectDetail"
                                role="tabpanel"
                                aria-labelledby="ProjectDetail-tab"
                            >
                                {
                                    tab === "PROJECT DETAILS" && <TabsProjectDetail />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LaunchpadPartnerDetail;
