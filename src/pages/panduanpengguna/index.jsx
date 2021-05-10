import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'

// Import Content
import MemahamiApaituCrypto from './content/MemahamiApaituCrypto'
import KeuntunganCrypto from './content/KeuntunganCrypto'
import PersiapanTrading from './content/PersiapanTrading'
import MariMemulai from './content/MariMemulai'
import MengaktifkanGoogleAuthenticator from './content/MengaktifkanGoogleAuthenticator'
import DepositdanPenarikanRupiah from './content/DepositdanPenarikanRupiah'
import DepositdanPenarikanKripto from './content/DepositdanPenarikanKripto'
import MetodeInstanLimit from './content/MetodeInstanLimit'

// Import Components
import NavListPanduan from './NavList'
import DropdownListPanduan from './DropdownList'
import HelpNav from './HelpNav'

function PanduanPengguna() {
    return (
        <div className="panduan-pengguna">
            <HeaderHomePage />
            
            <Jumbotron className="panduan-pengguna-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font-weight-bold text-gold">Panduan Pemula</h1>
                        </div>
                        <div className="col-12">
                            <p>
                                Pelajari tentang Cryptocurrency dan Tips Perdagangan
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <div className="container mt-3 mb-4">

                <div className="row">
                    <DropdownListPanduan className="d-block d-md-none"/>

                    <div className="col-12 col-md-8">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="memahami-cypto" role="tabpanel" aria-labelledby="memahami-crypto">
                                <MemahamiApaituCrypto />
                            </div>
                            <div className="tab-pane fade" id="keuntungan-atau-benefit-crypto" role="tabpanel" aria-labelledby="keuntungan-atau-benefit-crypto-list">
                                <KeuntunganCrypto />
                            </div>
                            <div className="tab-pane fade" id="mari-memulai" role="tabpanel" aria-labelledby="mari-memulai-list">
                                <MariMemulai />
                            </div>
                            <div className="tab-pane fade" id="persiapan-trading" role="tabpanel" aria-labelledby="persiapan-trading-list">
                                <PersiapanTrading />
                            </div>
                            <div className="tab-pane fade" id="mengaktifkan-google-auth" role="tabpanel" aria-labelledby="mengaktifkan-google-auth-list">
                                <MengaktifkanGoogleAuthenticator />
                            </div>
                            <div className="tab-pane fade" id="cara-deposit-dan-penarikan" role="tabpanel" aria-labelledby="cara-deposit-dan-penarikan-list">
                                <DepositdanPenarikanRupiah />
                            </div>
                            <div className="tab-pane fade" id="cara-deposit-dan-penarikan-kripto" role="tabpanel" aria-labelledby="cara-deposit-dan-penarikan-kripto-list">
                                <DepositdanPenarikanKripto />
                            </div>
                            <div className="tab-pane fade" id="metode-instan-limit" role="tabpanel" aria-labelledby="metode-instan-limit-list">
                                <MetodeInstanLimit />
                            </div>
                        </div>
                    </div>

                    <NavListPanduan className="d-none d-md-block"/>
                    <HelpNav className="d-block d-md-none"/>
                </div>

            </div>

            <FooterHomePage />
        </div>
    )
}

export default PanduanPengguna
