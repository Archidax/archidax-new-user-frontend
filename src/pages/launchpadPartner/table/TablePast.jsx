import React, { useState } from 'react'
import Translate from '../../../i18n/Translate'
import TidakAdaData from '../datas/TidakAdaData'

function TablePast() {
    return (
        <>
            <div className="row mt-3">
                <div className="col-12 col-md-12">
                    <div className="table-responsive">
                        <table className="table ci-table-custom">
                            <thead>
                                <tr>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('Date of Submission')}</th>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('Project Name')}</th>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('Industry')}</th>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('Coin Name')}</th>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('Start Time')}</th>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('End Time')}</th>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('Action')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TidakAdaData />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TablePast
