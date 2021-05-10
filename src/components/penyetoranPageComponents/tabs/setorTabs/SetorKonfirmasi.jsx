import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DropdownCustom from '../../../dropdown'
import SetorBankPending from './SetorBankPending'
import { konfirmasiPenyetoran } from '../../../../stores/setorrupiah/functions'
// import { useHistory } from 'react-router-dom'

const metodePembayaran = [
    "BANK BCA",
    "BANK MANDIRI",
    "BANK BRI",
    "BANK LAIN",
    "ALFAMART"
]
// const jenisPembayaran = [
//     "KLIKBCA",
//     "TRANSFER"
// ]

const bca = ["KlikBCA", "BCA Mobile", "m-BCA", "ATM", "ATM non-tunai", "Setor Tunai Teller"]
const mandiri = ["Mandiri Internet", "Mandiri Mobile", "Mandiri SMS", "ATM", "Setor Tunai Teller"]
const bri = ["Internet Banking BRI", "SMS Banking BRI", "ATM", "Setor Tunai Teller"]

function SetorBankKonfirmasi() {
    const [langkah, setLangkah] = useState(1)
    // const [jenisPembayaran, setJenisPembayaran] = useState([])

    const [tanggal, setTanggal] = useState(0)
    const [jumlah, setJumlah] = useState(0)
    const [metode, setMetode] = useState('')
    const [jenis, setJenis] = useState('')
    const [norek, setNorek] = useState('')
    const [berita, setBerita] = useState('')
    const [pesan, setPesan] = useState('')
    const [bukti, setBukti] = useState(null)
    const dispatch = useDispatch()
    // const history = useHistory()
    const kirim = (e) => {
        e.preventDefault()
        const newData = new FormData()
        newData.append('tgl_depo', tanggal)
        newData.append('jumlah_depo', jumlah)
        newData.append('metode_pembayaran', metode)
        newData.append('jenis_pembayaran', jenis)
        newData.append('akun_rekening', norek)
        newData.append('berita_transfer', berita)
        newData.append('pesan_tambahan', pesan)
        newData.append('file', bukti)

        konfirmasiPenyetoran(newData, dispatch, setLangkah(2))
    }

    return (
        <div className="m-4 ci-bg-primary">
            {/* {JSON.stringify(metode)} */}
            {langkah === 1 ? (
                <div className="p-5">
                <h2 className="text-gold font-18">Konfirmasi Transfer</h2>
                <div className="text-white font-13">
                    <div><span>Lengkapi isian berikut jika Anda melakukan deposit melalui transfer Bank dan Alfamart.</span></div>
                    <div><span>Untuk melakukan konfirmasi transfer, mohon isi dengan informasi yang akurat dan sebenar-benarnya.</span></div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Tanggal Deposit</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <input type="date" className="form-control ci-inputDefault-bg-input ci-pd" onChange={(e) => setTanggal(e.target.value)} />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Jumlah Deposit</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <input type="number" className="form-control ci-inputDefault-bg-input ci-pd" onChange={(e) => setJumlah(e.target.value)} />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Metode Pembayaran</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <DropdownCustom dataOptions={metodePembayaran} onChange={setMetode} value={metode} classDropdown="w-100" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Jenis Pembayaran</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <DropdownCustom dataOptions={metode === "BANK BCA" ? bca : metode === "BANK MANDIRI" ? mandiri : metode === "BANK BRI" ? bri : ["-"]} onChange={setJenis} value={jenis} classDropdown="w-100" />
                    </div>
                </div>
                {metode !== "ALFAMART" ? (
                    <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Nomor Rekening Anda</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <input type="number" className="form-control ci-inputDefault-bg-input ci-pd" onChange={(e) => setNorek(e.target.value)} />
                    </div>
                </div>
                ) : ""}
                {metode !== "ALFAMART" ? (
                    <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Berita Transfer (jika ada)</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <input type="text" placeholder="Optional" className="form-control ci-inputDefault-bg-input ci-pd" onChange={(e) => setBerita(e.target.value)} />
                    </div>
                </div>
                ) : ""}
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Pesan Tambahan (jika ada)</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg">
                        <input type="text" placeholder="Optional" className="form-control ci-inputDefault-bg-input ci-pd" onChange={(e) => setPesan(e.target.value)} />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-5 col-md-3 text-white font-13 label-title">Bukti Transfer</div>
                    <div className="col-7 col-md-5 input-group ci-inputDefault-bg d-flex align-items-center">
                        <input type="file" className="form-control ci-inputDefault-bg-input ci-pd" onChange={(e) => setBukti(e.target.files[0])} />
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
                        <button className="p-2 w-100 bg-warning" onClick={(e) => kirim(e)}>Kirim</button>
                    </div>
                </div>
            </div>
            ) : <SetorBankPending />}
        </div>
    )
}

export default SetorBankKonfirmasi
