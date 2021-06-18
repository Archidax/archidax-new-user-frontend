import React from 'react'
import {Link} from 'react-router-dom'
import Translate from '../../../i18n/Translate'

function TableRunning() {
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
                                <tr>
                                    <td className="font-13 text-white">2021-01-18 09:23</td>
                                    <td className="font-13 text-white">Starlord Project</td>
                                    <td className="font-13 text-white">Wine Industry</td>
                                    <td className="font-13 text-white">Starlord</td>
                                    <td className="font-13 text-white">2021-01-18 09:23</td>
                                    <td className="font-13 text-white">2021-03-18 09:23</td>
                                    <td className="font-13 text-white">
                                        <div className="ci-asset-btn-aksi">
                                            <Link to={`launchpad-partner/${'dsa'}`}>
                                                <button
                                                className={`py-1 px-3 w-100 p-0 ci-btn-custom-1`}
                                                >
                                                    {Translate('See Detail')}
                                                </button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableRunning
