import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Translate from "../../../i18n/Translate";

import { downloadCreateVoucherHistory, getMoreVoucherHistories } from "../../../stores";
import TidakAdaData from "./TidakAdaVoucher/TidakAdaData";

const months = [
  "Semua",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const years = () => {
  let result = []
  let currentYear = new Date().getFullYear()
  for (let y = currentYear; y >= currentYear - 10; y--) {
    result.unshift(y)
  }
  result.unshift("Semua");
  return result;
};

function RiwayatBuatVoucher() {
  const dispatch = useDispatch();

  const { history, historyHasNext } = useSelector((state) => state.voucherReducer)

  const [dataFilter, setDataFilter] = useState({
    type: "",
    month: "Semua",
    year: "Semua",
  });

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e, type) => {
    setDataFilter({
      ...dataFilter,
      [type]: e.target.value,
    });
  };

  useEffect(() => {
    if (history.length) {
      let result = [...history]
      setFilteredData((previousData) => {
        //
        if (dataFilter.type) {
          if (dataFilter.type === 'new') {
            result = result.filter((item) => item.isConfirmed === false)
          } else if (dataFilter.type === 'ready') {
            result = result.filter((item) => item.isConfirmed === true && item.isRedeem === false)
          } else if (dataFilter.type === 'done') {
            result = result.filter((item) => item.isRedeem === true)
          }
        }
        //
        if (dataFilter.month !== 'Semua') {
          result = result.filter((item) => {
            let month = months[new Date(item.createdAt).getMonth()]
            if (month === dataFilter.month) {
              return true
            } else {
              return false;
            }
          });
        }
        //
        if (dataFilter.year !== 'Semua') {
          result = result.filter((item) => {
            let year = new Date(item.createdAt).getFullYear().toString()
            if (year === dataFilter.year) {
              return true
            } else {
              return false;
            }
          });
        }
        return result;
      });
    }
  }, [dataFilter, history])

  const download = () => {
    downloadCreateVoucherHistory()
  }


  return (
    <div className="card ci-customCard-1">
      <div className="card-body">
        <div className="row mt-2 mb-3">
          <div className="col-12 col-md-12">
            <h2 className="font-18 text-gold font-bold label-title-top">
              {Translate('vc_riwayat_pembuatan_voucher')}
            </h2>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-12 col-md-4 my-1">
                <select
                  onChange={(e) => handleFilter(e, "type")}
                  className="btn text-white py-2 ci-input-select-default"
                >
                  <option value="">Semua</option>
                  <option value="new">Belum dikonfirmasi</option>
                  <option value="ready">Belum diredeem</option>
                  <option value="done">Sudah diredeem</option>
                </select>
              </div>
              <div className="col-12 col-md-4 my-1">
                <select
                  onChange={(e) => handleFilter(e, "month")}
                  className="btn text-white py-2 ci-input-select-default"
                >
                  {months.map((month) => {
                    return <option value={month}>{month}</option>;
                  })}
                </select>
              </div>
              <div className="col-12 col-md-4 my-1">
                <select
                  onChange={(e) => handleFilter(e, "year")}
                  className="btn text-white py-2 ci-input-select-default"
                >
                  {years().map((year) => {
                    return <option value={year}>{year}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 d-flex justify-content-end mt-1">
            <button className="btn ci-btn-custom-1 px-3 w-100 py-2 ci-bg-success rounded" onClick={() => download()}>
            <i class="fas fa-file-download mr-2"></i> <span className="font-12">{Translate('vc_export')}</span>
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-12">
            <div className="table-responsive table-custom">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th
                      className="table-header text-white"
                      style={{ width: "20%" }}
                    >
                      {Translate('vc_waktu')}
                    </th>
                    <th
                      className="table-header text-white"
                      style={{ width: "20%" }}
                    >
                      {Translate('vc_kode_voucher')}
                    </th>
                    <th
                      className="table-header text-white"
                      style={{ width: "20%" }}
                    >
                      {Translate('vc_jumlah')}
                    </th>
                    <th
                      className="table-header text-white"
                      style={{ width: "20%" }}
                    >
                      {Translate('vc_status')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    filteredData.length ?
                      filteredData.map((data) => {
                        let day = new Date(data.createdAt).getDate()
                        let month = months[new Date(data.createdAt).getMonth()]
                        let year = new Date(data.createdAt).getFullYear()
                        let hour = new Date(data.createdAt).getHours()
                        let minute = new Date(data.createdAt).getUTCMinutes()
                        let time = `${day} ${month} ${year}, ${hour}: ${minute}`
                        return <tr className="table-row-custom" key={data._id}>
                          <td className="font-12">{time}</td>
                          <td className="font-12">{data.kode_voucher}</td>
                          <td className="font-12">{data.nominal}</td>
                          <td className={`font-12` +
                            data.isConfirmed ?
                            data.isRedeem ?
                              "text-success"
                              :
                              "text-warning"
                            :
                            "text-danger"}>
                            {
                              data.isConfirmed ?
                                data.isRedeem ?
                                  <> {Translate('vc_sudah_diredeem')} </>
                                  :
                                  <> {Translate('vc_sudah_dikonfirmasi')}</>
                                :
                                <> {Translate('vc_belum_dikonfirmasi')}</>
                            }
                          </td>
                        </tr>
                      })
                      :
                      <TidakAdaData />
                  }
                </tbody>
              </table>
              {
                historyHasNext && <div className="col-12 col-md-2 d-flex justify-content-end mt-1">
                  <button onClick={() => getMoreVoucherHistories(dispatch, history.length)} className="btn ci-btn-custom-1 px-3 w-100 py-2">
                    {Translate('vc_load_more')}
                  </button>
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiwayatBuatVoucher;
