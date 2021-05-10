import { baseAxios } from '../index';

import { SetNews, NextNews, SetRecentNews } from './type'

export const berita = (dispatch) => {
  baseAxios
    .get("/news/readAllNews")
    .then(({data})=>{
      dispatch(SetNews(data.data))
    })
    .catch((err)=>{
      console.log(err)
    })
}

export const beritaNext = (dispatch, category, page) => {
  baseAxios
    .post("/news/readNext", {
      category,
      page
    })
    .then(({data})=>{
      dispatch(NextNews(data))
    })
    .catch((err)=>{
      console.log(err)
    })
}

export const beritaRecent = (dispatch) => {
  baseAxios
    .get("/news/recent")
    .then(({data})=>{
      dispatch(SetRecentNews(data.data))
    })
    // .catch((err)=>{
    //   console.log(err)
    // })
}