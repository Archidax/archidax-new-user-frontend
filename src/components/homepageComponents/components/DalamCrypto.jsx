import React from "react";
import logo1 from "../../../assets/img/homepage/keuntungan/1.png";
import logo2 from "../../../assets/img/homepage/keuntungan/2.png";
import logo3 from "../../../assets/img/homepage/keuntungan/3.png";
import logo4 from "../../../assets/img/homepage/keuntungan/4.png";
import Translate from "../../../i18n/Translate";

export default function DalamCrypto() {
  return (
    <div className="col-lg-8 offset-lg-2 py-5">
      <div>
        <h4 className="text-homepage-yellow">{Translate("hkmc_title")}</h4>
      </div>
      <div className="col-lg-6 px-0 mt-4">
        <p className="text-white font-16">{Translate("hkmc_text1")}</p>
        <p className="text-white font-16">{Translate("hkmc_text2")}</p>
      </div>
      <div className="mt-4" style={{ display: "flex" }}>
        <div
          class="nav flex-column nav-pills py-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            class="nav-link active"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Buying and Selling Crypto Assets
          </a>
          <a
            class="nav-link"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Crypto Asset Investment
          </a>
          <a
            class="nav-link"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            24 hour Transaction
          </a>
          <a
            class="nav-link"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Member Services
          </a>
        </div>
        <div class="tab-content px-5 py-3 w-100" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div className="row">
              <div className="col-6">
                <div className="text-white">
                  <h5>
                    Pilihan terbaik untuk berjual beli bitcoin dan aset kripto
                    lainnya.
                  </h5>
                  <hr
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      width: "100%",
                    }}
                  />
                  <h5 style={{ color: "#FC7608" }}>MUDAH</h5>
                  <p className="font-15">
                    Pengalaman investasi yang mudah didapatkan.
                  </p>
                  <h5 style={{ color: "#FC7608" }}>MUDAH</h5>
                  <p className="font-15">
                    Pengalaman investasi yang mudah didapatkan.
                  </p>
                  <h5 style={{ color: "#FC7608" }}>MUDAH</h5>
                  <p className="font-15">
                    Pengalaman investasi yang mudah didapatkan.
                  </p>
                </div>
                <button className="btn-daftar px-3 py-2 mt-4">
                  Lihat Selengkapnya
                </button>
              </div>
              <div className="col-5">
                <img src={logo1} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <div className="row">
              <div className="col-6">
                <div className="text-white">
                  <h5>
                    Pengetahuan dan informasi terbaru dengan menggunakan ujung
                    jari Anda.
                  </h5>
                  <hr
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      width: "100%",
                    }}
                  />
                  <h5 style={{ color: "#FC7608" }}>BERITA BARU</h5>
                  <p className="font-15">
                    Perluas pengetahuan Anda tentang pengembangan Teknologi
                    Blockchain, bitcoin, aset crypto, dan semua investasi
                    terkait.
                  </p>
                  <h5 style={{ color: "#FC7608" }}>AKTUAL DAN TERPERCAYA</h5>
                  <p className="font-15">
                    Jangan berlangganan berita palsu. Kami berada dalam bisnis
                    ini dan tugas kami adalah untuk mengetahui apa yang
                    sebenarnya terjadi.
                  </p>
                </div>
                <button className="btn-daftar px-3 py-2 mt-4">
                  Lihat Selengkapnya
                </button>
              </div>
              <div className="col-5">
                <img src={logo2} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <div className="row">
              <div className="col-6">
                <div className="text-white">
                  <h5>Platform peluncuran token untuk proyek kripto baru.</h5>
                  <hr
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      width: "100%",
                    }}
                  />
                  <h5 style={{ color: "#FC7608" }}>DAFTAR</h5>
                  <p className="font-15">
                    Membawa proyek-proyek blockchain global baru kepada para
                    penggemar Kripto di Indonesia.
                  </p>
                  <h5 style={{ color: "#FC7608" }}>PENDANAAN</h5>
                  <p className="font-15">
                    Bantu mendorong pengembangan proyek investasi kripto.
                  </p>
                </div>
                <button className="btn-daftar px-3 py-2 mt-4">
                  Lihat Selengkapnya
                </button>
              </div>
              <div className="col-5">
                <img src={logo3} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <div className="row">
              <div className="col-6">
                <div className="text-white">
                  <h5>
                    Nikmati perdagangan bitcoin dan aset kripto dengan harga dan
                    prioritas dukungan pelanggan terbaik di industri.
                  </h5>
                  <hr
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      width: "100%",
                    }}
                  />

                  <p className="font-15">
                    Mulailah pengalaman Premium Trading anda dengan
                    menyelesaikan KYC Level 2 anda di Tokocrypto.
                  </p>
                </div>
                <button className="btn-daftar px-3 py-2 mt-4">
                  Lihat Selengkapnya
                </button>
              </div>
              <div className="col-5">
                <img src={logo4} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
