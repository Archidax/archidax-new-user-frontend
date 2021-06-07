import React, { useEffect } from 'react'

import { useHistory, useParams } from "react-router-dom";
import { verifyEmail } from '../../stores'

import imagesLoading from '../../assets/img/cryptoIndex/logo2d.png'

// Import Pages

function EmailVerification() {
    const { key } = useParams()
    const history = useHistory()

    useEffect(() => {
        verifyEmail(key, history)
    },[])

    return (
        <div className="ci-loading-page">
            <img src={imagesLoading} style={{width: "80px", height: "80px"}} className="ci-loading-img" alt="Loading..."/>
        </div>
    )
}

export default EmailVerification
