const initialState = {
    riwayatOrder: [],
    riwayatTransaksi: [],
    riwayatSetorCrypto: [],
    riwayatTarikCrypto: [],
    riwayatSetorRupiah: [],
    riwayatTarikRupiah: [],
    mutasi: [],

    // Pages
    pagesRiwayatOrder: 0,
    pagesRiwayatTransaksi: 0,
    pagesRiwayatSetorCrypto: 0,
    pagesRiwayatTarikCrypto: 0,
    pagesRiwayatSetorRupiah: 0,
    pagesRiwayatTarikRupiah: 0,
    pagesMutasi: 0,

    // totalDocs
    totalDocsRiwayatOrder: 0,
    totalDocsRiwayatTransaksi: 0,
    totalDocsRiwayatSetorCrypto: 0,
    totalDocsRiwayatTarikCrypto: 0,
    totalDocsRiwayatSetorRupiah: 0,
    totalDocsRiwayatTarikRupiah: 0,
    totalDocsMutasi: 0
}

const riwayatReducer = (state = initialState, action) => {
    const { type, data } = action
    switch (type) {
        case "SET_DATA_RIWAYAT_ORDER":
            return {
                ...state,
                riwayatOrder: data
            }
        case "SET_DATA_RIWAYAT_TRANSAKSI":
            return {
                ...state,
                riwayatTransaksi: data
            }
        case "SET_DATA_RIWAYAT_SETOR_CRYPTO":
            return {
                ...state,
                riwayatSetorCrypto: data
            }
        case "SET_DATA_RIWAYAT_TARIK_CRYPTO":
            return {
                ...state,
                riwayatTarikCrypto: data
            }
        case "SET_DATA_RIWAYAT_SETOR_RUPIAH":
            return {
                ...state,
                riwayatSetorRupiah: data
            }
        case "SET_DATA_RIWAYAT_TARIK_RUPIAH":
            return {
                ...state,
                riwayatTarikRupiah: data
            }
        case "SET_DATA_RIWAYAT_MUTASI":
            return {
                ...state,
                mutasi: data
            }

        case "SET_PAGES_DATA_RIWAYAT_ORDER":
            return {
                ...state,
                pagesRiwayatOrder: data
            }
        case "SET_PAGES_DATA_RIWAYAT_TRANSAKSI":
            return {
                ...state,
                pagesRiwayatTransaksi: data
            }
        case "SET_PAGES_DATA_RIWAYAT_SETOR_CRYPTO":
            return {
                ...state,
                pagesRiwayatSetorCrypto: data
            }
        case "SET_PAGES_DATA_RIWAYAT_TARIK_CRYPTO":
            return {
                ...state,
                pagesRiwayatTarikCrypto: data
            }
        case "SET_PAGES_DATA_RIWAYAT_SETOR_RUPIAH":
            return {
                ...state,
                pagesRiwayatSetorRupiah: data
            }
        case "SET_PAGES_DATA_RIWAYAT_TARIK_RUPIAH":
            return {
                ...state,
                pagesRiwayatTarikRupiah: data
            }
        case "SET_PAGES_DATA_RIWAYAT_MUTASI":
            return {
                ...state,
                pagesMutasi: data
            }
        case "SET_TOTALDOCS_DATA_RIWAYAT_ORDER":
            return {
                ...state,
                totalDocsRiwayatOrder: data
            }
        case "SET_TOTALDOCS_DATA_RIWAYAT_TRANSAKSI":
            return {
                ...state,
                totalDocsRiwayatTransaksi: data
            }
        case "SET_TOTALDOCS_DATA_RIWAYAT_SETOR_CRYPTO":
            return {
                ...state,
                totalDocsRiwayatSetorCrypto: data
            }
        case "SET_TOTALDOCS_DATA_RIWAYAT_TARIK_CRYPTO":
            return {
                ...state,
                totalDocsRiwayatTarikCrypto: data
            }
        case "SET_TOTALDOCS_DATA_RIWAYAT_SETOR_RUPIAH":
            return {
                ...state,
                totalDocsRiwayatSetorRupiah: data
            }
        case "SET_TOTALDOCS_DATA_RIWAYAT_TARIK_RUPIAH":
            return {
                ...state,
                totalDocsRiwayatTarikRupiah: data
            }
        case "SET_TOTALDOCS_DATA_RIWAYAT_MUTASI":
            return {
                ...state,
                totalDocsMutasi: data
            }
        default:
            return state;
    }
}

export default riwayatReducer