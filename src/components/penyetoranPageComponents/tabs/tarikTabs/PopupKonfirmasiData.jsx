import React from 'react'

function PopupKonfirmasiData() {
    return (
        <div className="modal fade" id="popupKonfirmasiDataPenarikan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="border-0 modal-header ci-bg-gold text-white font-bold d-flex justify-content-center">
                        <h5 className="modal-title font-12 text-center text-dark font-bold" id="exampleModalLabel"><i className="fas fa-exclamation-triangle"> </i><span> </span> Mohon periksa kembali data Anda</h5>
                    </div>
                    <div className="modal-body ci-bg-primary border-0 px-5 py-3 text-white font-12 pt-4">
                        <div className="row">
                            <div className="col-4">Nama Lengkap</div>
                            <div>: Valencia Tan</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Bank</div>
                            <div>: BCA</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Nomor Rekening</div>
                            <div>: 535136742</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Jumlah Penarikan</div>
                            <div>: Rp.1000.000,00</div>
                        </div>
                        <div className="row">
                            <div className="col py-2">Silahkan klik LANJUT jika data sudah benar.</div>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-between ci-bg-primary border-0 px-5">
                        <button type="button" className="btn btn-danger font-12 ci-bg-secondary" style={{border: "1px solid white"}} data-dismiss="modal">Batal</button>
                        <button type="button" className="btn btn-primary font-12 ci-bg-secondary" data-toggle="modal" data-target="#popupKonfirmasiDataPenarikan">Lanjut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupKonfirmasiData
