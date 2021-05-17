import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import formatRupiah from '@develoka/angka-rupiah-js'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import { cancelPenyetoran } from '../../../../stores/setorrupiah/functions'
import PaypalButton from './paypalButton'

const initialOptions = {
    // "client-id": "ATcZUPONAjGfAgxUDAt-F5_HCAPchIeeTxxQcf8Lej5rDetgSPSYE27wx0JNRsqMas5pXliaGby4pf8u", //sandbox
    "client-id": "ATv4Z_W0h86lR3X32STglnQSKHgLGBc8lmh78I0N4Uk4NBKiuSRxUivB_eUIZ_QoHaFX9kcYfzIPFgNj", 
    currency: "USD",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
};

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

    const onPaypalApprove = (val) => {
        // console.log(val)
    }

    const onPaypalError = (val) => {
        // console.log(val)
    }

    return (
        <div className="border border-info m-0 mt-3 px-2 py-3 tab2">
            <div>
                <div className="mb-2 font-12 label-title2 text-center font-bold">PAYPAL, DEBIT/CC INSTRUCTION</div>
                <div className="w-100 ci-bg-secondary p-3 rounded">
                    <table className="font-bold label-title2">
                        <tr className="label-title2">
                            <td className="pr-3 font-12 label-title2">Batas pembayaran</td>
                            <td className="font-12 label-title2">: {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
                        </tr>
                        <tr className="label-title2">
                            <td className="pr-3 font-12 label-title2">Jumlah tagihan</td>
                            <td className="font-12 label-title2">: {formatRupiah(amount + fee, { format: false })}</td>
                        </tr>
                    </table>
                </div>
                <ul className="p-0 my-3">
                    <li className="ml-3 font-12 label-title2">Please follow the instructions below to deposit via PayPal or Debit/Credit Card.</li>
                    <li className="ml-3 font-12 label-title2">If you already have a PayPal account, Payment can be made by clicking the PayPal button.</li>
                    <li className="ml-3 font-12 label-title2">Then, you will be directed to the PayPal login page. Follow the next instructions from PayPal until the payment process is complete.</li>
                    <li className="ml-3 font-12 label-title2">You can also make payments via Debit/Credit Card by clicking the Debit/Credit Card button.</li>
                    <li className="ml-3 font-12 label-title2">Fill and complete the form provided, then follow the next instructions until the payment process is complete.</li>
                </ul>
            </div>
            <div className="m-0 mt-4 pt-4 px-2">
                <div>
                    {/* <span className="font-12">Dana anda belum masuk? <span className="text-info font-bold" style={{ cursor: "pointer" }} onClick={() => history.push('/setor-rupiah/konfirmasi')}>Konfirmasi sekarang</span></span> */}
                    {
                        <PayPalScriptProvider options={initialOptions}>
                            <PaypalButton onPaypalApprove={onPaypalApprove} onPaypalError={onPaypalError} amount={amount} withdrawId={idPendingTransaction} />
                        </PayPalScriptProvider>
                    }
                </div>
                <div>
                    <button className="btn btn-danger font-12 border-0 py-2 px-3 m-0" onClick={() => batalkan()}>
                        <i class="fas fa-ban mr-2"></i>
                        <span className="font-12">Batalkan Penyetoran</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SetorRupiahAlfamart
