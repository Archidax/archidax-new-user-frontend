const initialState ={
    Berita: {
      data: [],
      page: 1,
      next: false
    },
    Pengumuman: {
      data: [],
      page: 1,
      next: false
    },
    Artikel: {
      data: [],
      page: 1,
      next: false
    },
    Recent: []
}

const beritaReducer = ((state=initialState, action)=>{
  let { type, data } = action;
  switch (type) {

    case "GET_BERITA":
      return {
        ...state,
        Berita: {
          ...state.Berita,
          data: data.Berita,
          next: data.Berita.length === 9 ? true : false
        },
        Pengumuman: {
          ...state.Pengumuman,
          data: data.Pengumuman,
          next: data.Pengumuman.length === 9 ? true : false
        },
        Artikel: {
          ...state.Artikel,
          data: data.Artikel,
          next: data.Artikel.length === 9 ? true : false
        },
      }

    case "BERITA_NEXT":
      return {
        ...state,
        [data.category]: {
          ...state[data.category],
          data: [...state[data.category].data, ...data.data],
          page: state[data.category].page + 1,
          next: data.data.length === 9 ? true : false
        }
      }

      case "GET_BERITA_NEW":
        return {
          ...state,
          Recent: data
        }
  

    default:
      return state;
  }
})

export default beritaReducer