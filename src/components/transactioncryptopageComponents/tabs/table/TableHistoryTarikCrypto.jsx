import React, { useEffect, useState } from 'react';
import file from "../../../../assets/img/file.png";
import { useDispatch, useSelector } from 'react-redux';
import { downloadRiwayatTarikCrypto, getRiwayatTarikCrypto } from '../../../../stores/index';
import moment from 'moment'
import Pagination from 'react-js-pagination'


const tableHeader = [
    "Waktu", "Jenis", "Jumlah", "Dari", "Tujuan", "TX", "Status",
];


export default function TableHistoryTarikCrypto() {
    const Exchange = useSelector(state => state.pasarTradingReducer.LISTING_EXCHANGE_ORDER.Exchange)
    const riwayat = useSelector(state => state.riwayatReducer.riwayatTarikCrypto)
    const numberOfPages = useSelector(state => state.riwayatReducer.pagesRiwayatTarikCrypto)
    const totalDocs = useSelector(state => state.riwayatReducer.totalDocsRiwayatTarikCrypto)
    const dispatch = useDispatch()

    // Handle View
    const [symbol, setSymbol] = useState('BTC')
    const [page,] = useState(1)
    const [limit,] = useState(20)
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    // Pages View
    const [, setPages] = useState([])

    // Data View
    useEffect(() => {
        getRiwayatTarikCrypto(dispatch, page, limit, symbol, month, year)
    }, [dispatch, page, limit, symbol, month, year])

    // Export to CSV
    const download = () => {
        downloadRiwayatTarikCrypto(dispatch, symbol)
    }

    const filter = () => {
        getRiwayatTarikCrypto(dispatch, page, limit, symbol, month, year)
    }
    return (
        <div className="card ci-customCard-1">
            <div className="card-body">
                <div className="row mt-2 mb-3">
                    <div className="col-12 col-md-12">
                        <h2 className="ml-2 text-gold font-bold font-16 label-title-top my-3">Riwayat Tarik Crypto</h2>
                    </div>
                </div>

                <div className="container-fluid riwayat">
                    <div>
                        <div className="row mb-4">
                            <div className="col-12 col-md-8">
                                <div className="row h-100">
                                    <div className="col-12 col-md-4 select-wrapper">
                                        <select className="select  w-100 h-100" onChange={(e) => setSymbol(e.target.value)}>
                                            <option defaultValue="BTC" selected>BTC</option>
                                            {
                                                Exchange.map((el, index) => {
                                                    if (el.symbol.includes("/IDR")) {
                                                        const code = el.symbol.replace("/IDR", "")
                                                        if (el.initialSymbol !== "BTC") {
                                                            return (
                                                                <option key={index} value={code}>{code}</option>
                                                            )
                                                        }
                                                    }
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4 select-wrapper">
                                        <select className="select  w-100 h-100" onChange={(e) => setMonth(e.target.value)}>
                                            <option value="" selected >Semua</option>
                                            <option value="1"> Januari</option>
                                            <option value="2">Februari</option>
                                            <option value="3">Maret</option>
                                            <option value="4">April</option>
                                            <option value="5">Mei</option>
                                            <option value="6">Juni</option>
                                            <option value="7">Juli</option>
                                            <option value="8">Agustus</option>
                                            <option value="9">September</option>
                                            <option value="10">Oktober</option>
                                            <option value="11">November</option>
                                            <option value="12">Desember</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4 select-wrapper">
                                        <select className="select  w-100 h-100" onChange={(e) => setYear(e.target.value)}>
                                            <option value="" selected >Semua</option>
                                            <option value="2021"> 2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="row h-100">
                                    <div className="col col-md-6">
                                        <button className="select h-100 w-50" onClick={() => filter()}>Filter</button>
                                    </div>
                                    <div className="col col-md-6 d-flex justify-content-end">
                                        <button onClick={() => download()} className="ci-bg-success px-2 py-1 border-0 text-white" style={{ borderRadius: '4px' }}>
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
                                                    <td className="font-12">{moment(data.createdAt).format("YYYY-MM-DD HH:mm:ss")}</td>
                                                    <td className="font-12 text-danger">{data.jenis_transaksi.toUpperCase()}</td>
                                                    <td className="font-12">{data.amount}</td>
                                                    <td className="font-12">{data.fromAddress}</td>
                                                    <td className="font-12">{data.toAddress}</td>
                                                    <td className="font-12">{data.tx_id}</td>
                                                    <td className={`${data.status === "Pending" ? "text-warning" : data.status === "Success" ? "text-success" : "text-danger"} font-12`}>{data.status}</td>
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
                                    <img src={file} />
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
                                    pageRangeDisplayed={5}
                                    totalItemsCount={totalDocs}
                                    onChange={(e) => setPages(e)}
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
