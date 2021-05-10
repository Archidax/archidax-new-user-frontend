import React from 'react'
import { convertNumber } from '../../../../../../assets/js'

function BCAInstructions({ amount }) {
    return (
        <ul className="m-1 px-2">
            <li className="font-12 m-0">Buka aplikasi ShopeePay, Dana, LinkAja, pilih scan dan arahkan ke QR code di atas, maka otomatis halaman pembayaran akan muncul.</li>
            <li className="font-12 m-0">Beberapa aplikasi e-wallet juga mendukung upload QR Code untuk melakukan pembayaran. </li>
            <li className="font-12 m-0">Kami akan memotong sejumlah ({convertNumber.toMoney(amount * 0.007, "Rp")}) dari jumlah deposit Anda untuk biaya layanan.</li>
            <li className="font-12 m-0">Anda akan menerima deposit senilai {convertNumber.toMoney(amount - amount * 0.007, "Rp")}.</li>
        </ul>
    )
}

export default BCAInstructions
