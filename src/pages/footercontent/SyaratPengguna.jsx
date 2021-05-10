import React from "react";
import FooterHomePage from "../../components/footerComponents/footerHomePage/FooterHomePage";
import HeaderAlternate from "../../components/headerComponents/headerHomePage/HeaderAlternate";
import SyaratPenggunaComponents from "../../components/syaratpengguna/SyaratPenggunaComponents";

export default function SyaratDanKetentuan() {
  return (
    <div>
      <HeaderAlternate />
      <SyaratPenggunaComponents />
      <FooterHomePage />
    </div>
  );
}
