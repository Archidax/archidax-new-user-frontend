import React from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import formatRupiah from '@develoka/angka-rupiah-js'
import { useDispatch, useSelector } from 'react-redux'
import { cancelPenyetoran } from '../../../../stores/setorrupiah/functions'

function SetorRupiahAlfamart() {
    const amount = useSelector(state => state.setorRupiahReducer.amount)
    const fee = useSelector(state => state.setorRupiahReducer.fee)
    const createdAt = useSelector(state => state.setorRupiahReducer.createdAt)
    const idPendingTransaction = useSelector(state => state.setorRupiahReducer.idPendingTransaction)
    const dispatch = useDispatch()
    const history = useHistory()
    const batalkan = () => {
        cancelPenyetoran(idPendingTransaction, dispatch, history)
    }
    return (
        <div className="border border-info m-0 mt-3 px-2 py-3 tab2">
            <div>
                <div className="mb-2 font-12 font-bold">SILAKAN MELAKUKAN PEMBAYARAN MELALUI ALFAMART.</div>
                <div className="w-100 ci-bg-secondary p-3 rounded">
                    <table className="font-bold">
                        <tr>
                            <td className="pr-3 font-12">Batas pembayaran</td>
                            <td className="font-12">: {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
                        </tr>
                        <tr>
                            <td className="pr-3 font-12">Jumlah tagihan</td>
                            <td className="font-12">: {formatRupiah(amount + fee, { format: false })}</td>
                        </tr>
                        <tr>
                            <td className="pr-3 font-12">Kode pembayaran</td>
                            <td className="font-12">: DEPO449094</td>
                        </tr>
                    </table>
                </div>
                <ul className="p-0 my-3">
                    <li className="ml-3 font-12">Mohon ikuti instruksi berikut untuk melakukan deposit melalui Alfamart.</li>
                    <li className="ml-3 font-12">Pembayaran dapat dilakukan di salah satu gerai Alfamart terdekat pilihan kamu.</li>
                    <li className="ml-3 font-12">Bayar tagihan aplikasi "CRYPTOINDEX" kepada kasir dengan menunjukkan Nomor Tagihan kepada kasir.</li>
                    <li className="ml-3 font-12">Pastikan Anda melakukan pembayaran deposit dengan nominal {formatRupiah(amount + fee, { format: false })}</li>
                    <li className="ml-3 font-12">Simpan struk bukti transaksi.</li>
                    <li className="ml-3 font-12">ika saldo Anda belum masuk, Anda dapat memilih Konfirmasi Sekarang. Jika saldo Anda belum masuk, Anda bisa memilih Konfirmasi Sekarang. Kemudian, Anda harus mengisi form yang mengandung informasi seperti jumlah deposit, tanggal deposit, metode pembayaran, nomor rekening anda, dan bukti transfer.</li>
                </ul>
            </div>
            <div className="row d-flex flex-direction: column justify-content-between m-0 mt-4 pt-4 px-2">
                <div>
                    <button className="btn btn-danger font-12 border-0 py-2 px-3 m-0" onClick={() => batalkan()}>
                        <i class="fas fa-ban mr-2"></i>
                        <span className="font-12">Batalkan Penyetoran</span>
                    </button>
                </div>
                <div>
                    <span className="font-12">Dana anda belum masuk? <span className="text-info font-bold" style={{ cursor: "pointer" }} onClick={() => history.push('/setor-rupiah/konfirmasi')}>Konfirmasi sekarang</span></span>
                </div>
            </div>
        </div>
    )
}

export default SetorRupiahAlfamart
