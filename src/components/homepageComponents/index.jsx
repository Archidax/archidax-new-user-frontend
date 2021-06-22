import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import HeaderHomePage from "../headerComponents/headerHomePage";
import BannerHomepage from "./components/BannerHomepage";
import SliderHomepage from "./components/SliderHomepage";
import TableHomepage from "./components/TableHomepage";
import ApaItuCrypto from "./components/ApaItuCrypto";
import CalculatorCrypto from "./components/CalculatorKrypto";
import { berita, beritaRecent } from "../../stores/berita/functions";

// import KenapaMemilihCrypto from "./components/KenapaMemilihCrypto";
// import NewsHomepage from "./components/NewsHomepage";

import FooterBesideHomePage from "../footerComponents/footerHomePage/FooterBesideHomePage";

// import { GetListingExchange } from "../../stores";
import DalamCrypto from "./components/DalamCrypto";
import InfoNews from "./components/infonews/InfoNews";
import FiturHomepage from "./components/FiturHomepage";
import MengapaHomepage from "./components/MengapaHomepage";
import GadgetHomepage from "./components/GadgetHomepage";

function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    berita(dispatch);
    beritaRecent(dispatch);
  }, [dispatch]);

  return (
    <div className="navbar-homePage">
      <div className="navbar-top">
        <HeaderHomePage
          flag={props.flag}
          setLocale={props.setLocale}
          bg_normal="bg-header-homepage2"
          // bg_normal="bg-overlay-homepage"
        />
        <BannerHomepage setLocale={props.setLocale} />
        <InfoNews setLocale={props.setLocale} />
        <SliderHomepage setLocale={props.setLocale} />
        <TableHomepage setLocale={props.setLocale} />
        {/* <ApaItuCrypto setLocale={props.setLocale} /> */}
        <FiturHomepage setLocale={props.setLocale} />
        {/* <DalamCrypto setLocale={props.setLocale} /> */}
        <CalculatorCrypto setLocale={props.setLocale} />
        <GadgetHomepage setLocale={props.setLocale} />
        <MengapaHomepage setLocale={props.setLocale} />
        {/* <KenapaMemilihCrypto setLocale={props.setLocale} /> */}
        {/* <NewsHomepage setLocale={props.setLocale} /> */}
        <FooterBesideHomePage setLocale={props.setLocale} />
      </div>
    </div>
  );
}

export default Home;
