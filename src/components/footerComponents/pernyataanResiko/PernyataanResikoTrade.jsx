import React from "react";
import { useSelector } from "react-redux";
export default function PernyataanResikoTrade() {
  const {mode} = useSelector(state => state.daynightReducer)
  return (
    <div className={mode ? "bg-trade-dark": "bg-trade"} style={{ margin: "0px 12px" }}>
      <div className={`col-11 px-3 ${mode ? "bg-trade-dark": "bg-trade"} py-3`}>
        <p className={`${mode ? "text-price-dark" : "text-price"} mb-2`} style={{ fontStyle: "italic" }}>
          <span 
            style={{ background: "rgba(255, 0, 0, 0.4)" }}
            className="px-2 py-1"
          >
            Pernyataan Resiko :
          </span>
        </p>
        <p className={`${mode ? "text-price-dark" : "text-price"} mb-0`} style={{ fontStyle: "italic" }}>
          Perdagangan Digital aset (crypto) memiliki resiko yang tinggi.
          Pertimbangan dan keputusan ada di tangan Pengguna Cryptoindex tidak
          memaksakan pengguna melakukan aktivitas dan transaksi jual beli dan
          semua keputusan jual beli aset uang digital Anda adalah keputusan Anda
          sendiri dan tidak dipengaruhi oleh pihak manapun.{" "}
        </p>
      </div>
    </div>
  );
}
