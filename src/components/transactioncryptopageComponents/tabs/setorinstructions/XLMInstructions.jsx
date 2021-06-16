import React from 'react'

function XLMInstructions() {
    return (
        <ul>
            <li className="font-14">Alamat wallet XLM yang ada di samping hanya berlaku untuk Anda, dan dapat digunakan berulang kali (alamat Mainnet).</li>
            <li className="font-14">Deposit akan masuk setelah 1 konfirmasi.</li>
            <li className="font-14">Deposit tidak dikenakan biaya.</li>
            <li className="font-14">Mengirim koin/token selain XLM ke alamat di samping akan menyebabkan koin/token tersebut hilang dan tidak dapat dikembalikan.</li>
            <li className="font-14">Saat melakukan transfer XLM, wajib memasukkan <span className="font-bold">Memo</span>. Jika tidak mencantumkan <span className="font-bold">Memo</span> maka deposit XLM akan gagal (alamat Mainnet).</li>

            <li className="font-14">XLM Wallet address on the side valid only to you and can be used multiple times (Mainnet).</li>
            <li className="font-14">Deposit will be accepted after 1 confirmation.</li>
            <li className="font-14">Deposit will not be charged.</li>
            <li className="font-14">Sending coin/token beside XLM to the another address will result in coin lost and can not be recovered.</li>
            <li className="font-14">It's necessary to write <span className="font-bold">Memo</span> otherwise your deposit will not succeed</li>

        </ul>
    )
}

export default XLMInstructions
