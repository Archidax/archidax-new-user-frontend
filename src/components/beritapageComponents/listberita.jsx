import React from 'react';
import {ButtonGroup} from 'react-bootstrap';
// import { useDispatch } from 'react-redux'

import Card from "./cardberita";
import arrow from "../../assets/img/arrow-next.png";
// import { beritaNext } from '../../stores/berita/functions'

export default function Listberita({title,data}) {
  const news = data.data
  // const dispatch = useDispatch()

  // const readNext = () => {
  //   beritaNext(dispatch, title, data.page)
  // }

  return (
    <div className="container list-berita">
      <h1 className="text-gold mb-2 my-3 label-title-top">{title}</h1>
      <div className="line" style={{width: "150px", height: "1px", background: "#CCCCCC", borderRadius: "2px"}}></div>
      <div className="row mt-3 mb-2">
        {
          news.map((item, index)=>{
            return (
              <div className="col-12 col-sm-4 col-md-4 my-2" key={index}>
                <Card item={item}/>
              </div>
            )
          })
        }
      </div>
      {
        data.next ?
          <ButtonGroup className="list-berita-button">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>Berikutnya 
              <img src={arrow} alt="arrow" />
            </p>
          </ButtonGroup>
        :
          <></>
      }
    </div>
  )
}
