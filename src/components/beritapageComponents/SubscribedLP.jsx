import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../stores/index'
import errorHandler from '../../stores/errorHandler'
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import Header from "../../components/headerComponents/headerBerita";
// import popUps from '../popUps'

function SubscribedLP() {
    const { search } = useLocation()
    const { id } = queryString.parse(search)
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    useEffect(() => {
        setLoading(true)
        axios({
            method: "GET",
            url: `${baseUrl}/api/auth/subscribeNews/confirmation/${id}`,
            headers: { jwttoken: localStorage.getItem('token') ? localStorage.getItem('token') : null }
        })
            .then(({ data }) => {
                console.log(data)
                setLoading(false)
            })
            .catch(err => {
                errorHandler(err)
                history.push('/')
            })
    }, [history,id])
    return (
        <div className="" style={{
            backgroundColor: "#0B0C22",
            position: 'fixed',
            top: 0,
            left: 0, right: 0
        }}>
            <Header />
            <div className="row align-items-center justify-content-center " style={{ height: "100vh" }}>
                {
                    loading ?
                        <div className="text-white font-14">Processing..</div>
                        :
                        <div className="col-12 text-center">
                            <h1 style={{
                                fontSize: '60px',
                                fontWeight: '600',
                                letterSpacing: '1.3px'
                            }} className="text-grad-gold">Berhasil</h1>
                            <p style={{
                                letterSpacing: "1.1px"
                            }} className="ci-text-white font-roboto font-20">Anda telah berhasil berlangganan saluran berita CryptoIndex.</p>
                        </div>
                }

            </div>
        </div>
    )
}

export default SubscribedLP
