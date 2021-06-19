import React from "react";
import Translate from "../../i18n/Translate";
import TabsProjectDetail from "./tabs/TabsProjectDetail";
import TabsSubscription from "./tabs/TabsSubscription";

function LaunchpadPartnerDetail() {
  return (
    <>
        <div className="container-fluid" style={{minHeight: '50vh'}}>
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
                            >
                                {Translate('Project Detail')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                    
            <div className="row mt-4">
                <div className="col-12 col-md-12">
                    <div
                        className="card"
                        style={{ borderRadius: "0px", background: "transparent", border: "4px solid #1C233F" }}
                    >
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="Subscription"
                                        role="tabpanel"
                                        aria-labelledby="Subscription-tab"
                                    >
                                        <TabsSubscription />
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="ProjectDetail"
                                        role="tabpanel"
                                        aria-labelledby="ProjectDetail-tab"
                                    >
                                        <TabsProjectDetail />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default LaunchpadPartnerDetail;
