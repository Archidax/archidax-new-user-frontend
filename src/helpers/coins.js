// Icons
import BNBCoin from '../assets/img/trade/cryptologo/Binance_BNB.svg'
import BTCCoin from '../assets/img/trade/cryptologo/Bitcoin_BTC.svg'
// import BTTCoin from '../assets/img/trade/cryptologo/Bittorent_BTT.svg'
import BATCoin from '../assets/img/trade/cryptologo/Basic_BAT.svg'
// import ADACoin from '../assets/img/trade/cryptologo/Aave_AAVE.svg'
import AOACoin from '../assets/img/trade/cryptologo/Aurora_AOA.svg'
import AAVECoin from '../assets/img/trade/cryptologo/Aave_AAVE.svg'
import CGOLDCoin from '../assets/img/trade/cryptologo/Cgold_CGOLD.svg'
// import DOGECoin from '../assets/img/trade/cryptologo/Aave_AAVE.svg'
import ETHCoin from '../assets/img/trade/cryptologo/Ethereum_ETH.svg'
import LTCCoin from '../assets/img/trade/cryptologo/Litecoin_LTC.svg'
// import MONEROCoin from '../assets/img/trade/cryptologo/Aave_AAVE.svg'
import USDTCoin from '../assets/img/trade/cryptologo/Tether_USDT.svg'
import SUSHICoin from '../assets/img/trade/cryptologo/Sushi_SUSHI.svg'
import TRXCoin from '../assets/img/trade/cryptologo/Tron_TRX.svg'
import UNICoin from '../assets/img/trade/cryptologo/Uniswap_UNI.svg'
import WAVESCoin from '../assets/img/trade/cryptologo/Waves_WAVES.svg'
import XLMCoin from '../assets/img/trade/cryptologo/Stellar_XLM.svg'
import COTICoin from '../assets/img/trade/cryptologo/Coti_COTI.svg'

export const coins = [
    { name: "Aave SAGL", abbr: "AAVE", icon: AAVECoin, alias: "aave" },
    { name: "Aurora", abbr: "AOA", icon: AOACoin, alias: "aurora" },
    { name: "BAT", abbr: "BAT", icon: BATCoin, alias: "basic-attention-token" },
    { name: "Binance", abbr: "BNB", icon: BNBCoin, alias: "binancecoin" },
    { name: "Bitcoin", abbr: "BTC", icon: BTCCoin, alias: "bitcoin" },
    { name: "Codeo Gold", abbr: "CGOLD", icon: CGOLDCoin, alias: "cgold" },
    { name: "COTI", abbr: "COTI", icon: COTICoin, alias: "coti" },
    { name: "Ethereum", abbr: "ETH", icon: ETHCoin, alias: "ethereum" },
    { name: "SushiSwap", abbr: "SUSHI", icon: SUSHICoin, alias: "sushi" },
    { name: "Litecoin", abbr: "LTC", icon: LTCCoin, alias: "litecoin" },
    { name: "Tron", abbr: "TRX", icon: TRXCoin, alias: "tron" },
    { name: "Uniswap", abbr: "UNI", icon: UNICoin, alias: "uni" },
    { name: "Tether", abbr: "USDT", icon: USDTCoin, alias: "tether" },
    { name: "WAVES", abbr: "WAVES", icon: WAVESCoin, alias: "waves" },
    { name: "Stellar Lumen", abbr: "XLM", icon: XLMCoin, alias: "stellar" },
]

export const getCoinIcon = (coinCode) => {
    const found = coins.find(coin => coin.abbr === coinCode.toUpperCase())
    if (found) {
        return found.icon
    } else {
        return BTCCoin
    }
}

export const getCoinName = (coinCode) => {
    const found = coins.find(coin => coin.abbr === coinCode.toUpperCase())
    if (found) {
        return found.name
    } else {
        return "Not listed"
    }
}