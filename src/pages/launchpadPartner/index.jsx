import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// Import Images
import bgImg from '../../assets/img/dashboard/bannerLaunchpad.png'
import Translate from "../../i18n/Translate";
import { getAllMyLaunchpad } from "../../stores";
import TableLaunchpad from "./table/TableLaunchpad";

function LaunchpadPartner() {
  const [status, setStatus] = useState("ACTIVE")
  const { isPartner } = useSelector(state => state.profileReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if(!isPartner) history.push('/')
  }, [])

  useEffect(() => {
    getAllMyLaunchpad(status, dispatch)
  }, [status])
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-12 col-md-12">
            <div
              className="card"
              style={{
                border: "none",
                borderRadius: "8px",
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                height: "290px",
              }}
            >
              <div className="card-body d-flex justify-content-center flex-column border-0">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <h2 className="label-title-top2">
                      {Translate('Partner Launchpad')}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ minHeight: '50vh' }}>
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
                  className="col-6 col-md-3 nav-link ci-btn-affiliasi active px-2 py-3 font-16 font-bold"
                  id="setor-tab"
                  data-toggle="tab"
                  href="#setor"
                  role="tab"
                  aria-controls="setor"
                  aria-selected="true"
                  onClick={() => setStatus("ACTIVE")}
                >
                  {Translate('Running')}
                </button>
                <button
                  className="col-6 col-md-3 nav-link ci-btn-affiliasi px-2 py-3 font-16 font-bold"
                  id="tarik-tab"
                  data-toggle="tab"
                  href="#tarik"
                  role="tab"
                  aria-controls="tarik"
                  aria-selected="false"
                  onClick={() => setStatus("DONE")}
                >
                  {Translate('Past')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <div
              className="card ci-customCard-1"
              style={{ borderRadius: "0px" }}
            >
              <div className="card-body">
                <div className="container-fluid">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="setor"
                      role="tabpanel"
                      aria-labelledby="setor-tab"
                    >
                      {
                        status === "ACTIVE" && <TableLaunchpad />
                      }
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tarik"
                      role="tabpanel"
                      aria-labelledby="tarik-tab"
                    >
                      {
                        status === "DONE" && <TableLaunchpad />
                      }
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

export default LaunchpadPartner;
