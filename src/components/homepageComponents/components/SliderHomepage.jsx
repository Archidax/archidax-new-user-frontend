import React from "react";
import SliderTopGainer from "./slider/SliderTopGainer";
import SliderTopLoser from "./slider/SliderTopLoser";

export default function SliderHomepage({dataHome}){
  const [topGainer, setTopGainer] = React.useState([])
  const [topLoser, setTopLoser] = React.useState([])

  React.useEffect(() => {
    if(dataHome&&dataHome.length) {
      setTopGainer(dataHome.sort((a, b) => b.price24h_change - a.price24h_change).filter((item) => item.price24h_change > 0))
      setTopLoser(dataHome.sort((a, b) => a.price24h_change - b.price24h_change).filter((item) => item.price24h_change < 0))
    }
  }, [dataHome])

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
            {topGainer && Array.isArray(topGainer) && topGainer.length > 0 ? (
              <SliderTopGainer
                dataHome={topGainer}
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
            {topLoser && Array.isArray(topLoser) && topLoser.length > 0 ? (
              <SliderTopLoser
                dataHome={topLoser}
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
