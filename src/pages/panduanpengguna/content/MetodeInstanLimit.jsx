import React from 'react'

function MetodeInstanLimit() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Metode Instan dan Metode Limit
                    </h2>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <p className="text-gray2 font-15 text-justify">Untuk proses jual dan beli aset kripto terdapat 2 metode yang disediakan oleh platform exchange kami, yaitu Metode Limit dan Metode Instan.</p>
                    <ol>
                        <li className="text-gray2 font-16">Metode Instan</li>
                        <p className="text-gray2 font-14">Metode Instan adalah proses jual beli crypto dengan waktu yang relatif singkat, tanpa harus menunggu order Anda tereksekusi, hal ini karena sudah langsung menggunakan harga yang dibuat oleh para <i>market maker</i>. Biasanya, metode instan ini juga disebut <i>market taker</i>.</p>
                        <p className="text-gray2 font-14 font-weight-bold">Anda tidak perlu mengatur harganya karena anda membeli aset kripto di harga jual saat itu. Misalnya, harga crypto seperti Bitcoin menyentuh Rp 700 juta, jika menggunakan market taker atau metode instant, anda akan membelinya di harga Rp 700 juta.</p>
                        <p className="text-gray2 font-14">Keuntungan menggunakan metode ini adalah Anda bisa menjual/membeli Bitcoin secara instan, tanpa harus menunggu order Anda tereksekusi karena sudah langsung menggunakan harga yang dibuat oleh para <i>market maker</i>.</p>
                        <p className="text-gray2 font-14">Kekurangannya, Anda akan dikenakan biaya sebesar 0.25% untuk setiap transaksi (biaya sudah termasuk PPN).</p>
                        
                        <li className="text-gray2 font-16">Metode Limit</li>
                        <p className="text-gray2 font-14">Metode Limit adalah proses jual beli crypto dengan harga yang Anda tentukan sendiri. Biasanya, metode limit juga disebut <i>market maker</i>.</p>
                        <p className="text-gray2 font-14">Anda bisa membeli aset kripto dengan menggunakan harga yang anda tentukan sendiri. Misalnya, harga Bitcoin masih Rp 700 juta. Anda ingin membelinya di harga Rp 680 juta. Jadi, nantinya saldo rupiah anda akan di-lock di harga Rp 680 juta. Order anda akan tereksekusi ketika harga aset Bitcoin menyentuh Rp 680 juta.</p>
                        <p className="text-gray2 font-14">Metode limit juga berlaku saat anda ingin menjual harga aset kriptonya. Misalnya, anda sudah membeli harga sebuah crypto. Kemudian, anda ingin mematok keuntungan sekitar 100%, anda bisa menggunakan metode ini untuk menentukan limit harga jualnya.</p>
                        <p className="text-gray2 font-14">Keuntungan menjadi menggunakan metode ini, Anda tidak dikenakan biaya transaksi apapun (0% fee) dalam proses jual-beli crypto dan bisa mentransaksikan crypto di harga yang Anda mau. Kekurangannya, Anda terpaksa harus menunggu beberapa saat sampai harga Bitcoin bergerak menyentuh harga yang Anda mau.</p>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default MetodeInstanLimit
