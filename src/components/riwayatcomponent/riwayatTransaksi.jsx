import React, { useEffect, useState } from 'react';
import file from "../../assets/img/file.png";
import { useDispatch, useSelector } from 'react-redux';
import { downloadRiwayatTransaksi, getRiwayatTransaksi } from '../../stores/index';
import moment from 'moment'
import { convertNumber } from '../../assets/js';
import Pagination from 'react-js-pagination'

const tableHeader = [
  "Waktu", "Pair", "Jenis", "Jumlah", "Harga", "Total Harga", "Status",
];

export default function RiwayatTransaksi() {
  const Exchange = useSelector(state => state.pasarTradingReducer.LISTING_EXCHANGE_ORDER.Exchange)
  const riwayat = useSelector(state => state.riwayatReducer.riwayatTransaksi)
  // const numberOfPages = useSelector(state => state.riwayatReducer.pagesRiwayatTransaksi)
  const totalDocs = useSelector(state => state.riwayatReducer.totalDocsRiwayatTransaksi)
  const dispatch = useDispatch()

  // Handle View
  const [page, setPage] = useState(1)
  const [limit, ] = useState(20)
  const [pair, setPair] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  // view pages
  // const [pages, setPages] = useState([])

  // Data View
  useEffect(() => {
    getRiwayatTransaksi(dispatch, page, limit, pair, month, year)
  }, [page, limit, pair, month, year,dispatch])


  // Export to CSV
  const download = () => {
    downloadRiwayatTransaksi()
  }

  const filter = () => {
    getRiwayatTransaksi(dispatch, page, limit, pair, month, year)
  }

  return (
    <div className="container-fluid riwayat">
      <div>
        <div className="row mb-4">
          <div className="col-12 col-md-8">
            <div className="row h-100">
              <div className="col-12 col-md-4 select-wrapper">
                <select className="select w-100 h-100" onChange={(e) => setPair(e.target.value)}>
                  <option value="" selected >Semua</option>
                  {
                    Exchange.map((el, index) => {
                      return (
                        <option key={index} value={el.symbol}>{el.symbol}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div className="col-12 col-md-4 select-wrapper">
                <select className="select w-100 h-100" onChange={(e) => setMonth(e.target.value)}>
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
                <select className="select w-100 h-100" onChange={(e) => setYear(e.target.value)}>
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
                <button onClick={() => download()} className="ci-bg-success px-2 py-1 border-0 text-white rounded" style={{borderRadius:'4px'}}>
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
                      <td className="font-12">{data.symbol}</td>
                      <td className="font-12">{data.side === "BUY" ? <span className="text-success">BUY</span> : <span className="text-danger">SELL</span>}</td>
                      <td className="font-12">{Number.isInteger(data.amount) ? data.amount : data.amount.toFixed(9)}</td>
                      <td className="font-12">{convertNumber.toMoney(Math.floor(data.price), "Rp.")}</td>
                      <td className="font-12">{convertNumber.toMoney(Math.floor(data.total), "Rp.")}</td>
                      {/* <td className="font-12">{data.type_transaction}</td> */}
                      <td className="font-12">{data.transaction_status === "Success" ? <span className="text-success">BERHASIL</span> : <span className="text-warning">Pending</span>}</td>
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
              pageRangeDisplayed={5}
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
  )
}
