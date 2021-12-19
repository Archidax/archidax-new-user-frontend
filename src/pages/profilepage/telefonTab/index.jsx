import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Dropdown from "../../../components/dropdown";
import { useSelector, useDispatch } from "react-redux";
import { changeTelpNotOwn, changeTelpOwn, getStatus } from "../../../stores";
import Waiting from "../waitingComponent";
import {
  telefonFormatError,
  imageSizeError,
} from "../../../stores/errorHandler";
import OTP from "../../../components/otp";
import Translate from "../../../i18n/Translate";

export default function TelefonTab(){
  const dispatch = useDispatch();
  const history = useHistory();
  const profile = useSelector((state) => state.profileReducer);
  const loading = useSelector((state) => state.loadingReducer);

  // const [showPopUp, setShowPopUp] = useState(false);
  const [nomorbaru, setNomorbaru] = useState("");
  const [nomorexist, setNomorexist] = useState("Ya");
  const [alasan, setAlasan] = useState("");
  const [file, setFile] = useState(undefined);
  const [pin, setPin] = useState("");

  const updateTelefonOwn = () => {
    changeTelpOwn(dispatch, { noTlp: profile.telefon, newTlp: nomorbaru });
  };
  const updateTelefonNotOwn = () => {
    telefonFormatError(nomorbaru, () => {
      const formData = new FormData();
      formData.append("noTlp", profile.telefon);
      formData.append("newTlp", nomorbaru);
      formData.append("reasonChange", alasan);
      formData.append("file", file);
      changeTelpNotOwn(dispatch, formData);
    });
  };
  
  // useEffect(() => {
  //   getStatus(dispatch);
  // }, [dispatch]);

  return loading.telefonVerification ? (
    <Waiting />
  ) : (
    <>
      <div className="container-fluid p-4">
        <div className="row no-gutters mb-4">
          <div className="col-12">
            <p
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                history.replace("/profile");
              }}
              className="ci-text-white mb-0 font-14"
            >
              <i className="fas fa-arrow-circle-left edit-button mr-2" />{" "}
              {Translate('ue_kembali')}
            </p>
          </div>
        </div>

        <div className="row no-gutters bg-homepage2 p-4">
          <div className="col-12">
            <p className="label-title-top mb-0 font-roboto">
              {Translate('ut_ubah_telepon')}
            </p>
          </div>
          <div className="col-12 mt-1 mb-5">
            <p className="label-title mb-0">
              {Translate('ut_text_lengkapi')}
            </p>
          </div>
          <div className="col-10 mb-3">
            <div className="row no-gutters">
              <div className="col-12 col-md-4 d-flex align-items-center">
                <p className="ci-text-white mb-0 label-title">
                  {Translate('ut_nomor_lama')}
                </p>
              </div>

              <div className="col-12 col-md-8">
                <div className="input-group ci-inputDefault-bg">
                  <input
                    type="text"
                    className="form-control ci-inputDefault-bg-input ci-pd"
                    id="Alamat_penarikan_crypto"
                    value={profile.telefon}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 mb-3">
            <div className="row no-gutters">
              <div className="col-12 col-md-4 d-flex align-items-center">
                <p className="ci-text-white mb-0 label-title">
                  {Translate('ut_nomor_baru')}
                </p>
              </div>
              <div className="col-12 col-md-8">
                <div className="input-group ci-inputDefault-bg">
                  <input
                    type="text"
                    className="form-control ci-inputDefault-bg-input ci-pd"
                    id="Alamat_penarikan_crypto"
                    value={"+62 - " + nomorbaru}
                    onChange={(e) => {
                      if (
                        e.target.value === "+62 - " ||
                        parseInt(e.target.value[e.target.value.length - 1])
                      ) {
                        setNomorbaru(e.target.value.slice(6));
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 mb-3">
            <div className="row no-gutters">
              <div className="col-12 col-md-4 d-flex align-items-center">
                <p className="ci-text-white mb-0 label-title">
                  {Translate('ut_apakah_masih_memiliki_no')}
                </p>
              </div>
              <div className="col-12 col-md-8">
                <Dropdown
                  dataOptions={["Ya", "Tidak"]}
                  value={nomorexist}
                  onChange={setNomorexist}
                />
              </div>
            </div>
          </div>
          {nomorexist === "Ya" ? (
            <>
              <div className="col-10 mb-3">
                <div className="row no-gutters">
                  <div className="col-12 col-md-4 d-flex align-items-center">
                    <p className="ci-text-white mb-0 label-title">{Translate('ue_pin_sms')}</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="row no-gutters">
                      <div className="col-6 col-md-8">
                        <div className="input-group ci-inputDefault-bg">
                          <input
                            placeholder="Pin OTP"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            type="text"
                            className="form-control ci-inputDefault-bg-input ci-pd"
                            id="Alamat_penarikan_crypto"
                          />
                        </div>
                      </div>
                      <div className="col-6 col-md-4 d-flex justify-content-center pl-3">
                        <OTP />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 splitter d-flex justify-content-end mt-5">
                <button
                  onClick={updateTelefonOwn}
                  className="button-yellow font-roboto mt-3"
                >
                  {Translate('ue_simpan')}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="col-10 mb-3">
                <div className="row no-gutters">
                  <div className="col-12 col-md-4 d-flex align-items-center">
                    <p className="ci-text-white mb-0 label-title">
                      {Translate('ue_alasan')}
                    </p>
                  </div>
                  <div className="col-12 col-md-8">
                    <Dropdown
                      dataOptions={["Hilang", "Ganti"]}
                      value={alasan}
                      onChange={setAlasan}
                    />
                  </div>
                </div>
              </div>
              <div className="col-10 mb-3">
                <div className="row no-gutters">
                  <div className="col-12 col-md-4 d-flex align-items-center">
                    <p className="ci-text-white mb-0 label-title">
                      {Translate('ue_kartu_identitas')}
                    </p>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="row input-custom-file no-gutters">
                      <div
                        className="col-12"
                        style={{ background: "#2F3552", borderRadius: "5px" }}
                      >
                        <div className="input-group ci-inputDefault-bg p-2">
                          <label
                            for="inputFile"
                            className="mb-0 ml-4"
                            style={{
                              background: "#454964",
                              color: "white",
                              padding: "5px 14px",
                              borderRadius: "4px",
                            }}
                          >
                            {Translate('ue_uanggah')}
                          </label>
                          <input
                            style={{
                              display: "none",
                            }}
                            onChange={(e) => {
                              imageSizeError(e.target.files[0], 1000000, () =>
                                setFile(e.target.files[0]),
                              );
                            }}
                            id="inputFile"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                          />
                          <div className="pl-3 unggah-flex">
                            <span className="ci-text-white label-title font-13">
                              {file ? file.name : "Belum memilih file.."}
                            </span>
                            <span className="ci-text-white mb-0 font-10">
                              {Translate('ue_ukuran_file')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 splitter d-flex justify-content-end mt-3">
                <button
                  onClick={updateTelefonNotOwn}
                  className="ci-btn-warning ci-md mt-3"
                >
                 {Translate('ue_simpan')}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
