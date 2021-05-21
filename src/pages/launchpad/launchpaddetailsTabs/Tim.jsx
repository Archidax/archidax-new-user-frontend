import React from 'react'

function Tim() {
    const teams = [
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
        {
            img: 'https://picsum.photos/200',
            name: "agus salim",
            job: 'ceo',
            linkin: '',
            fb: "",
            twitter: ""
        },
    ]
    
    return (
        <div className="container-fluid">
            <p className="text-white mb-4 font-roboto font-18">Tim</p>
            <div className="row no-gutters">
                {
                    teams.map((val, index) => {

                        return <div key={index} className="col-3 d-flex flex-column justify-content-start align-items-center mb-5">
                            <img style={{
                                height: "120px",
                                width: "120px",
                                borderRadius: "100%"
                            }} src={val.img} />
                            <p className="text-white mb-0 mt-2">{val.name}</p>
                            <p className="text-white mb-0">{val.job}</p>
                            <div className="d-flex justify-content-around mt-2">
                                <div style={{
                                    backgroundColor: 'grey',
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '5px'
                                }} className="mr-2">

                                </div>
                                <div style={{
                                    backgroundColor: 'grey',
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '5px'
                                }}>

                                </div>
                                <div style={{
                                    backgroundColor: 'grey',
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '5px'
                                }} className="ml-2">

                                </div>
                            </div>
                        </div>
                    } )
                }
            </div>
        </div>
    )
}

export default Tim
