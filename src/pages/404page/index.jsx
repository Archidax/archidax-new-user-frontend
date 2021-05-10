import React from 'react'
// import { useHistory } from 'react-router-dom'
// import {changePass} from '../../stores'
// import {useDispatch} from 'react-redux'
import Header from "../../components/headerComponents/headerBerita";

function UbahPassword() {
    // const dispatch = useDispatch()
    // const history = useHistory()
   
    
    return (
        <div className="" style={{
            backgroundColor: "#0B0C22",
            position: 'fixed',
            top: 0,
            left: 0, right: 0}}>
                <Header />
            <div className="row align-items-center justify-content-center " style={{height: "100vh"}}>
                <div className="col-12 text-center">
                    <h1 style={{
                        fontSize: '60px',
                        fontWeight: '600',
                        letterSpacing: '1.3px'
                    }} className="text-grad-gold">404!</h1>
                    <p style={{
                        letterSpacing: "1.1px"
                    }} className="ci-text-white font-roboto font-20">Page not found!</p>
                </div>
                
            </div>
        </div>
    )
}

export default UbahPassword
