import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import swal from 'sweetalert2'
import user from "../../../assets/img/user-square.png"
import {baseAxios} from '../../../stores'

export default function ArtikelBantuan() {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [article, setArticle] = useState(false)

  let dateFormatter = (dateString) => {
    let newDate = new Date(dateString)
    return `${newDate.getDate()} - ${newDate.getMonth()+1} - ${newDate.getFullYear()}`
  }

  useEffect(() => {
    setLoading(true)
    swal.showLoading()
    baseAxios
      .get(`/faq/topic/single?topicSlug=${params.topicSlug}`)
      .then(({data}) => {
        setArticle(data.topic)
      })
      .catch((err) => {
        // console.log(err.message)
        swal.fire('Error', err.message, 'error')
      })
      .finally(() => {
        setLoading(false)
        swal.close()
      })
  },[params.topicSlug])

  if(loading){
    return ( <>Fetching ...</>)
  } else {
    if(article){
      return (
        <div>
          <h2 className="artikel-bantuan-column-title ci-text-white font-16">{article.title}</h2>
          <div className="info-artikel-wrapper">
            <div className="info-artikel">
              <img src={user}/>
              <h6>{article.poster}</h6>
            </div>
            <p>{dateFormatter(article.updatedAt)}</p>
          </div>
          <article>
            <div dangerouslySetInnerHTML={{__html: article.content}}></div>
            {/* <p>{article.content}</p> */}
          </article>
        </div>
      )
    } else {
      return ( <>Article not found</> )
    }
  }
}
