import React from 'react'

function PopupUbahPassword(props) {
    const title = props.value.title; 
    const text = props.value.text;

    return (
        <div className={props.showPopUpForgetPassword ? 'show-popup' : 'hide-popup'}>
            <div className="card ci-customCard-1 text-wrapper">
                <div className="card-header top-side">
                    <p style={{
                        textAlign: 'center'
                    }} className="mb-0 p-1 font-roboto font-bold font-20" >{title}</p>

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
                                <button onClick={() => props.setShowPopUpForgetPassword(false)} className="ci-btn-warning ci-lg w-100">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="text-wrapper row no-gutters">
                <div style={{position: 'relative'}} className="col-12 top-side d-flex justify-content-center">
                    <p style={{
                        textAlign: 'center'
                    }} className="mb-0 p-3 font-roboto font-bold font-20" >{title}</p>
                </div>
                <div className="col-12 bot-side">
                    <div className="row no-gutters">
                        <div className="col-12 d-flex p-4 pb-0 justify-content-center">
                            <p style={{
                                textAlign: 'justify'
                            }} className="ci-text-white mb-0">{text}</p>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 d-flex justify-content-center pb-4">
                        <button 
                            onClick={() => props.setShowPopUpForgetPassword(false)}
                            style={{
                                maxWidth: "150px"
                            }} className="button-transparant">OK</button>
                        </div>
                    </div>
                </div>
                
            </div> */}
        </div>
    )
}

export default PopupUbahPassword