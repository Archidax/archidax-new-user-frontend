import React from 'react'

function PopupAfterKonfirmasiData() {
    return (
        <div className="modal fade" id="popupKonfirmasiAfterDataPenarikan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="border-0 modal-header ci-bg-gold text-white font-bold d-flex justify-content-center">
                        <div className="col-11">
                            <h5 className="modal-title font-12 text-center text-dark font-bold" id="exampleModalLabel">Satu langkah lagi!</h5>
                        </div>
                        <div className="col-1">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className="modal-body ci-bg-primary border-0 px-5 py-3 text-white font-12 pt-4">
                        <p className="font-12 text-white">Kami telah mengirimkan email konfirmasi ke alamat email anda. Silahkan klik link di dalamnya untuk melanjutkan proses penarikan.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupAfterKonfirmasiData
