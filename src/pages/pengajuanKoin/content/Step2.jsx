import React from 'react'
import FormPengajuanKoin from './FormPengajuanKoin'

function Step2() {

    return (
        <div className="container-fluid mt-4 mb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="ci-step-pengajuanKoin">
                        <div className="ci-step-pengajuanKoin-info d-flex flex-column align-items-end">
                            <div className="ci-iconKoin-info d-flex align-items-center justify-content-center mb-1">
                                <i className="fas fa-info font-22"></i>
                            </div>
                            <p className="font-14 text-gray2">Informasi</p>
                        </div>
                        <div className="ci-step-pengajuanKoin-line active">
                            <div className="ci-step-pengajuanKoin-line-gradient active"></div>
                        </div>
                        <div className="ci-step-pengajuanKoin-pengajuan active d-flex flex-column align-items-start">
                            <div className="ci-iconKoin-pengajuan active d-flex align-items-center justify-content-center mb-1">
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
                        <div className="card-body">
                            <FormPengajuanKoin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step2
