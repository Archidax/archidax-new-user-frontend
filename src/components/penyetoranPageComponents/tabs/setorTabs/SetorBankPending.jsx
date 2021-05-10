import React from 'react'
import { useSelector } from 'react-redux'

function SetorBankPending() {
    const konfirmasiBank = useSelector(state => state.setorRupiahReducer.konfirmasiBank)
    return (
        <div className="p-5">
            <h2 className="text-gold font-18">Konfirmasi Transfer</h2>
            <div><span className="text-white font-13 label-title">Kami akan memproses permintaan anda sesegera mungkin</span></div>
            <div className="row my-3">
                <div className="col-5 col-md-3 text-white font-13 label-title">Tanggal Deposit</div>
                <div className="col-7 col-md-5 text-white font-13 label-title">
                    {konfirmasiBank.tgl_depo}
                </div>
            </div>
            <div className="row my-3">
                <div className="col-5 col-md-3 text-white font-13 label-title">Jumlah Deposit</div>
                <div className="col-7 col-md-5 text-white font-13 label-title">
                    {konfirmasiBank.jumlah_depo}
                </div>
            </div>
            <div className="row my-3">
                <div className="col-5 col-md-3 text-white font-13 label-title">Metode Pembayaran</div>
                <div className="col-7 col-md-5 text-white font-13 label-title">
                    {konfirmasiBank.metode_pembayaran}
                </div>
            </div>
            <div className="row my-3">
                <div className="col-5 col-md-3 text-white font-13 label-title">Jenis Pembayaran</div>
                <div className="col-7 col-md-5 text-white font-13 label-title">
                    {konfirmasiBank.jenis_pembayaran}
                </div>
            </div>
            <div className="row my-3">
                <div className="col-5 col-md-3 text-white font-13 label-title">Nomor Rekening Anda</div>
                <div className="col-7 col-md-5 text-white font-13 label-title">
                    {konfirmasiBank.akun_rekening}
                </div>
            </div>
            <div className="row my-3">
                <div className="col-5 col-md-3 text-white font-13 label-title">Berita Transfer (jika ada)</div>
                <div className="col-7 col-md-5 text-white font-13 label-title">
                    {konfirmasiBank.berita_transfer}
                </div>
            </div>
            <div className="row my-3">
                <div className="col-5 col-md-3 text-white font-13 label-title">Pesan Tambahan (jika ada)</div>
                <div className="col-7 col-md-5 text-white font-13 label-title">
                    {konfirmasiBank.pesan_tambahan}
                </div>
            </div>
            <div className="row my-3">
                <div className="col-5 col-md-3 text-white font-13 label-title">Bukti Transfer</div>
                <div className="col-7 col-md-5 text-white font-13 label-title">
                    <a className="ci-bg-secondary border-0 text-white py-2 px-3" href={konfirmasiBank.bukti_transfer} target="_blank" rel="noreferrer">Lihat File</a>
                </div>
            </div>
        </div>
    )
}

export default SetorBankPending
