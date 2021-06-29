import React from "react";

// Import
import CardDashboardDataProfile from "./cards/CardDashboardDataProfile";
import CardDashboardPasarTrading from "./cards/CardDashboardPasarTrading";
import CardDashboardWallets from "./cards/CardDashboardWallets";
import SliderBannerDashboard from "./sliders/SliderBannerDashboard";
import {GetListingExchange} from '../../stores/pasartrading/functions'
import {useDispatch} from 'react-redux'

import AdvertisingSliderDashboard from "./sliders/AdvertisingSliderDashboard";
import CopyrightDashboard from "../footerComponents/copyrightComponents/CopyrightDashboard";

function Dashboard() {
  const dispatch = useDispatch()
  // React.useEffect(() => {
  //     GetListingExchange(dispatch)
  // },[])

  return (
    <div className="h-100">
      <div className="pt-0 pt-md-3 px-3">
        <div className="row d-none d-md-block">
          <div className="col-12 col-md-12">
            <SliderBannerDashboard />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-12 col-sm-12 col-xs-12 mt-3 px-2">
                <CardDashboardDataProfile />
              </div>
              <div  className="col-12 col-sm-12 col-xs-12 mt-3 px-2">
                
                <CardDashboardPasarTrading />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mt-2">
            <div className="row">
              <div className="col-12 mt-2 px-2">
                <CardDashboardWallets />
              </div>
              <div className="col-12 mt-2 mb-4 px-2">
                <AdvertisingSliderDashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
