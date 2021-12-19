import React from 'react';
import HeaderBountyPage from '../../components/headerComponents/headerbountypage';
import BannerBountyPage from '../../components/bountypageComponents/bannerbountypage';
import FooterBesideHomePage from '../../components/footerComponents/footerHomePage/FooterBesideHomePage';
import InfoBountyPage from '../../components/bountypageComponents/infobountypage';
import BountyProgramPage from '../../components/bountypageComponents/bountyprogrampage';

const index = () => {
  return (
    <div className="wrapper text-white font-roboto">
      <HeaderBountyPage />
      <BannerBountyPage />
      <InfoBountyPage />
      <BountyProgramPage />
      <FooterBesideHomePage />
    </div>
  );
};

export default index;
