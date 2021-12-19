import React from 'react'
import CopyrightDashboard from '../../components/footerComponents/copyrightComponents/CopyrightDashboard'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'
import ContentKeuangan from './ContentKeuangan'

function KeuanganPage(props) {    
    return (
        <div className="keuangan">
            <div className='ci-bg-primary'>
                <HeaderHomePage setLocale={props.setLocale}/>
            </div>
            <ContentKeuangan setLocale={props.setLocale}/>
            <CopyrightDashboard setLocale={props.setLocale}/>
        </div>
    )
}

export default KeuanganPage
