import React, { useEffect, useState } from 'react';
import file from "../../../../assets/img/file.png";
import { useDispatch, useSelector } from 'react-redux';
import { getRiwayatTarikRupiah, downloadRiwayatTarikRupiah } from '../../../../stores/index';
import moment from 'moment'
import Pagination from 'react-js-pagination'
import { convertNumber } from '../../../../assets/js';

const tableHeader = [
    "Waktu", "Jenis", "Jumlah", "Deskripsi", "Status",
];

export default function RiwayatTarikRupiah() {
    const riwayat = useSelector(state => state.riwayatReducer.riwayatTarikRupiah)
    const totalDocs = useSelector(state => state.riwayatReducer.totalDocsRiwayatTarikRupiah)
    const dispatch = useDispatch()
    // Handle View
    const [page, setPage] = useState(1)
    const [limit,] = useState(20)
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')


    // Data View
    useEffect(() => {
        getRiwayatTarikRupiah(dispatch, page, limit, month, year)
    }, [page, limit, month, year, dispatch])

    // Export to CSV
    const download = () => {
        downloadRiwayatTarikRupiah()
    }

    const filter = () => {
        getRiwayatTarikRupiah(dispatch, page, limit, month, year)
    }

    return (
        <div className="card ci-customCard-1 mt-4">
            <div className="card-body">
                <div className="row mt-2 mb-3">
                    <div className="col-12 col-md-12">
                        <h2 className="font-bold text-white font-20 label-title-top">Riwayat Tarik Rupiah</h2>
                    </div>
                </div>

                <div className="container-fluid riwayat">
                    <div>
                        <div className="row mb-4">
                            <div className="col-12 col-md-8">
                                <div className="row h-100">
                                    <div className="col-12 col-md-4 select-wrapper">
                                        <select className="select  w-100 h-100 font-12 pl-2" onChange={(e) => setMonth(e.target.value)}>
                                            <option className="ml-3" value="" selected >Semua</option>
                                            <option className="ml-3" value="1"> Januari</option>
                                            <option className="ml-3" value="2">Februari</option>
                                            <option className="ml-3" value="3">Maret</option>
                                            <option className="ml-3" value="4">April</option>
                                            <option className="ml-3" value="5">Mei</option>
                                            <option className="ml-3" value="6">Juni</option>
                                            <option className="ml-3" value="7">Juli</option>
                                            <option className="ml-3" value="8">Agustus</option>
                                            <option className="ml-3" value="9">September</option>
                                            <option className="ml-3" value="10">Oktober</option>
                                            <option className="ml-3" value="11">November</option>
                                            <option className="ml-3" value="12">Desember</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4 select-wrapper">
                                        <select className="select  w-100 h-100 font-12 pl-2" onChange={(e) => setYear(e.target.value)}>
                                            <option className="ml-3" value="" selected >Semua</option>
                                            <option className="ml-3" value="2021"> 2021</option>
                                            <option className="ml-3" value="2022">2022</option>
                                            <option className="ml-3" value="2023">2023</option>
                                            <option className="ml-3" value="2024">2024</option>
                                            <option className="ml-3" value="2025">2025</option>
                                            <option className="ml-3" value="2026">2026</option>
                                            <option className="ml-3" value="2027">2027</option>
                                            <option className="ml-3" value="2028">2028</option>
                                            <option className="ml-3" value="2029">2029</option>
                                            <option className="ml-3" value="2030">2030</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <button className="select w-100 font-12" onClick={() => filter()}>Filter</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="row h-100 justify-content-end">
                                    <div className="col col-md-8 d-flex justify-content-end">
                                        <button onClick={() => download()} className="font-14 ci-bg-success px-2 py-1 border-0 text-white rounded" style={{ borderRadius: '4px' }}>
                                            <i class="fas fa-file-download mr-2"></i> <span className="font-12">Export to CSV</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive table-custom">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        {
                                            tableHeader.map((head, index) => {
                                                return (
                                                    <th scope="col" key={index} className="table-header font-12">{head}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        riwayat.map((data, index) => {
                                            return (
                                                <tr key={index} className="table-row-custom">
                                                    <td className="font-12">{moment(data.updatedAt).format("YYYY-MM-DD HH:mm:ss")}</td>
                                                    <td className="font-12 text-danger">{data.trans_type}</td>
                                                    <td className="font-12">{convertNumber.toMoney(data.amount, "Rp.")}</td>
                                                    <td className="font-12">{data.bank_tujuan}</td>
                                                    <td className={`font-12 ${data.isDone === "TERIMA" ? "text-success" : data.isDone === "PENDING" ? "text-warning" : "text-danger"}`}>{data.isDone}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {
                        riwayat.length === 0 ?
                            <div className="data-kosong-wrapper">
                                <div className="data-kosong align-items-center">
                                    <img src={file} alt="file" />
                                    <p className="font-12 m-3">Tidak ada data</p>
                                </div>
                            </div>
                            :
                            riwayat.length > 10 ?
                                <Pagination
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activePage={page}
                                    itemsCountPerPage={limit}
                                    pageRangeDisplayed={10}
                                    totalItemsCount={totalDocs}
                                    onChange={(e) => setPage(e)}
                                    prevPageText={<i class="fas fa-angle-left"></i>}
                                    nextPageText={<i class="fas fa-angle-right"></i>}
                                    firstPageText={<i class="fas fa-angle-double-left"></i>}
                                    lastPageText={<i class="fas fa-angle-double-right"></i>}
                                />
                                :
                                ""
                    }
                </div>
            </div>
        </div>
    )
}
