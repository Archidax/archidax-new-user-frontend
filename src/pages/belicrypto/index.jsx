import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage'
import HeaderHomePage from '../../components/headerComponents/headerHomePage'

// Import Component
import DropdownList from './DropdownList'

// Import Content
import BeliBTCCrypto from './content/BeliBTCCrypto'
import BeliBNBCrypto from './content/BeliBNBCrypto'
import BeliETHCrypto from './content/BeliETHCrypto'
import BeliLTCCrypto from './content/BeliLTCCrypto'
import BeliTRXCrypto from './content/BeliTRXCrypto'
import BeliSUSHISWABCrypto from './content/BeliSUSHISWABCrypto'
import BeliChainlinkCrypto from './content/BeliChainlinkCrypto'
import BeliAAVECrypto from './content/BeliAAVECrypto'
import BeliAOACrypto from './content/BeliAOACrypto'
import BeliCOTICrypto from './content/BeliCOTICrypto'
import BeliUNICrypto from './content/BeliUNICrypto'
import BeliXLMCrypto from './content/BeliXLMCrypto'
import BeliUSDTCrypto from './content/BeliUSDTCrypto'
import BeliCGOLDCrypto from './content/BeliCGOLDCrypto'
import BeliWAVESCrypto from './content/BeliWAVESCrypto'

// Import Images
import NavList from './NavList'

function BeliCrypto() {
    return (
        <div className="belikriptos">
            <HeaderHomePage />
            
            <Jumbotron className="belikripto">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font-weight-bold text-gold">Beli Crypto</h1>
                        </div>
                        <div className="col-12">
                            <p>
                                Beli Crypto di Cryptoindex
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <div className="container mt-3 mb-4">

                <div className="row">
                    {/* <NavList className="d-block d-md-none"/> */}
                    <DropdownList className="d-block d-md-none"/>

                    <div className="col-12 col-md-8 mt-4 mt-md-0">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="beliBTC-crypto" role="tabpanel" aria-labelledby="beliBTC-crypto-list">
                                <BeliBTCCrypto />
                            </div>
                            <div className="tab-pane fade" id="beliETH-crypto" role="tabpanel" aria-labelledby="beliETH-crypto-list">
                                <BeliETHCrypto />
                            </div>
                            <div className="tab-pane fade" id="beliBNB-crypto" role="tabpanel" aria-labelledby="beliBNB-crypto-list">
                                <BeliBNBCrypto />
                            </div>
                            <div className="tab-pane fade" id="beliTRX-crypto" role="tabpanel" aria-labelledby="beliTRX-crypto-list">
                                <BeliTRXCrypto />
                            </div>
                            {/* <div className="tab-pane fade" id="beliDOGE-crypto" role="tabpanel" aria-labelledby="beliDOGE-crypto-list">
                                4
                            </div> */}
                            <div className="tab-pane fade" id="beliAAVE-crypto" role="tabpanel" aria-labelledby="beliAAVE-crypto-list">
                                <BeliAAVECrypto />
                            </div>
                            <div className="tab-pane fade" id="beliAOA-crypto" role="tabpanel" aria-labelledby="beliAOA-crypto-list">
                                <BeliAOACrypto />
                            </div>
                            <div className="tab-pane fade" id="beliCOTI-crypto" role="tabpanel" aria-labelledby="beliCOTI-crypto-list">
                                <BeliCOTICrypto />
                            </div>
                            <div className="tab-pane fade" id="beliUNI-crypto" role="tabpanel" aria-labelledby="beliUNI-crypto-list">
                                <BeliUNICrypto />
                            </div>
                            <div className="tab-pane fade" id="beliXLM-crypto" role="tabpanel" aria-labelledby="beliXLM-crypto-list">
                                <BeliXLMCrypto />
                            </div>
                            <div className="tab-pane fade" id="beliUSDT-crypto" role="tabpanel" aria-labelledby="beliUSDT-crypto-list">
                                <BeliUSDTCrypto />
                            </div>
                            <div className="tab-pane fade" id="beliCGOLD-crypto" role="tabpanel" aria-labelledby="beliCGOLD-crypto-list">
                                <BeliCGOLDCrypto />
                            </div>
                            <div className="tab-pane fade" id="beliWAVES-crypto" role="tabpanel" aria-labelledby="beliWAVES-crypto-list">
                                <BeliWAVESCrypto />
                            </div>
                            <div className="tab-pane fade" id="beliSUSHI-crypto" role="tabpanel" aria-labelledby="beliSUSHI-crypto-list">
                                <BeliSUSHISWABCrypto />
                            </div>
                            <div className="tab-pane fade" id="beliLINK-crypto" role="tabpanel" aria-labelledby="beliLINK-crypto-list">
                                <BeliChainlinkCrypto />
                            </div>
                            <div className="tab-pane fade" id="beliLTC-crypto" role="tabpanel" aria-labelledby="beliLTC-crypto-list">
                                <BeliLTCCrypto />
                            </div>
                        </div>
                    </div>

                    <NavList className="d-none d-md-block"/>
                </div>

            </div>

            <FooterHomePage />
        </div>
    )
}

export default BeliCrypto
