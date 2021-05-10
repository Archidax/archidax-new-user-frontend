const initialState = {
    myAffiliation: {
        addressRef: "",
        afiliasiActive: 0,
        afiliasiCount: 0
    },
    laporanKomisi: [],
    daftarAffiliasi: []
}

const affiliasiReducer = (state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "SET_MY_AFFILIATION":
            return {
                ...state,
                myAffiliation: data
            }
        case "SET_LAPORAN_KOMISI":
            return {
                ...state,
                laporanKomisi: data
            }
        case "SET_DAFTAR_AFFILIASI":
            return {
                ...state,
                daftarAffiliasi: data
            }
        default:
            return state
    }
}

export default affiliasiReducer