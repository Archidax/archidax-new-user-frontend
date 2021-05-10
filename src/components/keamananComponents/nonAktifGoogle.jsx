import React, { useState } from 'react';
import ReactCodeInput from 'react-code-input'
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deactivateGauth } from '../../stores/index'

export default function NonAktifGoogle() {
  const [code, setCode] = useState(0)
  // const dispatch = useDispatch()
  const history = useHistory()
  const matikan = (e) => {
    e.preventDefault()
    deactivateGauth({ code: code }, history)
  }

  return (
    <div className="modal fade" id="nonAktifGoogle" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-ubah-password">
          <div className="modal-header modal-header-custom">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style={{ color: "white" }}>&times;</span>
            </button>
          </div>
          <div className="modal-body modal-body-custom">
            <h1>Matikan Google Authenticator</h1>
            <p>Untuk menghilangkan fungsi ini, silakan masukkan PIN yang benar dari aplikasi Google Authenticator anda.</p>
            <form>
              <div className="form-group row no-gutters">
                <label htmlFor="inputPasswordLama label-input" className="col-sm-4 col-form-label">Kode Authenticator</label>
                <div className="col-sm-8 input-group ci-inputDefault-bg">
                  <ReactCodeInput
                    type="number"
                    fields={6}
                    onChange={(e) => setCode(e)}
                  />
                </div>
              </div>
            </form>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="ci-btn-lg ci-btn-custom-1 w-25" onClick={(e) => matikan(e)}>Matikan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
