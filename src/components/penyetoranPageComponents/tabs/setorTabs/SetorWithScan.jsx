import React from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import formatRupiah from '@develoka/angka-rupiah-js'
import { useDispatch, useSelector } from 'react-redux'
import { cancelPenyetoran } from '../../../../stores/setorrupiah/functions'
import QRCode from 'react-qr-code'

function SetorWithScan({ metode }) {
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
                <div className="mb-2 font-12 font-bold text-center">SILAKAN MELAKUKAN PEMBAYARAN MELALUI {metode} VIA QRIS.</div>
                <div className="w-100 ci-bg-secondary p-5 rounded text-center align-items-center">
                    <div>
                        <QRCode value="jsajsklslsalhs" size={200} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <table className="font-bold mt-3 text-left">
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
                </div>
                <ul className="p-0 my-3">
                    <li className="ml-3 font-12">Mohon ikuti instruksi berikut untuk melakukan deposit melalui Alfamart.</li>
                    <li className="ml-3 font-12">Pembayaran dapat dilakukan di salah satu gerai Alfamart terdekat pilihan kamu.</li>
                    <li className="ml-3 font-12">Bayar tagihan aplikasi "CRYPTOINDEX VIA QRIS" kepada kasir.</li>
                    <li className="ml-3 font-12">Tunjukkan Nomor Tagihan kepada kasir.</li>
                    <li className="ml-3 font-12">Simpan struk bukti transaksi.</li>
                    <li className="ml-3 font-12">Pastikan Anda melakukan pembayaran dengan nominal Rp.{formatRupiah(amount + fee, { format: false })}</li>
                    <li className="ml-3 font-12">Kami akan memotong sejumlah Rp.4.400 dari jumlah deposit Anda untuk biaya layanan.</li>
                    <li className="ml-3 font-12">Anda akan menerima deposit senilai Rp.{formatRupiah(amount - 4400, { format: false })}</li>
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

export default SetorWithScan
