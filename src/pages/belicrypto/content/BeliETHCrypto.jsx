import React from 'react'

// Import Images
import ETHIcons from '../../../assets/img/feelogo/Ethereum_ETH.svg'

function BeliETHCrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={ETHIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Ethereum (ETH)?
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan ETH dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-1">Ethereum (ETH) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">ETH sebagai mata uang digital digunakan untuk transaksi peer-to-peer dalam smart contract yang diproses oleh jaringan blockchain Ethereum, ini berarti mereka dapat dikirim secara otomatis tanpa adanya pihak ketiga. ETH juga dapat digunakan sebagai instrument perdagangan ataupun investasi  untuk menghasilkan keuntungan.</p>
                    <p className="text-white font-14">Selain itu, Blockchain Ethereum dirancang untuk menyimpan berbagai jenis data. Data ini bisa diakses dan digunakan oleh program-program komputer yang berjalan di blockchain Ethereum. Program-program ini disebut aplikasi terdesentralisasi, atau dapps.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Ethereum (ETH)?</h2>
                            <p className="text-gray2">Ethereum adalah platform komputasi terdistribusi open-source berbasis blockchain yang menjalankan kontrak pintar. Dengan kata lain, Ethereum adalah blockchain dengan bahasa pemrograman bawaan yang memungkinkan orang membangun aplikasi di atasnya. Untuk membayar operasi yang dijalankan di jaringan Ethereum, orang-orang menggunakan cryptocurrency Ethereum, yang disebut Ether (ETH).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliETHCrypto
