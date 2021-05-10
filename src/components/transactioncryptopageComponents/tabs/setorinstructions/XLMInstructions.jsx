import React from 'react'

function XLMInstructions() {
    return (
        <ul>
            <li className="font-14">Alamat wallet XLM yang ada di samping hanya berlaku untuk Anda, dan dapat digunakan berulang kali (alamat Mainnet).</li>
            <li className="font-14">Deposit akan masuk setelah 1 konfirmasi.</li>
            <li className="font-14">Deposit tidak dikenakan biaya.</li>
            <li className="font-14">Mengirim koin/token selain XLM ke alamat di samping akan menyebabkan koin/token tersebut hilang dan tidak dapat dikembalikan.</li>
            <li className="font-14">Saat melakukan transfer XLM, wajib memasukkan <span className="font-bold">Memo</span>. Jika tidak mencantumkan <span className="font-bold">Memo</span> maka deposit XLM akan gagal (alamat Mainnet).</li>
        </ul>
    )
}

export default XLMInstructions
