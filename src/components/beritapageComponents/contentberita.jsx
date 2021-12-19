import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import swal from 'sweetalert2'
import { useSelector } from "react-redux";

import { baseAxios } from '../../stores'
import { fbMeta } from '../../helpers'

// import user from "../../assets/img/user.png";
import imageContent from "../../assets/img/image-content.png";
import facebook from "../../assets/img/facebook_white.png";
import twitter from "../../assets/img/twitter_white.png";
import linkedin from "../../assets/img/linkedin_white.png";

import parse from 'html-react-parser'
import Translate from "../../i18n/Translate";


export default function ContentBerita () {
  
  const { slug } = useParams()
  const [newsContent, setNewsContent] = useState(null)
  const { Recent } = useSelector((state) => state.beritaReducer)

  useEffect(() => {
    setNewsContent(null)
    baseAxios
      .post('/news/readNews', { slug })
      .then(({data}) => {
        let tgl = new Date(data.data.updatedAt)
        data.data.date = `${tgl.getDate()}/${tgl.getMonth()+1}/${tgl.getFullYear()}`
        fbMeta(
          `https://staging.cryptoindex.id/berita/${slug}`, data.data.title, data.data.description.slice(0,50),data.data.img_news
        )
        setNewsContent(data.data)
      })
      .catch((err) => {
        swal.fire({
          title: `Request Failed`,
          text: err.response && err.response.data && err.response.data.message ? err.response.data.message : err.message,
          icon: "warning"
        })
      })
  },[slug])

  return (
    <div className="container content-berita">
      <p>
        <i className="fas fa-chevron-circle-left mr-2 text-white-50"></i>
        <span onClick={() => window.history.go(-1)} className="font-12 text-white-50">{Translate('br_kembali')}</span>
      </p>
      <div className="row justify-content-between">
        <div className="col col-md-8">
          {
            !newsContent ? 
              <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            :
              <>
                <h1 className="content-berita-title label-title-top">{newsContent.title}</h1>
                <div className="content-berita-info mb-3">
                  <div className="content-berita-info-writer ci-text-white">
                    <h3 className="font-12 mb-0">{newsContent.author? newsContent.author : 'Admin Cryptoindex'}</h3>
                  </div>
                  <div className="content-berita-info-date ci-text-white" >
                    <i className="fas fa-calendar-alt"></i>
                    <h3 className="font-12 text-white-50">{newsContent.date}</h3>
                  </div>
                </div>
                
                <img src={newsContent.img_news !== 'image' ? newsContent.img_news : imageContent} style={{width:"100%"}} alt="images" />
                <article className="artikel ci-text-white font-12" style={{letterSpacing: "0.8px"}}>
                  {parse(newsContent.description)}
                </article>
              </>
          }
          <p className="share ci-text-white font-11">{Translate('br_bagikan_melalui')}:</p>
          <div data-href={`https://staging.cryptoindex.id/berita/${slug}`}>
            <a target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=https://staging.cryptoindex.id/berita/${slug}&amp;src=sdkpreparse`} className="">
              <img src={facebook} alt="facebook" className="btn button-share via-fb"/>
            </a>
            <img src={twitter} alt="twitter" className="btn button-share via-twitter"/>
            <img src={linkedin} alt="linkedin" className="btn button-share via-linkedin"/>
          </div>
        </div>
        <div className="col col-md-3">
          <h1 className="title-list-other text-gold label-title-top">{Translate('br_artikel_terbaru')}</h1>
          {
            Recent.length ? 
              Recent.map((news) => {
                return <Link to={`/news/${news.slug}`} ><p key={news._id} className="font-12 py-4 m-0" style={{borderBottom: "0.2px solid grey"}}>{news.title}</p></Link>
              })
            :
              <p className="title-artikel ci-text-white font-12">{Translate('vc_tidak_ada_data')}</p>
          }
        </div>
      </div>
    </div>
  )
}

