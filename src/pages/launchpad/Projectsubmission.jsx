import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'

// Import Content
// import MemahamiApaituCrypto from './content/MemahamiApaituCrypto'
// import KeuntunganCrypto from './content/KeuntunganCrypto'
// import PersiapanTrading from './content/PersiapanTrading'
// import MariMemulai from './content/MariMemulai'
// import MengaktifkanGoogleAuthenticator from './content/MengaktifkanGoogleAuthenticator'
// import DepositdanPenarikanRupiah from './content/DepositdanPenarikanRupiah'
// import DepositdanPenarikanKripto from './content/DepositdanPenarikanKripto'
// import MetodeInstanLimit from './content/MetodeInstanLimit'

// Import Components
// import NavListPanduan from './NavList'
// import DropdownListPanduan from './DropdownList'
// import HelpNav from './HelpNav'

import fb_grey from '../../assets/img/launchpad/fb_grey.svg'
import twitter_grey from '../../assets/img/launchpad/twitter_grey.svg'
import linkedin_grey from '../../assets/img/launchpad/linkedin_grey.svg'
import fbwarna from '../../assets/img/launchpad/facebook-warna.svg'
import twitterwarna from '../../assets/img/launchpad/twitter-warna.svg'
import linkedinwarna from '../../assets/img/launchpad/linkedin-warna.svg'
import telegramwarna from '../../assets/img/launchpad/telegram-warna.svg'
import youtubewarna from '../../assets/img/launchpad/youtube-warna.svg'
import dokumen from '../../assets/img/launchpad/dokumen.svg'

function LaunchpadPorto() {
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
                    <div className="col-12 col-xl-6 MARTIN">
                       
                    </div>
                    <div className="col-12 col-xl-6 TATAG">
                       
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-12 col-xl-12 AMEL">
                       
                    </div>
                </div>
            </div>

            <FooterHomePage />
        </div>
    )
}

export default LaunchpadPorto
