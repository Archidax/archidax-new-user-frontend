import React, { useState } from 'react'
import Translate from '../../../i18n/Translate'
// import DropdownCustom from '../../dropdown'
import TidakAdaData from '../datas/TidakAdaData'

const months = [
    { name: "Januari", value: "1" },
    { name: "Februari", value: "2" },
    { name: "Maret", value: "3" },
    { name: "April", value: "4" },
    { name: "Mei", value: "5" },
    { name: "Juni", value: "6" },
    { name: "Juli", value: "7" },
    { name: "Agustus", value: "8" },
    { name: "September", value: "9" },
    { name: "Oktober", value: "10" },
    { name: "November", value: "11" },
    { name: "Desember", value: "12" },
]

const years = [
    2021, 2022, 2023, 2024, 2025,
    2026, 2027, 2028, 2029, 2030,
]

function TableLaporanKomisi() {
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const filter = () => {
        
    }
    return (
        <>
            <div className="row justify-content-between">
                <div className="col-12 col-md-5">
                    <div className="row d-flex">
                        <div className="col-12 col-md-4 m-0 my-1">
                            <select onChange={(e) => setMonth(e.target.value)} className="w-100 border-0 py-2 px-3 font-12 ci-bg-secondary text-white">
                                <option value="" selected>Semua</option>
                                {
                                    months.map(month => {
                                        return (
                                            <option value={month.value}>{month.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="col-12 col-md-4 m-0 my-1">
                            <select onChange={(e) => setYear(e.target.value)} className="w-100 border-0 py-2 px-3 font-12 ci-bg-secondary text-white">
                                <option value="" selected>Semua</option>
                                {
                                    years.map(year => {
                                        return (
                                            <option value={year}>{year}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="col-12 col-md-3 my-1">
                            <button onClick={() => filter()} className="w-100 border-0 ci-bg-secondary py-2 px-1 text-white font-12">{Translate('pa_filter')}</button>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-2 mt-1">
                    <button className="ci-btn-success ci-md w-100">
                    <i class="fas fa-file-download mr-2"></i> <span className="font-12">{Translate('vc_export')}</span>
                    </button>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-md-12">
                    <div className="table-responsive">
                        <table className="table ci-table-custom">
                            <thead>
                                <tr>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('pa_periode_mulai')}</th>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('pa_periode_mulai')}</th>
                                    <th className="ci-tableHeads-custom-2 text-white">{Translate('pa_komisi')}</th>
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

export default TableLaporanKomisi
