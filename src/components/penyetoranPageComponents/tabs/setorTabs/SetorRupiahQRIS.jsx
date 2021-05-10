import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import formatRupiah from '@develoka/angka-rupiah-js'
import { useDispatch, useSelector } from 'react-redux'
import { cancelPenyetoran, checkStatusQRIS } from '../../../../stores/setorrupiah/functions'
import QRCode from 'react-qr-code'
import { convertNumber } from '../../../../assets/js'
// import { getPaymentIcon } from '../../../../assets/payments'
import qrisLogo from '../../../../assets/img/payments/qris-logo.svg'
import qrisBG from '../../../../assets/img/payments/qris-bg.png'

function SetorRupiahQRIS() {
    const amount = useSelector(state => state.setorRupiahReducer.amount)
    const fee = useSelector(state => state.setorRupiahReducer.fee)
    // const createdAt = useSelector(state => state.setorRupiahReducer.createdAt)
    const QRIS = useSelector(state => state.setorRupiahReducer.QRIS)
    const idPendingTransaction = useSelector(state => state.setorRupiahReducer.idPendingTransaction)
    const [dateTrx, setDateTrx] = useState(null)
    const history = useHistory()
    const dispatch = useDispatch()
    const batalkan = (e) => {
        e.preventDefault()
        cancelPenyetoran(idPendingTransaction, dispatch, history)
    }

    useEffect(() => {
        let date
        let tmp = ''
        for (let i = 0; i < QRIS.qris_request_date.length; i++) {
            if (QRIS.qris_request_date[i] === " ") {
                date = tmp
            } else {
                tmp = tmp + QRIS.qris_request_date[i]
            }
        }
        setDateTrx(date)
    }, [QRIS.qris_request_date])

    useEffect(() => {
        let tmp
        if (QRIS.qris_invoiceid&&dateTrx) {
            tmp = setInterval(() => {
                    checkStatusQRIS({
                        invid: QRIS.qris_invoiceid,
                        trxvalue: QRIS.amount,
                        depositId: idPendingTransaction,
                        trxdate: dateTrx
                    }, history)
                
            }, 3000) 
        }
        else {
            if(tmp) clearInterval(tmp)
        }
        return () => {
            clearInterval(tmp)
        }
    }, [QRIS.qris_invoiceid, dateTrx])
    

    return (
        <div className="border border-info m-0 mt-3 px-2 py-3 tab2">
            <div>
                <div className="mb-2 label-title text-center p-3">Silahkan melakukan pembayaran via QRIS</div>
                <div className="w-100 ci-bg-secondary p-3 rounded text-center align-items-center bg-image" style={{ backgroundImage: `url(${qrisBG})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
                        <QRCode value={QRIS.qris_content ? QRIS.qris_content : ""} size={220} />
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-2 rounded" style={{ border: "0.1px solid grey" }}>
                    <table className="font-bold m-3 text-left">
                        <tr>
                            <td className="pr-3 label-title2 font-bold">Jumlah tagihan</td>
                            <td className="label-title2">: {convertNumber.toMoney(QRIS.amount, "Rp.")}</td>
                        </tr>
                        <tr>
                            <td className="pr-3 label-title2 font-bold">Batas pembayaran</td>
                            <td className="label-title2">: {moment(QRIS.qris_request_date).format("MMMM Do YYYY, h:mm:ss a")}</td>
                        </tr>
                    </table>
                </div>
                <ul className="p-0 my-3">
                    <li className="ml-3 label-title2">Mohon ikuti instruksi berikut untuk melakukan deposit melalui QRIS.</li>
                    <li className="ml-3 label-title2">Buka aplikasi pembayaran yang ingin kalian gunakan.</li>
                    <li className="ml-3 label-title2">Lakukan pemindaian (scan) pada QR Code di atas.</li>
                    <li className="ml-3 label-title2">Pastikan Anda melakukan pembayaran deposit dengan nominal {convertNumber.toMoney(QRIS.amount, "Rp.")}</li>
                    <li className="ml-3 label-title2">Sistem akan otomatis menambahkan dana ke saldo Anda.</li>
                    <li className="ml-3 label-title2">Jika saldo Anda belum masuk, Anda dapat memilih Konfirmasi Sekarang. Kemudian, Anda harus mengisi form yang mengandung informasi seperti jumlah deposit, tanggal deposit, metode pembayaran, nomor rekening anda, dan bukti transfer.</li>
                </ul>
            </div>
            <div className="row d-flex justify-content-between align-items-end m-0 mt-4 pt-4 px-2">
                <div>
                    <button className="btn btn-danger font-12 border-0 py-2 px-3 m-0" onClick={(e) => batalkan(e)}>
                        <i class="fas fa-ban mr-2"></i>
                        <span className="font-12">Batalkan Penyetoran</span>
                    </button>
                </div>
                <div>
                    <span className="label-title2">Dana anda belum masuk? <span className="text-info font-bold" style={{ cursor: "pointer" }} onClick={() => history.push('/setor-rupiah/konfirmasi')}>Konfirmasi sekarang</span></span>
                </div>
            </div>
        </div>
    )
}

export default SetorRupiahQRIS
