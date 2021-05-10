import React, {useEffect} from 'react'
import Popup from './index'

function PopupBuatVoucherKhusus(props) {
  const title = props.title
  const text = props.text;
  useEffect(() => {
    return () => {
        Popup.close()
    }
    }, [])
    
  return (
    <div className={'show-popup'}>
      <div className="card ci-customCard-1 text-wrapper">
          <div className="card-header top-side">
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
                    {
                      props.cancel && 
                      <div className="col-12 col-md-3 d-flex justify-content-center">
                          <button  onClick={() => {
                              Popup.close()
                          }} className="ci-btn-danger ci-lg w-100">Cancel</button>
                      </div>
                    }
                      <div className="col-12 col-md-3 d-flex justify-content-center">
                          <button  onClick={() => {
                              if(props.onClickOk){
                                Popup.close()
                                props.onClickOk()
                              }else {
                                Popup.close()
                              }
                          }} className="ci-btn-warning ci-lg w-100">OK</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PopupBuatVoucherKhusus
