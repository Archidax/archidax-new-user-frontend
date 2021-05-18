import React from 'react'
import PopupKonfirmasi from './setorTabs/PopupKonfirmasi'
import RiwayatSetorRupiah from './setorTabs/RiwayatSetorRupiah'
import SetorRupiahPilih from './setorTabs/SetorRupiahPilih'


function SetorRupiahTabs() {
    return (
        <div className="container-fluid">
            <div className="row border-top mt-3 border-warning">
                <div className="col-12 col-md-6 font-roboto text-white mt-2">
                    <h3 className="label-title-top">Fiat Deposit</h3>
                    <h4 className="label-title mt-3 font-16">Syarat Setor Dana</h4>
                    <ul>
                        <li className="label-title2">Minimal penyetoran Rp.10.000.</li>
                        <li className="label-title2">Maksimal penyetoran Rp 2.000.000.000,00 untuk metode pembayaran via transfer bank, Rp 2.000.000,00 untuk metode via QRIS, dan Rp 5.000.000,00 untuk metode via Alfamart.</li>
                        <li className="label-title2">Dikenakan biaya transaksi dari pihak ketiga dimana biaya ditentukan dan bergantung pada penyedia transaksi yang Anda gunakan.</li>
                    </ul>
                    <h4 className="label-title mt-3 font-16">Cara Melakukan Setor Dana</h4>
                    <ul>
                        <li className="label-title2">Isi nominal dengan jumlah yang ingin dideposit.</li>
                        <li className="label-title2">Kemudian pilih metode pembayaran dan pastikan saldo Anda mencukupi.</li>
                        <li className="label-title2">Kemudian klik tombol <span>"Lanjutkan"</span>.</li>
                        <li className="label-title2">Ikuti Instruksi selanjutnya untuk mentransfer dana sesuai dengan jumlah dan metode pembayaran yang dipilih. Jika ingin membatalkan penyetoran dana maka Anda pilih <span>“Batalkan Penyetoran”</span>.</li>
                    </ul>

                </div>

                <div className="col-12 col-md-6 font-12 font-roboto text-white mt-2">
                    <div className="row my-2 mx-0" style={{ height: "60px" }}>
                        <div>
                            <div className="mx-0 px-3 py-3 ci-setorRupiahStep ci-bg-gold font-bold text-dark h-100 d-flex justify-content-center font-14 align-items-center">
                                Langkah 1: Info Dana
                            </div>
                        </div>
                        <div className="arrow-right"></div>
                        <div>
                            <div className="px-3 py-3 mx-0 ci-setorRupiahStep bg-info font-bold text-dark h-100 d-flex justify-content-center font-14 align-items-center">
                                Langkah 2: Instruksi
                            </div>
                        </div>
                        <div className="arrow-right2"></div>
                    </div>
                    <SetorRupiahPilih />
                </div>
            </div>
            <RiwayatSetorRupiah />
            <PopupKonfirmasi />
        </div>
    )
}

export default SetorRupiahTabs
