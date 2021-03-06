import React from "react";
import HeaderHomePage from "../headerComponents/headerHomePage";
import BannerHomepage from "./components/BannerHomepage";
import SliderHomepage from "./components/SliderHomepage";
import TableHomepage from "./components/TableHomepage";
import ApaItuCrypto from "./components/ApaItuCrypto";
import CalculatorCrypto from "./components/CalculatorKrypto";
import KenapaMemilihCrypto from "./components/KenapaMemilihCrypto";
import NewsHomepage from "./components/NewsHomepage";
import FooterHomePage from "../footerComponents/footerHomePage/FooterHomePage";

import { HomeMarket } from "../../stores/chart/functions";

function Home(props) {
  let [MarketData, setMarketData] = React.useState([]);
  React.useEffect(() => {
    HomeMarket((Market) => {
      setMarketData(Market);
    });
  }, [setMarketData]);

  console.log(MarketData);

  return (
    <div className="navbar-homePage">
      <div className="navbar-top">
        <HeaderHomePage setLocale={props.setLocale} />
        <BannerHomepage setLocale={props.setLocale} />
        <SliderHomepage setLocale={props.setLocale} dataHome={MarketData} />
        <TableHomepage setLocale={props.setLocale} dataHome={MarketData} />
        <ApaItuCrypto setLocale={props.setLocale} />
        <CalculatorCrypto setLocale={props.setLocale} />
        <KenapaMemilihCrypto setLocale={props.setLocale} />
        <NewsHomepage setLocale={props.setLocale} />
        <FooterHomePage setLocale={props.setLocale} />
      </div>
    </div>
  );
}

export default Home;
