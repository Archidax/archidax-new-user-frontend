import React, { useEffect, useState } from 'react'
import HtmlParser from 'react-html-parser';
import { useHistory, useParams } from 'react-router-dom';
// import {useDispatch} from 'react-redux'

import FooterHomePage from "../../components/footerComponents/footerHomePage/FooterHomePage";
import HeaderAlternate from "../../components/headerComponents/headerHomePage/HeaderAlternate";
import LoadingPage from '../../pages/loadingpage'
import { errHandler } from '../../helpers';
import { baseAxios } from '../../stores';
// import {changePass} from '../../stores'

function CustomPage(props) {
    const { flag, setLocale } = props
    const { category, pageSlug } = useParams();
    const history = useHistory()

    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState({
        title: '',
        content: ''
    })


    useEffect(() => {
        setLoading(true)
        if(!category || !pageSlug){
            history.push('/404')
        }
        baseAxios({
            method: 'GET',
            url: `pages/get/${category}/${pageSlug}`
        }).then(({data}) => {
            if(data){
                setPage({
                    title: data.page.pageName,
                    content: data.page.content
                })
            }
            setLoading(false)
        }).catch(({response}) => {
            if(response && response.data.message === 'Page Not Found'){
                history.push('/404')
            } else {
                errHandler({ response })
            }
        })

        return () => {
            setPage({
                title: '',
                content: ''
            })
            setLoading(true)
        }
    },[category, pageSlug])

    return (
        loading ?
            <LoadingPage />
        :
            <>
                
                <HeaderAlternate flag={flag} setLocale={setLocale}  />
                <div className="bannersyaratdanketentuan">
                    <h4
                        className="text-center font-40 text-gold font-weight-bold"
                        style={{ paddingTop: "120px" }}
                    >
                    { page.title.toUpperCase() }
                    </h4>
                </div>
                <div className="bg-homepage pt-4 pb-5">
                    <div className="container text-white">
                        {
                            HtmlParser(page.content)
                        }
                    </div>
                </div>
                <FooterHomePage />
            </>
    )
}

export default CustomPage
