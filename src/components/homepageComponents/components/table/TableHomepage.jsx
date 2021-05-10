import React from "react";

import { convertNumber } from "../../../../assets/js";

import { useHistory } from "react-router-dom";

export default function TableHomepage({ dataHome }) {
  const history = useHistory();

  return (
    <div>
      <div className="p-3 outter-table-wrapper">
        <div className="table-wrapper">
          <table id="homepage-table">
            <thead className="tb-border-bottom">
              <tr className="text-white">
                <th className="text-left">Pasangan</th>
                <th className="text-left">Nama Koin</th>
                <th className="text-left">Persentase</th>
                <th className="text-left">Harga (24 jam)</th>
                <th className="text-left">High (24 jam)</th>
                <th className="text-left">Low (24 jam)</th>
                <th className="text-left">Volume (24 jam)</th>
              </tr>
            </thead>
            <tbody>
              {dataHome && Array.isArray(dataHome) && dataHome.length > 0 ? (
                dataHome.map((item) => {
                  const handleRowClick = (row) => {
                    history.push(
                      `/pasar/${
                        item.symbol
                          ? item.symbol.toString().replace("/", "_")
                          : null
                      }`,
                    );
                  };
                  return (
                    <tr
                      className="tb-border-bottom2 cursor-pointer"
                      onClick={handleRowClick}
                    >
                      <td className="text-white table-center">
                        <img
                          src={item.icon}
                          alt="icon"
                          style={{ maxHeight: "23px", marginRight: "10px" }}
                        />
                        <div className="text-white">{item.symbol}</div>
                      </td>
                      <td className="text-white text-left">{item.assetName}</td>
                      <td
                        className={`${convertNumber.tradeUpDownChangeHomepage(
                          item.price24h_change,
                          2,
                        )}`}
                      >
                        {convertNumber.tradeChange(item.price24h_change, 2)}
                      </td>
                      <td className="text-white text-left">
                        {convertNumber.toRupiah(item.price24h_close)}
                      </td>
                      <td className="text-white text-left">
                        {convertNumber.toRupiah(item.price24h_high)}
                      </td>
                      <td className="text-white text-left">
                        {convertNumber.toRupiah(item.price24h_low)}
                      </td>
                      <td className="text-white text-left">
                        {convertNumber.toRupiah(item.price24h_volume)}{" "}
                        {item.symbol ? item.symbol.split("/")[0] : null}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="text-white">
                    No Data
                  </td>
                </tr>
              )}
              {/* 
                      <tr className="tb-border-bottom2">
                        <td className="text-white table-center">
                          <img
                            src=""
                            style={{ maxHeight: "23px", marginRight: "10px" }}
                          />
                          <div>BTC / IDR</div>
                        </td>
                        <td className="text-white text-left">Bitcoin</td>
                        <td className="text-white text-left">640.714.000</td>
                        <td className="price-green">4.5%</td>
                        <td className="price-green">10%</td>
                        <td className="text-white text-left">
                          <span>173,4bn </span>IDR
                        </td>
                        <td className="text-white text-left">
                          <span>173,4bn </span>IDR
                        </td>
                      </tr>
                */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
