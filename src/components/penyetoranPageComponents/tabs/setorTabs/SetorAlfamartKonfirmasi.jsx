import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DropdownCustom from '../../../dropdown'
import SetorAlfamartPending from './SetorAlfamartPending'

const metodePembayaran = [
    "ALFAMART"
]

function SetorAlfamartKonfirmasi() {
    const [langkah, setLangkah] = useState(1)

    const setorAlfamart = useSelector(state => state.setorRupiahReducer.setorAlfamart)

    const [tanggal, setTanggal] = useState(0)
    const [jumlah, setJumlah] = useState(0)
    const [metode, setMetode] = useState('')
    const [pesan, setPesan] = useState('')
    const [bukti, setBukti] = useState(null)

    const kirim = () => {
        const newData = new FormData()
    }

    return (
        <div className="m-4 ci-bg-primary">
            {/* {JSON.stringify(metode)} */}
            <div className="p-5">
                <h2 className="text-gold font-18">Konfirmasi Transfer</h2>
                <div className="text-white font-13">
                    <div><span>Lengkapi isian berikut jika Anda melakukan deposit melalui transfer Bank dan Alfamart.</span></div>
                    <div><span>Untuk melakukan konfirmasi transfer, mohon isi dengan informasi yang akurat dan sebenar-benarnya.</span></div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Tanggal Deposit</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <input type="date" className="form-control ci-inputDefault-bg-input ci-pd" onClick={(e) => setTanggal(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Jumlah Deposit</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <input type="number" className="form-control ci-inputDefault-bg-input ci-pd" onClick={(e) => setJumlah(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Metode Pembayaran</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <DropdownCustom dataOptions={metodePembayaran} onChange={setMetode} value={metode} classDropdown="w-100"/>
                    </div>
                </div>
 
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Pesan Tambahan (jika ada)</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <input type="text" placeholder="Optional" className="form-control ci-inputDefault-bg-input ci-pd" onClick={(e) => setPesan(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Bukti Transfer</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg d-flex align-items-center">
                        <input type="file" className="form-control ci-inputDefault-bg-input ci-pd" onClick={(e) => setBukti(e.target.files[0])}/>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title"></div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <div className="text-white label-title font-12 text-white-50">Jenis file: jpg, gif, png, pdf. Ukuran file maksimal 3mb.</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <button className="p-2 w-100 bg-warning" onClick={(e) => kirim()}>Kirim</button>
                    </div>
                </div>
            </div>
            <SetorAlfamartPending/>
        </div>
    )
}

export default SetorAlfamartKonfirmasi
