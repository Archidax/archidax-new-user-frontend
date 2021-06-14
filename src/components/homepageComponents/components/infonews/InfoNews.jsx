import React from "react";

import Slider1Announcement from "./Slider1Announcement";
import Slider2Announcement from "./Slider2Announcement";
import ActivityTabInfo from "./tab/ActivityTabInfo";
import ImportantNoticeTab from "./tab/ImportantNoticeTab";
import NewListingTab from "./tab/NewListingTab";
import { useDispatch, useSelector } from "react-redux";
import { beritaRecent } from "../../../../stores/berita/functions";
import bnbbanner from "../../../../assets/img/homepage/announcements/bnb.jpg";
import wavesbanner from "../../../../assets/img/homepage/announcements/waves.jpg";
export default function InfoNews() {
  const dispatch = useDispatch();
  const dataNewNews = useSelector((state) => state.beritaReducer.Recent);
  React.useEffect(() => {
    if (dataNewNews.length === 0) {
      beritaRecent(dispatch);
    }
  }, [dispatch]);

  return (
    <div className="bg-archidax card-body pt-2 font-archidax3">
      <div
        className="bg-archidax row col-lg-10 offset-lg-1 col-sm-12"
        // style={{ minHeight: "40vh", width: "80%", margin: "auto" }}
      >
        <div className="col-lg-7 col-sm-12 card-body text-white">
          <div className="mx-3 mb-2">
            <h4>Announcements</h4>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 col-sm-12 pt-3">
              <Slider1Announcement />
              {/* <img src={bnbbanner} width="100%" /> */}
            </div>
            <div className="col-lg-6 col-sm-12 pt-3">
              <Slider2Announcement />
              {/* <img src={wavesbanner} width="100%" /> */}
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 card-body text-white">
          <div className="announcement-homepage mb-2">
            <h4 className="font-archidax2">News</h4>
            {/* <h6 style={{ fontSize: "12px", marginLeft: "20px" }}>More</h6> */}
          </div>
          <div className="mt-3">
            <div className="tabs-info-news">
              <ul
                class="nav nav-pills mb-2 mx-1 row"
                id="pills-tab"
                role="tablist"
                style={{ fontSize: "15px" }}
              >
                <li class="nav-item col px-0">
                  <a
                    class="nav-link active"
                    id="pills-activity-tab"
                    data-toggle="pill"
                    href="#pills-activity"
                    role="tab"
                    aria-controls="pills-activity"
                    aria-selected="true"
                  >
                    News
                  </a>
                </li>
                <li class="nav-item col px-0">
                  <a
                    class="nav-link"
                    id="pills-Important-Notice-tab"
                    data-toggle="pill"
                    href="#pills-Important-Notice"
                    role="tab"
                    aria-controls="pills-Important-Notice"
                    aria-selected="false"
                  >
                    Announcemet
                  </a>
                </li>
                <li class="nav-item col px-0">
                  <a
                    class="nav-link"
                    id="pills-New-Listing-tab"
                    data-toggle="pill"
                    href="#pills-New-Listing"
                    role="tab"
                    aria-controls="pills-New-Listing"
                    aria-selected="false"
                  >
                    Article
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-activity"
                  role="tabpanel"
                  aria-labelledby="pills-activity-tab"
                >
                  <NewListingTab dataNewNews={dataNewNews} />
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-Important-Notice"
                  role="tabpanel"
                  aria-labelledby="pills-Important-Notice-tab"
                >
                  <ImportantNoticeTab dataNewNews={dataNewNews} />
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-New-Listing"
                  role="tabpanel"
                  aria-labelledby="pills-New-Listing-tab"
                >
                  <ActivityTabInfo dataNewNews={dataNewNews} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
