import React from 'react'

export default function googleAuthPopUpBerhasil() {
  return (
    <div className="modal fade" id="googleAuthPopUpBerhasil" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-ubah-password">
          <div className="modal-header-berhasil-custom">
            <h5 className="modal-title-custom" id="exampleModalLongTitle">Berhasil!</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style={{color:"#000000"}}>&times;</span>
            </button>
          </div>
          <div className="modal-body modal-body-custom">
            <h1 className="message-berhasil">Koneksi Google Authenticator berhasil dihapus!</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
