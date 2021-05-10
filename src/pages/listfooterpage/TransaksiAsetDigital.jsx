import React from "react";

import HeaderAlternate from "../../components/headerComponents/headerHomePage/HeaderAlternate";
import FooterHomePage from "../../components/footerComponents/footerHomePage/FooterHomePage";

export default function TransaksiAsetDigital() {
  return (
    <div>
      <HeaderAlternate />
      <div className="bannersyaratdanketentuan">
        <h4
          className="text-center font-40 text-gold font-weight-bold"
          style={{ paddingTop: "120px" }}
        >
          Transaksi Aset Digital
        </h4>
      </div>
      <div className="bg-homepage pt-4 pb-5">
        <div className="container">
          {/* Section 3 */}
          <div className="">
            <div className="pt-4 pb-3">
              <h5 className="text-gold">KATEGORI : TRANSAKSI DIGITAL ASET </h5>
            </div>
            <ol className="mb-0">
              <li className="font-16 text-white text-justify mb-2">
                Bagaimana cara menjual Aset Kripto ke Rupiah ?
                <ol className="mb-0 style-alpha">
                  <li className="font-16 text-white text-justify mb-2">
                    Klik Tarik Kripto
                  </li>
                  <li className="font-16 text-white text-justify mb-2">
                    Isi form: Jumlah BTC dan Alamat Penarikan
                  </li>
                  <li className="font-16 text-white text-justify mb-2">
                    Kirim dan ketik OTP yang dikirim pada nomer HP Anda
                  </li>
                  <li className="font-16 text-white text-justify mb-2">
                    Klik Kirim
                  </li>
                  <li className="font-16 text-white text-justify mb-2">
                    Tunggu hingga crypto Anda masuk ke akun Anda
                  </li>
                </ol>
              </li>
              <li className="font-16 text-white text-justify mb-2">
                Bagaimana cara deposit Aset Kripto ?
                <div>
                  <p className="font-16 text-white text-justify mb-2">
                    Misalkan Aset Kripto yang ingin dideposit ialah Bitcoin.
                    Berikut cara deposit Bitcoin ke akun Cryptoindex Anda.
                  </p>
                </div>
                <ol className="mb-0 style-alpha">
                  <li className="font-16 text-white text-justify mb-2">
                    Masuk halaman wallet dengan klik Wallet di menu sebelah
                    tombol language. Kemudian, klik Setor dari salah satu daftar
                    aset kripto yang tersedia, contohnya Bitcoin.
                  </li>
                  <li className="font-16 text-white text-justify mb-2">
                    Klik link ini untuk membuat alamat Bitcoin.
                  </li>
                  <li className="font-16 text-white text-justify mb-2">
                    Alamat akan terbentuk secara otomatis. Dengan cara Scan QR
                    Code atau Salin kode yang tertera untuk mendapatkan alamat
                    tujuan transfer.
                  </li>
                </ol>
              </li>
            </ol>
          </div>
          {/* End of Section 3 */}
        </div>
      </div>
      <FooterHomePage />
    </div>
  );
}
