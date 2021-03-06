import React from "react";

import { useSelector, useDispatch } from "react-redux";

import moment from "moment";

import { GetOrderPending, CancelOrderId } from "../../../stores/pasartrading/functions";

import { convertNumber } from "../../../assets/js";
import BtnAlertCancelAll from "./BtnCncelAll";

export default function OrderPending() {
  const {mode} = useSelector(state => state.daynightReducer)
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  const { PairSymbol } = useSelector((state) => state ? state?.pasarTradingReducer : {});
  let { OrderPending } = useSelector((state)=>state?.pasarTradingReducer);
  const dispatch = useDispatch()

  React.useEffect(() => {
    if(isLoginPages){
      dispatch(GetOrderPending({ pair: PairSymbol }))
    }
  }, [PairSymbol, dispatch,isLoginPages]);

  return (
    <>
      <BtnAlertCancelAll />
      <div className="outter-table-wrapper5">
      <div class={mode ? "table-wrapper2-dark":"table-wrapper2"} style={{ overflow: 'scroll', height: "34vh" }}>
        <table>
          <thead className="">
            <tr className="text-white">
              <th className="text-left">Waktu</th>
              <th className="text-left">Pasangan</th>
              <th className="text-left">Tipe Order</th>
              <th className="text-left">Harga ({PairSymbol ? PairSymbol.toString().split("/")[1] : null})</th>
              <th className="text-left">Jumlah ({PairSymbol ? PairSymbol.toString().split("/")[0] : null})</th>
              <th className="text-left">Terjual/Terbeli ({PairSymbol ? PairSymbol.toString().split("/")[0] : null})</th>
              <th className="text-left">Total ({PairSymbol ? PairSymbol.toString().split("/")[1] : null})</th>
              <th className="text-left">Aksi Order</th>
            </tr>
          </thead>
          <tbody>
            {OrderPending && Array.isArray(OrderPending) && OrderPending.length > 0 ? OrderPending.map((item,index) => {
                
                return (
                  <tr>
                    <td className={`${mode ? "text-price-dark":"text-price"} text-left`}>({index+1}) {item.createdAt ? moment(item.createdAt).format("L HH:MM:SS") : "-"}</td>
                    <td className={`${mode ? "text-price-dark":"text-price"} text-left`}>{item.symbol ? item.symbol : "-"}</td>
                    <td className={`${mode ? "text-price-dark":"text-price"} text-left`}>{item.side ? item.side.toUpperCase() === "BUY" ? "Beli" : item.side.toUpperCase() === "SELL" ? "Jual" : "-" : "-"}</td>
                    <td className={`${mode ? "text-price-dark":"text-price"} text-left`}>{convertNumber.toRupiah(item.price)}</td>
                    <td className={`${mode ? "text-price-dark":"text-price"} text-left`}>{convertNumber.toRupiah(item.amount,"CRYPTO")}</td>
                    <td className={`${mode ? "text-price-dark":"text-price"} text-left`}>{convertNumber.tradeRemaining(item.stock,item.amount)}</td>
                    <td className={`${mode ? "text-price-dark":"text-price"} text-left`}>{convertNumber.toRupiah(item.total)}</td>
                    <td className={`${mode ? "text-price-dark":"text-price"} text-left`}>
                      <button className="btn-danger px-2" onClick={()=>dispatch(CancelOrderId({id:item._id,symbol:item.symbol}))}>Cancel</button>
                    </td>
                  </tr>
                );
              }) : (
                <tr>
                  <td className="text-white text-left text-center mt-5 pt-3" colSpan={8}>No Orders</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
