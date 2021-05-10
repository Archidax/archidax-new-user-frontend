import React from 'react'
import { useHistory } from 'react-router-dom'
// import moment from 'moment'
import formatRupiah from '@develoka/angka-rupiah-js'
import { useSelector } from 'react-redux'

function SetorRupiahOvo() {
    const amount = useSelector(state => state.setorRupiahReducer.amount)
    const fee = useSelector(state => state.setorRupiahReducer.fee)
    // const createdAt = useSelector(state => state.setorRupiahReducer.createdAt)

    const history = useHistory()
    return (
        <div className="border border-info m-0 mt-3 px-2 py-3 tab2">
            <div>
                <div className="mb-2">Mohon ikuti instruksi berikut untuk melakukan deposit dengan menggunakan saldo OVO Anda.</div>
                <ul className="p-0 my-3">
                    <li className="ml-3">Pastikan nomor ponsel Anda 6287XXXX9003 telah terdaftar pada OVO dan memiliki saldo yang cukup.</li>
                    <li className="ml-3">Kami akan mengirimkan notifikasi pembayaran ke akun OVO Anda sejumlah {formatRupiah(amount+fee)} setelah Anda klik tombol Bayar di bawah.</li>
                    <li className="ml-3">Kami akan memotong sejumlah 1.5% (Rp.150) dari jumlah deposit Anda untuk biaya layanan.</li>
                    <li className="ml-3">Anda akan menerima deposit senilai Rp.9.850.</li>
                    <li className="ml-3">Proses akan dibatalkan secara otomatis jika dalam 30 detik pembayaran tidak diterima.</li>
                </ul>
            </div>
            <div className="row d-flex flex-direction: column justify-content-between m-0 px-2">
                <div>
                    <button className="btn btn-danger font-12 border-0 py-1 px-4 m-0" onClick={() => history.replace('/')}>Batal</button>
                </div>
                <div>
                    <button className="btn btn-info font-12 border-0 py-1 px-4 m-0 ci-bg-secondary" data-toggle="modal" data-target="#popupKonfirmasi">Konfirmasi</button>
                </div>
            </div>
        </div>
    )
}

export default SetorRupiahOvo
