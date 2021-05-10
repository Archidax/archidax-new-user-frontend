import React from 'react'

// Import Images
import XLMIcons from '../../../assets/img/feelogo/Stellar_XLM.svg'

function BeliXLMCrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={XLMIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Stellar (XLM)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan XLM dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Stellar (XLM) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">XLM berfungsi sebagai jembatan yang membuatnya lebih murah untuk memperdagangkan aset lintas batas. Semua ini bertujuan untuk menantang penyedia pembayaran yang ada, yang sering kali mengenakan biaya tinggi untuk layanan serupa.</p>
                    <p className="text-white font-14">XLM sebagai mata uang digital juga dapat digunakan sebagai instrumen trading dan investasi.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Stellar (XLM)?</h2>
                            <p className="text-gray2">Stellar adalah jaringan terbuka yang memungkinkan uang dipindahkan dan disimpan. Stellar dirilis pada Juli 2014. Salah satu tujuan dari token ini adalah meningkatkan inklusi keuangan dengan menjangkau dunia yang tidak memiliki rekening bank, tetapi segera setelah itu, prioritasnya bergeser untuk membantu perusahaan keuangan terhubung satu sama lain melalui teknologi blockchain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliXLMCrypto
