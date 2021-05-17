import React, { useEffect, useState } from "react";
import bgImg from "../../assets/img/affiliasi/BannerProgramAfiliasi.png";
import sepuluhjutaImg from "../../assets/img/sepuluhjuta.png";

import facebook from "../../assets/img/affiliasi/facebook.svg";
import twitter from "../../assets/img/affiliasi/twitter.svg";
import linkedin from "../../assets/img/affiliasi/linkedin.svg";

import jumlahTemanImg from "../../assets/img/affiliasi/jumlah-teman.svg";
import temanTerverifikasiImg from "../../assets/img/affiliasi/teman-terverifikasi.svg";
import komisiImg from "../../assets/img/affiliasi/komisi.svg";
import TableLaporanKomisi from "./table/TableLaporanKomisi";
import TableDaftarAffiliasi from "./table/TableDaftarAffiliasi";
import CopyrightDashboard from "../footerComponents/copyrightComponents/CopyrightDashboard";

import { getMyAffiliation } from '../../stores/index'
import { useDispatch, useSelector } from "react-redux";

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Translate from '../../i18n/Translate';

function ProgramAffiliasi() {
  const myAffiliation = useSelector(state => state.affiliasiReducer.myAffiliation)
  const dispatch = useDispatch()
  useEffect(() => {
    getMyAffiliation(dispatch)
  }, [dispatch])

  const [copied, setCopied] = useState(false)
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-12 col-md-12">
            <div
              className="card"
              style={{
                border: "none",
                borderRadius: "0px 0px 0px 0px",
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="card-body pt-0 border-0">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <h2 className="pt-5 mb-4 label-title-top2">
                      {Translate('pa_program_afiliasi')}
                    </h2>
                    <p className="font-14 text-white text-justify">
                      {Translate('pa_text_dapatkan')}
                    </p>
                    <p className="font-14 text-white text-justify">
                      {Translate('pa_text_sebarkan_link')}
                    </p>
                    <p className="font-14 text-white text-justify">
                      {Translate('pa_text_dengan_mereferensikan')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12">
            <div
              className="card"
              style={{
                background: "transparent",
                borderRadius: "0px 0px 4px 4px",
                border: "4px solid",
                borderImage:
                  "linear-gradient(to bottom, #1a1c36, rgba(0, 0, 0, 0)) 1 100%",
                borderImageSlice: "2%",
              }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-md-12">
                    <div className="card ci-customCard-1">
                      <div className="card-body">
                        <div className="container ci-layoutW-responsive">
                          <div className="row">

                            <div className="col-12 col-md-4 my-2">
                              <div className="card h-100">
                                <div className="card-body pb-0 d-flex flex-column justify-content-between">
                                  <div className="font-12 text-dark text-center font-bold">
                                    {Translate('pa_jumlah_teman')}
                                  </div>
                                  <div className="row mt-2 d-flex justify-content-between align-content-end">
                                    <img
                                      src={jumlahTemanImg}
                                      alt="jumlahTemanImg"
                                      className="w-25"
                                    />
                                    <div className="font-18 mx-2 font-bold text-dark">
                                      {myAffiliation.afiliasiCount}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-md-4 my-2">
                              <div className="card">
                                <div className="card-body pb-0">
                                  <div className="font-12 text-dark text-center font-bold">
                                    {Translate('pa_teman_terverivikasi')}
                                  </div>
                                  <div className="row mt-2 d-flex justify-content-between align-content-end">
                                    <img
                                      src={temanTerverifikasiImg}
                                      alt="temanTerverifikasiImg"
                                      className="w-25"
                                    />
                                    <div className="font-18 mx-2 font-bold text-dark">
                                      {myAffiliation.afiliasiActive}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-md-4 my-2">
                              <div className="card">
                                <div className="card-body pb-0">
                                  <div className="font-12 text-dark text-center font-bold">
                                    {Translate('pa_komisi')}
                                  </div>
                                  <div className="row mt-2 d-flex justify-content-between align-content-end">
                                    <img src={komisiImg} alt="komisiImg" className="w-25" />
                                    <div className="font-18 mx-2 font-bold text-dark">
                                      25%
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-4">
                            <div className="col-12 col-md-12">
                              {" "}
                              <p className="text-white font-12 lable-title mb-1">
                                {Translate('pa_url_afiliasi_anda')}:
                              </p>
                              <div className="input-group ci-inputDefault-bg mb-3">
                                <input
                                  type="text"
                                  value={myAffiliation.addressRef}
                                  className="form-control ci-inputDefault-bg-input pr-5"
                                  disabled
                                />
                                <CopyToClipboard
                                  text={myAffiliation.addressRef}
                                  onCopy={() => {
                                    setCopied(true)
                                    setTimeout(() => {
                                      setCopied(false)
                                    }, 5000)
                                  }}
                                >
                                  <div className="ci-inputDefault-bg-appendR">
                                    <i className={`${copied ? "text-success" : "text-white"} mt-1 far fa-copy ci-inputDefault-bg-appendR-icon font-18`} style={{ cursor: "pointer" }}></i>
                                    {copied ? <span className="mt-1 ml-2 p-0 px-1 bg-success text-white rounded text-12">Copied!</span> : ""}
                                  </div>
                                </CopyToClipboard>
                              </div>
                            </div>
                          </div>

                          <div className="row justify-content-center">
                            <div
                              className="col-3 col-md-3 rounded p-2 m-1 text-center"
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#3B5998",
                              }}
                            >
                              <img src={facebook} alt="facebook" className="w-50" />
                            </div>
                            <div
                              className="col-3 col-md-3 rounded p-2 m-1 text-center"
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#00ACEE",
                              }}
                            >
                              <img src={twitter} alt="twitter" className="w-50" />
                            </div>
                            <div
                              className="col-3 col-md-3 rounded p-2 m-1 text-center"
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#0077B5",
                              }}
                            >
                              <img src={linkedin} alt="linkedin" className="w-50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                          className="col-6 col-md-3 nav-link ci-btn-affiliasi active px-2 py-3 font-16 font-bold"
                          id="setor-tab"
                          data-toggle="tab"
                          href="#setor"
                          role="tab"
                          aria-controls="setor"
                          aria-selected="true"
                        >
                          {Translate('pa_laporan_komisi')}
                        </button>
                        <button
                          className="col-6 col-md-3 nav-link ci-btn-affiliasi px-2 py-3 font-16 font-bold"
                          id="tarik-tab"
                          data-toggle="tab"
                          href="#tarik"
                          role="tab"
                          aria-controls="tarik"
                          aria-selected="false"
                        >
                          {Translate('pa_daftar_afiliasi')}
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
                              <TableLaporanKomisi />
                            </div>
                            <div
                              className="tab-pane fade"
                              id="tarik"
                              role="tabpanel"
                              aria-labelledby="tarik-tab"
                            >
                              <TableDaftarAffiliasi />
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ProgramAffiliasi;
