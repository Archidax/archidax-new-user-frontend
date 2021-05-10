import React from 'react'
import CopyrightDashboard from '../../components/footerComponents/copyrightComponents/CopyrightDashboard'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'
import ContentKeuangan from './ContentKeuangan'

function KeuanganPage() {
    return (
        <div className="keuangan">
            <div className='ci-bg-primary'>
                <HeaderHomePage/>
            </div>
            <ContentKeuangan/>
            <CopyrightDashboard/>
        </div>
    )
}

export default KeuanganPage
