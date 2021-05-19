import React, {useState} from 'react'
import {imageSizeError} from '../../../stores/errorHandler'
import {postPengajuanKoin} from '../../../stores/pengajuanCoin/function'
import Popup from '../../../components/popUps'

function FormPengajuanKoin() {
    
    const statePengajuan = {
        full_name: "",
        email: "",
        company: "",
        position: "",
        other_position: "",

        project_name: "",
        project_introduction: "",
        addressContract: "",
        explorer: "",
        whitepaper: "",
        icon: "",
        source_code: "",
        short_description: "",

        assetName: "",
        initialSymbol: "",
        type: "",
        assetDecimals: "",
        technology: "",
        amountAssetMaxSupply: "",
        amountAssetCirculatingSupply: "",
        priceAssetTotalSupply: "",

        official_website: "",
        twitter: "",
        telegram: "",
        instagram: ""
    }
    const [dataPengajuan, setDataPengajuan] = useState(statePengajuan)
    const [dataIcon, setDataIcon] = useState("")
    const [dataWhitePaper, setDataWhitepaper] = useState("")

    const hiddenFileInput1 = React.useRef(null)
    const hiddenFileInput2 = React.useRef(null)
    const hiddenClickUpload1 = (e) => {
        e.preventDefault()
        hiddenFileInput1.current.click()
    }

    const hiddenClickUpload2 = (e) => {
        e.preventDefault()
        hiddenFileInput2.current.click()
    }

    function onHandleChange (val, nameVar) {
        setDataPengajuan({
            ...dataPengajuan,
            [nameVar]: val
        })
    }

    function onHandleSubmit (e) {
        const formData = new FormData()
        if (!dataIcon&&!dataWhitePaper) {
            Popup.fire({
                title: "Gagal !",
                text: "Please input icon file and whitepaper file."
            })
        } else if(!dataIcon) {
            Popup.fire({
                title: "Gagal !",
                text: "Please input your icon file."
            })
        } else if(!dataWhitePaper) {
            Popup.fire({
                title: "Gagal !",
                text: "please input your whitepaper data."
            })
        } else {
            for(let [key,value] of Object.entries({ ...dataPengajuan })){
                formData.append(key, value);
            }
            formData.append("files", dataIcon);
            formData.append("files", dataWhitePaper);
            postPengajuanKoin(formData)
        }
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 mb-2">
                    <h3 className="font-20 font-weight-bold mb-0 text-gold">Informasi Pemohon</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p className="text-gray2 mb-1">Nama Pemohon</p>
                    <div className="input-group ci-inputDefault-bg mb-3">
                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Nama Pemohon" aria-label="NamaPemohon" 
                            onChange={(e) => onHandleChange(e.target.value, "full_name")}/>
                    </div>

                    <p className="text-gray2 mb-1">Email</p>
                    <div className="input-group ci-inputDefault-bg mb-3">
                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Email" aria-label="Email"
                            onChange={(e) => onHandleChange(e.target.value, "email")}/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-gray2 mb-1">Posisi</p>
                    <div className="input-group ci-inputDefault-bg mb-3">
                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Posisi" aria-label="Posisi"
                            onChange={(e) => onHandleChange(e.target.value, "company")}/>
                    </div>

                    <p className="text-gray2 mb-1">Posisi Lain</p>
                    <div className="input-group ci-inputDefault-bg mb-3">
                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="PosisiLain" aria-label="PosisiLain"
                            onChange={(e) => onHandleChange(e.target.value, "position")}/>
                    </div>
                </div>
                <div className="col-12 col-md-12">
                    <p className="text-gray2 mb-1">Perusahaan</p>
                    <div className="input-group ci-inputDefault-bg mb-3">
                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Perusahaan" aria-label="Perusahaan"
                            onChange={(e) => onHandleChange(e.target.value, "other_position")}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12 col-md-12 mb-2">
                            <h3 className="font-20 font-weight-bold mb-0 text-gold">Informasi Projek</h3>
                        </div>

                        <div className="col-12 col-md-12">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Nama Projek</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Nama Projek" aria-label="NamaProjek"
                                            onChange={(e) => onHandleChange(e.target.value, "project_name")}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Instruksi Project</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Intruksi Project" aria-label="IntruksiProject"
                                            onChange={(e) => onHandleChange(e.target.value, "project_introduction")}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <p className="text-gray2 mb-1">Official Website</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Official Website" aria-label="OfficialWebsite"
                                            onChange={(e) => onHandleChange(e.target.value, "official_website")}/>
                                    </div>

                                    <p className="text-gray2 mb-1">Telegram</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Telegram" aria-label="Telegram"
                                            onChange={(e) => onHandleChange(e.target.value, "telegram")}/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="text-gray2 mb-1">Twitter</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Twitter" aria-label="Twitter"
                                            onChange={(e) => onHandleChange(e.target.value, "twitter")}/>
                                    </div>

                                    <p className="text-gray2 mb-1">Instagram</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Instagram" aria-label="Instagram"
                                            onChange={(e) => onHandleChange(e.target.value, "instagram")}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Alamat Kontrak</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Alamat Kontrak" aria-label="AlamatKontrak"
                                            onChange={(e) => onHandleChange(e.target.value, "addressContract")}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Explorer</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Explorer" aria-label="Explorer"
                                            onChange={(e) => onHandleChange(e.target.value, "explorer")}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Whitepaper</p>
                                    <div className="" style={{borderRadius:"4px", backgroundColor:"#aeb4ce50",display:"flex", padding: "6px 12px"}}>
                                        <button className={`ci-btnOL-warning`} onClick={(e) => hiddenClickUpload1(e)}>
                                            Unggah
                                        </button>
                                        <input type="file" ref={hiddenFileInput1}
                                            id="Whitepaper"
                                            accept=".pdf, .word"
                                            onChange={(e) => {
                                                let file = e.target.files[0]
                                                file&&setDataWhitepaper(file)
                                            }}
                                            style={{ display: "none" }} required/>
                                        <p className="mb-0 ml-3 d-flex align-items-center">{dataWhitePaper?.name}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Source Code</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Source Code" aria-label="SourceCode"
                                            onChange={(e) => onHandleChange(e.target.value, "source_code")}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Deskripsi</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <textarea type="text" style={{
                                        resize: 'none'
                                        }} className="form-control ci-inputDefault-bg-input ci-pd" rows={5}
                                        onChange={(e) => onHandleChange(e.target.value, "short_description")}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12 col-md-12 mb-2">
                            <h3 className="font-20 font-weight-bold mb-0 text-gold">Informasi Koin</h3>
                        </div>

                        <div className="col-12 col-md-12">

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Nama Koin</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Nama Koin" aria-label="NamaKoin"
                                            onChange={(e) => onHandleChange(e.target.value, "assetName")}/>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Symbol</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Symbol" aria-label="Symbol"/>
                                    </div>
                                </div>
                            </div> */}

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Inisial Symbol</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Inisial Symbol" aria-label="InisialSymbol"
                                            onChange={(e) => onHandleChange(e.target.value, "initialSymbol")}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Tipe</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Tipe" aria-label="Tipe"
                                            onChange={(e) => onHandleChange(e.target.value, "type")}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Desimal</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Desimal" aria-label="Desimal"
                                            onChange={(e) => onHandleChange(e.target.value, "assetDecimals")}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <p className="text-gray2 mb-1">Technology</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Technology" aria-label="Technology"
                                            onChange={(e) => onHandleChange(e.target.value, "technology")}/>
                                    </div>

                                    <p className="text-gray2 mb-1">Amount Asset Max Supply</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Amount Asset Max Supply" aria-label="AmountAssetMaxSupply"
                                            onChange={(e) => onHandleChange(e.target.value, "amountAssetMaxSupply")}/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="text-gray2 mb-1">Amount Asset Circulating Supply</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Amount Asset Circulating Supply" aria-label="AmountAssetCirculatingSupply"
                                            onChange={(e) => onHandleChange(e.target.value, "amountAssetCirculatingSupply")}/>
                                    </div>

                                    <p className="text-gray2 mb-1">Price Asset Total Supply</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Price Asset Total Supply" aria-label="PriceAssetTotalSupply"
                                            onChange={(e) => onHandleChange(e.target.value, "priceAssetTotalSupply")}/>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Currency Base</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Currency Base" aria-label="CurrencyBase"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Currency Quote</p>
                                    <div className="input-group ci-inputDefault-bg mb-3">
                                        <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" placeholder="Currency Quote" aria-label="CurrencyQuote"/>
                                    </div>
                                </div>
                            </div> */}

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <p className="text-gray2 mb-1">Logo</p>
                                    <div className="" style={{borderRadius:"4px", backgroundColor:"#aeb4ce50",display:"flex", padding: "6px 12px"}}>
                                        <button className={`ci-btnOL-warning`} onClick={(e) => hiddenClickUpload2(e)}>
                                            Unggah
                                        </button>
                                        <input type="file" ref={hiddenFileInput2}
                                            id="imgLogo"
                                            accept=".png, .jpg, .jpeg" 
                                            onChange={(e) => {
                                                let file = e.target.files[0]
                                                file&&imageSizeError(file, 500000, (e) => setDataIcon(file))
                                            }} style={{ display: "none" }} required/>
                                        <p className="mb-0 ml-3 d-flex align-items-center">{dataIcon?.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row mt-3">
                <div className="col-12 col-md-12">
                    <button onClick={onHandleSubmit} className="ci-btn-warning w-100 py-2 font-weight-bold">Kirim Data</button>
                </div>
            </div>
        </div>
    )
}

export default FormPengajuanKoin
