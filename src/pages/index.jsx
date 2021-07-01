import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// Import Page
import HomePage from "./homepage";
import Deactivate from "./deactivate";
import RouteDashboardPage from "./routedashboardpage";
import LoginPage from "./loginpage";
import RegisterPage from "./registerPage";
import KebijakanPrivasiPage from "./privasipage";
import Berita from "./beritapage/index";
import Bantuan from "./bantuanpage";
import ChangePassLoginPage from "./forgetpassword/ChangePassLoginPage";
import ForgetPassLoginPage from "./forgetpassword/ForgetPassLoginPage";
import NotFound from "./404page";
import GAuth from "./gauth/GAuth";
import PerjanjianPengguna from "./perjanjianpengguna";
import BeliCrypto from "./belicrypto";
import PengajuanKoin from "./pengajuanKoin";
import EmailVerification from "./emailverification";
import LoginToken from "./loginbytoken";
// Footer Page
import SyaratPengguna from "../pages/footercontent/SyaratPengguna";

import ProtectedRoute from "./protectedRoute";
// import ProtectedLogin from "./protectedLogin";
// import ProtectedGAuth from "./protectedGAuth";
import KeepAlive from "../configuration/keepAlive";

// i18n
import { I18nProvider, LOCALES } from "../i18n";
import FeeRate from "./feeRatepage/FeeRate";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";
import Pasar from "./tradepage";
import LaunchpadPages from "./launchpad/index";

// pasar
// import PasarHomePage from "./pasarHomepage";
import PanduanPengguna from "./panduanpengguna";
import PanduanCopyTrade from "./panduanCopyTrade";
import DepthChart from "./depthChartpage/index";
import AdvanceChart from "../components/tradeComponents/chart/index";
import TradeDerevativePage from "./tradeDerevativePage";
import SubscribedLP from "../components/beritapageComponents/SubscribedLP";
import KebijakanKYCAML from "./listfooterpage/KebijakanKYCAML";
import DepositAndWithdrawal from "./listfooterpage/DepositAndWithdrawal";
import TransaksiAsetDigital from "./listfooterpage/TransaksiAsetDigital";
import { useDispatch, useSelector } from "react-redux";

import { GetListingExchange, setMyFav } from "../stores/pasartrading/functions";
import KeuanganPage from "./keuangan";
import DynamicPage from "./dynamicPage";
import { getAllDynamicPages } from "../stores/dynamicPage/functions";
import DownloadPage from "./downloadpage/DownloadPage";

export default function MainPages() {
  const dispatch = useDispatch();
  const isLoginAccount = useSelector((state) => state.userReducer.isLogin);
  const { listingList } = useSelector((state) => state.pasarTradingReducer)
  const { email } = useSelector((state) => state?.profileReducer);
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [flag, setFlag] = useState("flag-icon-id");

  useEffect(() => {
    if (isLoginAccount) {
      if (localStorage.getItem("myFav") && email) {
        const data = JSON.parse(localStorage.getItem("myFav"));
        dispatch(setMyFav(data[email] || []));
      }
    }
    if(!listingList.length){
      dispatch(GetListingExchange());
    }
  }, [email, dispatch, isLoginAccount]);

  useEffect(() => {
    getAllDynamicPages(dispatch, locale.split("-")[0].toUpperCase());
  }, [dispatch, locale]);

  useEffect(() => {
    // if (localStorage.getItem('language')) {
    //   if (localStorage.getItem('language') === "ID") {
    //     setLocale(LOCALES.INDONESIA);
    //   } else {
    //     setLocale(LOCALES.ENGLISH);
    //   }
    // } else {
    //   axios
    //     .get("https://ipclient.herokuapp.com/")
    //     .then(({ data }) => {
    //       if (data.country === "ID") {
    //         localStorage.setItem('language', "ID")
    //         setLocale(LOCALES.INDONESIA);
    //       } else {
    //         localStorage.setItem('language', "EN")
    //         setLocale(LOCALES.ENGLISH);
    //       }
    //     })
    //     .catch((err) => { });
    // }
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "EN");
      setLocale(LOCALES.ENGLISH);
    } else {
      if (localStorage.getItem("language") === "EN") {
        setLocale(LOCALES.ENGLISH);
      }
      if (localStorage.getItem("language") === "ID") {
        setLocale(LOCALES.INDONESIA);
      }
    }
  }, [localStorage.getItem("language")]);

  useEffect(() => {
    switch (locale) {
      case LOCALES.INDONESIA:
        setFlag("flag-icon-id");
        break;
      case LOCALES.ENGLISH:
        setFlag("flag-icon-us");
        break;
      case LOCALES.VIETNAM:
        setFlag("flag-icon-vn");
        break;
      default:
        setFlag("flag-icon-us");
    }
    localStorage.setItem("CryptoIndexLocale", locale);
  }, [locale]);

  return (
    <>
      <I18nProvider locale={locale}>
        <ScrollToTop>
          <Switch>
            <Route path="/home">
              <HomePage flag={flag} setLocale={setLocale} />
            </Route>
            <Route path="/deactivate">
              <Deactivate />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/forget-password">
              <ForgetPassLoginPage />
            </Route>
            <Route path="/change-password">
              <ChangePassLoginPage />
            </Route>
            <Route path="/kebijakan-privasi">
              <KebijakanPrivasiPage />
            </Route>
            <Route path="/kebijakan-KYC-AML">
              <KebijakanKYCAML />
            </Route>
            <Route path="/deposit-withdrawal">
              <DepositAndWithdrawal />
            </Route>
            <Route path="/transaksi-aset-digital">
              <TransaksiAsetDigital />
            </Route>
            <Route path="/subscribeNews">
              <SubscribedLP />
            </Route>
            <Route path="/news">
              <Berita />
            </Route>
            <Route path="/syarat-pengguna">
              <SyaratPengguna />
            </Route>
            <Route path="/panduan-pemula">
              <PanduanPengguna />
            </Route>
            <Route path="/panduan-copy-trade">
              <PanduanCopyTrade />
            </Route>
            <Route path="/perjanjian-pengguna">
              <PerjanjianPengguna />
            </Route>
            <Route path="/fee">
              <FeeRate setLocale={setLocale} />
            </Route>
            <Route path="/buy-crypto">
              <BeliCrypto />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Route path="/gauth">
              <GAuth />
            </Route>
            
            {/* <Route path={`/chart/:pair`}>
              <AdvanceChart />
            </Route> */}
            {/* <Route path={`/marketdepth/:symbol`}>
              <DepthChart />
            </Route> */}
            <Route path={"/pasar/:symbol"}>
              <Pasar />
            </Route>
            <Route path={"/pasar-derivative/:symbol"}>
              <TradeDerevativePage />
            </Route>
            <Route path={`/pengajuan-koin`}>
              <PengajuanKoin />
            </Route>
            <Route path={`/bantuan`}>
              <Bantuan />
            </Route>
            <Route path="/keuangan">
              <KeuanganPage setLocale={setLocale} />
            </Route>
            <Route path="/launchpad">
              <LaunchpadPages />
            </Route>
            <Route path="/download">
              <DownloadPage />
            </Route>
            <Route path="/email/verify/:key">
              <EmailVerification />
            </Route>
            <Route path="/loginverify/:key">
              <LoginToken />
            </Route>
            
            <Route path="/pages/:category/:pageSlug">
              <DynamicPage flag={flag} setLocale={setLocale} />
            </Route>
            <ProtectedRoute path="/">
              <KeepAlive>
                <RouteDashboardPage
                  flag={flag}
                  locale={locale}
                  setLocale={setLocale}
                />
              </KeepAlive>
            </ProtectedRoute>
            {/* <ProtectedRoute path="/dashboard">
                <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/authentication/reset-password/:userId">
                <ConfigurasiRecover />
            </Route>
            <Route path="/recover">
                <Recover />
            </Route>
            <Route path="/ref/:username">
                <Register />
            </Route>
            <Route path="*">
                <PageNotFound />
            </Route> */}
          </Switch>
        </ScrollToTop>
      </I18nProvider>
    </>
  );
}
