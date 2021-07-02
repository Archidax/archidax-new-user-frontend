import React from 'react';
import RiwayatOrder from "./riwayatOrder";
import RiwayatTransaksi from "./riwayatTransaksi";
import RiwayatSetorKripto from "./riwayatSetorKripto";
import RiwayatTarikKripto from "./riwayatTarikKripto";
import RiwayatSetorRupiah from "./riwayatSetorRupiah";
import RiwayatTarikRupiah from "./riwayatTarikRupiah";
import RiwayatMutasi from "./riwayatMutasi";
import Translate from '../../i18n/Translate';

export default function index() {
  return (
    <div className="container-fluid" style={{height: "94vh"}}>
      <h2 className="title-riwayat mb-2">{Translate('rw_riwayat')}</h2>
      <div className="lines-header mb-3" style={{width: "40px", height: "2px", background: "#F9BA42"}}></div>
      <nav>
        <div className="nav nav-tabs nav-tabs-custom" id="nav-tab" role="tablist">
          <a className="nav-item nav-link nav-link-custom active" id="nav-order-tab" data-toggle="tab" href="#nav-order" role="tab" aria-controls="nav-order" aria-selected="true">{Translate('rw_order')}</a>
          <a className="nav-item nav-link nav-link-custom" id="nav-transaksi-tab" data-toggle="tab" href="#nav-transaksi" role="tab" aria-controls="nav-transaksi" aria-selected="false">{Translate('rw_transaksi')}</a>
          <a className="nav-item nav-link nav-link-custom" id="nav-setorKripto-tab" data-toggle="tab" href="#nav-setorKripto" role="tab" aria-controls="nav-setorKripto" aria-selected="false">{Translate('rw_setor_kripto')}</a>
          <a className="nav-item nav-link nav-link-custom" id="nav-tarikKripto-tab" data-toggle="tab" href="#nav-tarikKripto" role="tab" aria-controls="nav-tarikKripto" aria-selected="false">{Translate('rw_tarik_kripto')}</a>
          {/* <a className="nav-item nav-link nav-link-custom" id="nav-setorRupiah-tab" data-toggle="tab" href="#nav-setorRupiah" role="tab" aria-controls="nav-setorRupiah" aria-selected="false">{Translate('rw_setor_usd')}</a>
          <a className="nav-item nav-link nav-link-custom" id="nav-tarikRupiah-tab" data-toggle="tab" href="#nav-tarikRupiah" role="tab" aria-controls="nav-tarikRupiah" aria-selected="false">{Translate('rw_tarik_usd')}</a> */}
          <a className="nav-item nav-link nav-link-custom" id="nav-mutasi-tab" data-toggle="tab" href="#nav-mutasi" role="tab" aria-controls="nav-mutasi" aria-selected="false">{Translate('rw_mutasi')}</a>
        </div>
      </nav>
      <div className="tab-content tab-content-custom-riwayat" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-order" role="tabpanel" aria-labelledby="nav-order-tab">
          <RiwayatOrder/>
        </div>
        <div className="tab-pane fade" id="nav-transaksi" role="tabpanel" aria-labelledby="nav-transaksi-tab">
          <RiwayatTransaksi/>
        </div>
        <div className="tab-pane fade" id="nav-setorKripto" role="tabpanel" aria-labelledby="nav-setorKripto-tab">
          <RiwayatSetorKripto/>
        </div>
        <div className="tab-pane fade" id="nav-tarikKripto" role="tabpanel" aria-labelledby="nav-tarikKripto-tab">
          <RiwayatTarikKripto/>
        </div>
        <div className="tab-pane fade" id="nav-setorRupiah" role="tabpanel" aria-labelledby="nav-setorRupiah-tab">
          <RiwayatSetorRupiah/>
        </div>
        <div className="tab-pane fade" id="nav-tarikRupiah" role="tabpanel" aria-labelledby="nav-tarikRupiah-tab">
          <RiwayatTarikRupiah/>
        </div>
        <div className="tab-pane fade" id="nav-mutasi" role="tabpanel" aria-labelledby="nav-mutasi-tab">
          <RiwayatMutasi/>
        </div>
      </div>
    </div>
  )
}
