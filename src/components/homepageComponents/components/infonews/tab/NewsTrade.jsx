import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { beritaRecent } from "../../../../../stores/berita/functions";
export default function NewsTrade() {
  const dispatch = useDispatch();
  const dataNewNews = useSelector((state) => state.beritaReducer.Recent);
  React.useEffect(() => {
    if (dataNewNews.length === 0) {
      beritaRecent(dispatch);
    }
  }, [dispatch]);

  const history = useHistory();
  return (
    <div className="col-12 p-2 font-archidax2">
      <h5 className="mb-0" style={{ color: "#f9ba42" }}>
        News
      </h5>
      <div id="overflowTestChatTrade" className="mt-1">
        {dataNewNews.length !== 0 &&
          dataNewNews.map((val, index) => {
            if (val.category === "Berita" || "Pengunguman" || "Artikel") {
              return (
                <div
                  onClick={(e) => {
                    history.push(`/news/${val.slug}`);
                  }}
                  className="col-12 px-0 pt-2 announcements-content-trade"
                  style={{ cursor: "pointer" }}
                >
                  <img src={val.img_news} className="img-news-trade" />
                  <div className="ml-2">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      style={{ width: "80%" }}
                      className="text-white font-14-tr"
                    >
                      <span style={{ cursor: "pointer" }}>{val.title}</span>
                    </a>
                    <p className="text-white date-news-trade mt-1">
                      {moment(val.updatedAt).format("DD MMMM YYYY")}
                    </p>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
