import React, { useState, useEffect } from 'react'
// import ButtonDataDiri from './verificationPage1/ButtonDataDiri'
// import ButtonDokumen from './verificationPage1/ButtonDokumen'
import VerificationStep from './verificationPage1/VerificationStep'
import countries from './verificationPage1/countriesCustom'
import Dropdown from '../../components/dropdown'
import { useHistory } from 'react-router-dom'
import { sendStepOne } from '../../stores'
import { useDispatch, useSelector } from 'react-redux'
import dateFormat from 'dateformat'
import { kodePosFormatError } from '../../stores/errorHandler'
import province from '../../pages/provinces'
// const countries_code = [
//     "+62", "+60", "+61"
// ]

function VerificationPage1() {
    const dispatch = useDispatch()

    const kyc = useSelector((state) => state.kycReducer);
    const [input, setInput] = useState({
        namaLengkap: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        pekerjaan: "",
        wargaNegara: "",
        nomorIdentitas: "",
        berlakuHingga: "",
        namaKerabat: "",
        hubunganKerabat: "",
        nomorTeleponDarurat: ""
    })

    const [provinsi, setProvinsi] = useState("")
    const [kota, setKota] = useState("")
    const [jalan, setJalan] = useState("")
    const [kodePos, setKodePos] = useState("")


    const [kotaArr, setKotaArr] = useState([])


    const inputHandler = (e) => {
        const { name, value } = e.target
        setInput({
            ...input, [name]: value
        })
    }



    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (kodePosFormatError(kodePos)){
            
        }else {
            sendStepOne(dispatch, {...input,nomorTeleponDarurat: "+62"+input.nomorTeleponDarurat, provinsi, kota, jalan, kodePos}, history)
        }
        
    }
    useEffect(() => {
        if(kyc?.kycStatus === "1"){
            history.push("/verification/step2");
        }
    },[history,kyc])
    useEffect(() => {
        if(provinsi){
            setKota("")
            setKotaArr(province[provinsi])
        }else {
            setKotaArr([])
        }
    }, [provinsi])

    return (
        <div className="container-fluid p-4" style={{ height: "92vh" }}>
            {/* {JSON.stringify(input)} */}
            <div className="text-white font-12 p-3" style={{ backgroundColor: "#151933", border: "none" }}>
                <h2 className="font-14 font-bold text-gold">Verifikasi Akun</h2>
                <div>Lengkapi data-data berikut sesuai dengan petunjuk di atas.</div>
                <div>Kami akan menutup akun apabila mencoba mengirimkan data yang tidak serius.</div>
                <div className="p-5 border mt-3">
                    <div className="d-flex justify-content-center mb-5">
                        <VerificationStep step1={true} />
                    </div>

                    <h3 className="font-12 font-bold text-gold">Formulir Verifikasi</h3>

                    {/* First Row */}
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label for="namaLengkap" className="form-label">Nama Lengkap</label>
                                <div className="input-group ci-inputDefault-bg">
                                    <input placeholder="Nama Lengkap" onChange={(e) => inputHandler(e)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" name="namaLengkap"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label for="tempatLahir" className="form-label">Tempat Lahir</label>
                                    <div className="input-group ci-inputDefault-bg">
                                        <input placeholder="Tempat lahir" onChange={(e) => inputHandler(e)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" name="tempatLahir"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label for="wargaNegara" className="form-label">Tanggal Lahir</label>
                                    <div className="input-group ci-inputDefault-bg">
                                        <input placeholder="Tanggal lahir" onChange={(e) => inputHandler(e)} type="date" max={dateFormat(new Date().setFullYear(new Date().getFullYear() - 17),"yyyy-mm-dd")}  className="form-control ci-inputDefault-bg-input ci-pd" name="tanggalLahir"/>
                                    </div>
                                    {/* <input onChange={(e) => inputHandler(e)} type="date" className="form-control font-12 text-white" style={{ backgroundColor: "#2C355A" }} id="wargaNegara" name="tanggalLahir" /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <label for="tempatLahir" className="form-label">Jenis Kelamin</label>
                            <div className="row m-0 no-gutters">
                                <div className="form-check col-6">
                                    <label class="mt-2 font-roboto label-title2">
                                        <input  onChange={(e) => {
                                            setInput({...input, jenisKelamin: "Laki - Laki"})
                                        }} type="radio" name="jenisKelamin" />
                                        <span class="checkmark" className="mr-2"></span>
                                        Laki-laki
                                    </label>
                                    {/* <input className="form-check-input" onChange={(e) => {
                                        setInput({...input, jenisKelamin: "Laki - Laki"})
                                    }} type="radio" name="jenisKelamin" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Laki-laki
                                </label> */}
                                </div>
                                <div className="form-check col-6">
                                    <label class="mt-2 font-roboto label-title2">
                                        <input  onChange={(e) => {
                                            setInput({...input, jenisKelamin: "Perempuan"})
                                        }} type="radio" name="jenisKelamin"/>
                                        <span class="checkmark" className="mr-2"></span>
                                        Perempuan
                                    </label>
                                    {/* <input onChange={(e) => {
                                        setInput({...input, jenisKelamin: "Perempuan"})
                                    }} className="form-check-input" type="radio" name="jenisKelamin" id="flexRadioDefault2" />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Perempuan
                                </label> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <label for="pekerjaan" className="form-label">Pekerjaan</label>
                            <div className="input-group ci-inputDefault-bg">
                                <input placeholder="Nama Pekerjaan" onChange={(e) => inputHandler(e)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" name="pekerjaan"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <label for="wargaNegara" className="form-label">Warga Negara</label>
                            <Dropdown dataOptions={countries} value={input.wargaNegara} onChange={(val) => {
                                setInput({...input, wargaNegara: val})
                            }} searchBar={true}/>
                            {/* <select name="wargaNegara" onChange={(e) => inputHandler(e)} className="form-select p-2 font-12 text-white w-100" aria-label="Pilih Negara" style={{ backgroundColor: "#2C355A" }}>
                                <option selected>-- Pilih Negara --</option>
                                {countries.map(el => {
                                    return <option value={el.code}>{el.name}</option>
                                })}
                            </select> */}
                        </div>
                    </div>

                    {/* Third Row */}
                    <label for="namaLengkap" className="form-label">Alamat</label>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="mb-3">
                                <div className="input-group ci-inputDefault-bg">
                                    <input placeholder="Alamat domisili" onChange={(e) => setJalan(e.target.value)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" name="jalan"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="mb-3">
                                <Dropdown value={provinsi} onChange={setProvinsi} dataOptions={Object.keys(province)} searchBar={true}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="mb-3">
                                <Dropdown  value={kota} onChange={setKota} dataOptions={kotaArr} searchBar={true}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="mb-3">
                                <div className="input-group ci-inputDefault-bg">
                                    <input onChange={(e) => {
                                        if(e.target.value.length<=5){
                                            setKodePos(e.target.value)
                                        }
                                    }} type="text" placeholder="Kode POS" value={kodePos} className="form-control ci-inputDefault-bg-input ci-pd" name="kodepos"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fourth Row */}
                    <hr style={{ borderTop: "1px solid white" }} />
                    <h3 className="font-12 font-bold text-gold">Kartu Identitas</h3>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <label for="nomorIdentitas" className="form-label">No. KTP/SIM/Passport</label>
                            <div className="input-group ci-inputDefault-bg">
                                <input placeholder="Nomer identitas" onChange={(e) => inputHandler(e)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" name="nomorIdentitas"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <label for="berlakuHingga" className="form-label">Berlaku Hingga</label>
                            <div className="input-group ci-inputDefault-bg">
                                <input placeholder="Tgl. kadaluarsa" disabled={input.berlakuHingga === 'Seumur Hidup'} max={dateFormat(new Date().setFullYear(new Date().getFullYear() - 17),"yyyy-mm-dd")} value={input.berlakuHingga === "Seumur Hidup" ? "" : dateFormat(input.berlakuHingga, "yyyy-mm-dd")} onChange={(e) => {
                                    inputHandler(e)
                                }} type="date" className="form-control ci-inputDefault-bg-input ci-pd" name="berlakuHingga"/>
                            </div>
                            <div>
                                <label class="mt-2 font-roboto label-title2">
                                    <input type="checkbox" checked={input.berlakuHingga === "Seumur Hidup" ? "checked" : ""} onChange={e => {
                                        if(input.berlakuHingga === "Seumur Hidup") {
                                            setInput({...input, berlakuHingga: ""})
                                        }else {
                                            setInput({...input, berlakuHingga: "Seumur Hidup"})
                                        }
                                    }} />
                                    <span class="checkmark" className="mr-2"></span>
                                    Seumur Hidup
                                </label>
                            </div>
                        </div>
                    </div>


                    {/* Fifth Row */}
                    <hr style={{ borderTop: "1px solid white" }} />
                    <h3 className="font-12 font-bold text-gold">Kontak Darurat</h3>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <label for="namaKerabat" className="form-label">Nama Kerabat</label>
                            <div className="input-group ci-inputDefault-bg">
                                <input placeholder="Kontak darurat" onChange={(e) => inputHandler(e)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" name="namaKerabat"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <label for="hubunganKerabat" className="form-label">Hubungan Kerabat</label>
                            <div className="input-group ci-inputDefault-bg">
                                <input placeholder="Relasi" onChange={(e) => inputHandler(e)} type="text" className="form-control ci-inputDefault-bg-input ci-pd" name="hubunganKerabat"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <label for="hubunganKerabat" className="form-label">Nomor Telepon Darurat</label>
                            <div className="input-group ci-inputDefault-bg">
                                <input value={"+62 - "+ input.nomorTeleponDarurat} onChange={e => {
                                if(e.target.value === "+62 - " || !isNaN(e.target.value[e.target.value.length - 1])){
                                    setInput({...input, nomorTeleponDarurat :e.target.value.slice(6)})
                                }
                            }} type="text" placeholder="Nomer telefon darurat"  className="form-control ci-inputDefault-bg-input ci-pd" name="nomorTeleponDarurat"/>
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-3">
                            <label for="nomorTeleponDarurat" className="form-label">Nomor Telepon Darurat</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text font-12 text-white p-0" style={{ backgroundColor: "#2C355A" }}>
                                        <select className="text-white p-0 px-2" style={{ backgroundColor: "#2C355A", border: "none" }}>
                                            <option className="font-12 text-white">--</option>
                                            {countries_code.map(el => {
                                                return <option value={el} className="font-12 text-white">{el}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <input onChange={(e) => inputHandler(e)} type="number" className="form-control font-12 text-white" style={{ backgroundColor: "#2C355A" }} aria-label="Text input with checkbox" />
                            </div>
                        </div> */}
                    </div>
                    
                    {/* Submit */}
                    <div className="m-0 d-flex justify-content-end">
                        <button onClick={(e) => handleSubmit(e)} className="px-5 py-2 px-md-5 py-md-2 border-0 mt-3" style={{ backgroundColor: "#F9BD00" }}>Lanjut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationPage1
