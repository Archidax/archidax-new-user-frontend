import React from 'react'

// Import Images
import AAVEIcons from '../../../assets/img/feelogo/Aave_AAVE.svg'

function BeliAAVECrypto() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={AAVEIcons} className="img-fluid" width={120} alt="..." style={{background: "rgba(44, 53, 90, 0.4)", borderRadius: "50%", padding: "20px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Bagaimana Membeli Aave (AAVE)
                    </h2>
                    <span className="text-white font-14">Cryptoindex adalah tempat terbaik untuk membeli, menjual, memperdagangkan, dan menyimpan AAVE dengan mudah.</span>
                    <h2 className="text-gold font-26 font-weight-bold mt-5 mb-2">Aave (AAVE) Digunakan untuk apa?</h2>
                    <p className="text-white font-14">Token AAVE dapat digunakan untuk pengurangan biaya transaksi. Pada protokol Aave sendiri tata kelola berjalannya sistem dapat diatur oleh mereka yang memegang token AAVE dengan melakukan voting untuk menentukan keputusan yang terkait dengan parameter protokol dan upgrade pada smart contract.</p>
                    <p className="text-white font-14">AAVE juga sebagai mata uang digital dapat digunakan sebagai instrumen trading dan investasi.</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <h2 className="text-gold font-26 font-weight-bold mb-1">Apa Itu Aave (AAVE)?</h2>
                            <p className="text-gray2">Aave adalah protokol keuangan terdesentralisasi (DeFi), open-source dan non-kustodian pada blockchain smart contract Ethereum yang memberikan akses pada setiap user Aave ini dapat memberikan pinjaman dan meminjam crypto.</p>
                            <p className="text-gray2">Pemberi pinjaman mendapatkan bunga dengan menyetor aset digital ke dalam kumpulan likuiditas yang dibuat khusus. Peminjam kemudian dapat menggunakan crypto mereka sebagai jaminan untuk mengambil pinjaman kilat menggunakan likuiditas ini.</p>
                            <p className="text-gray2">Aave memberi pemegang aset potongan biaya pada platform, dan itu juga berfungsi sebagai token tata kelola.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeliAAVECrypto
