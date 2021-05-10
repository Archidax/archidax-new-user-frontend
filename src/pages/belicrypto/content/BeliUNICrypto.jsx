import React from 'react'

// Import Images
import UNIIcons from '../../../assets/img/feelogo/Uniswap_UNI.svg'

function BeliUNICrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={UNIIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Uniswap (UNI)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan UNI dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Uniswap (UNI) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">UNI sebagai mata uang digital dapat digunakan sebagai instrumen trading dan investasi.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Uniswap (UNI)?</h2>
                            <p className="text-gray2">Uniswap adalah protokol perdagangan terdesentralisasi yang populer, yang dikenal karena perannya dalam memfasilitasi perdagangan otomatis token keuangan terdesentralisasi (DeFi).</p>
                            <p className="text-gray2">Sebuah contoh dari pembuat pasar otomatis/automated market maker (AMM), Uniswap diluncurkan pada November 2018, tetapi telah mendapatkan popularitas yang cukup besar tahun ini berkat fenomena DeFi dan lonjakan terkait dalam perdagangan token. Protokol Uniswap diciptakan oleh Hayden Adams pada tahun 2018.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliUNICrypto
