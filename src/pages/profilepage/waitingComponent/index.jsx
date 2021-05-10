import React from 'react'
import { useHistory } from "react-router-dom";
import {ReactComponent as WaitingIMG} from '../../../assets/img/vector-kyc.svg'

export default function WaitingComponent() {
    const history = useHistory()
    return (
        <div className="container-fluid p-4" >
            <div className="row no-gutters mb-4">
                <div className="col-12">
                    <p 
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                            history.replace('/profile')
                    }} className="ci-text-white mb-0"><i className="fas fa-arrow-circle-left edit-button mr-3" /> Kembali ke profil</p>
                </div>
            </div>
            
            <div className="row no-gutters bg-homepage2 p-4">
                    <div style={{
                        minHeight: '78vh'
                    }} className="col-12 p-5 d-flex flex-column justify-content-center align-items-center">
                        <WaitingIMG />
                        <p style={{
                            color: "#424766"
                        }} className="mb-0 mt-3">
                            Sedang Diproses
                        </p>
                        <p style={{
                            color: "#424766"
                        }} className="mb-0 mt-1">
                            Tim kami akan melakukan konfirmasi melalui video call untuk memvalidasi permintaan ini dalam 3-7 hari kerja.
                        </p>
                    </div>
            </div>
        </div>
    )
}