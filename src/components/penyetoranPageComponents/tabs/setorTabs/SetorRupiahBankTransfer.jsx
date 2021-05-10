import React from 'react'
import moment from 'moment'
import { convertNumber } from '../../../../assets/js'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cancelPenyetoran } from '../../../../stores/setorrupiah/functions'

function SetorRupiahTransferBank() {
    const amount = useSelector(state => state.setorRupiahReducer.amount)
    const fee = useSelector(state => state.setorRupiahReducer.fee)
    const createdAt = useSelector(state => state.setorRupiahReducer.createdAt)
    const idPendingTransaction = useSelector(state => state.setorRupiahReducer.idPendingTransaction)
    const history = useHistory()
    const dispatch = useDispatch()
    const batalkan = () => {
        cancelPenyetoran(idPendingTransaction, dispatch, history)
    }
    // const [id, setId] = useState(false)
    // useEffect(() => {
    //     setId(idPendingTransaction)
    // }, [idPendingTransaction])

    return (
        <div className="border border-info m-0 mt-3 px-2 py-3 tab2 font-12">
            <div className="label-title font-12">
                <p className="label-title2 m-2">Silahkan transfer menggunakan ATM/Mobile Banking ke rekening dibawah ini :</p>
                <div className="ci-bg-secondary rounded p-3 m-2">
                    <table className="font-bold font-12 w-100 p-3">
                        <tr>
                            <td className="pr-3">Kode Bank</td>
                            <td>: 014</td>
                        </tr>
                        <tr>
                            <td className="pr-3">Nama Bank</td>
                            <td>: Bank BCA</td>
                        </tr>
                        <tr>
                            <td className="pr-3">Atas nama</td>
                            <td>: CRYPTOINDEX</td>
                        </tr>
                        <tr>
                            <td className="pr-3">Nomor Rekening</td>
                            <td>: 999999999</td>
                        </tr>
                        <tr>
                            <td>Jumlah tagihan</td>
                            <td>: {convertNumber.toMoney(amount+fee, "Rp.")}</td>
                        </tr>
                        <tr>
                            <td>Batas pembayaran</td>
                            <td>: {moment(createdAt).add(1, 'day').format("DD MM YYYY hh:mm:ss", true)}</td>
                        </tr>
                    </table>
                </div>
                <ul className="p-0 my-3 font-12 ml-4">
                    <li className="label-title2">Pastikan transfer ke nomor rekening yang benar melalui ATM/Mobile Banking. Saldo akan bertambah secara otomatis ke dalam akun Anda secepatnya.</li>
                    <li className="label-title2">Perlu diketahui bahwa proses transfer saldo akan divalidasi oleh pihak kami secara manual pada jam dan hari kerja.</li>
                    <li className="label-title2">Untuk deposit dengan nominal diatas Rp 500.000,00 akan dikenakan biaya sebesar 0,5% yang akan dipotong dari jumlah yang Anda transfer.</li>
                    <li className="label-title2">Jika saldo Anda belum masuk, Anda dapat memilih Konfirmasi Sekarang. Kemudian, Anda harus mengisi form yang mengandung informasi seperti jumlah deposit, tanggal deposit, metode pembayaran, nomor rekening anda, dan bukti transfer.</li>
                </ul>
            </div>
            <div className="row d-flex flex-direction: column justify-content-between m-0 px-2 mt-4">
                <div>
                    <button className="btn btn-danger font-12 border-0 py-2 px-4 m-0" onClick={() => batalkan(idPendingTransaction)}>
                        <i class="fas fa-ban mr-2"></i>
                        <span>Batalkan Penyetoran</span>
                    </button>
                </div>
                <div>
                    <span>Dana anda belum masuk? <span className="text-info font-bold" style={{ cursor: "pointer" }} onClick={() => history.push('/setor-rupiah/konfirmasi')}>Konfirmasi sekarang</span></span>
                </div>
            </div>
        </div>
    )
}

export default SetorRupiahTransferBank
