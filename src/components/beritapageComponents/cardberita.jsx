import React from "react";
import image from "../../assets/img/image-berita.png";
// import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import moment from "moment";

export default function cardberita({item}) {

  // const tanggal = new Date(item.updatedAt);
  // const date = `${tanggal.getDate()}/${tanggal.getMonth()+1}/${tanggal.getFullYear()}`;
  return (
    <Link to={{pathname:`/news/${item.slug}`, state:{item}}} className="mt-1 mb-1">
      <div className="card h-100 ci-customCard-1" style={{overflow: "hidden", borderRadius: "8px"}}>
        <img
          src={item.img_news !== 'image' ? item.img_news : image}
          alt="images"
          style={{ width: "100%", overflow: "hidden", height: "180px"}}
        />
        <div className="card-body">
          <div className="row justify-content-between align-items-center mb-2">
            <div className="col-5">
              <div className="categoryCardsHomepage-title w-100 mb-0 font-11 text-white text-center" style={{padding: "2px 0", background: "#1BA27A", borderRadius: "4px"}}>
                {item.category}
              </div>
            </div>
            <div className="col-6 text-right">
              <span className="text-gray2 mr-2 font-14">{item.visits}</span>
              <i className="far fa-eye text-gray2 font-14"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h5 className="font-15 text-gold" style={{letterSpacing: "0.03em"}}>{item.title} </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 font-14 text-justify mt-2 text-homepage-p">
              {
                item.description.replace(/(<([^>]+)>)/ig, '').split(" ").filter((item,index)=>index<22).join(" ") + "..."
              }
            </div>
          </div>
        </div>
        <div className="card-footer">
          
          <div className="row">
            <div className="col-12 text-right mb-0 font-11 text-white-50">
              {
                moment(item.createdAt).format("DD MMMM YYYY, h:mm:ss A")
              }
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
