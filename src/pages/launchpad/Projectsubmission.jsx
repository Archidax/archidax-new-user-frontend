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
import Dropdown from '../../components/dropdown'

import { industries, protocols } from '../../assets/launchpad'
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
    const [tokenCurrencyQuote, setTokenCurrencyQuote] = useState("")
    const [tokenDistribution, setTokenDistribution] = useState(0)
    const [tokenCoinImage, setTokenCoinImage] = useState(null)

    const submitNewCoin = () => {
        const description = draftToHtml(
            convertToRaw(editorState.getCurrentContent())
        )

        // Forming data
        const data = new FormData()

        // project
        data.append('project_name', projectName)
        data.append('industry', projectIndustry)
        data.append('project_website', projectWebsite)
        data.append('contract_address', projectContact)
        data.append('explorer', projectExplorer)
        data.append('source_code', projectSourceCode)
        data.append('project_detail', description)

        //token
        data.append('assetName', tokenName)
        data.append('symbol', tokenSymbol)
        data.append('initialSymbol', tokenInitialSymbol)
        data.append('type', tokenType)
        data.append('decimal', tokenDecimal)
        data.append('amount_circulating_supply', tokenAmountCircSupply)
        data.append('currency_base', tokenCurrencyBase)
        data.append('currency_quote', tokenCurrencyQuote)
        data.append('start_sale_time', tokenSaleStartTime)
        data.append('end_sale_time', tokenSaleEndTime)
        data.append('token_supply', tokenSupply)
        data.append('token_price', tokenPrice)
        data.append('minimum_purchase_amount', tokenMinimumPurchaseAmount)
        data.append('token_protocol', tokenProtokol)
        data.append('token_distribution', tokenDistribution)
        data.append('files', tokenCoinImage)

        // // dokumen
        data.append('files', documentWhitepaper)
        data.append('files', documentImagePresentation)
        data.append('files', documentExecutiveSummary)

        // social 
        data.append('facebook', smFacebook)
        data.append('twitter', smTwitter)
        data.append('linkedin', smLinkedin)
        data.append('telegram', smTelegram)
        data.append('youtube', smYoutube)
        // data.append('official_website', description)

        // Actions redux
        launchNewProject(data)
    }


    // Team
    const [memberDetails, setMemberDetails] = useState([{
        memberName: "",
        position: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        photo: null
    }])

    const addTeamMember = () => {
        let form = {
            memberName: "",
            position: "",
            facebook: "",
            twitter: "",
            linkedin: "",
            photo: null
        }
        setMemberDetails([...memberDetails, form])
    }

    const removeMember = (index) => {
        let members = [...memberDetails]
        members.splice(index, 1)
        setMemberDetails(members)
    }

    // Dokumen
    const [documentWhitepaper, setDocumentWhitepaper] = useState(null)
    const [documentImagePresentation, setDocomentImagePresentation] = useState(null)
    const [documentExecutiveSummary, setDocumentExecutiveSummary] = useState(null)

    // Social Media
    const [smFacebook, setSmFacebook] = useState("")
    const [smTwitter, setSmTwitter] = useState("")
    const [smLinkedin, setSmLinkedin] = useState("")
    const [smTelegram, setSmTelegram] = useState("")
    const [smYoutube, setSmYoutube] = useState("")

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
                        <form enctype="multipart/form-data">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 pr-2">
                                    <div className="row no-gutters mb-2">
                                        <div className="col-12 d-flex align-items-center">
                                            <p className="ci-text-white mb-0 label-title">Project Name</p>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group ci-inputDefault-bg">
                                                <input
                                                    type="text"
                                                    className="form-control ci-inputDefault-bg-input ci-pd"
                                                    onChange={(e) => setProjectName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-12 d-flex align-items-center">
                                            <p className="ci-text-white mb-0 label-title">Industry</p>
                                        </div>
                                        <div className="col-12">
                                            <Dropdown
                                                searchBar={false}
                                                dataOptions={industries}
                                                value={projectIndustry}
                                                onChange={setProjectIndustry}
                                                classDropdown="text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-12 d-flex align-items-center">
                                            <p className="ci-text-white mb-0 label-title">Project Website</p>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group ci-inputDefault-bg">
                                                <input
                                                    type="text"
                                                    className="form-control ci-inputDefault-bg-input ci-pd"
                                                    onChange={(e) => setProjectWebsite(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 pl-2">
                                    <div className="row no-gutters mb-2">
                                        <div className="col-12 d-flex align-items-center">
                                            <p className="ci-text-white mb-0 label-title">Contract Address</p>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group ci-inputDefault-bg">
                                                <input
                                                    type="text"
                                                    className="form-control ci-inputDefault-bg-input ci-pd"
                                                    onChange={(e) => setProjectContact(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-12 d-flex align-items-center">
                                            <p className="ci-text-white mb-0 label-title">Explorer</p>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group ci-inputDefault-bg">
                                                <input
                                                    type="text"
                                                    className="form-control ci-inputDefault-bg-input ci-pd"
                                                    onChange={(e) => setProjectExplorer(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-12 d-flex align-items-center">
                                            <p className="ci-text-white mb-0 label-title">Source Code</p>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group ci-inputDefault-bg">
                                                <input
                                                    type="text"
                                                    className="form-control ci-inputDefault-bg-input ci-pd"
                                                    onChange={(e) => setProjectSourceCode(e.target.value)}
                                                />
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
                                                editorState={editorState}
                                                toolbarClassName="mt-1 pb-3"
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor"
                                                onEditorStateChange={onEditorStateChange}
                                                editorStyle={{ background: "#aeb4ce50", padding: "18px 18px", color: "white", border: "none", height: "120px", borderRadius: "0 0 8px 8px" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
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
                                            <input
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Symbol</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenSymbol(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Initial Symbol</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenInitialSymbol(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Type</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenType(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Decimal</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="number"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenDecimal(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Amount Asset Circulating Supply</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="number"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenAmountCircSupply(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Currency Base</p>
                                    </div>
                                    <div className="col-12">
<<<<<<< HEAD
                                        <Dropdown dataOptions={['BTC', 'USDT']}  searchBar={false} />
=======
                                        <Dropdown
                                            searchBar={false}
                                            dataOptions={["USDT", "BTC"]}
                                            value={tokenCurrencyBase}
                                            onChange={setTokenCurrencyBase}
                                            classDropdown="text-white"
                                        />
>>>>>>> launchpad
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Currency Quote</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenCurrencyQuote(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Coin Image</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg-input ci-pd p-1">
                                            <input
                                                onChange={(e) => {
                                                    setTokenCoinImage(e.target.files[0])
                                                }
                                                }
                                                id="inputFile"
                                                type="file"
                                                accept=".png, .jpg, .jpeg"
                                            />
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
                                            <input
                                                type="datetime-local"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenSaleStartTime(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Sale End-Time</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="datetime-local"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenSaleEndTime(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Supply</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="number"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenSupply(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Price</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="number"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenPrice(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Minimum Purchase Amount</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg">
                                            <input
                                                type="number"
                                                className="form-control ci-inputDefault-bg-input ci-pd"
                                                onChange={(e) => setTokenMinimumPurchaseAmount(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Protocol</p>
                                    </div>
                                    <div className="col-12">
                                        <Dropdown
                                            searchBar={false}
                                            dataOptions={protocols}
                                            value={tokenProtokol}
                                            onChange={setTokenProtokol}
                                            classDropdown="text-white"
                                        />
                                    </div>
                                </div>
                                {/* <div className="row no-gutters mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Token Distribution</p>
                                    </div>
                                    <div className="col-12">
                                        <Dropdown searchBar={false} />
                                    </div>
                                </div> */}
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
                            return <CardTeamMember
                                key={index}
                                removeFunc={() => removeMember(index)}
                                memberDetails={memberDetails}
                                setMemberDetails={setMemberDetails}
                                index={index}
                                data={el}
                            />
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
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Whitepaper</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg-input ci-pd p-1">
                                            <input
                                                onChange={(e) => {
                                                    setDocumentWhitepaper(e.target.files[0])
                                                }
                                                }
                                                id="inputFile"
                                                type="file"
                                                accept=".pdf"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group ci-inputDefault-bg-input ci-pd p-1 mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Presentation</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg-input ci-pd p-1">
                                            <input
                                                onChange={(e) => {
                                                    setDocomentImagePresentation(e.target.files[0])
                                                }
                                                }
                                                id="inputFile"
                                                type="file"
                                                accept=".pdf, .ppt, .pptx"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group ci-inputDefault-bg-input ci-pd p-1 mb-2">
                                    <div className="col-12 d-flex align-items-center">
                                        <p className="ci-text-white mb-0 label-title">Executive Summary</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group ci-inputDefault-bg-input ci-pd p-1">
                                            <input
                                                onChange={(e) => {
                                                    setDocumentExecutiveSummary(e.target.files[0])
                                                }
                                                }
                                                id="inputFile"
                                                type="file"
                                                accept=".pdf"
                                            />
                                        </div>
                                    </div>
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
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input "
                                                onChange={(e) => setSmFacebook(e.target.value)}
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
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input "
                                                onChange={(e) => setSmTwitter(e.target.value)}
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
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input "
                                                onChange={(e) => setSmLinkedin(e.target.value)}
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
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input "
                                                onChange={(e) => setSmTelegram(e.target.value)}

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
                                                type="text"
                                                className="form-control ci-inputDefault-bg-input "
                                                onChange={(e) => setSmYoutube(e.target.value)}
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
                        <button className="ci-btn-warning w-100 py-1"
                            onClick={() => submitNewCoin()}
                        >Submit</button>
                    </div>
                </div>
            </div>

            <FooterHomePage />
        </div>
    )
}

export default LaunchpadPorto
