import React from 'react'

// Import Images
import USDTIcons from '../../../assets/img/feelogo/Tether_USDT.svg'

function BeliUSDTCrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={USDTIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Tether (USDT)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan USDT dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Tether (USDT) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">USDT berfungsi untuk menggabungkan sifat cryptocurrency yang tidak terbatas, yang dapat dikirim antar pengguna tanpa perantara pihak ketiga tepercaya, ditambah dengan nilai stabil dari dolar AS.</p>
                    <p className="text-white font-14">USDT sebagai mata uang digital dapat digunakan sebagai instrumen trading dan investasi.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Tether (USDT)?</h2>
                            <p className="text-gray2">USDT adalah stablecoin (cryptocurrency dengan nilai stabil) yang mencerminkan harga USD, yang dikeluarkan oleh perusahaan Tether yang berbasis di Hong Kong. Penetapan token terhadap USD dicapai dengan mempertahankan sejumlah dolar dalam cadangan yang sama dengan jumlah USDT yang beredar.</p>
                            <p className="text-gray2">Token ini awalnya diluncurkan pada Juli 2014 sebagai Realcoin, token cryptocurrency lapis kedua yang dibangun di atas blockchain Bitcoin melalui penggunaan platform Omni, kemudian diubah namanya menjadi USTether, dan kemudian, akhirnya, menjadi USDT.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliUSDTCrypto
