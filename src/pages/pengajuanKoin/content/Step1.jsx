import React from 'react'

function Step1({setNextStep}) {
    return (
        <div className="container mt-4 mb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="ci-step-pengajuanKoin">
                        <div className="ci-step-pengajuanKoin-info d-flex flex-column align-items-end">
                            <div className="ci-iconKoin-info d-flex align-items-center justify-content-center mb-1">
                                <i className="fas fa-info font-22"></i>
                            </div>
                            <p className="font-14 text-gray2">Informasi</p>
                        </div>
                        <div className="ci-step-pengajuanKoin-line">
                            <div className="ci-step-pengajuanKoin-line-gradient"></div>
                        </div>
                        <div className="ci-step-pengajuanKoin-pengajuan d-flex flex-column align-items-start">
                            <div className="ci-iconKoin-pengajuan d-flex align-items-center justify-content-center mb-1">
                                <i className="fas fa-sticky-note font-22"></i>
                            </div>
                            <p className="font-14 text-gray2">Pengajuan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mb-5">
                <div className="col-12 col-md-8">
                    <div className="card ci-customCard-1">
                        <div className="card-header text-center" style={{background: "#F9BA42"}}>
                            <h3 className="font-20 font-weight-bold mb-0">Formulir Pengajuan Koin</h3>
                        </div>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-12">
                                        <p className="font-14 text-justify text-gray2">
                                            Silakan isi formulir ini untuk mengajukan Cryptoindex Launchpad di Cryptoindex.com.
                                        </p>
                                        <p className="font-14 text-justify text-gray2">
                                            Harap diperhatikan bahwa informasi yang Anda berikan kepada kami dapat dipublikasikan di masa mendatang sesuai dengan kebijakan perlindungan data. 
                                        </p>
                                        <p className="font-14 text-justify text-gray2">
                                            Jika sebelumnya Anda telah mengisi formulir aplikasi untuk proyek Anda, mohon jangan mendaftar lagi.
                                        </p>
                                        <p className="font-14 text-justify text-gray2">
                                            Perlu diketahui bahwa kami menerima banyak sekali aplikasi dan menghargai kesabaran Anda. Meskipun kami berusaha untuk memprosesnya secepat mungkin, kami tidak dapat memberikan umpan balik langsung pada aplikasi Anda jika tidak lolos tinjauan awal kami berdasarkan pada tahap saat ini proyek Anda berada.
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 col-md-12">
                                        <button onClick={() => {setNextStep(true)}} className="ci-btn-warning w-100 py-1 font-weight-bold">Lanjutkan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step1
