import React,{useEffect,useState} from "react";
import SliderTopGainer from "./slider/SliderTopGainer";
import SliderTopLoser from "./slider/SliderTopLoser";
import { HomeMarket } from "../../../stores";

export default function SliderHomepage(){
  const [data,setData]=useState(null)
  useEffect(() => {
    HomeMarket(setData)
  }, [])

  return (
    <div className=" mt-4 mb-5">
      <div className="container-homepage p-0">
        <div className="tabs-homepage-price">
          <ul class="nav nav-pills mb-3 px-2" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Top Gainer
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Top Loser
              </a>
            </li>
          </ul>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            {data&&data.topGainer&&Array.isArray(data.topGainer)&&data.topGainer.length ? (
              <SliderTopGainer
                dataHome={data.topGainer}
              />
            ) : (
              <div>
                <h5 className="ml-2">No Data</h5>
              </div>
            )}
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {data&&data.topLoser&&Array.isArray(data.topLoser)&&data.topLoser.length ? (
              <SliderTopLoser
                dataHome={data.topLoser}
              />
            ) : (
              <div>
                <h5 className="ml-2">No Data</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
