const initialState = {
    isDone: false,
    isConfirmed: false,
    idPendingTransaction: '',
    fee: 0,
    amount: 0,
    createdAt: '',

    metode: "",

    QRIS: {
        amount: "",
        depositId: "",
        qris_content: "",
        qris_invoiceid: "",
        qris_nmid: "",
        qris_request_date: ""
    },

    // Is there pending deposit?
    isExist: false,

    // Konfirmasi Penyetoran Bank
    konfirmasiBank: {},

    // Confirmation Requests
    confirmationRequests: [],

    // riwayat penyetoran
    setorHistory: [],
    external_id: ''
}

const setorRupiahReducer = (state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "CREATE_SETOR_RUPIAH":
            return {
                ...state,
                fee: data.fee,
                idPendingTransaction: data.idPendingTransaction,
                amount: data.amount,
                createdAt: data.createdAt,
                metode: data.metode
            }
        case "SETOR_BANK":
            return {
                ...state,
                setorBank: data
            }
        case "SETOR_ALFAMART":
            return {
                ...state,
                setorAlfamart: data
            }
        case "MESSAGE":
            return {
                ...state,
                message: data
            }
        case "IS_EXIST":
            return {
                ...state,
                isExist: data
            }
        case "KONFIRMASI_BANK":
            return {
                ...state,
                konfirmasiBank: data
            }
        case "CONFIRMATION_REQUESTS":
            return {
                ...state,
                confirmationRequests: data
            }
        case "RIWAYAT_SETOR_RUPIAH":
            return {
                ...state,
                setorHistory: data
            }
        case "SET_QRIS_DATA":
            return {
                ...state,
                QRIS: data,
            }
        case "SET_METODE_PENYETORAN":
            return {
                ...state,
                metode: data,
            }
        case "CLEAR_SETOR_REDUCER":
            return initialState
        default:
            return state
    }
}

export default setorRupiahReducer