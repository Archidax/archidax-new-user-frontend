import React from 'react'

// Import Images
import COTIIcons from '../../../assets/img/feelogo/Coti_COTI.svg'

function BeliCOTICrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={COTIIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Coti (COTI)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan COTI dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Coti (COTI) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">COTI memasarkan dirinya sebagai platform fintech kelas perusahaan pertama yang memberdayakan organisasi untuk membangun solusi pembayaran mereka sendiri serta mendigitalkan mata uang apa pun untuk menghemat waktu dan juga uang.</p>
                    <p className="text-white font-14">COTI sebagai mata uang digital juga dapat digunakan sebagai instrumen trading dan investasi.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Coti (COTI)?</h2>
                            <p className="text-gray2">COTI adalah salah satu protokol blockchain pertama di dunia yang dioptimalkan untuk pembayaran terdesentralisasi dan dirancang untuk digunakan oleh pedagang, pemerintah, pembayaran DApps, dan penerbit stablecoin.</p>
                            <p className="text-gray2">Grup COTI diluncurkan pada Maret 2017, sedangkan Staking Platform Diluncurkan pada 1 Januari 2020. Ini adalah ekosistem yang dirancang khusus untuk memenuhi semua tantangan yang terkait dengan keuangan tradisional, termasuk latensi, biaya, inklusi global, dan risiko.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliCOTICrypto
