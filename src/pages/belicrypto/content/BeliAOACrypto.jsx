import React from 'react'

// Import Images
import AOAIcons from '../../../assets/img/feelogo/Aurora_AOA.svg'

function BeliAOACrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={AOAIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Aurora (AOA)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan AOA dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Aurora (AOA) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">AOA sebagai mata uang digital dapat digunakan sebagai salah satu bentuk instrumen trading dan investasi.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Aurora (AOA)?</h2>
                            <p className="text-gray2">Aurora (AOA) merupakan sebuah protokol blockchain yang dapat digunakan untuk membuat token dan ekosistem blockchain didalamnya. Aurora (AOA) merupakan cryptocurrency dari perusahaan Aurorachain yang berasal dari China.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliAOACrypto
