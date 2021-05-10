import React from 'react'

// Import Images
import TRXIcons from '../../../assets/img/feelogo/Tron_TRX.svg'

function BeliTRXCrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={TRXIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Tron (TRX)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan TRX dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Tron (TRX) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">Dengan tujuan untuk membangun ekosistem hiburan dan konten gratis di seluruh dunia, TRX sebagai mata uang digital digunakan untuk membayar konten. Sehingga, siapapun yang menikmati media social, game online ataupun bentuk hiburan online lainnya, pasti akan menyukai Tron.</p>
                    <p className="text-white font-14">Dalam ekosistem Tron, orang yang membagikan konten kepada orang lain akan mendapat kompensasi sebagai seorang pembuat konten dan data yang dihasilkan.</p>
                    <p className="text-white font-14">TRX juga dapat digunakan sebagai instrument perdagangan dan investasi untuk menghasilkan keuntungan.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Tron (TRX)?</h2>
                            <p className="text-gray2">TRON adalah sistem operasi berbasis blockchain yang bertujuan untuk memastikan teknologi ini sesuai untuk penggunaan sehari-hari. Proyek ini paling tepat digambarkan sebagai platform terdesentralisasi yang berfokus pada berbagi konten dan hiburan dan untuk tujuan ini, salah satu akuisisi terbesarnya adalah layanan berbagi file BitTorrent pada tahun 2018. TRON juga merupakan salah satu blockchain paling populer untuk membangun DApps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliTRXCrypto
