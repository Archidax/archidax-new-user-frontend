import React from 'react';

// Import Images
import imagesLoading from '../../assets/img/cryptoIndex/logo2d.png'

function LoadingPage() {
    return (
        <div className="ci-loading-page">
            <img src={imagesLoading} style={{width: "80px", height: "80px"}} className="ci-loading-img" alt="Loading..."/>
        </div>
    )
}

export default LoadingPage
