export function SetNews(payload){
    return {
        type:"GET_BERITA",
        data: payload,
    };
}

export function NextNews(payload){
    return {
        type:"BERITA_NEXT",
        data: payload,
    };
}

export function SetRecentNews(payload){
    return {
        type:"GET_BERITA_NEW",
        data: payload,
    };
}
