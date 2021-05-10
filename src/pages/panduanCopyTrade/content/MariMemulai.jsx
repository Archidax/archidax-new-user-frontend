import React from 'react'

// Import Images
import KYC1 from "../../../assets/img/PanduanMariMemulai/KYC_1.png"
import KYC2 from "../../../assets/img/PanduanMariMemulai/KYC_2.png"
import KYC3 from "../../../assets/img/PanduanMariMemulai/KYC_3.png"
import KYC4 from "../../../assets/img/PanduanMariMemulai/KYC_4.png"
import Register1 from "../../../assets/img/PanduanMariMemulai/registrasi_1.png"
import Register2 from "../../../assets/img/PanduanMariMemulai/registrasi_2.png"
import Register3 from "../../../assets/img/PanduanMariMemulai/registrasi_3.png"
import Register4 from "../../../assets/img/PanduanMariMemulai/registrasi_4.png"
import Register5 from "../../../assets/img/PanduanMariMemulai/registrasi_5.png"
import Register6 from "../../../assets/img/PanduanMariMemulai/registrasi_6.png"

function MariMemulai() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Mari Memulai
                    </h2>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <h3 className="text-gold font-16 text-justify">A. Proses Registrasi</h3>
                    <p className="text-gray2 font-15 text-justify">Ketika semua sudah dipersiapkan, langkah selanjutnya yang harus dilakukan ialah Proses Registrasi, proses ini dapat dilakukan dengan langkah-langkah berikut ini :</p>
                    <ol>
                        <li className="text-gray2 font-14">Pertama-tama, buka website kami di <a href="https://cryptoindex.id">https://cryptoindex.id</a></li>
                        <li className="text-gray2 font-14">Jika anda belum terdaftar sebagai member cryptoindex, anda dapat registrasi dengan  klik <b>“Daftar Sekarang”</b>.</li>
                        <div className="text-center">
                            <img src={Register1} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">Untuk pengguna baru yang melakukan registrasi harus memasukkan username, e-mail, nomor handphone dan password Anda. Kami meminta Anda untuk mencantumkan no HP utama. Klik saya menyetujui syarat dan kesepakatan yang berlaku. Kemudian, klik <b>“Register”</b>.</li>
                        <div className="text-center">
                            <img src={Register2} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">User akan mendapat pemberitahuan link aktivasi yang telah dikirimkan ke email user. Kemudian, user diminta check email untuk melengkapi registrasi.</li>
                        <div className="text-center">
                            <img src={Register3} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">Berikut ini adalah tampilan email verifikasi. Untuk lanjut ke tahap selanjutnya, Anda harus mengklik tombol <b>Aktivasi Akun Sekarang</b>.</li>
                        <div className="text-center">
                            <img src={Register4} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">Jika verifikasi berhasil, Anda akan diarahkan ke halaman login (masuk). Masukkan email dan password yang sudah diverifikasi, lalu klik <b>“Masuk”</b>.</li>
                        <div className="text-center">
                            <img src={Register5} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">Anda akan diarahkan masuk ke dashboard.</li>
                        <div className="text-center">
                            <img src={Register6} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">Jika Anda ingin melakukan transaksi seperti deposit, withdrawal dan perdagangan pada aset kripto, Anda diharuskan melakukan verifikasi identitas (KYC).</li>
                    </ol>
                </div>
                <div className="col-12 mt-2">
                    <h3 className="text-gold font-16 text-justify">B. Proses KYC</h3>
                    <p className="text-gray2 font-15 text-justify">Proses KYC dilakukan dengan tujuan untuk memastikan bahwa identitas Anda adalah benar dan sah, langkah-langkahnya adalah sebagai berikut :</p>
                    <ol>
                        <li className="text-gray2 font-14">Pada halaman dashboard, klik tombol <b>“belum verifikasi”</b> atau bisa juga klik tombol <b>“Verifikasi Sekarang”</b>.</li>
                        <img src={KYC1} alt="..." className="img-fluid mt-2 mb-3"/>
                        <li className="text-gray2 font-14">Kemudian, anda akan dialihkan ke halaman verifikasi akun, dimana anda diminta untuk melengkapi data-data berikut seperti mengisi formulir verifikasi seperti nama lengkap, tempat lahir, tanggal lahir, jenis kelamin, pekerjaan, warga negara, dan alamat.</li>
                        <li className="text-gray2 font-14">Masukkan juga nomor kartu identitas kalian dan masa berlakunya.</li>
                        <li className="text-gray2 font-14">Serta masukkan data kontak darurat anda yang terdiri dari : nama kerabat, hubungan kerabat, dan nomor telepon darurat. Selanjutnya, klik tombol Lanjut.</li>
                        <img src={KYC2} alt="..." className="img-fluid mt-2 mb-3"/>
                        <li className="text-gray2 font-14">Masih di halaman verifikasi akun, anda harus mengambil foto untuk identitas anda dengan benar, sesuai dengan syarat yang telah tertera.</li>
                        <li className="text-gray2 font-14">Kemudian, anda juga harus melakukan verifikasi wajah dengan cara melakukan selfie dengan memegang kartu identitas anda sesuai dengan syarat yang telah tertera. Setelah itu, klik tombol ajukan KYC.</li>
                        <img src={KYC3} alt="..." className="img-fluid mt-2 mb-3"/>
                        <li className="text-gray2 font-14">Ketika proses KYC selesai, anda akan melihat ikon <b>“Terverifikasi”</b> pada halaman dashboard anda.</li>
                        <img src={KYC4} alt="..." className="img-fluid mt-2 mb-3"/>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default MariMemulai
