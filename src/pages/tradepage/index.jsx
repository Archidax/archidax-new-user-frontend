import React from "react";
import TradeComponents from "../../components/tradeComponents/index";
import HeaderTrade from "../../components/headerComponents/headerDashboard/headerTrade";

export default function Index() {
  return (
    <div>
      <HeaderTrade />
      <TradeComponents />
    </div>
  );
}
