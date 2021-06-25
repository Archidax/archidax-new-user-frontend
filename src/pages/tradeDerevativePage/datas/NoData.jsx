import React from 'react'
import Translate from '../../../i18n/Translate'

function NoData({colspan}) {
    return (
        <td colspan={colspan} className="text-center text-ci-primary p-5 border-0">
            <div><i className="fas fa-file fa-3x"></i></div>
            <div className="font-bold font-14">{Translate('db_data_tidak_ditemukan')}</div>
        </td>
    )
}

export default NoData
