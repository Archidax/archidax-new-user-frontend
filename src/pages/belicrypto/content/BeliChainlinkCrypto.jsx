import React from 'react'

// Import Images
import LINKIcons from '../../../assets/img/feelogo/Chainlink_LINK.svg'

function BeliChainlinkCrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={LINKIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Chainlink (LINK)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan LINK dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Chainlink (LINK) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">LINK digunakan untuk membayar operator node. Karena jaringan Chainlink memiliki sistem reputasi, penyedia node yang memiliki LINK dalam jumlah besar dapat diberi hadiah dengan kontrak yang lebih besar, sementara kegagalan untuk menyampaikan informasi yang akurat mengakibatkan pengurangan token.</p>
                    <p className="text-white font-14">Selain itu, LINK digunakan sebagai instrumen perdagangan dan investasi yang dapat menghasilkan keuntungan bagi penggunanya.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Chainlink (LINK)?</h2>
                            <p className="text-gray2">Chainlink adalah jaringan oracle yang terdesentralisasi. Chainlink didesain sebagai aplikasi middleware berbasis blockchain yang bertujuan sebagai perantara antara teknologi blockchain dengan teknologi non-blockchain. Jaringan ini memungkinkan smart contract terhubung dengan penyedia data off-chain seperti rekening bank umum, data feed, serta web API (Application Programming Interface). Chainlink dikembangkan oleh Sergey Nazarov, dengan Steve Ellis sebagai salah satu pendiri lainnya.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliChainlinkCrypto
