import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cancelPenyetoran, checkStatusQRIS } from '../../../../../stores/setorrupiah/functions'
import { convertNumber } from '../../../../../assets/js'
import moment from 'moment'
import QRCode from 'qrcode.react'
import { getPaymentIcon } from '../../../../../assets/payments'
import BCAInstructions from './instructions/BCAInstructions'

function QRISSetorBank() {
    const amount = useSelector(state => state.setorRupiahReducer.amount)
    const fee = useSelector(state => state.setorRupiahReducer.fee)
    const QRIS = useSelector(state => state.setorRupiahReducer.QRIS)
    const metode = useSelector(state => state.setorRupiahReducer.metode)
    const idPendingTransaction = useSelector(state => state.setorRupiahReducer.idPendingTransaction)
    const history = useHistory()
    const dispatch = useDispatch()
    const batalkan = (e) => {
        e.preventDefault()
        cancelPenyetoran(idPendingTransaction, dispatch, history)
    }
    const [bank, setBank] = useState('')

    useEffect(() => {
        checkStatusQRIS({
            depositId: idPendingTransaction,
        }, history)
    }, [idPendingTransaction])

    const downloadQRCode = () => {
        const canvas = document.getElementById("qr-code-qris");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qr-code-qris.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <div className="border border-info m-0 mt-3 px-2 py-3 tab2">
            <div className="d-flex">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src={getPaymentIcon(metode)} className="w-50"></img>
                        <div className="row my-2">
                            <div className="font-bold col-5">
                                Batas pembayaran
                        </div>
                            <div className="font-bold col-7">
                                : {moment(QRIS.qris_request_date).format("MMMM Do YYYY, h:mm:ss a")}
                            </div>
                            <div className="font-bold col-5">
                                Jumlah tagihan
                        </div>
                            <div className="font-bold col-7">
                                : {convertNumber.toMoney(QRIS.amount, "Rp.")}
                            </div>
                        </div>
                        <div className="ci-bg-secondary font-12 p-2 mt-2">
                            <p>Petunjuk pembayaran menggunakan QR Code (QRIS):</p>
                            <BCAInstructions amount={amount}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center mt-2">
                        <div className="p-1 text-center bg-white p-2">
                            <QRCode
                                id="qr-code-qris"
                                value={QRIS.qris_content ? QRIS.qris_content : ""}
                                size={120}
                            />
                        </div>
                        <div className="mt-2">
                            Scan QR Code QRIS
                    </div>
                        <div>atau</div>
                        <div>
                            <button className="p-2 ci-bg-success text-white border-0" onClick={() => downloadQRCode()}>
                                <i class="fas fa-download mr-2"></i>
                            Unduh Gambar
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-between align-items-end m-0 mt-1 pt-4 px-2">
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

export default QRISSetorBank
