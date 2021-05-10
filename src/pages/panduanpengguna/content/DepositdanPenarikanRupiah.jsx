import React from 'react'

// Import Images
import DF1 from "../../../assets/img/panduanPemula/DepositDanPenarikanRupiah/deposit_fiat1.png"
import DF2 from "../../../assets/img/panduanPemula/DepositDanPenarikanRupiah/deposit_fiat2.png"
import DF3 from "../../../assets/img/panduanPemula/DepositDanPenarikanRupiah/deposit_fiat3.png"
import DF4 from "../../../assets/img/panduanPemula/DepositDanPenarikanRupiah/deposit_fiat4.png"
import DF5 from "../../../assets/img/panduanPemula/DepositDanPenarikanRupiah/deposit_fiat5.png"
import TR1 from "../../../assets/img/panduanPemula/DepositDanPenarikanRupiah/tarik_rupiah.png"

function DepositdanPenarikanRupiah() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Deposit dan Penarikan Rupiah
                    </h2>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <ol>
                        <li className="text-gray2 font-16">Deposit Saldo Rupiah</li>
                        <p className="text-gray2 font-14">Jika anda ingin melakukan perdagangan mata uang kripto, anda harus melakukan deposit saldo rupiah terlebih dahulu, anda bisa mengikuti langkah berikut ini.</p>
                        <p className="text-gray2 font-14">a.	Masuk halaman CRYPTOINDEX dengan klik Wallet di menu samping kiri web. Kemudian, klik Setor/Tarik Rupiah.</p>
                        <div className="text-center">
                            <img src={DF1} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <p className="text-gray2 font-14">b.	Klik Setor Rupiah. Isi nilai pada kolom Jumlah Setor atau pilih deposit yang telah di sediakan. Pilih Metode Pembayaran. Kemudian, klik Lanjutkan.</p>
                        <div className="text-center">
                            <img src={DF2} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <p className="text-gray2 font-14">c.	Silakan lakukan transfer sesuai instruksi yang telah disediakan, dan tunggu hingga uang anda masuk ke akun Anda.</p>
                        <div className="text-center">
                            <img src={DF3} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <p className="text-gray2 font-14">d.	Namun, jika saldo belum bertambah/masuk, klik Konfirmasi Sekarang.</p>
                        <p className="text-gray2 font-14">e.	User akan diarahkan ke halaman Konfirmasi Transfer. Isi form yang tertera sesuai dengan informasi transaksi yang baru dilakukan: Tanggal Deposit, Jumlah Deposit, Metode Pembayaran, Jenis Pembayaran, Nomor Rekening, Berita Transfer (jika ada), Pesan Tambahan (jika ada), dan Bukti Transfer (foto/screenshot). Kemudian, klik Kirim Konfirmasi.</p>
                        <div className="text-center">
                            <img src={DF4} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <p className="text-gray2 font-14">f.	Sistem akan memberi informasi bahwa penyetoran yang dilakukan user masih dalam proses.  Jika penyetoran sudah berhasil dan saldo sudah masuk ke akun anda, maka informasi ini akan hilang.</p>
                        <div className="text-center">
                            <img src={DF5} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>

                        <li className="text-gray2 font-16">Penarikan Saldo Rupiah</li>
                        <p className="text-gray2 font-14">Berikut ini adalah cara penarikan saldo rupiah.</p>
                        <p className="text-gray2 font-14">a.	Klik Tarik <b>Rupiah</b>.</p>
                        <p className="text-gray2 font-14">b.	Isi form seperti jumlah penarikan, akun penarikan, label, tujuan penarikan, nomor rekening pada kolom dengan teliti.</p>
                        <p className="text-gray2 font-14">c.	Kirim dan ketik OTP yang dikirim pada nomer HP Anda.</p>
                        <p className="text-gray2 font-14">d.	Klik <b>Tarik Dana</b>.</p>
                        <p className="text-gray2 font-14">e.	Lakukan verifikasi email.</p>
                        <p className="text-gray2 font-14">f.	Tunggu hingga dana masuk ke rekening Anda.</p>
                        <div className="text-center">
                            <img src={TR1} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default DepositdanPenarikanRupiah
