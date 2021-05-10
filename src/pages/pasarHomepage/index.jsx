import React from "react";
// import FooterHomePage from "../../components/footerComponents/footerHomePage/FooterHomePage";
// import HeaderPublicMarket from "../../components/headerComponents/headerHomePage/HeaderPublicPasar";
import HeaderTrade from "../../components/headerComponents/headerDashboard/headerTrade";
import PasarPage from "../tradepage/index";

function PasarHomePage() {
  return (
    <div className="berita">
      <div className="pasarHome" style={{ minHeight: "60vh" }}>
        {/* <HeaderPublicMarket /> */}
        <HeaderTrade />
        <PasarPage />
      </div>
    </div>
  );
}

export default PasarHomePage;
