import React, { useRef, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { baseUrlTrade } from '../../stores'
import axios from 'axios'

function CardTeamMember({ key, removeFunc, memberDetails, data, index, setMemberDetails }) {
    const [preview, setPreview] = useState("")
    return (
        <div className="col-12 col-xl-12 mb-2">
            <form enctype="multipart/form-data">
                <div className="row no-gutters p-2 border rounded">
                    <div className="col-12 col-lg-6 pr-2">
                        <div className="row no-gutters mb-2">
                            <div className="col-12 d-flex align-items-center">
                                <p className="ci-text-white mb-0 label-title">Name</p>
                            </div>
                            <div className="col-12">
                                <div className="input-group ci-inputDefault-bg">
                                    <input type="text"
                                        className="form-control ci-inputDefault-bg-input ci-pd"
                                        onChange={(e) => {
                                            var tmp = [...memberDetails]
                                            tmp[index].memberName = e.target.value
                                            setMemberDetails(tmp)
                                        }}
                                        value={data.memberName}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters mb-2">
                            <div className="col-12 d-flex align-items-center">
                                <p className="ci-text-white mb-0 label-title">Social Media</p>
                            </div>
                            <div className="col-12 mb-2">
                                <form
                                    className="input-group ci-inputDefault-bg"
                                >
                                    <input
                                        type="text"
                                        className="form-control ci-inputDefault-bg-input"
                                        onChange={(e) => {
                                            var tmp = [...memberDetails]
                                            tmp[index].facebook = e.target.value
                                            setMemberDetails(tmp)
                                        }}
                                        value={data.facebook}
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
                                <form className="input-group ci-inputDefault-bg">
                                    <input
                                        type="text"
                                        className="form-control ci-inputDefault-bg-input "
                                        onChange={(e) => {
                                            var tmp = [...memberDetails]
                                            tmp[index].twitter = e.target.value
                                            setMemberDetails(tmp)
                                        }}
                                        value={data.twitter}
                                    />
                                    <div className="ci-inputDefault-bg-appendL">
                                        <i className={"fab fa-twitter ci-inputDefault-bg-appendL-icon ci-text-white"} style={{ fontSize: '30px' }}
                                        ></i>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12">
                                <form className="input-group ci-inputDefault-bg" >
                                    <input
                                        type="text"
                                        className="form-control ci-inputDefault-bg-input "
                                        onChange={(e) => {
                                            var tmp = [...memberDetails]
                                            tmp[index].linkedin = e.target.value
                                            setMemberDetails(tmp)
                                        }}
                                        value={data.linkedin}
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
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 pl-2">
                        <div className="col-12 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">Position</p>
                        </div>
                        <div className="col-12">
                            <div className="input-group ci-inputDefault-bg">
                                <input type="text" className="form-control ci-inputDefault-bg-input ci-pd"
                                    onChange={(e) => {
                                        var tmp = [...memberDetails]
                                        tmp[index].position = e.target.value
                                        setMemberDetails(tmp)
                                    }}
                                    value={data.position}
                                />
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center">
                            <p className="ci-text-white mb-0 label-title">Photo</p>
                        </div>
                        <div className="col-12">
                            <div className="input-group ci-inputDefault-bg-input ci-pd p-1">
                                <input
                                    id="inputFile"
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    onChange={(e) => {
                                        let data = new FormData()
                                        data.append('file', e.target.files[0])
                                        axios({
                                            url: `${baseUrlTrade}/api/v1/launchpad/IEO/uploadfile`,
                                            method: "POST",
                                            'Content-Type': 'multipart/form-data',
                                            data: data
                                        })
                                            .then(({ data }) => {
                                                console.log(data)
                                                var tmp = [...memberDetails]
                                                tmp[index].photo = data.url
                                                setMemberDetails(tmp)
                                                setPreview(data.url)
                                                console.log(memberDetails, "<<<")
                                            })
                                            .catch(err => {
                                                console.log(err)
                                            })
                                    }}
                                />
                            </div>
                        </div>
                        {
                            preview && (
                                <div>
                                    <img alt="preview" src={preview} className="w-50 m-2 p-3" />
                                </div>
                            )
                        }
                        <div className="col-12 d-flex align-items-end flex-column justify-content-end" style={{ height: '100px' }}>
                            <button className="ci-btn-custom-1 py-1"
                                disabled={memberDetails.length === 1 ? true : false}
                                onClick={() => removeFunc(key)}
                            >
                                Remove Team Member <i className="fas fa-trash-alt ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CardTeamMember
