import React, { useEffect } from 'react'

import { useHistory, useParams } from "react-router-dom";
import { verifyLogin,getIpUser } from '../../stores'
import { useDispatch, useSelector } from 'react-redux'
import imagesLoading from '../../assets/img/loading/loading2d.svg'

// Import Pages

function EmailVerification() {
    const dispatch = useDispatch()
    const { key } = useParams()
    const history = useHistory()
    const userIP = useSelector(state => state.userReducer.userIP)

    useEffect(() => {
        getIpUser(dispatch)
    }, [])
    
    useEffect(() => {    
        if(!key) {
            history.replace('/home')
        }
        if(key && Object.keys(userIP).length){
            verifyLogin(dispatch, key, false, history, userIP)
        }
    },[userIP])
    
    return (
        <div className="ci-loading-page">
            <img src={imagesLoading} style={{width: "80px", height: "80px"}} className="ci-loading-img" alt="Loading..."/>
        </div>
    )
}

export default EmailVerification
