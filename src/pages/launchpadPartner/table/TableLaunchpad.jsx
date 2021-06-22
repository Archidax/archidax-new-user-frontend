import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Translate from '../../../i18n/Translate'
import TidakAdaData from '../datas/TidakAdaData'

function TableLaunchpad({ data }) {
    const myData = useSelector(state => state.partnerLaunchpadReducer.myLaunchpad)
    const history = useHistory()
    console.log(myData)
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
                                {
                                    myData.length > 0 ? myData.map(el => {
                                        return (<tr>
                                            <td className="font-13 text-white">{moment(el.createdAt).format("DD / MM / YY hh:mm")}</td>
                                            <td className="font-13 text-white">{el.project_name}</td>
                                            <td className="font-13 text-white">{el.industry}</td>
                                            <td className="font-13 text-white">{el.asset_name}</td>
                                            <td className="font-13 text-white">{moment(el.start_sale_time).format("DD / MM / YY hh:mm")}</td>
                                            <td className="font-13 text-white">{moment(el.end_sale_time).format("DD / MM / YY hh:mm")}</td>
                                            <td className="font-13 text-white">
                                                <div className="ci-asset-btn-aksi">
                                                    <Link to={`launchpad-partner/${el._id._id}`}>
                                                        <button
                                                            className={`py-1 px-3 w-100 p-0 ci-btn-custom-1`}
                                                        >
                                                            {Translate('See Detail')}
                                                        </button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>)
                                    }) : <TidakAdaData />
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableLaunchpad
