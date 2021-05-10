import React from 'react'

// Import Images
import BTCIcons from '../../../assets/img/feelogo/Bitcoin_BTC.svg'

function BeliBTCCrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={BTCIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Bitcoin (BTC)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan BTC dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Bitcoin (BTC) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">Bitcoin (BTC) dapat digunakan sebagai mata uang digital dalam berbagai jenis transaksi seperti membeli server internet, membeli produk dan lain sebagainya. Banyak juga orang yang hanya memperjualbelikan BTC sebagai salah satu kegiatan berinvestasi yang menguntungkan.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Bitcoin (BTC)?</h2>
                            <p className="text-gray2">Bitcoin (BTC) adalah bentuk uang digital yang berjalan di jaringan komputer terdistribusi. Sebagai cryptocurrency pertama yang muncul, sistem Bitcoin dijelaskan dalam whitepaper yang diterbitkan pada tahun 2008 oleh seseorang yang menggunakan nama samaran Satoshi Nakamoto. Lebih dari satu dekade setelah pembuatannya pada 3 Januari 2009, Bitcoin saat ini merupakan mata uang kripto yang paling banyak dikenal dan digunakan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliBTCCrypto
