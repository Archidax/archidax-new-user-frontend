import React, { useState } from "react";
import logo from "../../../assets/img/logo.svg";
// import { useHistory } from "react-router-dom";
import Translate from "../../../i18n/Translate";

import axios from "axios";
import { baseUrl } from "../../../stores/index";
import errorHandler from "../../../stores/errorHandler";
import popUps from "../../popUps";
import { useSelector } from "react-redux";

export default function FooterHomePage() {
  // const history = useHistory();
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const [email, setEmail] = useState("");

  const subscribeMe = () => {
    axios({
      method: "POST",
      url: `${baseUrl}/news/subscribeNews`,
      headers: {
        jwttoken: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : null,
      },
      data: { email: email },
    })
      .then(({ data }) => {
        console.log(data);
        popUps.fire({
          title: "Berhasil!",
          text: data.message,
        });
      })
      .catch((err) => {
        errorHandler(err);
      });
  };
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="bg-homepage2">
        <div className="container pt-5">
          <div className="row">
            <div className="col-6 col-lg-3 col-md-6 mb-4 mb-lg-0">
              <img
                src={logo}
                alt=""
                className="mb-3 width-responsive-logo-footer"
              />
              <p className="font-italic text-white">
                Investments and employment Blockchain Technologies. Optimize
                your business blockchain technology and Smart Contracts.
              </p>
            </div>
            <div className="col-6 col-lg-2 col-md-6 mb-4 mb-lg-0 mt-2">
              <h6 className="text-uppercase font-weight-bold mb-4 text-gold">
                {Translate("f1_tentang")}
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <a href="/berita" className="text-lg-footer font-14">
                    {Translate("f1_berita")}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/bantuan" className="text-lg-footer font-14">
                    {Translate("f1_faq")}
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/berita/pengumuman"
                    className="text-lg-footer font-14"
                  >
                    {Translate("f1_pengunguman")}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/karir" className="text-lg-footer font-14">
                    {Translate("f1_karir")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 col-md-6 mb-4 mb-lg-0 mt-2">
              <h6 className="text-uppercase font-weight-bold mb-4 text-gold">
                {Translate("f2_legal")}
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <a href="/syarat-pengguna" className="text-lg-footer font-14">
                    {Translate("f2_syarat")}
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/kebijakan-privasi"
                    className="text-lg-footer font-14"
                  >
                    {Translate("f2_privasi")}
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="kebijakan-KYC-AML"
                    className="text-lg-footer font-14"
                  >
                    {Translate("f2_kyc")}
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/perjanjian-pengguna"
                    className="text-lg-footer font-14"
                  >
                    {Translate("f2_pernjanjian")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 col-md-6 mb-4 mb-lg-0 mt-2">
              <h6 className="text-uppercase font-weight-bold mb-4 text-gold">
                {Translate("f3_layanan")}
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <a href="https://docs.cryptoindex.id/#our-api" target='_blank' className="text-lg-footer font-14">
                    {Translate("f3_api")}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/referral" className="text-lg-footer font-14">
                    {Translate("f3_referral")}
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/agency-partnership"
                    className="text-lg-footer font-14"
                  >
                    Agency & Partnership
                  </a>
                </li>
                {/* <li className="mb-3">
                  <a href="/merchant" className="text-lg-footer font-14">
                    {Translate("f3_merchant")}
                  </a>
                </li> */}

                <li className="mb-3">
                  <a href="/buy-crypto" className="text-lg-footer font-14">
                    {Translate("f3_beli")}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/fee" className="text-lg-footer font-14">
                    Fee Rate
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/bantuan"
                    target="_blank"
                    className="text-lg-footer font-14"
                    rel="noreferrer"
                  >
                    {Translate("f3_pusat")}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/panduan-pemula" className="text-lg-footer font-14">
                    {Translate("f3_panduan")}
                  </a>
                </li>
              </ul>
            </div>
            {!isLogin && (
              <div className="col-12 col-lg-3 col-md-6 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4 text-gold">
                  {Translate("f4_berlangganan")}
                </h6>
                <p className="text-lg-footer mb-4  font-14">
                  {Translate("f4_anda")}
                </p>
                <div className="p-1 rounded border">
                  <div className="input-group">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Masukkan Email Anda disini"
                      aria-describedby="button-addon1"
                      className="form-control border-0 shadow-0 bg-homepage2 ci-bg-primary"
                    />
                    <div className="input-group-append">
                      <button
                        onClick={() => subscribeMe()}
                        id="button-addon1"
                        type="submit"
                        className="btn btn-link"
                      >
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pernyataan Resiko */}
        <div className="bg-homepage2 pt-3 px-3">
          <div className="container pl-0 pr-0">
            <p
              className="text-white font-12 mb-2"
              style={{ fontStyle: "italic" }}
            >
              <span
                style={{ background: "rgba(255, 0, 0, 0.4)" }}
                className="px-2 py-1"
              >
                Pernyataan Resiko :
              </span>
            </p>
            <p
              className="text-white font-12 mb-0"
              style={{ fontStyle: "italic" }}
            >
              Perdagangan Digital aset (crypto) memiliki resiko yang tinggi.
              Pertimbangan dan keputusan ada di tangan Pengguna Cryptoindex
              tidak memaksakan pengguna melakukan aktivitas dan transaksi jual
              beli dan semua keputusan jual beli aset uang digital Anda adalah
              keputusan Anda sendiri dan tidak dipengaruhi oleh pihak manapun.{" "}
            </p>
          </div>
        </div>

        {/* <!-- Copyrights --> */}
        <div className="bg-homepage2 pt-1 pb-4 px-3">
          <div className="container pl-0 pr-0">
            <hr className="hr-copyright" />
            <div className="d-flex justify-content-between">
              <p className="text-white mb-0 py-2 font-13">
                Copyright ?? 2021 CryptoIndex. All Rights Reserved
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#medium" target="_blank" title="medium">
                      <i className="fa fa-medium text-gray2"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#telegram" target="_blank" title="telegram">
                      <i className="fa fa-telegram text-gray2"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#facebook" target="_blank" title="facebook">
                      <i className="fa fa-facebook text-gray2"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#youtube" target="_blank" title="youtube">
                      <i className="fa fa-youtube text-gray2"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#twitter" target="_blank" title="twitter">
                      <i className="fa fa-twitter text-gray2"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End --> */}
    </div>
  );
}
