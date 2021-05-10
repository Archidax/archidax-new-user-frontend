import React from 'react'

// Import Images
import BTCIcons from '../../assets/img/feelogo/Bitcoin_BTC.svg'
import ETHIcons from '../../assets/img/feelogo/Ethereum_ETH.svg'
import BNBIcons from '../../assets/img/feelogo/Binance_BNB.svg'
import TRXIcons from '../../assets/img/feelogo/Tron_TRX.svg'
import AAVEIcons from '../../assets/img/feelogo/Aave_AAVE.svg'
import AOAIcons from '../../assets/img/feelogo/Aurora_AOA.svg'
import COTIIcons from '../../assets/img/feelogo/Coti_COTI.svg'
import UNIIcons from '../../assets/img/feelogo/Uniswap_UNI.svg'
import XLMIcons from '../../assets/img/feelogo/Stellar_XLM.svg'
import USDTIcons from '../../assets/img/feelogo/Tether_USDT.svg'
import CGOLDIcons from '../../assets/img/feelogo/Cgold_CGOLD.svg'
import WAVESIcons from '../../assets/img/feelogo/Waves_WAVES.svg'
import SUSHIIcons from '../../assets/img/feelogo/Sushi_SUSHI.svg'
import LINKIcons from '../../assets/img/feelogo/Chainlink_LINK.svg'
import LTCIcons from '../../assets/img/feelogo/Litecoin_LTC.svg'

function DropdownList({className}) {
    const Coins = [
        {_value: "Bitcoin", icons: BTCIcons, nameCoin: "Beli BTC (Bitcoin)", id: "beliBTC-crypto-list", href: "#beliBTC-crypto"},
        {_value: "Ethereum", icons: ETHIcons, nameCoin: "Beli ETH (Ethereum)", id: "beliETH-crypto-list", href: "#beliETH-crypto"},
        {_value: "Binance", icons: BNBIcons, nameCoin: "Beli BNB (Binance)", id: "beliBNB-crypto-list", href: "#beliBNB-crypto"},
        {_value: "Tron", icons: TRXIcons, nameCoin: "Beli TRX (Tron)", id: "beliTRX-crypto-list", href: "#beliTRX-crypto"},
        {_value: "Aave", icons: AAVEIcons, nameCoin: "Beli AAVE (Aave)", id: "beliAAVE-crypto-list", href: "#beliAAVE-crypto"},
        {_value: "Bitcoin", icons: AOAIcons, nameCoin: "Beli AOA (Aurora)", id: "beliAOA-crypto-list", href: "#beliAOA-crypto"},
        {_value: "Bitcoin", icons: COTIIcons, nameCoin: "Beli COTI (Coti)", id: "beliCOTI-crypto-list", href: "#beliCOTI-crypto"},
        {_value: "Bitcoin", icons: UNIIcons, nameCoin: "Beli UNI (Uniswap)", id: "beliUNI-crypto-list", href: "#beliUNI-crypto"},
        {_value: "Bitcoin", icons: XLMIcons, nameCoin: "Beli XLM (Stellar)", id: "beliXLM-crypto-list", href: "#beliXLM-crypto"},
        {_value: "Bitcoin", icons: USDTIcons, nameCoin: "Beli USDT (Tether)", id: "beliUSDT-crypto-list", href: "#beliUSDT-crypto"},
        {_value: "Bitcoin", icons: CGOLDIcons, nameCoin: "Beli CGOLD (Codeo Gold)", id: "beliCGOLD-crypto-list", href: "#beliCGOLD-crypto"},
        {_value: "Bitcoin", icons: WAVESIcons, nameCoin: "Beli WAVES (Waves)", id: "beliWAVES-crypto-list", href: "#beliWAVES-crypto"},
        {_value: "Bitcoin", icons: SUSHIIcons, nameCoin: "Beli SUSHI (Sushi)", id: "beliSUSHI-crypto-list", href: "#beliSUSHI-crypto"},
        {_value: "Bitcoin", icons: LINKIcons, nameCoin: "Beli LINK (Link)", id: "beliLINK-crypto-list", href: "#beliLINK-crypto"},
        {_value: "Bitcoin", icons: LTCIcons, nameCoin: "Beli LTC (Litecoin)", id: "beliLTC-crypto-list", href: "#beliLTC-crypto"},
    ]
    
    const [title, setTitle] = React.useState({nameCoin: "", icons: ""})

    return (
        <div className={`col-12 col-md-4 ${className}`}>
            <div className={`dropdown ci-dropdown font-12`}>
                <button 
                    className="ci-dropdown-btn d-flex justify-content-between align-items-center ci-md w-100 py-2" type="button" id="dropdownRiwayatTarikCrypto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{overflow: "hidden"}}
                >
                    {
                        !title.icons && !title.nameCoin ? 
                            <>
                                <span>Pilih Coin</span>
                                <i class="fas fa-sort-down"></i>
                            </>
                        :
                            <>
                                <img src={title.icons ? title.icons : ""} className="img-fluid" width={30} alt="..."/>
                                <span className="font-14 font-weight-bold">{title.nameCoin ? title.nameCoin : "Pilih Coin"}</span>
                                <i class="fas fa-sort-down"></i>
                            </>
                    }
                </button>
                <div className="ci-dropdown-menu dropdown-menu w-100 py-0" aria-labelledby="dropdownRiwayatTarikCrypto">
                    <div className="list-group" id="list-tab" role="tablist" style={{height: "240px", overflowY: "auto"}}>
                        {Coins && Coins.map(option => {
                            return(
                                <a className={`list-group-item list-group-item-action ci-list-panduan d-flex justify-content-between align-items-center`} id={option.id} data-toggle="list" href={option.href} role="tab" onClick={() => {
                                    setTitle({nameCoin: option.nameCoin, icons: option.icons})
                                }}>
                                    <img src={option.icons} className="img-fluid" width={30} alt="..."/>
                                    <span>{option.nameCoin}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownList
