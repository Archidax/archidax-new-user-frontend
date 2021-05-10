import React from 'react'

// Import Images
import BNBIcons from '../../../assets/img/feelogo/Binance_BNB.svg'

function BeliBNBCrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={BNBIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Binance (BNB)?
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan BNB dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-1">Binance (BNB) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">Binance Coin (BNB) digunakan untuk berdagang (trading) dan membayar biaya pertukaran mata uang kripto Binance, BNB juga dipercaya oleh komunitas dan digunakan untuk membelanjakan barang dan jasa di banyak perusahaan.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Binance (BNB)?</h2>
                            <p className="text-gray2">Binance coin (BNB) adalah aset crypto yang diterbitkan oleh Binance Exchange pada tahun 2017, dan diperdagangan dengan simbol BNB. Awalnya diterbitkan sebagai token ERC20, BNB telah menjadi token asli dari blockchain Binance Chain utama dan mata uang kripto yang bernilai global berdasarkan kapitalisasi pasar. Binance exchange sendiri merupakan bursa crypto nomor satu jika dilihat dari volume transaksi dan jumlah pengguna aktif.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliBNBCrypto
