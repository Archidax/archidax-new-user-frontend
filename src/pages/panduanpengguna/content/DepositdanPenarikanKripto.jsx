import React from 'react'

// Import Images
import DK1 from "../../../assets/img/panduanPemula/DepositDanPenarikanKripto/depositKripto_1.png"
import DK2 from "../../../assets/img/panduanPemula/DepositDanPenarikanKripto/depositKripto_2.png"
import DK3 from "../../../assets/img/panduanPemula/DepositDanPenarikanKripto/depositKripto_3.png"
import TK1 from "../../../assets/img/panduanPemula/DepositDanPenarikanKripto/tarik_kripto.png"

function DepositdanPenarikanKripto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Deposit dan Penarikan Kripto
                    </h2>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <ol>
                        <li className="text-gray2 font-16">Deposit Saldo Kripto</li>
                        <p className="text-gray2 font-14">Anda dapat melakukan deposit aset crypto yang anda miliki dengan cara mentransfer secara langsung mata uang kripto yang anda miliki ke platform cryptoindex.id. Misalkan Aset Kripto yang ingin dideposit ialah Bitcoin. Berikut langkah-langkah deposit Bitcoin ke akun Cryptoindex Anda :</p>
                        <p className="text-gray2 font-14">a.	Masuk halaman CRYPTOINDEX dengan klik Wallet di menu sebelah tombol language. Kemudian, klik Setor dari salah satu daftar aset kripto yang tersedia, contohnya Bitcoin.</p>
                        <div className="text-center">
                            <img src={DK1} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <p className="text-gray2 font-14">b.    Klik link ini untuk membuat alamat Bitcoin.</p>
                        <div className="text-center">
                            <img src={DK2} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <p className="text-gray2 font-14">c.    Alamat akan terbentuk secara otomatis. Dengan cara Scan QR Code atau Salin kode yang tertera untuk mendapatkan alamat tujuan transfer. Setelah itu, anda bisa mentransfer BTC yang anda miliki ke alamat tujuan transfer ini.</p>
                        <div className="text-center">
                            <img src={DK3} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>

                        <li className="text-gray2 font-16">Penarikan Saldo Kripto</li>
                        <p className="text-gray2 font-14">Selain deposit aset kripto, anda juga dapat Melakukan Penarikan Aset Kripto ke Alamat BTC lainnya, anda dapat melakukan langkah-langkah berikut ini :</p>
                        <p className="text-gray2 font-14">a.	Klik Tarik <b>Kripto</b>.</p>
                        <p className="text-gray2 font-14">b.	Isi form: Jumlah BTC dan Alamat Penarikan.</p>
                        <p className="text-gray2 font-14">c.	Kirim dan ketik OTP yang dikirim pada nomer HP Anda.</p>
                        <p className="text-gray2 font-14">d.	Klik <b>Kirim</b>.</p>
                        <p className="text-gray2 font-14">e.	Tunggu hingga Kripto masuk ke akun Anda.</p>
                        <div className="text-center">
                            <img src={TK1} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default DepositdanPenarikanKripto
