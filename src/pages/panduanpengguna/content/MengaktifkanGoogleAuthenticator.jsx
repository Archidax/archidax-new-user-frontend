import React from 'react'

// Import Images
import G1 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_1.png"
import G2 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_2.png"
import G3 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_3.png"
import G4 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_4.png"
import G5 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_5.png"
import G6 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_6.png"
import G7 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_7.png"
import G8 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_8.png"
import G9 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_9.png"
import G10 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Laptop/G_10.png"

import GD1 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Android/GD_1.png"
import GD2 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Android/GD_2.png"
import GD3 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Android/GD_3.png"
import GD4 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Android/GD_4.png"
import GD5 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Android/GD_5.png"
import GD6 from "../../../assets/img/panduanPemula/GoogleAuthenticator_Android/GD_6.png"

// function MengaktifkanGoogleAuthenticator() {
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-12">
//                     <h2 className="text-gold font-34 font-weight-bold">
//                         Mengaktifkan Google Authenticator
//                     </h2>
//                 </div>
//             </div>
//             <div className="row mt-2">
//                 <div className="col-12 mt-2">
//                     <h3 className="text-gold font-16 text-justify">A. Proses Registrasi</h3>
//                     <p className="text-gray2 font-15 text-justify">Google Authenticator adalah salah satu aplikasi otentikasi dua faktor (2FA) yang terbaik dan termudah untuk menjaga keamanan akun online-mu.</p>
//                     <p className="text-gray2 font-15 text-justify">Berikut tahapan untuk mengaktifkan Google Authenticator pada akun Cryptoindex Anda.</p>
//                     <ul>
//                         <li className="text-gray2 font-14">Pada halaman dashboard Cryptoindex.id, klik <b>‘Google Authenticator’</b>.</li>
//                         <div className="text-center">
//                             <img src={G1} alt="..." className="img-fluid mt-2 mb-3"/>
//                         </div>
//                         <li className="text-gray2 font-14">Anda akan terhubung ke halaman seperti ini :</li>
//                         <div className="text-center">
//                             <img src={G2} alt="..." className="img-fluid mt-2 mb-3"/>
//                         </div>
//                     </ul>
//                     <ol>
//                         <li className="text-gray2 font-16 font-weight-bold">Cara Menginstall Google Authenticator di PC/Laptop</li>
//                         <p className="text-gray2 font-15 text-justify">Untuk instal Google Authenticator di PC/Laptop, pastikan di komputer Anda telah terinstal browser Google Chrome. Jika belum, dapatkan Google Chrome di sini : https://www.google.com/chrome/browser/</p>
//                         <ul>
//                             <li className="text-gray2 font-14">Dari browser Google Chrome, buka <a href="http://goo.gl/YBhl7u">http://goo.gl/YBhl7u</a></li>
//                             <div className="text-center">
//                                 <img src={G3} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Klik tombol <b>‘Add Extension’</b>.</li>
//                             <div className="text-center">
//                                 <img src={G4} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Google Authenticator telah ditambahkan dan dapat dilihat pada pojok kanan atas (menu extension) Google Chrome. Pin Google Authenticator tersebut.</li>
//                             <div className="text-center">
//                                 <img src={G5} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Tekan tombol <b>‘Scan QR Code’</b>.</li>
//                             <div className="text-center">
//                                 <img src={G6} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Scan QR Code dengan cara mendrag area yang berisi QR Code seperti ini :</li>
//                             <div className="text-center">
//                                 <img src={G7} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Kemudian, akan muncul pemberitahuan bahwa QR Code berhasil ditambahkan. Klik ok.</li>
//                             <div className="text-center">
//                                 <img src={G8} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Kembali ke Authenticator, dan Anda akan menerima kode verifikasi Authenticator langsung di komputer seperti ini. Dengan mengklik kode akan secara otomatis menyalin kode. Selain itu, perlu diketahui bahwa Google Authenticator akan terus bekerja menggenerate kode 6 digit angka yang berganti setiap 60 detik.</li>
//                             <div className="text-center">
//                                 <img src={G9} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Masukan password akun dan PIN/kode Authenticator yang Anda miliki. Kemudian klik <b>‘Aktifkan’</b></li>
//                             <div className="text-center">
//                                 <img src={G10} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Mulai saat ini, setiap kali mencoba login, Anda akan diminta untuk memasukan kode dari Google Authenticator.</li>
//                         </ul>
                        
//                         <li className="text-gray2 font-16 font-weight-bold">Cara Menginstall Google Authenticator di Android</li>
//                         <ul>
//                             <li className="text-gray2 font-14">Install aplikasi Google Authenticator pada Google Play Store.</li>
//                             <div className="text-center">
//                                 <img src={GD1} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Buka Aplikasi, kemudian klik <b>‘Get Started’</b>.</li>
//                             <div className="text-center">
//                                 <img src={GD2} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Pilih <b>‘Scan a QR Code’</b>.</li>
//                             <div className="text-center">
//                                 <img src={GD3} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Scan QR Code dari halaman Google Authenticator Cryptoindex.id</li>
//                             <div className="text-center">
//                                 <img src={GD4} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Kembali ke halaman utama Google Authenticator, temukan PIN akun Anda.</li>
//                             <div className="text-center">
//                                 <img src={GD5} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Masukan PIN tersebut pada halaman Google Authenticator Cryptoindex.id. Kemudian klik <b>‘Aktifkan’</b>.</li>
//                             <div className="text-center">
//                                 <img src={GD6} alt="..." className="img-fluid mt-2 mb-3"/>
//                             </div>
//                             <li className="text-gray2 font-14">Mulai sekarang setiap kali mencoba login Anda akan diminta untuk memasukan kode dari Google Authenticator.</li>
//                         </ul>
//                     </ol>
//                 </div>
//             </div>
//         </div>
//     )
// }

function MengaktifkanGoogleAuthenticator() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Activating Google Authenticator
                    </h2>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <p className="text-gray2 font-15 text-justify">Google Authenticator is one of the best and easiest two-factor authentication (2FA) apps to keep your online accounts safe.</p>
                    <p className="text-gray2 font-15 text-justify">Here are the steps to activate Google Authenticator on your Archidax account.</p>
                    <ul>
                        <li className="text-gray2 font-14">On the Archidax dashboard page, click <b>‘Google Authenticator’</b>.</li>
                        <div className="text-center">
                            <img src={G1} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">You will be linked to a page like this :</li>
                        <div className="text-center">
                            <img src={G2} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                    </ul>
                    <ol>
                        <li className="text-gray2 font-16 font-weight-bold">How to Install Google Authenticator on PC / Laptop</li>
                        <p className="text-gray2 font-15 text-justify">To install Google Authenticator on a PC / Laptop, make sure your computer has the Google Chrome browser installed. If not, get Google Chrome here: https://www.google.com/chrome/browser/</p>
                        <ul>
                            <li className="text-gray2 font-14">From the Google Chrome browser, go to <a href="http://goo.gl/YBhl7u">http://goo.gl/YBhl7u</a></li>
                            <div className="text-center">
                                <img src={G3} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Click the <b>‘Add Extension’</b> button.</li>
                            <div className="text-center">
                                <img src={G4} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Google Authenticator has been added and can be seen in the top right corner (extension menu) of Google Chrome. Pin the Google Authenticator.</li>
                            <div className="text-center">
                                <img src={G5} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Press the <b>‘Scan QR Code’</b> button.</li>
                            <div className="text-center">
                                <img src={G6} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Scan the QR Code by dragging the area containing the QR Code.</li>
                            <div className="text-center">
                                <img src={G7} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Then, a notification will appear that the QR Code was successfully added. Click ok.</li>
                            <div className="text-center">
                                <img src={G8} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Return to the Authenticator, and you will receive the Authenticator verification code directly on the computer like this. Clicking on the code will automatically copy the code. In addition, please note that Google Authenticator will continue to work on generating a 6 digit code that changes every 60 seconds.</li>
                            <div className="text-center">
                                <img src={G9} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Enter your account password and PIN / Authenticator code. Then click <b>'Activate'</b></li>
                            <div className="text-center">
                                <img src={G10} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">From now on, every time you try to log in, you will be asked to enter the code from the Google Authenticator.</li>
                        </ul>
                        
                        <li className="text-gray2 font-16 font-weight-bold">How to Install Google Authenticator on Android</li>
                        <ul>
                            <li className="text-gray2 font-14">Install the Google Authenticator application on the Google Play Store.</li>
                            <div className="text-center">
                                <img src={GD1} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Open the application, then click <b>‘Get Started’</b>.</li>
                            <div className="text-center">
                                <img src={GD2} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Choose <b>‘Scan a QR Code’</b>.</li>
                            <div className="text-center">
                                <img src={GD3} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Scan the QR Code from the Google Authenticator page Archidax.net</li>
                            <div className="text-center">
                                <img src={GD4} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Back on the main Google Authenticator page, find your account PIN.</li>
                            <div className="text-center">
                                <img src={GD5} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">Enter the PIN on the Archidax.net Google Authenticator page. Then click <b>'Activate'</b>.</li>
                            <div className="text-center">
                                <img src={GD6} alt="..." className="img-fluid mt-2 mb-3"/>
                            </div>
                            <li className="text-gray2 font-14">From now on every time you try to log in you will be asked to enter the code from the Google Authenticator.</li>
                        </ul>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default MengaktifkanGoogleAuthenticator
