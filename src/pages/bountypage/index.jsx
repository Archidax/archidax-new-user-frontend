import React from 'react';
import HeaderBountyPage from '../../components/headerComponents/headerbountypage';
import BannerBountyPage from '../../components/bountypageComponents/bannerbountypage';
import FooterBesideHomePage from '../../components/footerComponents/footerHomePage/FooterBesideHomePage';
import InfoBountyPage from '../../components/bountypageComponents/infobountypage';
const index = () => {
  return (
    <div className="wrapper">
      <HeaderBountyPage />
      <BannerBountyPage />
      <InfoBountyPage />
      <FooterBesideHomePage />
    </div>
  );
};

export default index;
