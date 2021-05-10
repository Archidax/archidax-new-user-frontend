import React from "react";
import HeaderHomePage from "../../components/headerComponents/headerHomePage";
import FeeRateComponents from "../../components/footerComponents/feeRateComponents/FeeRateComponents";
import FooterHomePage from "../../components/footerComponents/footerHomePage/FooterHomePage";

export default function FeeRate(props) {
  return (
    <div className="navbar-homePage bg-homepage">
      <div className="navbar-top">
        <HeaderHomePage setLocale={props.setLocale} />
        <FeeRateComponents setLocale={props.setLocale} />
        <FooterHomePage setLocale={props.setLocale} />
      </div>
    </div>
  );
}
