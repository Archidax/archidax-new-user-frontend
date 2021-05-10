import React from 'react'

// Import Images
import LTCIcons from '../../../assets/img/feelogo/Litecoin_LTC.svg'

function BeliLTCCrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={LTCIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Litecoin (LTC)
                    </h2>
                    <span className="text-white font-14">Cryptoindex memungkinkan Anda untuk membeli, menjual, memperdagangkan, dan menahan LTC dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-1">Litecoin (LTC) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">Litecoin dirancang untuk digunakan untuk transaksi yang lebih murah, dan lebih efisien untuk penggunaan sehari-hari. Litecoin dapat digunakan sebagai instrument investasi yang baik dikarenakan sinyal teknis dan kekuatan fundamentalnya. Selain itu, Litecoin dapat digunakan dalam perdagangan.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Litecoin (LTC)?</h2>
                            <p className="text-gray2">Litecoin diluncurkan pada Oktober 2011 dan merupakan salah satu cryptocurrency tertua yang ada. Litecoin memiliki karakteristik yang mirip dengan Bitcoin karena merupakan cabang dari Bitcoin. Namun, Litecoin tidak membagikan riwayat apa pun dengan blok genesis Bitcoin, dan telah memilih waktu pembuatan blok yang lebih pendek dan pasokan basis yang lebih tinggi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliLTCCrypto
