import React from "react";

import HeaderAlternate from "../../components/headerComponents/headerHomePage/HeaderAlternate";
import FooterHomePage from "../../components/footerComponents/footerHomePage/FooterHomePage";

export default function DepositAndWithdrawal() {
  return (
    <div>
      <HeaderAlternate />
      <div className="bannersyaratdanketentuan">
        <h4
          className="text-center font-40 text-gold font-weight-bold"
          style={{ paddingTop: "120px" }}
        >
          DEPOSIT & WITHDRAWAL
        </h4>
      </div>
      <div className="bg-homepage pt-4 pb-5">
        <div className="container">
          {/* Section 3 */}
          <div className="">
            <div className="pt-4 pb-3">
              <h5 className="text-gold">KATEGORI : DEPOSIT RUPIAH </h5>
            </div>
            <div>
              <p className="font-16 text-white text-justify mb-2">
                Bagaimana cara melakukan deposit Rupiah Di Cryptoindex.id?
              </p>
            </div>
            <ol className="mb-0">
              <li className="font-16 text-white text-justify mb-2">
                Masuk halaman wallet dengan klik Wallet di menu samping kiri
                web. Kemudian, klik Setor/Tarik Rupiah.
              </li>
              <li className="font-16 text-white text-justify mb-2">
                Klik Setor Rupiah dan pilih nominal rupiah yang ingin disetor.
                Atau dengan cara input nominal secara manual dengan cara pilih
                salah satu metode pembayaran Virtual Account, misalnya Virtual
                Account BCA kemudian klik lanjutkan.
              </li>
              <li className="font-16 text-white text-justify mb-2">
                Silakan lakukan transfer sesuai instruksi yang telah disediakan,
                dan Tunggu hingga uang anda masuk ke akun Anda. Namun, jika
                saldo belum bertambah/masuk, klik Konfirmasi Sekarang.
              </li>
              <li className="font-16 text-white text-justify mb-2">
                User akan diarahkan ke halaman Konfirmasi Transfer. Isi form
                yang tertera sesuai dengan informasi transaksi yang baru
                dilakukan: Tanggal Deposit, Jumlah Deposit, Metode Pembayaran,
                Jenis Pembayaran, Nomor Rekening, Berita Transfer (jika ada),
                Pesan Tambahan (jika ada), dan Bukti Transfer (foto/screenshot).
                Kemudian, klik Kirim Konfirmasi.
              </li>
              <li className="font-16 text-white text-justify mb-2">
                Sistem akan memberi informasi bahwa penyetoran yang dilakukan
                user masih dalam proses. Jika penyetoran sudah berhasil, maka
                informasi ini akan hilang.
              </li>
            </ol>
          </div>
          {/* End of Section 3 */}
          {/* Section 3 */}
          <div className="">
            <div className="pt-4 pb-3">
              <h5 className="text-gold">KATEGORI : WITHDRAWAL RUPIAH </h5>
            </div>
            <div>
              <p className="font-16 text-white text-justify mb-2">
                Bagaimana cara memindahkan saldo Rupiah di akun CRYPTOINDEX ke
                rekening bank pribadi saya?
              </p>
            </div>
            <ol className="mb-0">
              <li className="font-16 text-white text-justify mb-2">
                Klik Tarik Rupiah.
              </li>
              <li className="font-16 text-white text-justify mb-2">
                Isi Form pada kolom dengan teliti.
              </li>
              <li className="font-16 text-white text-justify mb-2">
                Kirim dan ketik OTP yang dikirim pada nomer HP Anda.
              </li>
              <li className="font-16 text-white text-justify mb-2">
                Klik Tarik Dana.
              </li>
              <li className="font-16 text-white text-justify mb-2">
                Lakukan verifikasi email.
              </li>
              <li className="font-16 text-white text-justify mb-2">
                Tunggu hingga dana masuk ke rekening Anda.
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
