import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import Dropdown from "../../../components/dropdown";
import DropdownCustom from "../../../components/dropdownCustom";
import { useSelector, useDispatch } from "react-redux";
import { postFoto, deactive } from "../../../stores";
import defaultpp from "../../../assets/img/default_PP.png";
import { imageSizeError } from "../../../stores/errorHandler";
import Language from "../../listLanguage";
import GMT from "../../timezone";
import { convertNumber } from "../../../assets/js";
import Popup from "../../../components/popUps";
import {changeGMT, changeBahasa, changeSubs} from '../../../stores'
import Translate from "../../../i18n/Translate";

export default function ProfileTab(){
  const dispatch = useDispatch();
  const history = useHistory();
  const profile = useSelector((state) => state.profileReducer);
  const kyc = useSelector((state) => state.kycReducer);
  const [lang, setLang] = useState(profile.bahasa);
  const [subs, setSubs] = useState(profile.langganan);
  const [zone, setZone] = useState(profile.timezone);
  const opsiSubs = [{val: false, text:"Tidak Berlangganan"}, {val: true, text:"Berlangganan"}];
  const sendImage = (img) => {
    const formData = new FormData();
    formData.append("file", img);
    postFoto(dispatch, formData);
  };
  const deactivate = (e) => {
    e.preventDefault();
    Popup.fire({
      title: "Konfirmasi!",
      text: "Apakah anda yakin akan menonaktifkan akun anda?",
      cancel: true,
      onClickOk: () => {
        deactive(dispatch);
      },
    });
  };
  useEffect(() => {
    if(lang){
      changeBahasa(dispatch, { bahasa: lang })
    }
  }, [lang,dispatch])
  useEffect(() => {
    if(subs !== undefined && subs !== null){
      changeSubs(dispatch, {langganan: subs})
    }
  }, [subs,dispatch])
  useEffect(() => {
    if(zone){
      changeGMT(dispatch, {timezone: zone})
    }
  }, [zone,dispatch])
  return (
    <div className="p-4">
      <div className="bg-homepage2 profile-page-wrapper">
        <div className="row no-gutters p-4">
          <div className="col-md-12 col-lg-12">
            <div className="row no-gutters first-section pb-3">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                <div className="row no-gutters mb-3">
                  <div className="col-12">
                    <div id="photo-profile">
                      <img
                        style={{
                          objectPosition: "center",
                          objectFit: "cover",
                          borderRadius: "5px",
                          boxShadow: "2px 1px 11px 0px rgba(0,0,0,0.75)",
                        }}
                        src={profile.foto ? profile.foto : defaultpp}
                        alt="foto"
                      />
                      <label for="inputFile">{Translate('pr_ganti_foto')}</label>
                      <input
                        style={{
                          display: "none",
                        }}
                        onChange={(e) => {
                          imageSizeError(e.target.files[0], 500000, () =>
                            sendImage(e.target.files[0]),
                          );
                        }}
                        id="inputFile"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                      />
                    </div>
                    <p className="ci-text-white label-title2 mb-0 mt-1 font-14">
                      {Translate('pr_ukuran_max')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                <div className="row no-gutters ml-0 ml-xl-3">
                  <div className="col-12 mb-2">
                    <p className="label-title-top mb-0 font-roboto">{Translate('pr_profile')}</p>
                  </div>
                  <div className="col-12 mb-2 mb-md-1">
                    <div className="row no-gutters">
                      <div className="col-12 col-md-3 d-flex align-items-end">
                        <p className="ci-text-white mb-0 label-title">
                          {Translate('pr_status_kyc')}
                        </p>
                      </div>
                      <div className="col-12 col-md-9">
                        <div className="row no-gutters">
                          <div className="col-12" style={{maxWidth: '120px'}}>
                            {kyc && kyc.approved_status ? (
                              <div
                                style={{
                                  border: "1px solid #00A2E0",
                                  borderRadius: "4px",
                                  color: "#00A2E0",
                                  cursor: "default",
                                  padding: "2px 0",
                                }}
                                className="text-center"
                              >
                                <p className=" mb-0 lable-title">
                                  {Translate('db_terverifikasi')}
                                </p>
                              </div>
                            ) : kyc &&
                              kyc.kycStatus === "2" &&
                              !kyc.approved_status &&
                              kyc.isFinish ? (
                              <div
                                style={{
                                  border: "1px solid #F9BD00",
                                  borderRadius: "4px",
                                  color: "#F9BD00",
                                  cursor: "default",
                                  padding: "2px 0",
                                }}
                                className="text-center"
                              >
                                <p className=" mb-0 lable-title">
                                  {Translate('db_menunggu_verifikasi')}
                                </p>
                              </div>
                            ) : (
                              <button
                                onClick={() => {
                                  if (!kyc.kycStatus) {
                                    history.push("/verification/step1");
                                  } else if (kyc.kycStatus === "1") {
                                    history.push("/verification/step2");
                                  }
                                }}
                                className="ci-btnOL-danger w-100"
                                style={{
                                  cursor: "pointer",
                                  padding: "2px 0",
                                }}
                              >
                                {Translate('db_belum_verifikasi')}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-1">
                    <div className="row no-gutters">
                      <div className="col-12 col-md-3 d-flex align-items-center">
                        <p className="ci-text-white mb-0 label-title">
                          {Translate('pr_nama_lengkap')}
                        </p>
                      </div>
                      <div className="col-12 col-md-9">
                        <p className="ci-text-white  mb-0 label-title2">
                          {profile.namaLengkap}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="row no-gutters">
                      <div className="col-12 col-md-3 d-flex align-items-center">
                        <p className="ci-text-white mb-0 label-title">
                          {Translate('pa_username')}
                        </p>
                      </div>
                      <div className="col-12 col-md-9">
                        <p className="ci-text-white  mb-0 label-title2">
                          {profile.username}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="row no-gutters">
                      <div className="col-12 col-md-3 d-flex align-items-center">
                        <p className="ci-text-white mb-0 label-title">{Translate('pr_email')}</p>
                      </div>
                      <div className="col-12 col-md-9">
                        <p className="ci-text-white mb-0 label-title2">
                          {profile.email}{" "}
                          <i
                            onClick={() => {
                              history.push("/profile/ubah-email");
                            }}
                            className="fas fa-pencil-alt edit-button"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="row no-gutters">
                      <div className="col-12 col-md-3 d-flex align-items-center">
                        <p className="ci-text-white mb-0 label-title">
                         {Translate('pr_nomor_telefon')}
                        </p>
                      </div>
                      <div className="col-12 col-md-9">
                        <p className="ci-text-white mb-0 label-title2">
                          {profile.telefon}{" "}
                          <i
                            onClick={() => {
                              history.push("/profile/ubah-telefon");
                            }}
                            className="fas fa-pencil-alt edit-button"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div className="row no-gutters">
                      <div className="col-12 col-md-3 d-flex align-items-center">
                        <p className="ci-text-white mb-0 label-title">{Translate('bn_alamat')}</p>
                      </div>
                      <div className="col-12 col-md-9">
                        <p className="ci-text-white mb-0 label-title2">
                          {`${kyc.alamat}, ${kyc.kota}, ${kyc.provinsi}, ${kyc.kodePos}`}{" "}
                          <i
                            onClick={() => {
                              history.push("/profile/ubah-alamat");
                            }}
                            className="fas fa-pencil-alt edit-button"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters mt-3 setting-akun">
              <div className="col-12 mb-2">
                <p className="label-title-top mb-0 font-roboto">
                  {Translate('pr_limit_akun')}{" "}
                  <i
                    onClick={() => {
                      history.push("/profile/limit-akun");
                    }}
                    className="fas fa-pencil-alt edit-button"
                  ></i>
                </p>
              </div>
              <div className="col-12 info-wrapper">
                <div className="row no-gutters mb-2">
                  <div className="col-12 col-md-3">
                    <p className="ci-text-white mb-0 label-title">
                      {Translate('pr_limit_penarikan')}
                    </p>
                  </div>
                  <div className="col-12 col-md-9">
                    <p className="ci-text-white mb-0 label-title2">
                      {convertNumber.toMoney(kyc.limit)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 info-wrapper">
                <div className="row no-gutters">
                  <div className="col-12 col-md-3">
                    <p className="ci-text-white mb-0 label-title">
                     {Translate('pr_status_akun')}
                    </p>
                  </div>
                  <div className="col-12 col-md-9">
                    <p className="ci-text-white mb-0 label-title2">-</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters mt-3">
              <div className="col-12 mb-2">
                <p className="label-title-top mb-0 font-roboto">
                  {Translate('pr_kontak_darurat')}{" "}
                  <i
                    onClick={() => {
                      history.push("/profile/ubah-kontak-darurat");
                    }}
                    className="fas fa-pencil-alt edit-button"
                  ></i>
                </p>
              </div>
              <div className="col-12 mb-2">
                <div className="row no-gutters">
                  <div className="col-12 col-md-3 d-flex align-items-center">
                    <p className=" mb-0 label-title">{Translate('pr_nama_kerabat')}</p>
                  </div>
                  <div className="col-12 col-md-9">
                    <p className=" mb-0 label-title2">{kyc.namaKerabat}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row no-gutters">
                  <div className="col-12 col-md-3 d-flex align-items-center">
                    <p className=" mb-0 label-title">{Translate('pr_hubungan_kerabat')}</p>
                  </div>
                  <div className="col-12 col-md-9">
                    <p className=" mb-0 label-title2">{kyc.hubunganKerabat}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row no-gutters">
                  <div className="col-12 col-md-3 d-flex align-items-center">
                    <p className=" mb-0 label-title">{Translate('pr_nomor_kerabat')}</p>
                  </div>
                  <div className="col-12 col-md-9">
                    <p className=" mb-0 label-title2">
                      {kyc.nomorTelefonKerabat}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters mt-3 setting-akun first-section pb-3">
              <div className="col-12 mb-2">
                <p className="label-title-top mb-0 font-roboto">
                  {Translate('pr_pengaturan_akun')}
                </p>
              </div>
              <div className="col-12 mb-2">
                <div className="row no-gutters">
                  <div className="col-12 col-md-3 d-flex align-items-center">
                    <p className=" mb-0 label-title">{Translate('pr_zona_waktu')}</p>
                  </div>
                  <div className="col-12 col-md-9">
                    <DropdownCustom
                      dataOptions={GMT}
                      onChange={setZone}
                      value={zone}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row no-gutters">
                  <div className="col-12 col-md-3 d-flex align-items-center">
                    <p className=" mb-0 label-title">{Translate('pr_bahasa')}</p>
                  </div>
                  <div className="col-12 col-md-9">
                    <DropdownCustom
                      dataOptions={Language}
                      onChange={setLang}
                      value={lang}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row no-gutters">
                  <div className="col-12 col-md-3 d-flex align-items-center">
                    <p className=" mb-0 label-title">{Translate('pr_newsletter')}</p>
                  </div>
                  <div className="col-12 col-md-9">
                    <DropdownCustom
                      dataOptions={opsiSubs}
                      value={subs}
                      onChange={setSubs}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={deactivate} className="ci-btn-danger ci-md mt-3">
              {Translate('pr_de_aktifasi')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
