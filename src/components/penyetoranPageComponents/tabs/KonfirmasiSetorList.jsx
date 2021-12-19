import React, { useEffect, useState } from 'react'
import TidakAdaKonfirmasi from './konfirmasiTabs/TidakAdaKonfirmasi'
import { getMyConfirmationRequests } from '../../../stores/setorrupiah/functions'
import { useDispatch, useSelector } from 'react-redux'
import DataKonfirmasi from './konfirmasiTabs/DataKonfirmasi'
import { CSVLink } from 'react-csv'

const months = [
    { name: "All", code: "" }, { name: "Januari", code: "01" }, { name: "Februari", code: "02" }, { name: "Maret", code: "03" }, { name: "April", code: "04" }, { name: "Mei", code: "05" }, { name: "Juni", code: "06" },
    { name: "Juli", code: "07" }, { name: "Agustus", code: "08" }, { name: "September", code: "09" }, { name: "Oktober", code: "10" }, { name: "November", code: "11" }, { name: "Desember", code: "12" }
]

const years = ["All", 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]

function KonfirmasiSetorList() {
    const confirmationRequests = useSelector(state => state.setorRupiahReducer.confirmationRequests)
    const [view, setView] = useState([])
    const [dataCSV, setDataCSV] = useState([])
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        getMyConfirmationRequests(dispatch)
    }, [dispatch])

    useEffect(() => {
        setView(confirmationRequests)
    }, [confirmationRequests])

    const filterStatus = (status) => {
        if (!status || status === "all") {
            setView(confirmationRequests)
        } else if (status === "success") {
            const data = confirmationRequests.filter(el => el.isDone === true)
            setView(data)
        } else if (status === "rejected") {
            const data = confirmationRequests.filter(el => el.isReject === true)
            setView(data)
        } else if (status === "pending") {
            const data = confirmationRequests.filter(el => el.isDone === false && el.isReject === false)
            setView(data)
        }
    }

    const filterDate = React.useCallback(() => {
        if (month !== '' && year !== '') {
            const target = `${month}/${year}`
            const data = confirmationRequests.filter(el => el.tgl_depo.slice(3) === target)
            setView(data)
        } else if (month === '' && year !== '') {
            const target = `${year}`
            const data = confirmationRequests.filter(el => el.tgl_depo.slice(6) === target)
            setView(data)
        } else if (year !== "" && month !== "") {
            setView(confirmationRequests)
        } else {
            setView(confirmationRequests)
        }
    },[setView,month,year,confirmationRequests]);

    useEffect(() => {
        filterDate()
    }, [filterDate])

    useEffect(() => {
        const data = [[
            'Date',
            'Amount',
            'Method',
            'Payment',
            // 'Nomor Rekening',
            // 'Berita Transfer',
            // 'Pesan Tambahan',
            'Proof of Payment',
            'Status'
        ]]
        confirmationRequests.forEach(el => {
            const item = [
                el.tgl_depo,
                el.jumlah_depo,
                el.metode_pembayaran,
                el.jenis_pembayaran,
                // el.akun_rekening,
                // el.berita_transfer,
                // el.pesan_tambahan,
                el.bukti_transfer,
                el.isDone === false && el.isReject === false ? "Pending" : el.isDone === true ? "Sukses" : el.isReject === true ? "Rejected" : "Pending"
            ]
            data.push(item)
        })
        setDataCSV(data)
    }, [confirmationRequests])



    return (
        <div className="container-fluid" style={{minHeight: "94vh"}}>
            <div className="row border-top mt-3 border-warning">
                <div className="container-fluid p-3 text-white font-12 ci-bg-primary my-4">
                    <h2 className="mb-4 label-title-top">Deposit Confirmation</h2>

                    <div className="row m-0 my-3 d-flex  justify-content-between">
                        <div>
                            <select onChange={(e) => filterStatus(e.target.value)} className="form-select font-12 py-2 px-3 border-0 m-1 text-white ci-bg-secondary">
                                <option value="all">All</option>
                                <option value="pending">Pending</option>
                                <option value="success">Success</option>
                                <option value="rejected">Rejected</option>
                            </select>
                            <select onChange={(e) => setMonth(e.target.value)} className="form-select font-12 py-2 px-3 border-0 m-1 text-white ci-bg-secondary">
                                {months.map(month => {
                                    return <option value={month.code}>{month.name}</option>
                                })}
                            </select>
                            <select onChange={(e) => setYear(e.target.value)} className="form-select font-12 py-2 px-3 border-0 m-1 text-white ci-bg-secondary">
                                {years.map((year) => {
                                    return <option value={String(year)}>{year}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <button className="px-3 py-2 border-0 m-1 text-white ci-bg-success"><CSVLink data={dataCSV} filename={'deposit-history.csv'}><i class="fas fa-file-download mr-2"></i> <span className="font-12">Export to CSV</span></CSVLink></button>
                        </div>
                    </div>

                    <div>
                        <table className="table text-white">
                            <thead className="py-5 font-12">
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Method</th>
                                <th>Payment</th>
                                {/* <th>Nomor Rekening</th>
                                <th>Berita Transfer</th>
                                <th>Pesan Tambahan</th> */}
                                <th>Proof of Payment</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                {view.length === 0 ? <TidakAdaKonfirmasi /> : view.map(item => {
                                    return (
                                        <DataKonfirmasi
                                            tanggal={item.tgl_depo}
                                            jumlah={item.jumlah_depo}
                                            metode={item.metode_pembayaran}
                                            jenis={item.jenis_pembayaran}
                                            norek={item.akun_rekening}
                                            berita={item.berita_transfer}
                                            pesan={item.pesan_tambahan}
                                            bukti={item.bukti_transfer}
                                            status={item.isDone === false && item.isReject === false ? "Pending" : item.isDone === true ? "Success" : item.isReject === true ? "Rejected" : "Pending"}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KonfirmasiSetorList
