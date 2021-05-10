import React, { useState, useEffect } from 'react'

function PopUpCrypto(props) {

  const { 
      title,
      okButtonText, 
      onOkClicked, 
      cancelButtonText, 
      onCancelClicked, 
      show,
      children 
    } = props

  const [showState, setShowState] = useState(false)
  const [buttons, setButtons] = useState({
    okButtonText: 'Ok',
    cancelButtonText: ''
  })

  const onOkClick = () => {
    if(onOkClicked){
        onOkClicked()
    }
    setShowState(false)
  }

  const onCancelClick = () => {
    if(onCancelClicked){
        onCancelClicked()
    }
    setShowState(false)
  }
  
  useEffect(() => {
    setShowState(show)
    setButtons({
        okButtonText: okButtonText? okButtonText : 'Ok',
        cancelButtonText: cancelButtonText? cancelButtonText : ''
    })
  },[show])

  return (
    <div className={showState ? 'show-popup' : 'hide-popup'}>
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
                          {children}
                      </div>
                  </div>
                  <div className="row mt-3 d-flex justify-content-center">
                      <div className="col-12 col-md-3 d-flex justify-content-center">
                          <button onClick={() => onOkClick()} className="ci-btn-warning ci-lg w-100">{buttons.okButtonText}</button>
                          {
                              cancelButtonText && <button onClick={() => onCancelClick()} className="ci-btn-danger ci-lg w-100">{buttons.cancelButtonText}</button>
                          }
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PopUpCrypto
