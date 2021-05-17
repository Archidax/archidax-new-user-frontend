import React from "react";
import ProfileDashboardCard from "./cardDashboardDataProfile/ProfileDashboardCard";
import VerifikasiAkun from "./cardDashboardDataProfile/VerifikasiAkun";
// import { readMe } from "../../../stores";
import { useSelector } from "react-redux";
import ChartDashboardPie from "./pieChartEstimation/ChartDashboardPie";
import EmptyChart from "./pieChartEstimation/EmptyChart";
import Translate from "../../../i18n/Translate";

function CardDashboardDataProfile() {
  const kyc = useSelector((state) => state.kycReducer);
  const { assets } = useSelector((state) => state.walletReducer);

  return (
    <div className="card text-white ci-customCard-1">
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-6">
            <ProfileDashboardCard />
          </div>
          {kyc.approved_status === false ? (
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 mt-2">
              <div className="border h-100 bg-dashboard-verification">
                <VerifikasiAkun />
              </div>
            </div>
          ) : (
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 mt-2 mt-xl-0 mt-4 d-sm-block d-none">
              <div className="h-100">
                <h4 className="font-16 font-bold text-gold label-title-top">
                  {Translate('db_chart_aset_anda')}
                </h4>
                <div className="mt-4">
                  {assets&&assets.length &&
                  assets.some((e) => {
                    return e.balance > 0;
                  }) ? (
                    <ChartDashboardPie
                      data={
                        assets && Array.isArray(assets) && assets.length
                          ? assets
                              .sort((a, b) => {
                                return b.balance - a.balance;
                              })
                              .slice(0, 5)
                          : []
                      }
                    />
                  ) : (
                    <EmptyChart />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardDashboardDataProfile;
