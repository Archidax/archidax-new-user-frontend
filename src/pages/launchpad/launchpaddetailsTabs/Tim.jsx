import React from 'react'
import fb_grey from '../../../assets/img/launchpad/fb_grey.svg'
import twitter_grey from '../../../assets/img/launchpad/twitter_grey.svg'
import linkedin_grey from '../../../assets/img/launchpad/linkedin_grey.svg'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

function Tim() {
    const history = useHistory()
    const data = useSelector(state => state.launchpadReducer.IEODetails)

    return (
        <div className="container-fluid">
            <div className="row no-gutters">
                {
                    data && (
                        data.team.map((val, index) => {

                            return <div key={index} className="col-3 d-flex flex-column justify-content-start align-items-center mb-5">
                                <img style={{
                                    height: "120px",
                                    width: "120px",
                                    borderRadius: "100%"
                                }} src={val.photo} />
                                <p className="text-white mb-0 mt-2">{val.memberName}</p>
                                <p className="text-white mb-0">{val.position}</p>
                                <div className="d-flex justify-content-around mt-2">
                                    <a href="#" style={{
                                        height: '20px',
                                        width: '20px'
                                    }} className="mr-2">
                                        <img style={{
                                            height: '20px',
                                            width: '20px',
                                            verticalAlign: 'top'
                                        }} src={fb_grey} 
                                        />
                                    </a>
                                    <a href={val.twitter} style={{
                                        height: '20px',
                                        width: '20px'
                                    }}>
                                        <img style={{
                                            height: '20px',
                                            width: '20px',
                                            verticalAlign: 'top'
                                        }} src={twitter_grey} />
                                    </a>
                                    <a href="#" style={{
                                        height: '20px',
                                        width: '20px'
                                    }} className="ml-2">
                                        <img style={{
                                            height: '20px',
                                            width: '20px',
                                            verticalAlign: 'top'
                                        }} src={linkedin_grey} />
                                    </a>
                                </div>
                            </div>
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Tim
