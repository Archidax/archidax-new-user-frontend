import React from 'react';
import file from "../../assets/img/file.png";
import arrow from "../../assets/img/arrow-next.png";
import Translate from '../../i18n/Translate';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRiwayatMutasi } from '../../stores/index';


const tableHeader = [
  Translate('rw_waktu'), Translate('rw_aksi'), Translate('rw_deskripsi'), Translate('rw_perubahan'), Translate('rw_saldo_usd'), Translate('rw_saldo_kripto'),
];

const data = [
  // { waktu: "12.20", aksi: "SFI/IDR order jual", deskripsi: "Order Jual @ 23.000", perubahan: "test", saldoIDR: "1000", saldoCrypto: "1000" },
  // { waktu: "12.20", aksi: "SFI/IDR order jual", deskripsi: "Order Jual @ 23.000", perubahan: "test", saldoIDR: "1000", saldoCrypto: "1000" },
  // { waktu: "12.20", aksi: "SFI/IDR order jual", deskripsi: "Order Jual @ 23.000", perubahan: "test", saldoIDR: "1000", saldoCrypto: "1000" },
]

export default function RiwayatMutasi() {
  // const riwayat = useSelector(state => state.riwayatReducer.riwayatMutasi)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   getRiwayatMutasi(dispatch)
  // }, [])



  return (
    <div className="container-fluid riwayat">
      <div>
        <div className="row mb-4">
          <div className="col-12 col-md-8">
            <div className="row h-100">
              <div className="col-12 col-md-4 select-wrapper">
                <select className="select  w-100 h-100">
                <option selected> BTC/ETH</option>
                </select>
              </div>
              <div className="col-12 col-md-4 select-wrapper">
                <select className="select w-100 h-100" onChange={(e) => {}}>
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
                <select className="select w-100 h-100" onChange={(e) => {}}>
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
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="row h-100">
              <div className="col col-md-6">
                <button className="select h-100 w-50">Filter</button>
              </div>
              <div className="col col-md-6 d-flex justify-content-end">
                <button className="ci-bg-success px-2 py-1 border-0 text-white" style={{borderRadius:'4px'}}>
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
                data.map((data, index) => {
                  return (
                    <tr key={index} className="table-row-custom">
                      <td>{data.waktu}</td>
                      <td>{data.aksi}</td>
                      <td>{data.deskripsi}</td>
                      <td>{data.perubahan}</td>
                      <td>{data.saldoIDR}</td>
                      <td>{data.saldoCrypto}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      {
        data.length === 0 ?
          <div className="data-kosong-wrapper">
            <div className="data-kosong">
              <img src={file} alt="file" />
              <p>No data</p>
            </div>
          </div>
          :
          <div className="pagination-button">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button><img src={arrow} alt="arrow" style={{ display: "grid", placeItems: "center" }} /></button>
          </div>
      }
    </div>
  )
}
