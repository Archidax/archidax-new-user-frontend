import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// import images
import { getCoinIcon, getCoinName } from "../../../helpers";
import { convertNumber } from "../../../assets/js";

function TableAssetSaya() {
  const history = useHistory();
  const { assets } = useSelector((state) => state?.walletReducer);
  const [isEmpty, setIsEmpty] = useState(false)
  const [view, setView] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setView(assets);
  }, [assets]);

  useEffect(() => {
    const data = assets.filter((el) => el.type.includes(search.toUpperCase()));
    setView(data);
  }, [search,assets]);

  // const getIcon = (coincode) => {
  //   const coin = coins.filter(el => el.abbr === coincode)
  //   return coin.icon
  // }

  const toPasar = (url) => {
    history.push(url);
  };

  return (
    <div
      className="card"
      style={{ backgroundColor: "#151933", border: "none" }}
    >
      <div className="card-body">
        <div className="row align-items-center mb-3">
          <div className="col-6 col-md-2">
            <h4 className="font-16 font-bold text-gold label-title-top">
              Asset Saya
            </h4>
          </div>
          <div className="col-6 col-md-2">
            <div className="form-group ci-input-default-1 mb-0">
              <i className="fas fa-search ci-input-default-1-iconR"></i>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control ci-input-default-1-input pl-2 w-100 text-white"
                placeholder="Search"
                style={{ textTransform: "uppercase" }}
              />
            </div>
          </div>
          <div className="col-12 col-md-8 my-1 my-md-2 d-flex justify-content-end text-left text-md-right">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={isEmpty}
                onChange={(e) => {
                  setIsEmpty(e.target.checked);
                }}
                id="hideAsset"
              />
              <label
                className="text-white font-12 form-check-label mr-2"
                for="hideAsset"
              >
                Sembunyikan Aset Kosong
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="table-responsive table-borderless">
              <table
                className="table ci-table-custom font-12"
                id="dashboard-table"
              >
                <thead>
                  <tr>
                    <th className="ci-tableHeads-custom text-white" scope="col">
                      No
                    </th>
                    <th className="ci-tableHeads-custom text-white" scope="col">
                      Nama Koin
                    </th>
                    <th
                      className="ci-tableHeads-custom text-white text-center"
                      scope="col"
                    >
                      Explorer
                    </th>
                    <th className="ci-tableHeads-custom text-white" scope="col">
                      Saldo Aktif
                    </th>
                    <th className="ci-tableHeads-custom text-white" scope="col">
                      Saldo Beku
                    </th>
                    <th className="ci-tableHeads-custom text-white" scope="col">
                      Estimasi Aset (IDR)
                    </th>
                    <th className="ci-tableHeads-custom text-white" scope="col">
                      Status
                    </th>
                    <th
                      className="ci-tableHeads-custom text-white text-center"
                      scope="col"
                    >
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {view &&
                    view.length &&
                    (!isEmpty ? view.map((items, itemIndex) => {
                      return (
                        <tr key={itemIndex}>
                          <td className="ci-verti-align-middle text-white">
                            {itemIndex + 1}
                          </td>
                          <td className="ci-verti-align-middle text-white ">
                            <img src={
                              getCoinIcon(items.type)
                            } width="20px" alt="" srcset="" className="mr-2" /> <span className="font-bold">{items.type} </span>
                            <span className="text-white-50">{`(${getCoinName(items.type)})`}</span>
                          </td>
                          <td className="ci-verti-align-middle text-white text-center">
                            <i className="fas fa-link text-info" style={{ cursor: "pointer" }} onClick={() => toPasar(`/pasar/${items.type}_IDR`)}></i>
                          </td>
                          <td className="ci-verti-align-middle text-white">
                            {convertNumber.toRupiah(items.balance)} <span className="text-white-50">{items.type}</span>
                          </td>
                          <td className="ci-verti-align-middle text-white">
                            {convertNumber.toRupiah(items.frozen_balance)} <span className="text-white-50">{items.type}</span>
                          </td>
                          <td className="ci-verti-align-middle text-white">
                            {items.detail_crypto ? convertNumber.toRupiah(items.balance * items.detail_crypto.price_24hour.price24h_close, "Rp." ): "0"}
                          </td>
                          <td className={`ci-verti-align-middle ${
                            items.detail_crypto&&!items.detail_crypto.in_repair?"text-success":"text-white"
                          }`}>
                            <i className="fas fa-circle fa-xs"></i>
                            {items.detail_crypto ? !items.detail_crypto.in_repair ? ' Aktif' : ' Dalam Perbaikan' : ' Dalam Perbaikan'}
                          </td>
                          {
                            items.detail_crypto ? !items.detail_crypto.in_repair
                              ? <td>
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "auto auto auto",
                                    gridColumnGap: "8px",
                                  }}
                                >
                                  <Link to={`/crypto/setor-crypto/${items.type}`}>
                                    <div className="ci-asset-btn-aksi">
                                      <button
                                        className={`py-1 px-3 w-100 p-0 ci-btn-primary`}
                                      >
                                        Setor
                                      </button>
                                    </div>
                                  </Link>
                                  <Link to={`/crypto/tarik-crypto/${items.type}`}>
                                    <div className="ci-asset-btn-aksi">
                                      <button
                                        className={`py-1 px-3 w-100 p-0 ci-btn-danger`}
                                      >
                                        Tarik
                                      </button>
                                    </div>
                                  </Link>
                                  <div className="ci-asset-btn-aksi">
                                    <button
                                      onClick={() => history.push(`/pasar/${items.detail_crypto.symbol.toString().replace('/', '_')}`) }
                                      className={`py-1 px-3 w-100 p-0 ci-btn-warning`}
                                    >
                                      Pasar
                                    </button>
                                  </div>
                                </div>
                              </td>
                              : <td className="ci-verti-align-middle text-white">Maaf, koin sedang dalam perbaikan</td>
                            : <td className="ci-verti-align-middle text-white">Maaf, koin sedang dalam perbaikan</td>
                          }
                        </tr>
                      );
                    }) : view.filter(el => el.balance > 0).map((items, itemIndex) => {
                      return (
                        <tr key={itemIndex}>
                          <td className="ci-verti-align-middle text-white">
                            {itemIndex + 1}
                          </td>
                          <td className="ci-verti-align-middle text-white ">
                            <img src={
                              getCoinIcon(items.type)
                            } width="20px" alt="" srcset="" className="mr-2" /> <span className="font-bold">{items.type}</span>
                          </td>
                          <td className="ci-verti-align-middle text-white text-center">
                            <i className="fas fa-link text-info" style={{ cursor: "pointer" }} onClick={() => toPasar(`/pasar/${items.type}_IDR`)}></i>
                          </td>
                          <td className="ci-verti-align-middle text-white">
                            {convertNumber.toRupiah(items.balance)}<span className="text-white-50">{items.type}</span>
                          </td>
                          <td className="ci-verti-align-middle text-white">
                            {items.frozen_balance} <span className="text-white-50">{items.type}</span>
                          </td>
                          <td className="ci-verti-align-middle text-white">
                            {items.detail_crypto ? convertNumber.toRupiah(items.balance * items.detail_crypto.price_24hour.price24h_close, "Rp." ): "0"}
                          </td>
                          <td className={`ci-verti-align-middle ${
                            items.detail_crypto&&!items.detail_crypto.in_repair?"text-success":"text-white"
                          }`}>
                            <i className="fas fa-circle fa-xs"></i>
                            {items.detail_crypto ? !items.detail_crypto.in_repair ? ' Aktif' : ' Dalam Perbaikan' : ' Dalam Perbaikan'}
                          </td>
                          {
                            items.detail_crypto 
                            ? !items.detail_crypto.in_repair
                              ? <td>
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "auto auto auto",
                                    gridColumnGap: "8px",
                                  }}
                                >
                                  <Link to={`/crypto/setor-crypto/${items.type}`}>
                                    <div className="ci-asset-btn-aksi">
                                      <button
                                        className={`py-1 px-3 w-100 p-0 ci-btn-primary`}
                                      >
                                        Setor
                                      </button>
                                    </div>
                                  </Link>
                                  <Link to={`/crypto/tarik-crypto/${items.type}`}>
                                    <div className="ci-asset-btn-aksi">
                                      <button
                                        className={`py-1 px-3 w-100 p-0 ci-btn-danger`}
                                      >
                                        Tarik
                                      </button>
                                    </div>
                                  </Link>
                                  <div className="ci-asset-btn-aksi">
                                    <button
                                      onClick={() => history.push(`/pasar/${items.detail_crypto.symbol.toString().replace('/', '_')}`) }
                                      className={`py-1 px-3 w-100 p-0 ci-btn-warning`}
                                    >
                                      Pasar
                                    </button>
                                  </div>
                                </div>
                              </td>
                              : <td className="ci-verti-align-middle text-white">Maaf, koin sedang dalam perbaikan</td>
                            : <td className="ci-verti-align-middle text-white">Maaf, koin sedang dalam perbaikan</td>
                          }
                        </tr>
                      );
                    }))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableAssetSaya;
