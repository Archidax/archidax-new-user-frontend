import React from "react";
import moment from "moment";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { beritaRecent } from "../../../../../stores/berita/functions";

export default function ActivityTabInfo() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    beritaRecent(dispatch);
  }, [dispatch]);

  const dataNewNews = useSelector((state) => state.beritaReducer.Recent);

  return (
    <div className="col-12 p-0 font-archidax2" style={{ fontSize: "14px" }}>
      <div id="overflowTest">
        <div className="col-12 px-0 py-2 announcements-content">
          <a className="text-white">
            Launch of Router Protocol (ROUTE) Pre-Staking with...
          </a>
          <div className="mr-2">(09-02)</div>
        </div>{" "}
        <div className="col-12 px-0 py-2 announcements-content">
          <a className="text-white">
            Launch of Router Protocol (ROUTE) Pre-Staking with...
          </a>
          <div className="mr-2">(09-02)</div>
        </div>{" "}
        <div className="col-12 px-0 py-2 announcements-content">
          <a className="text-white">
            Launch of Router Protocol (ROUTE) Pre-Staking with...
          </a>
          <div className="mr-2">(09-02)</div>
        </div>{" "}
        <div className="col-12 px-0 py-2 announcements-content">
          <a className="text-white">
            Launch of Router Protocol (ROUTE) Pre-Staking with...
          </a>
          <div className="mr-2">(09-02)</div>
        </div>{" "}
        <div className="col-12 px-0 py-2 announcements-content">
          <a className="text-white">
            Launch of Router Protocol (ROUTE) Pre-Staking with...
          </a>
          <div className="mr-2">(09-02)</div>
        </div>
      </div>
    </div>
  );
}
