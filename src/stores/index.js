import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createClient } from '@supabase/supabase-js'

// Axios
import axios from 'axios';
import { reduxSoldierMiddleware } from 'redux-soldier';
import { Provider } from 'react-redux';

// Reducer
import userReducer from './auth'
import pasarTradingReducer from "./pasartrading/index";
import walletReducer from "./wallet";
import profileReducer from "./profile"
import kycReducer from "./kyc"
import beritaReducer from "./berita"
import loadingReducer from "./loading"
import setorRupiahReducer from "./setorrupiah"
import tarikReducer from './tarikrupiah'
import voucherReducer from './voucher'
import keamananReducer from './keamanan'
import notificationReducer from './notification'
import setorCryptoReducer from './setorcrypto'
import riwayatReducer from './riwayat'
import tarikCryptoReducer from './tarikcrypto'
import affiliasiReducer from './affiliasi'
import daynightReducer from './daynight'
import launchpadReducer from './launchpad'

const supabaseUrl = 'https://wmxeonvmtnxajofwqpcb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTkyNDQ4MCwiZXhwIjoxOTM3NTAwNDgwfQ.nx_o1P4GYwrChkA77SS0uOfdQkiDM3mGVE2h6UoT2_E"
export const supabase = createClient(supabaseUrl, supabaseKey)

// Function
export * from './auth/functions';
export * from './profile/functions';
export * from './pasartrading/functions';
export * from './kyc/functions';
export * from './loading/functions';
export * from './setorrupiah/functions';
export * from './tarikrupiah/functions';
export * from './voucher/functions';
export * from './wallet/functions'
export * from './keamanan/functions'
export * from './notification/functions'
export * from './setorcrypto/functions'
export * from './riwayat/functions'
export * from './tarikcrypto/functions'
export * from './affiliasi/functions'
export * from './launchpad/functions'



// Base URLgoit
///////////////////////////////////////////////////////////////
// export const baseUrl = 'http://localhost:8000';
export const baseUrl = 'https://dev.archidax.net';
// export const baseUrl = 'http://192.168.1.32:8000';
// export const baseUrl = 'https://dev.cryptoindex.id';
// export const baseUrl = 'http://192.168.55.113:8000';
///////////////////////////////////////////////////////////////
export const baseUserSocketUrl = 'https://dev.archidax.net';
// export const baseUserSocketUrl = 'http://localhost:8000'
///////////////////////////////////////////////////////////////
//  export const baseUrlTrade='http://192.168.1.31:2021';
// export const baseUrlTrade = 'https://trade.archidax.net';
 export const baseUrlTrade='http://192.168.55.115:2021';
// export const baseUrlTrade='http://localhost:2021';
// export const baseUrlTrade = 'https://trade.archidax.net';
export const baseUrlTradeVersion='/api/v1';
///////////////////////////////////////////////////////////////

export const baseAxios = axios.create({ 
    baseURL: baseUrl,
    timeout: 10000,
});

export const baseAxiosTrading = axios.create({ 
    baseURL: baseUrlTrade+baseUrlTradeVersion,
    timeout: 10000,
});

const rootReducer = combineReducers({
    userReducer,
    pasarTradingReducer,
    walletReducer,
    profileReducer,
    kycReducer,
    beritaReducer,
    loadingReducer,
    setorRupiahReducer,
    tarikReducer,
    voucherReducer,
    keamananReducer,
    notificationReducer,
    setorCryptoReducer,
    riwayatReducer,
    tarikCryptoReducer,
    affiliasiReducer,
    daynightReducer,
    launchpadReducer
});

export default function ReduxState(props) {
    let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxSoldierMiddleware)));

    // FOR PRODUCTION
    // let store=createStore(rootReducer,applyMiddleware(reduxSoldierMiddleware));

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}
