import React, { useEffect, useState } from 'react';
import file from "../../assets/img/file.png";
import arrow from "../../assets/img/arrow-next.png";
import { useDispatch, useSelector } from 'react-redux';
import { getRiwayatSetorRupiah, downloadRiwayatSetorRupiah } from '../../stores/index';
import Pagination from 'react-js-pagination'
import { convertNumber } from '../../assets/js';
import moment from 'moment'
import Translate from '../../i18n/Translate';


const tableHeader = [
  Translate('rw_waktu'), Translate('rw_jenis'), Translate('rw_jumlah'), Translate('rw_keterangan'), Translate('rw_status'),
];


export default function RiwayatSetorRupiah() {
  const riwayat = useSelector(state => state.riwayatReducer.riwayatSetorRupiah)
  const numberOfPages = useSelector(state => state.riwayatReducer.pagesRiwayatSetorRupiah)
  const dispatch = useDispatch()
  const totalDocs = useSelector(state => state.riwayatReducer.totalDocsRiwayatSetorRupiah)

  // Handle View
  const [page,] = useState(1)
  const [limit,] = useState(20)
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  // Pages View
  const [, setPages] = useState([])

  // Data View
  useEffect(() => {
    getRiwayatSetorRupiah(dispatch, page, limit, month, year)
  }, [dispatch, page, limit, month, year])

  // Export to CSV
  const download = () => {
    downloadRiwayatSetorRupiah()
  }

  const filter = () => {
    getRiwayatSetorRupiah(dispatch, page, limit, month, year)
  }

  return (
    <div className="container-fluid riwayat">
      <div>
        <div className="row mb-4">
          <div className="col-12 col-md-8">
            <div className="row h-100">
            <div className="col-12 col-md-4 select-wrapper">
                <select className="select w-100 h-100" onChange={(e) => setMonth(e.target.value)}>
                  <option value="" selected >All</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div className="col-12 col-md-4 select-wrapper">
                <select className="select w-100 h-100" onChange={(e) => setYear(e.target.value)}>
                  <option value="" selected >All</option>
                  <option value="2021">2021</option>
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
              <div className="col col-md-4">
                <button className="select h-100 w-100" onClick={() => filter()}>Filter</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="row h-100 justify-content-end">
              <div className="col col-md-5 d-flex justify-content-end">
                <button onClick={() => download()} className="font-14 ci-bg-success px-2 py-1 border-0 text-white rounded" style={{borderRadius:'4px'}}>
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
                      <th scope="col" key={index} className="table-header">{head}</th>
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
                      <td>{moment(data.createdAt).format("YYYY-MM-DD HH:mm:ss")}</td>
                      <td className="text-success">{data.trans_type}</td>
                      <td>{convertNumber.toMoney(data.amount, "Rp.")}</td>
                      <td>{data.reject_reason ? data.reject_reason : "-"}</td>
                      <td className={data.isDone === "PENDING" ? "text-warning" : data.isDone === "TERIMA" ? "text-success" : "text-danger"}>{data.isDone}</td>
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
  )
}
