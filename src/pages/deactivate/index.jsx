import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {deactiveSebenarnya} from '../../stores'
import {useDispatch} from 'react-redux'
import Header from "../../components/headerComponents/headerBerita";

function UbahPassword() {
    const dispatch = useDispatch()
    
    const [done, setDone] = useState(false)
    const search = useLocation().search
    const id = new URLSearchParams(search).get('id');
    
    useEffect(() => {
        deactiveSebenarnya(dispatch, id, () => {
            setDone(true)
        })
    }, [setDone,dispatch,id])
    
    return (
        <div className="" style={{
            backgroundColor: "#0B0C22",
            position: 'fixed',
            top: 0,
            left: 0, right: 0}}>
                <Header />
                    <div className="row align-items-center justify-content-center " style={{height: "100vh"}}>
                    {
                        done &&
                        <div className="col-12 text-center">
                                <h1 style={{
                                    fontSize: '60px',
                                    fontWeight: '600',
                                    letterSpacing: '1.3px'
                                }} className="text-grad-gold">Berhasil!</h1>
                            <p style={{
                                letterSpacing: "1.1px"
                            }} className="ci-text-white font-roboto font-20">Akun anda telah berhasil dinonaktifkan.</p>
                        </div>
                        
                    }
                </div>
        </div>
    )
}

export default UbahPassword
