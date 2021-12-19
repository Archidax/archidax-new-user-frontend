import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import {baseAxios} from '../../../stores'
import swal from 'sweetalert2'
import Translate from '../../../i18n/Translate';

export default function JudulBantuan() {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState({
    topics: []
  })

  useEffect(() => {
    baseAxios
      .get(`/faq/category/single?categorySlug=${params.categorySlug}`)
      .then(({data}) => {
        setCategory(data.category)
      })
      .catch((err) => {
        swal.fire('Error', err.message, 'error')
      })
      .finally(() => {
        setLoading(false)
      })
  },[])
  
  if(loading){
    return (
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  } else {
    return (
      <div>
        {
          category.topics.length ?
            category.topics.map((item,index)=>{
              return(
                <Link to={`/bantuan/${params.categorySlug}/${item.topicSlug}`}>
                  <div key={index}>
                    <li className="artikel-bantuan-title ci-text-white font-12">{item.title}</li>
                  </div>
                </Link>
              )
            })
          :
            <div>
              <div className="ci-text-white font-12">{Translate('vc_tidak_ada_data')}</div>
            </div>
        }
      </div>
    )
  }
}
