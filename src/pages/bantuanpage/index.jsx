import React from 'react';
import Bantuan from "../../components/bantuanpage/index";
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage';
import HeaderBerita from '../../components/headerComponents/headerBerita';

export default function index() {
  return (
    <div>
      <HeaderBerita />
      <Bantuan/>
      <FooterHomePage />
    </div>
  )
}
