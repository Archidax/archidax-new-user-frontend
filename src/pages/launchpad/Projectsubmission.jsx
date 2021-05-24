import React, { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import "./style.scss"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html';

// Import Components
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'
import Dropdown from '../../components/dropdownCustom'

import { industries } from '../../assets/launchpad'
import { launchNewProject } from '../../stores';
import CardTeamMember from './CardTeamMember';

function LaunchpadPorto() {
    // Project Introduction
    const [projectName, setProjectName] = useState("")
    const [projectContact, setProjectContact] = useState("")
    const [projectIndustry, setProjectIndustry] = useState("")
    const [projectExplorer, setProjectExplorer] = useState("")
    const [projectWebsite, setProjectWebsite] = useState("")
    const [projectSourceCode, setProjectSourceCode] = useState("")
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const onEditorStateChange = content => {
        return setEditorState(content)
    }

    // Token details
    const [tokenName, setTokenName] = useState("")
    const [tokenSymbol, setTokenSymbol] = useState("")
    const [tokenInitialSymbol, setTokenInitialSymbol] = useState("")
    const [tokenSaleStartTime, setTokenSaleStartTime] = useState("")
    const [tokenSaleEndTime, setTokenSaleEndTime] = useState("")
    const [tokenSupply, setTokenSupply] = useState(0)
    const [tokenType, setTokenType] = useState("")
    const [tokenPrice, setTokenPrice] = useState(0)
    const [tokenDecimal, setTokenDecimal] = useState(0)
    const [tokenMinimumPurchaseAmount, setTokenMinimumPurchaseAmount] = useState(0)
    const [tokenAmountCircSupply, setTokenAmountCircSupply] = useState(0)
    const [tokenProtokol, setTokenProtokol] = useState(0)
    const [tokenCurrencyBase, setTokenCurrencyBase] = useState(0)
    const [tokenCurrencyQuote, setTokenCurrencyQuote] = useState(0)
    const [tokenDistribution, setTokenDistribution] = useState(0)
    const [tokenCoinImage, setTokenCoinImage] = useState(null)

    const submitNewCoin = () => {
        const description = draftToHtml(
            convertToRaw(editorState.getCurrentContent())
        )
        const data = new FormData()
        data.append('name', projectName)
        data.append('contact', projectContact)
        data.append('industry', projectIndustry)
        data.append('explorer', projectExplorer)
        data.append('description', description)

        launchNewProject(data)
    }


    // Team
    const [memberDetails, setMemberDetails] = useState([{
        name: "",
        facebook: "",
        twitter: "",
        linkedin: ""
    }])

    const addTeamMember = () => {
        let form = {
            name: "",
            facebook: "",
            twitter: "",
            linkedin: ""
        }
        setMemberDetails([...memberDetails, form])
        console.log(memberDetails)
    }

    const removeMember = (index) => {
        console.log(index, memberDetails)
        let members = memberDetails.splice(index, 1)
        setMemberDetails(members)
    }

    const onChangeMember = (index, name, value,) => {
        let tmp = [...memberDetails]
        // tmp = tmp.map((el, i) => {
        //     if (i === index) {
        //         {...el, name: value}
        //     }
        // })

    }

    return (
        <div className="panduan-pengguna">
            <HeaderHomePage />

            <Jumbotron className="panduan-pengguna-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font-weight-bold text-gold">Project Submission</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <div className="container mt-5 mb-5">

                <div className="row no-gutters">
                    <div className="col-12 col-md-12">
                        <div className="row no-gutters mb-2">
                            <div style={{
                                borderBottom: '1px solid white'
                            }} className="col-12 d-flex align-items-center">
                                <p style={{
                                    fontWeight: '800',
                                    letterSpacing: "1px"
                                }} className="ci-text-white font-roboto font-18 mb-2">Project Introduction</p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 pr-2">
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Project Name</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Industry</p>
                                    </div>
                                    <div className="col-12">
                                        <Dropdown searchBar={false} />
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Project Website</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 pl-2">
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Contrat Address</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Explorer</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Source Code</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="row no-gutter mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Project Details</p>
                                    </div>
                                    <div className="col-12">
                                        <Editor
                                            toolbarStyle={{ marginBottom: "0px", paddingTop: "16px", borderRadius: "8px 8px 0 0", background: "#07081b", border: "none" }}
                                            // editorState={editorState}
                                            toolbarClassName="mt-1 pb-3"
                                            wrapperClassName="demo-wrapper"
                                            editorClassName="demo-editor"
                                            // onEditorStateChange={onEditorStateChange}
                                            editorStyle={{ background: "#aeb4ce50", padding: "18px 18px", color: "white", border: "none", height: "120px", borderRadius: "0 0 8px 8px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-12 pr-2">
                        <div className="row no-gutters mb-2">
                            <div style={{
                                borderBottom: '1px solid white'
                            }} className="col-12 d-flex align-items-center">
                                <p style={{
                                    fontWeight: '800',
                                    letterSpacing: "1px"
                                }} className="ci-text-white font-roboto font-18 mb-2">Token Detail</p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-6 pr-2">
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Name</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Symbol</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Initial Symbol</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Type</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Decimal</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Amount Asset Circulating Supply</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Currency Base</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Currency Quote</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Coin Image</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg-input ci-pd p-1">
                                            <label
                                                for="inputFile"
                                                className="mb-0 ml-4"
                                                style={{
                                                    background: "#454964",
                                                    color: "white",
                                                    padding: "5px 14px",
                                                    borderRadius: "4px",
                                                }}
                                            >
                                                Upload Image
                                            </label>
                                            <input
                                                style={{
                                                    display: "none",
                                                }}
                                                onChange={(e) => {
                                                    // imageSizeError(e.target.files[0], 1000000, () =>
                                                    // setImg(e.target.files[0])
                                                    // );
                                                }
                                                }
                                                id="inputFile"
                                                type="file"
                                                accept=".png, .jpg, .jpeg"
                                            />
                                            {/* <div className="pl-3 unggah-flex">
                                                 <span className="ci-text-white label-title font-13">
                                                    {img ? img.name : "Belum memilih file.."}
                                                 </span>
                                                 <span className="ci-text-white mb-0 font-10">
                                                 {Translate('ue_ukuran_file')}
                                                </span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 pl-2">
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Sale Start-Time</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Sale End-Time</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Supply</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Price</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Minimum Purchase Amount</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Protocol</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input type="text" className="form-control ci-inputDefault-bg-input ci-pd" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Distribution</p>
                                    </div>
                                    <div className="col-12">
                                        <Dropdown searchBar={false} />
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Distribution</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <textarea type="text" style={{
                                                resize: 'none'
                                            }} className="form-control ci-inputDefault-bg-input ci-pd" rows={4} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="row no-gutters mb-2">
                        <div style={{
                            borderBottom: '1px solid white'
                        }} className="col-12 d-flex align-items-center">
                            <p style={{
                                fontWeight: '800',
                                letterSpacing: "1px"
                            }} className="ci-text-white font-roboto font-18 mb-2 text-gold">Team</p>
                        </div>
                    </div>

                    {
                        memberDetails.map((el, index) => {
                            return <CardTeamMember key={index} removeFunc={() => removeMember(index)} onChangeMember={onChangeMember} />
                        })
                    }

                    <div className="col-12 no-gutters mt-2">
                        <div className="row mt-2">
                            <div className="col-12 d-flex justify-content-end">
                                <button
                                    onClick={() => addTeamMember()}
                                    className="ci-btn-custom-1 py-1">
                                    Add Team Member <i className="fas fa-plus ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-12">
                        <div className="row">
                            <div className="col-12 col-lg-6 pr-2">
                                <div className="row no-gutters mb-2">
                                    <div style={{
                                        borderBottom: '1px solid white'
                                    }} className="col-12 d-flex align-items-center">
                                        <p style={{
                                            fontWeight: '800',
                                            letterSpacing: "1px"
                                        }} className="ci-text-white font-roboto font-18 mb-2">Dokumen</p>
                                    </div>
                                </div>
                                <div className="input-group ci-inputDefault-bg-input ci-pd p-1 mb-2">
                                    <label
                                        for="inputFile"
                                        className="mb-0 ml-4"
                                        style={{
                                            background: "#454964",
                                            color: "white",
                                            padding: "5px 14px",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        Upload Image Whitepaper
                                    </label>
                                    <input
                                        style={{
                                            display: "none",
                                        }}
                                        onChange={(e) => {
                                            // imageSizeError(e.target.files[0], 1000000, () =>
                                            // setImg(e.target.files[0])
                                            // );
                                        }
                                        }
                                        id="inputFile"
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                    />
                                    {/* <div className="pl-3 unggah-flex">
                                            <span className="ci-text-white label-title font-13">
                                            {img ? img.name : "Belum memilih file.."}
                                            </span>
                                            <span className="ci-text-white mb-0 font-10">
                                            {Translate('ue_ukuran_file')}
                                        </span>
                                    </div> */}
                                </div>
                                <div className="input-group ci-inputDefault-bg-input ci-pd p-1 mb-2">
                                    <label
                                        for="inputFile"
                                        className="mb-0 ml-4"
                                        style={{
                                            background: "#454964",
                                            color: "white",
                                            padding: "5px 14px",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        Upload Image Presentation
                                    </label>
                                    <input
                                        style={{
                                            display: "none",
                                        }}
                                        onChange={(e) => {
                                            // imageSizeError(e.target.files[0], 1000000, () =>
                                            // setImg(e.target.files[0])
                                            // );
                                        }
                                        }
                                        id="inputFile"
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                    />
                                    {/* <div className="pl-3 unggah-flex">
                                            <span className="ci-text-white label-title font-13">
                                            {img ? img.name : "Belum memilih file.."}
                                            </span>
                                            <span className="ci-text-white mb-0 font-10">
                                            {Translate('ue_ukuran_file')}
                                        </span>
                                    </div> */}
                                </div>
                                <div className="input-group ci-inputDefault-bg-input ci-pd p-1">
                                    <label
                                        for="inputFile"
                                        className="mb-0 ml-4"
                                        style={{
                                            background: "#454964",
                                            color: "white",
                                            padding: "5px 14px",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        Upload Image Executive Summary
                                    </label>
                                    <input
                                        style={{
                                            display: "none",
                                        }}
                                        onChange={(e) => {
                                            // imageSizeError(e.target.files[0], 1000000, () =>
                                            // setImg(e.target.files[0])
                                            // );
                                        }
                                        }
                                        id="inputFile"
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                    />
                                    {/* <div className="pl-3 unggah-flex">
                                            <span className="ci-text-white label-title font-13">
                                            {img ? img.name : "Belum memilih file.."}
                                            </span>
                                            <span className="ci-text-white mb-0 font-10">
                                            {Translate('ue_ukuran_file')}
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 pl-2">
                                <div className="row no-gutters mb-2">
                                    <div style={{
                                        borderBottom: '1px solid white'
                                    }} className="col-12 d-flex align-items-center">
                                        <p style={{
                                            fontWeight: '800',
                                            letterSpacing: "1px"
                                        }} className="ci-text-white font-roboto font-18 mb-2">Social Media</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <form
                                            className="input-group ci-inputDefault-bg"
                                        >
                                            <input
                                                className="form-control ci-inputDefault-bg-input "
                                            />
                                            <div className="ci-inputDefault-bg-appendL">
                                                <i
                                                    className={
                                                        "fab fa-facebook-square ci-inputDefault-bg-appendL-icon ci-text-white"
                                                    } style={{ fontSize: '30px' }}
                                                ></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <form
                                            className="input-group ci-inputDefault-bg"
                                        >
                                            <input
                                                className="form-control ci-inputDefault-bg-input "
                                            />
                                            <div className="ci-inputDefault-bg-appendL">
                                                <i
                                                    className={
                                                        "fab fa-twitter ci-inputDefault-bg-appendL-icon ci-text-white"
                                                    } style={{ fontSize: '30px' }}
                                                ></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <form
                                            className="input-group ci-inputDefault-bg"
                                        >
                                            <input
                                                className="form-control ci-inputDefault-bg-input "
                                            />
                                            <div className="ci-inputDefault-bg-appendL">
                                                <i
                                                    className={
                                                        "fab fa-linkedin ci-inputDefault-bg-appendL-icon ci-text-white"
                                                    } style={{ fontSize: '30px' }}
                                                ></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <form
                                            className="input-group ci-inputDefault-bg"
                                        >
                                            <input
                                                className="form-control ci-inputDefault-bg-input "
                                            />
                                            <div className="ci-inputDefault-bg-appendL">
                                                <i
                                                    className={
                                                        "fab fa-telegram ci-inputDefault-bg-appendL-icon ci-text-white"
                                                    } style={{ fontSize: '30px' }}
                                                ></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <form
                                            className="input-group ci-inputDefault-bg"
                                        >
                                            <input
                                                className="form-control ci-inputDefault-bg-input "
                                            />
                                            <div className="ci-inputDefault-bg-appendL">
                                                <i
                                                    className={
                                                        "fab fa-youtube ci-inputDefault-bg-appendL-icon ci-text-white"
                                                    } style={{ fontSize: '30px', }}
                                                ></i>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <button className="ci-btn-warning w-100 py-1">Submit</button>
                    </div>
                </div>
            </div>

            <FooterHomePage />
        </div>
    )
}

export default LaunchpadPorto
