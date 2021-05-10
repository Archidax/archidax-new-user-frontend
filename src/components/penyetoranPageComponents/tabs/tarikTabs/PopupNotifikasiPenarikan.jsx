import React from 'react'

function PopupNotifikasiPenarikan() {
    return (
        <div className="modal fade" id="popupNotifikasiPenarikan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="rounded border-0 modal-header ci-bg-gold text-white font-bold d-flex justify-content-center">
                        <div className="col-11">
                            <h5 className="modal-title font-12 text-center text-dark font-bold" id="exampleModalLabel">Permintaan penarikan rupiah berhasil dikonfirmasi. Dana akan segera dikirim paling lama dalam waktu 1 hari kerja bank.</h5>
                        </div>
                        <div className="col-1">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupNotifikasiPenarikan
