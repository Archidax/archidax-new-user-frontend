import React from 'react'

// import images
import MyTradesLaunchpad from '../../../assets/img/my_tradesLaunchpad.svg'

function MyTrades() {
    return (
        <div className="container-fluid">
            <div className="row no-gutters mb-2 py-5 justify-content-center align-items-center">
                <div className="col-12 col-md-4 text-center d-none d-sm-block">
                    <img src={MyTradesLaunchpad} alt="..." className="img-fluid"/>
                </div>
                <div className="col-12 col-md-4">
                    <p className="font-weight-bold text-white font-roboto font-24 mb-0 text-center" style={{letterSpacing: "1.2px"}}>You Must Login First !</p>
                </div>
            </div>
        </div>
    )
}

export default MyTrades
