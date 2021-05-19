import React from 'react'
import KonfirmasiSetorList from './tabs/KonfirmasiSetorList'
import SetorRupiahTabs from './tabs/SetorRupiahTabs'
import TarikRupiahTabs from './tabs/TarikRupiahTabs'

import setorIcon from '../../assets/img/setor-tarik/setor.png'
// import tarikIcon from '../../assets/img/setor-tarik/tarik.png'
import riwayatIcon from '../../assets/img/setor-tarik/riwayat.png'


function SetorTarik() {
    return (
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="nav nav-tabs d-flex flex-column flex-lg-row" id="myTab" role="tablist" style={{ borderBottom: "0px" }}>
                        <button className="nav-link btn ci-btn-custom-1 ci-btn-tabsSetorTarik active px-5 py-3 font-16 font-bold border-0 mr-2 w-100 mb-2 mb-lg-0" style={{ borderRadius: "2px" }} id="setor-tab" data-toggle="tab" href="#setor" role="tab" aria-controls="setor" aria-selected="true">
                            <img src={setorIcon} alt="setorIcon" className="mr-2" /> Fiat Deposit
                        </button>
                        <button className="nav-link btn ci-btn-custom-1 ci-btn-tabsSetorTarik px-5 py-3 font-16 font-bold border-0 w-100" style={{ borderRadius: "2px" }} id="konfirmasi-tab" data-toggle="tab" href="#konfirmasi" role="tab" aria-controls="konfirmasi" aria-selected="false">
                            <img src={riwayatIcon} alt="riwayatIcon" className="mr-2" /> Deposit Confirmation
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="setor" role="tabpanel" aria-labelledby="setor-tab">
                            <SetorRupiahTabs />
                        </div>
                        <div className="tab-pane fade" id="konfirmasi" role="tabpanel" aria-labelledby="konfirmasi-tab">
                            <KonfirmasiSetorList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetorTarik
