import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

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

// Footer Page
import SyaratPengguna from "../pages/footercontent/SyaratPengguna";

import ProtectedRoute from "./protectedRoute";
// import ProtectedLogin from "./protectedLogin";
// import ProtectedGAuth from "./protectedGAuth";

// i18n
import { I18nProvider, LOCALES } from "../i18n";
import FeeRate from "./feeRatepage/FeeRate";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";
import Pasar from "./tradepage";

// pasar
// import PasarHomePage from "./pasarHomepage";
import PanduanPengguna from "./panduanpengguna";
import PanduanCopyTrade from "./panduanCopyTrade";
import DepthChart from "./depthChartpage/index";
import AdvanceChart from "../components/tradeComponents/chart/index";
import SubscribedLP from "../components/beritapageComponents/SubscribedLP";
import KebijakanKYCAML from "./listfooterpage/KebijakanKYCAML";
import DepositAndWithdrawal from "./listfooterpage/DepositAndWithdrawal";
import TransaksiAsetDigital from "./listfooterpage/TransaksiAsetDigital";
import { useDispatch, useSelector } from "react-redux";

import { GetListingExchange, setMyFav } from "../stores/pasartrading/functions";
import KeuanganPage from "./keuangan";

export default function MainPages() {
  const [locale, setLocale] = React.useState("");
  const isLoginAccount = useSelector((state) => state.userReducer.isLogin);
  const { email } = useSelector((state) => state?.profileReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoginAccount) {
      if (localStorage.getItem("myFav") && email) {
        const data = JSON.parse(localStorage.getItem("myFav"));
        dispatch(setMyFav(data[email] || []));
      }
      dispatch(GetListingExchange());
    }
  }, [email, dispatch, isLoginAccount]);

  useEffect(() => {
    axios
      .get("https://ipclient.herokuapp.com/")
      .then(({ data }) => {
        if (data.country === "ID") {
          setLocale(LOCALES.INDONESIA);
        } else {
          setLocale(LOCALES.ENGLISH);
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <I18nProvider locale={locale}>
        <ScrollToTop>
          <Switch>
            <Route path="/home">
              <HomePage setLocale={setLocale} />
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
            <Route path="/berita">
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
            <Route path={`/chart/:pair`}>
              <AdvanceChart />
            </Route>
            <Route path={`/marketdepth/:symbol`}>
              <DepthChart />
            </Route>
            <Route path={"/pasar/:symbol"}>
              <Pasar />
            </Route>
            <Route path={`/pengajuan-koin`}>
              <PengajuanKoin />
            </Route>
            <Route path={`/bantuan`}>
              <Bantuan />
            </Route>
            <Route path="/keuangan">
              <KeuanganPage />
            </Route>
            <ProtectedRoute path="/">
              <RouteDashboardPage setLocale={setLocale} />
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
