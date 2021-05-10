import React, { useEffect, useState } from 'react';
import { Route, Switch,Link, useParams} from "react-router-dom";
import swal from 'sweetalert2'
import Popup from '../../../components/popUps'

import arrow from "../../../assets/img/arrow-next.png";
import Judul from "./judulBantuan";
import Artikel from "./artikelBantuan";
import { baseAxios } from '../../../stores'

export default function HelpContent() {

  const params = useParams()
  let category = () => {
    let cat = params.categorySlug
    cat = cat.split('-')
    cat.pop()
    cat = cat.join(' ')
    return cat
  }
  const [popularArticle, setPopulaArticle] = useState([])
  const [loadingPA, setLoadingPA] = useState(true)

  useEffect(() => {
    baseAxios
      .get(`/faq/topic/popular?language=IDN`)
      .then(({data}) => {
        setPopulaArticle(data.search)
      })
      .catch((err) => {
        // swal.fire('Error', err.message, 'error')
        Popup.fire('Request Failed', err.message)
      })
      .finally(() => {
        setLoadingPA(false)
      })
  },[])

  return (
    <div>
      <div className="navbar-bantuan">
        <div className="container artikel-bantuan-keterangan">
          <Link to="/bantuan">
            <p className="ci-text-white font-12">Bantuan</p>
          </Link>
          <img src={arrow}/>
          <Link to={`/bantuan/${params.categorySlug}`}>
            <p className="ci-text-white font-12">{category()}</p>
          </Link>
        </div>
      </div>
      <div className="container ">
        <div className="container-list-judul">
          <div className="row">
            <div className="col">
              <h2 className="artikel-bantuan-column-title ci-text-white font-16">{category()}</h2>
              <Switch>
                <Route exact path="/bantuan/:categorySlug">
                  <Judul/>
                </Route>
                <Route exact path="/bantuan/:categorySlug/:topicSlug">
                  <Artikel/>
                </Route>
              </Switch>
            </div>
            <div className="col">
              <h2 className="artikel-bantuan-column-title ci-text-white font-16">Artikel Terpopuler</h2>
              {
                loadingPA?
                  <div>
                      <h6 className="artikel-bantuan-title kategori-lain ci-text-white font-12">Fetching Data ...</h6>
                  </div>
                :
                  popularArticle.length ?
                    popularArticle.map((item,index)=>{
                      return(
                        <div key={index}>
                          <Link to={`/bantuan/${item.categorySlug}/${item.topics.topicSlug}`}>
                            <h6 className="artikel-bantuan-title kategori-lain ci-text-white font-12">{item.topics.title}</h6>
                          </Link>
                        </div>
                      )
                    })
                  :
                    <div>
                        <h6 className="artikel-bantuan-title kategori-lain ci-text-white font-12">No Data</h6>
                    </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginBottom:"5vh",}}>
        <p className="ci-text-white font-12">Punya pertanyaan lain?
          <Link to="/bantuan/hubungi-kami">
            <span className="link-hubungi-kami">Hubungi Kami</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
