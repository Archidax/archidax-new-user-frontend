import React from "react";
import {useHistory} from 'react-router-dom'
import moment from "moment";
export default function NewListingTab({dataNewNews}) {
  const history = useHistory()
  return (
    <div className="col-12 p-0 font-archidax2" style={{ fontSize: "14px" }}>
      <div id="overflowTest">
        {
          dataNewNews.length !== 0 && dataNewNews.map((val, index) => {
            if(val.category === "Berita"){
              return (
                <div onClick={e => {
                  history.push(`/berita/${val.slug}`)
                }} 
                className="col-12 px-0 py-2 announcements-content">
                  <a onClick={e => {
                    e.preventDefault()
                  }} style={{width: "80%"}} className="text-white">
                    <span style={{cursor: "pointer"}} >{val.title}</span>
                  </a>
                  <div className="mr-2">{
                  moment(val.updatedAt).format("DD MMMM YYYY",)}</div>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
}
