import React from 'react'

// Import Images
import WAVESIcons from '../../../assets/img/feelogo/Waves_WAVES.svg'

function BeliWAVESCrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={WAVESIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Waves (WAVES)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan WAVES dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Waves (WAVES) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">Token asli Waves adalah WAVES, token pasokan yang tidak tertutup yang digunakan untuk pembayaran standar seperti hadiah blok.</p>
                    <p className="text-white font-14">WAVES sebagai mata uang digital juga dapat digunakan sebagai instrumen trading dan investasi.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Waves (WAVES)?</h2>
                            <p className="text-gray2">Waves adalah platform blockchain multiguna yang mendukung berbagai kasus penggunaan termasuk aplikasi terdesentralisasi (DApps) dan kontrak pintar.</p>
                            <p className="text-gray2">Diluncurkan pada bulan Juni 2016 mengikuti salah satu penawaran koin awal (ICO) industri cryptocurrency yang paling awal, Waves awalnya berangkat untuk meningkatkan platform blockchain pertama dengan meningkatkan kecepatan, utilitas, dan keramahan pengguna.</p>
                            <p className="text-gray2">Platform telah mengalami berbagai perubahan dan menambahkan fitur spin-off baru untuk membangun desain aslinya.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliWAVESCrypto
