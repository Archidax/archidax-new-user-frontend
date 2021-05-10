import React, { useEffect } from 'react';
import Popup from './index'
// Import Images
// import imagesLoading from '../../assets/img/iconsCoin/BitcoinCoin.png'
function LoadingPage() {
    useEffect(() => {
        return () => {
            Popup.close()
        }
    }, [])

    return (
        <div className={'show-popup'}>
            <div className="card ci-customCard-1 text-wrapper" style={{maxWidth: "500px"}}>
                <div className="card-body">
                    <div className="container-fluid">
                        <div className="row my-2">
                            <div className="col-12 col-md-12 d-flex justify-content-center">
                                <div className="loaderSwal loaderSwal-1">
                                    <div className="loader-outterSwal"></div>
                                    <div className="loader-innerSwal"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 col-md-12">
                                <h2 className="text-white text-center mb-2">Harap Tunggu ...</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="ci-loading-page-overlay">
        //     <img src={imagesLoading} style={{width: "80px", height: "80px"}} className="ci-loading-img" alt="Loading..."/>
        // </div>
    )
}

export default LoadingPage