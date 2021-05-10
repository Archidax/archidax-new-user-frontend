import React, { useState, useEffect } from 'react'
import PopupAfterKonfirmasiData from './tarikTabs/PopupAfterKonfirmasiData'
import PopupKonfirmasiData from './tarikTabs/PopupKonfirmasiData'
import PopupNotifikasiPenarikan from './tarikTabs/PopupNotifikasiPenarikan'
import RiwayatTarikRupiah from './tarikTabs/RiwayatTarikRupiah'
import listBank from '../../../pages/listBank'
import Dropdown from '../../dropdown'
import { useHistory } from 'react-router-dom'
import OTP from '../../otp'
import { convertNumber } from '../../../assets/js'
import { useSelector, useDispatch } from 'react-redux'
import { getBank, tambahBank, createTarik, getTarikHistory } from '../../../stores'
import Popup from '../../popUps'

function TarikRupiahTabs() {
    const dispatch = useDispatch()
    const history = useHistory()
    const kyc = useSelector(state => state.kycReducer)
    const tarik = useSelector(state => state.tarikReducer)
    const profile = useSelector(state => state.profileReducer)
    const [jumlah, setJumlah] = useState("")
    const [bank, setBank] = useState("")
    const [noRek, setNoRek] = useState("")
    const [pin, setPin] = useState("")
    const [akun, setAkun] = useState("")
    const [akunLis, setAkunList] = useState([])
    const [label, setLabel] = useState("")
    const [shownorek, setShownorek] = useState(true)

    const clear = () => {
        setJumlah("")
        setBank("")
        setNoRek("")
        setPin("")
        setAkun("")
        setLabel("")
        setShownorek(true)
    }


    const sendTarik = (e) => {
        e.preventDefault()
        if (jumlah < 100000 || jumlah > kyc.limit) {
            Popup.fire({
                title: "Warning!",
                text: "Jumlah penarikan tidak sesuai."
            })
        } else if (!bank) {
            Popup.fire({
                title: "Warning!",
                text: "Harap memilih tujuan transfer"
            })
        } else if (akunLis.includes(label)) {
            Popup.fire({
                title: "Warning!",
                text: `Label akun ${label} telah digunakan!`
            })
        } else if (shownorek && !noRek) {
            Popup.fire({
                title: "Warning!",
                text: `Harap cantumkan nomor rekening!`
            })
        }
        else {
            if (!shownorek) {
                Popup.fire({
                    title: "Warning",
                    text: `Apakah nomer telefon anda *****${profile.telefon.slice(4, profile.telefon.length)} sudah benar?`,
                    cancel: true,
                    onClickOk: () => {
                        if (akun === "Akun Baru") {
                            tambahBank(dispatch, { label_akun: label, akun_penarikan: bank, nomor_rekening: noRek })
                        }
                        createTarik(dispatch, { amount: jumlah, toRekening: noRek, bank_tujuan: shownorek ? bank : bank + "-emoney", request_id: pin }, clear)
                    }
                })
            } else {
                if (akun === "Akun Baru") {
                    tambahBank(dispatch, { label_akun: label, akun_penarikan: bank, nomor_rekening: noRek })
                }
                createTarik(dispatch, { amount: jumlah, toRekening: noRek, bank_tujuan: shownorek ? bank : bank + "-emoney" }, clear)

            }
        }
    }

    useEffect(() => {
        getBank(dispatch)
        getTarikHistory(dispatch)
    }, [dispatch])
    useEffect(() => {
        let tmp = tarik.listAkun.map(a => a.label_akun)
        setAkunList(["Akun Baru",...tmp])
    }, [tarik,setAkunList])
    useEffect(() => {
        if (akun && (akun !== "Akun Baru")) {
            let tmp = tarik.listAkun.filter(val => val.label_akun === akun)
            setNoRek(tmp[0].nomor_rekening)
            setBank(tmp[0].akun_penarikan)
        } else {
            setNoRek("")
            setBank("")
        }
    }, [akun,tarik])
    useEffect(() => {
        if ((bank && listBank[bank].bank)) {
            setShownorek(true)
        } else {
            setShownorek(false)
        }
    }, [bank])

    return (
        <div className="container-fluid">
            <div className="row border-top mt-3 border-warning">
                <div className="col-12 col-lg-5 d-none d-lg-inline ext-white mt-4">
                    <p className="mt-0 label-title-top">Withdraw Rupiah</p>
                    <p className="label-title mt-3">Syarat Tarik Dana</p>
                    <ul>
                        <li className="label-title2">Minimal penarikan {convertNumber.toMoney(100000, "Rp.")}.</li>
                        <li className="label-title2">Maksimal penarikan {convertNumber.toMoney(kyc.limit, "Rp.")} per hari (untuk menaikan limit, <span
                            onClick={() => {
                                history.push('/profile/limit-akun')
                            }}
                            style={{
                                cursor: 'pointer',
                                textDecorationLine: 'underline',
                            }}>klik disini</span>).</li>
                        {/* <li className="label-title2">Biaya 0.5% dihitung dari jumlah penarikan.</li> */}
                        <li className="label-title2">Minimal biaya penarikan adalah Rp. 25.000.</li>
                        <li className="label-title2">0,5% biaya penarikan akan dikenakan dan dihitung dari jumlah penarikan.</li>
                        <li className="label-title2">Semua penarikan rupiah akan diproses menggunakan jaringan LLG (Kliring) atau RGTGS.</li>
                        <li className="label-title2">Semua penarikan di atas pukul 12.00 WIB / 13.00 WITA akan masuk pada hari kerja bank selanjutnya.</li>
                    </ul>

                    <p className="label-title mt-3">Syarat Tarik Dana</p>
                    <ul>
                        <li className="label-title2">Isi nominal dengan jumlah yang ingin ditarik.</li>
                        <li className="label-title2">Pilih akun penarikan, jika Anda memilih <span>“Akun Baru”</span> maka Anda harus mengisi Nama Label Akun.</li>
                        <li className="label-title2">Selanjutnya, isi bank tujuan dan nomer rekening yang dituju.</li>
                        <li className="label-title2">Biaya Penarikan beserta Total Dana Yang diterima akan secara otomatis dihitung.</li>
                        <li className="label-title2">Klik tombol <span>“Kirim PIN” </span> dan ketik OTP yang dikirim pada nomer HP Anda.</li>
                        <li className="label-title2">Klik tombol <span>“Tarik Dana”</span>.</li>

                    </ul>
                </div>

                <div className="col-12 col-lg-7 text-white mt-4">
                    <div className="card ci-customCard-1">
                        <div className="card-body">
                            <div className="row mt-2 mb-3">
                                <div className="col-12 col-lg-4">
                                    <p className="label-title22">Untuk melakukan penarikan Rupiah,<br /> lengkapi form dibawah dengan teliti :</p>
                                </div>
                            </div>
                            <form>
                                <div className="row no-gutters mb-3">
                                    <div className="col-12 col-lg-4 d-flex align-items-center">
                                        <p className="mb-0 label-title2">Jumlah Penarikan</p>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input value={convertNumber.toMoney(jumlah)} onChange={e => {
                                                let numb = convertNumber.toString(e.target.value)
                                                let test = isNaN(numb)
                                                if (!test) {
                                                    setJumlah(convertNumber.toString(e.target.value))
                                                }
                                            }} placeholder="0" type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-3">
                                    <div className="col-12 col-lg-4 d-flex align-items-center">
                                        <p className=" mb-0 label-title2">Akun Penarikan</p>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <Dropdown dataOptions={akunLis} onChange={setAkun} value={akun} />
                                    </div>
                                </div>
                                
                                <div className="row no-gutters mb-3">
                                    <div className="col-12 col-lg-4 d-flex align-items-center">
                                        <p className=" mb-0 label-title2">Bank Tujuan</p>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <Dropdown disabled={akun !== "Akun Baru"} dataOptions={Object.keys(listBank)} value={bank} onChange={setBank} />
                                    </div>
                                </div>
                                {
                                    shownorek &&
                                    <div className="row no-gutters mb-3">
                                        <div className="col-12 col-lg-4 d-flex align-items-center">
                                            <p className="mb-0 label-title2">No. Rekening</p>
                                        </div>
                                        <div className="col-12 col-lg-8">
                                            <div className="input-group ci-inputDefault-bg">
                                                <input disabled={akun !== "Akun Baru"} value={noRek} onChange={e => setNoRek(e.target.value)} placeholder="123312321" type="number" className="form-control ci-inputDefault-bg-input ci-pd" />
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    akun === "Akun Baru" &&
                                    <div className="row no-gutters mb-3">
                                        <div className="col-12 col-lg-4 d-flex align-items-center">
                                            <p className=" mb-0 label-title2">Label</p>
                                        </div>
                                        <div className="col-12 col-lg-8">
                                            <div className="input-group ci-inputDefault-bg">
                                                <input value={label} onChange={e => setLabel(e.target.value)} placeholder="Nama label akun" type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="row no-gutters mb-3">
                                    <div className="col-12 col-lg-4 d-flex align-items-center">
                                        <p className="mb-0 label-title2">Biaya Penarikan</p>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input placeholder="0" disabled value={"25.000"} type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-3">
                                    <div className="col-12 col-lg-4 d-flex align-items-center">
                                        <p className="mb-0 label-title2">Total Terima</p>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input disabled value={jumlah >= 100000 ? (jumlah > kyc.limit ? convertNumber.toMoney(kyc.limit - 25000) : convertNumber.toMoney(jumlah - 25000)) : 0} placeholder="0" type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-12 col-lg-4 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title2">PIN SMS</p>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="row no-gutters">
                                            <div className="col-6">
                                                <div className="input-group ci-inputDefault-bg">
                                                    <input placeholder="Pin OTP" value={pin} onChange={e => setPin(e.target.value)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                                </div>
                                            </div>
                                            <div className="col-6 d-flex justify-content-center pl-3">
                                                <OTP />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row mt-2 mb-2 justify-content-end">
                                    <div className="col-12 d-flex justify-content-end">
                                        <button onClick={sendTarik} className="ci-btn-warning ci-md mt-3">Tarik Dana</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <RiwayatTarikRupiah />
                </div>
            </div>
            <PopupKonfirmasiData />
            <PopupAfterKonfirmasiData />
            <PopupNotifikasiPenarikan />
        </div>
    )
}

export default TarikRupiahTabs
