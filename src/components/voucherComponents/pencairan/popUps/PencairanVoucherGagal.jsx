import React from 'react'

function PencairanVoucherGagal(props) {
  const title = props.value.title; 
  const text = props.value.text;

  return (
    <div className={props.showPopupVocherKhusus ? 'show-popup' : 'hide-popup'}>
      <div className="card ci-customCard-1 text-wrapper">
          <div className="card-header top-side" style={{background: "#ED4C5C"}}>
              <p style={{
                  textAlign: 'center'
              }} className="mb-0 p-1 font-roboto text-dark font-bold font-20" >{title}</p>
          </div>
          <div className="card-body p-4 pl-5 pr-5">
              <div className="container">
                  <div className="row my-2">
                      <div className="col-12 col-md-12">
                          <p style={{ textAlign: 'center' }} className="ci-text-white mb-0 font-12">{text}</p>
                      </div>
                  </div>
                  <div className="row mt-3 d-flex justify-content-center">
                      <div className="col-12 col-md-3 d-flex justify-content-center">
                          <button onClick={() => props.setShowPopupVocherKhusus(false)} className="ci-btn-danger ci-lg w-100">OK</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PencairanVoucherGagal
