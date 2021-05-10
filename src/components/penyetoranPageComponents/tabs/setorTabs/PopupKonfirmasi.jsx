import React from 'react'

function PopupKonfirmasi() {
    return (
        <div className="modal fade bd-example-modal-lg container-fluid" id="popupKonfirmasi" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog text-white">
                <div className="modal-content ci-bg-primary p-5 font-12"> 
                    <div className="row mb-3">Lengkapi isian berikut jika Anda melakukan deposit melalui transfer Bank dan Alfamart.</div>
                    <div className="row d-flex align-items-center">
                        <div className="col-5 p-0">Jumlah Deposit</div>
                        <div className="col-7 p-0">
                            <input type="number" className="ci-bg-secondary py-2 px-2 w-100 text-white border-0" />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center my-1">
                        <div className="col-5 p-0">Tanggal Deposit</div>
                        <div className="col-7 p-0 ">
                            <input type="date" className="ci-bg-secondary py-2 px-2 w-100 text-white border-0" />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center my-1">
                        <div className="col-5 p-0">Metode Pembayaran</div>
                        <div className="col-7 p-0 ">
                            <input type="text" className="ci-bg-secondary py-2 px-2 w-100 text-white border-0" />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center my-1">
                        <div className="col-5 p-0">Nomor Rekening Anda</div>
                        <div className="col-7 p-0 ">
                            <input type="number" className="ci-bg-secondary py-2 px-2 w-100 text-white border-0" />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center my-1">
                        <div className="col-5 p-0">Bukti Transfer</div>
                        <div className="col-7 p-0 ">
                            <input type="file" className="ci-bg-secondary py-2 px-2 w-100 text-white border-0" />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center my-1">
                        <div className="col-5 p-0"></div>
                        <div className="col-7 p-0 ">
                            Jenis file: jpg, gif, png, pdf. Ukuran file maksimal 3mb.
                        </div>
                    </div>
                    <div className="row d-flex align-items-center my-1 d-flex justify-content-end">
                        <div>
                            <button className="font-12 text-white ci-bg-secondary border-0 py-2 px-3 m-0">Konfirmasi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupKonfirmasi
