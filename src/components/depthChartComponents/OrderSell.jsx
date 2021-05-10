import React from "react";

import {convertNumber} from "../../assets/js";

export default function OrderSell({DataSell}) {

  return (
    <div>
      <div className="outter-table-wrapper2">
        <div class="table-wrapper2">
          <table>
            <thead className="">
              <tr className="text-white">
                <th className="text-center">Harga</th>
                <th className="text-center">Total <span>ADA</span></th>
                <th className="text-center">Total <span>IDR</span></th>
              </tr>
            </thead>
            <tbody>
              {
                DataSell&&Array.isArray(DataSell)&&DataSell.length>0?
                  DataSell.map((item)=>{
                    // amount: 2.9997
                    // category: ["USER"]
                    // price: 850000000
                    // side: "SELL"
                    // stock: 3
                    // symbol: "BTC/IDR"
                    // total: 2549745000  
                    return (
                      <tr>
                        <td className="text-right text-sell font-12">{convertNumber.toRupiah(item.price)}</td>
                        <td className="text-white text-right font-12">{convertNumber.toRupiah(item.amount)}</td>
                        <td className="text-white text-right font-12">{convertNumber.toRupiah(Number(item.price)*Number(item.amount))}</td>
                      </tr>
                    );
                  })
                :
                <tr>
                  <td colSpan={3}>No Data</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
