import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import PasarButton from "../buttonComponents/PasarButton";
// import SetorButton from "../buttonComponents/SetorButton";
// import TarikButton from "../buttonComponents/TarikButton";
// import bitcoinIcon from "../../../../assets/img/iconsCoin/BitcoinCoin.png";
// import { Link } from "react-router-dom";
import { getCoinIcon, getCoinName } from "../../../../helpers";
import { convertNumber } from "../../../../assets/js";

function PricePasarTrading({ data }) {
  const { assets } = useSelector((state) => state.walletReducer );
  let filteredAssets = assets.filter(el => el.balance > 0)||[]  
  
  let history = useHistory();

  return (
    <tbody className="mt-3">
      { filteredAssets && data &&
        Array.isArray(data) &&
        data.sort((a, b) => {
          return filteredAssets.some(el => el.type === a.initialSymbol) ? -1 : filteredAssets.some(el => el.type === b.initialSymbol) ? 1 : 0
        }).map((el, index) => {
          let symbolQuote = el.symbol.split("/")[0];
          // let symbolBase = el.symbol.split("/")[1];
          let est = assets.find(ele => ele.type === el.initialSymbol)
          return (
            <tr key={index} style={{ height: "45px" }}>
              <td className="ci-verti-align-middle text-white text-center font-14">
                {index + 1}
              </td>
              <td className="ci-verti-align-middle text-white font-14">
                <div className="d-flex">
                  <div>
                    {el.icon ? (
                      <img src={el.icon} alt="icon" height={20} />
                    ) : (
                      <img src={getCoinIcon(el.initialSymbol)} alt="icon" height={20} />
                    )}
                  </div>
                  <div className="ml-2 font-14">
                    <span className="font-bold ">{el.symbol} </span>{" "}
                    <span className="text-white-50">
                      {symbolQuote && `(${getCoinName(symbolQuote)})`}
                    </span>
                  </div>
                </div>
              </td>
              <td className="ci-verti-align-middle text-white font-14">
                {el.price_24hour
                  ? convertNumber.toRupiah(el.price_24hour.price24h_close)
                  : 0}
              </td>
              {
                el.price_24hour.price24h_change
                ? el.price_24hour.price24h_change < 0
                  ? <td className="ci-verti-align-middle text-danger text-left font-14">
                    {el.price_24hour?Number(el.price_24hour.price24h_change).toFixed(2):null} %
                  </td>
                  : <td className="ci-verti-align-middle text-success text-left font-14">
                    {el.price_24hour?Number(el.price_24hour.price24h_change).toFixed(2):null} %
                  </td>
                : <td className="ci-verti-align-middle text-white text-left font-14">
                  {el.price_24hour?Number(el.price_24hour.price24h_change).toFixed(2):null} %
                </td>
              }
              <td className="ci-verti-align-middle text-white font-14">
              {est?convertNumber.toRupiah(est.balance): 0}{" "}
                <span className="text-white-50">{el.initialSymbol}</span>
              </td>
              {/* estimasi */}
              {/* <td className="ci-verti-align-middle text-white font-14">
                {est?convertNumber.toRupiah(est.balance * el.price_24hour.price24h_close) : 0}
              </td> */}
              {/* masih kosong nih fungsinya */}
              <td className="">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto",
                    gridColumnGap: "8px",
                  }}
                >
                  <div className="ci-asset-btn-aksi">
                    <button
                      onClick={() =>
                        el.symbol
                          ? history.push(
                              `/crypto/setor-crypto/${el.initialSymbol}`,
                            )
                          : history.push(`/crypto/setor-crypto/${el.initialSymbol}`)
                      }
                      className={`py-1 px-3 w-100 p-0 ci-btn-success`}
                    >
                      Dompet
                    </button>
                  </div>
                  <div className="ci-asset-btn-aksi">
                    <button
                      onClick={() =>
                        history.push(
                          `/pasar/${el.symbol.toString().replace("/", "_")}`,
                        )
                      }
                      className={`py-1 px-3 w-100 p-0 ci-btn-warning`}
                    >
                      Pasar
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
}

export default PricePasarTrading;
