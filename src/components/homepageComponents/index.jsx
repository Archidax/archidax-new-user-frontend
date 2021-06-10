import React from "react";
import { useDispatch } from "react-redux";
import HeaderHomePage from "../headerComponents/headerHomePage";
import BannerHomepage from "./components/BannerHomepage";
import SliderHomepage from "./components/SliderHomepage";
import TableHomepage from "./components/TableHomepage";
import ApaItuCrypto from "./components/ApaItuCrypto";
import CalculatorCrypto from "./components/CalculatorKrypto";
import KenapaMemilihCrypto from "./components/KenapaMemilihCrypto";
import NewsHomepage from "./components/NewsHomepage";
import FooterHomePage from "../footerComponents/footerHomePage/FooterHomePage";

import { GetListingExchange } from "../../stores";
import DalamCrypto from "./components/DalamCrypto";
import InfoNews from "./components/infonews/InfoNews";

function Home(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    GetListingExchange(dispatch);
  }, []);

  return (
    <div className="navbar-homePage">
      <div className="navbar-top">
        <HeaderHomePage
          setLocale={props.setLocale}
          bg_normal="bg-header-homepage"
        />
        <BannerHomepage setLocale={props.setLocale} />
        <InfoNews setLocale={props.setLocale} />
        <SliderHomepage setLocale={props.setLocale} />
        <TableHomepage setLocale={props.setLocale} />
        <ApaItuCrypto setLocale={props.setLocale} />
        <DalamCrypto setLocale={props.setLocale} />
        <CalculatorCrypto setLocale={props.setLocale} />
        {/* <KenapaMemilihCrypto setLocale={props.setLocale} /> */}
        <NewsHomepage setLocale={props.setLocale} />
        <FooterHomePage setLocale={props.setLocale} />
      </div>
    </div>
  );
}

export default Home;
