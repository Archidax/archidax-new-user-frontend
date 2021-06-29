import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import HeaderDashboard from '../headerComponents/headerDashboard'
import {
  GetListingExchange,
  setMyFav,
} from "../../stores/pasartrading/functions";

import { getMyAssets } from "../../stores/wallet/functions";

// Import Component Header and Sidebar
import HeaderDashboard from "../../components/headerComponents/headerDashboard";
import SidebarDashboard from "../../components/headerComponents/sidebarDashboard";
import VerificationPage1 from "../../components/verificationComponents/VerificationPage1";
import VerificationPage2 from "../../components/verificationComponents/VerificationPage2";
import VerificationWaiting from "../../components/verificationComponents/VerificationWaiting";

// Import Header Trade
import HeaderTrade from "../../components/headerComponents/headerDashboard/headerTrade";

// Import Components
import Dashboard from "../../components/dashboardpageComponents";
import PasarPage from "../tradepage/PasarPage";
import Voucher from "../../pages/voucherpage/index";
import ProgramAfiliasi from "../../components/programAfiliasiComponents/index";

// // pasar
// import Pasar from "../tradepage";
// import DepthChart from "../../pages/depthChartpage/index";
// import AdvanceChart from "../../components/tradeComponents/chart/index.jsx";

// Pages
// import Wallet from "../../components/walletpageComponents";
import WalletPage from "../walletpage";
import SetorTarikPage from "../setortarikpage";
import Profile from "../profilepage/profileTab";
import EmailChange from "../profilepage/emailTab";
import TelefonChange from "../profilepage/telefonTab";
import AddressChange from "../profilepage/alamatTab";
import EmergencyChange from "../profilepage/kontakDaruratTab";
import ManajemenAPIChange from "../managemenapipage/manajementab";
import KeamananPage from "../keamanaanakunpage";
import LimitChange1 from "../profilepage/limitAkunTab/step1";
import LimitChange2 from "../profilepage/limitAkunTab/step2";
import TransactionCryptoPage from "../transactioncryptopage";
import Bantuan from "../bantuanpage";
import Riwayat from "../riwayatpage";
import Protectedkyc from "./protectedkyc";
import LoadingPage from "../../pages/loadingpage";
// import _404Page from "../404page";

import { readMe, getStatus, getNotifications, initLoad } from "../../stores";
import SetorKonfirmasi from "../../components/penyetoranPageComponents/tabs/setorTabs/SetorKonfirmasi";

import { I18nProvider, LOCALES } from "../../i18n";
import CopyrightDashboard from "../../components/footerComponents/copyrightComponents/CopyrightDashboard";
import axios from "axios";
import LaunchpadPartner from "../launchpadPartner";
import LaunchpadPartnerDetail from "../launchpadPartner/LaunchpadPartnerDetail";
// import PasarHomePage from "../tradepage/PasarPage";
// import BasicChart from "../../components/tradeComponents/basicChart/BasicChart";

function RouteDashboardPage(props) {
  const { flag, locale, setLocale } = props
  const isLoginAccount = useSelector((state) => state.userReducer.isLogin)
  const loading = useSelector((state) => state.loadingReducer)
  const history = useHistory()
  const dispatch = useDispatch()

  const [activeSidebar, setActiveSidebar] = useState("")
  // const [notactiveSidebar, setnotActiveSidebar] = useState("active")
  const { email } = useSelector((state) => state?.profileReducer)

  const onClickActiveSidebar = () => {
    if (activeSidebar === "") {
      setActiveSidebar("active");
    } else if (activeSidebar === "active") {
      setActiveSidebar("");
    }
  };

  const Sidebar = () => {
    if (useRouteMatch(`/pasar/:symbol`)?.isExact) {
      return "";
    } else {
      return (
        <SidebarDashboard
          onClickActiveSidebar={onClickActiveSidebar}
          activeSidebar={activeSidebar}
        />
      );
    }
  };

  useEffect(() => {
    if (isLoginAccount) {
      if(email){
        if (localStorage.getItem("myFav")) {
          const data = JSON.parse(localStorage.getItem("myFav"));
          dispatch(setMyFav(data[email] || []));
        }
      } else {
        // getNotifications(dispatch)
        // getStatus(dispatch, history)
        // getMyAssets(dispatch)
        // readMe(dispatch, history);
        initLoad(dispatch)
      }
      // dispatch(GetListingExchange());
    } 
  }, [email, isLoginAccount]);

  let match = useRouteMatch({
    path: "/pasar/:symbol",
    strict: true,
    sensitive: true,
  });

  return loading.readMeLoading ? (
    <LoadingPage />
  ) : (
    <div className="wrapper">
      <I18nProvider locale={locale}>
        <Sidebar onClickActiveSidebar={onClickActiveSidebar} />
        <Switch>
          {/* <Dashboard /> */}
          <div id="content" className={`content-wrapper ${activeSidebar}`}>
            {/* <Header /> */}
            {match ? (
              <HeaderTrade
                setLocale={setLocale}
                flag={flag}
                onClickActiveSidebar={onClickActiveSidebar}
              />
            ) : (
              <HeaderDashboard
                setLocale={setLocale}
                flag={flag}
                onClickActiveSidebar={onClickActiveSidebar}
              />
            )}
            <Protectedkyc path={`/manajemen-api`}>
              <ManajemenAPIChange />
            </Protectedkyc>
            <Protectedkyc path={`/profile/ubah-kontak-darurat`}>
              <EmergencyChange />
            </Protectedkyc>
            <Protectedkyc path={`/profile/ubah-alamat`}>
              <AddressChange />
            </Protectedkyc>
            <Protectedkyc path={`/profile/ubah-email`}>
              <EmailChange />
            </Protectedkyc>
            <Protectedkyc path={`/profile/limit-akun/step2`}>
              <LimitChange2 />
            </Protectedkyc>
            <Protectedkyc exact path={`/profile/limit-akun`}>
              <LimitChange1 />
            </Protectedkyc>
            <Protectedkyc path={`/profile/ubah-telefon`}>
              <TelefonChange />
            </Protectedkyc>
            <Protectedkyc exact path={`/profile`}>
              <Profile />
            </Protectedkyc>
            <Protectedkyc path={"/pasar"} exact>
              <PasarPage />
            </Protectedkyc>
            <Protectedkyc path={`/setor-rupiah/konfirmasi`}>
              <SetorKonfirmasi />
            </Protectedkyc>
            <Protectedkyc path={`/wallet/deposit`}>
              <SetorTarikPage />
            </Protectedkyc>
            <Protectedkyc exact path={`/wallet`}>
              <WalletPage />
            </Protectedkyc>
            <Protectedkyc path={`/crypto`}>
              <TransactionCryptoPage />
            </Protectedkyc>
            <Protectedkyc path={`/voucher`}>
              <Voucher />
            </Protectedkyc>
            <Protectedkyc path={`/program-afiliasi`}>
              <ProgramAfiliasi />
            </Protectedkyc>
            <Protectedkyc path={`/keamanan`}>
              <KeamananPage />
            </Protectedkyc>
            <Protectedkyc path={"/riwayat"}>
              <Riwayat />
            </Protectedkyc>
            <Route path={`/verification/step1`}>
              <VerificationPage1 />
            </Route>
            <Route path={`/verification/step2`}>
              <VerificationPage2 />
            </Route>
            <Route path={`/verification/waiting`}>
              <VerificationWaiting />
            </Route>
            <Route exact path={`/launchpad-partner`}>
              <LaunchpadPartner />
            </Route>
            <Route path={`/launchpad-partner/:id`}>
              <LaunchpadPartnerDetail />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <CopyrightDashboard />
          </div>
        </Switch>
      </I18nProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default RouteDashboardPage;
