import React from 'react'
import { Route, Redirect } from "react-router-dom";
// import { useSelector } from 'react-redux'

// rubah dikit benerin warning
export default function ProtectedKYC ({children, ...rest}) {
    // const kyc = useSelector(state => state.kycReducer)
    return (
        <Route {...rest}>
            {true ? children : <Redirect to={"/verification/step1"} />} 
        </Route>
    )
}