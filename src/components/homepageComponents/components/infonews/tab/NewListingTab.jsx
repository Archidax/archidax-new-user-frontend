import React from "react";
import {useHistory} from 'react-router-dom'

export default function NewListingTab({dataNewNews}) {
  const history = useHistory()
  return (
    <div className="col-12 p-0 font-archidax2" style={{ fontSize: "14px" }}>
      <div id="overflowTest">
        {
          dataNewNews.map((val, index) => {
            if(val.category === "Berita"){
              return (
                <div className="col-12 px-0 py-2 announcements-content w-100">
                  <a onClick={e => {
                    e.preventDefault()
                    history.push(`/berita/${val.slug}`)
                  }} className="text-white w-70">
                    {val.title}
                  </a>
                  <div className="mr-2">({new Date(val.updatedAt).getDate()} - {new Date(val.updatedAt).getMonth()+1})</div>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
}
