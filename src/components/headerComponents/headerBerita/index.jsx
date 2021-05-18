import React from "react";
import { Link } from "react-router-dom";
import FlagsDropdownHeader from "../headerDashboard/elements/flagsdropdown";
import logo from "../../../assets/img/logoArchidax.png";
import Translate from "../../../i18n/Translate";

export default function Index() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "#151933" }}>
      <div className="container">
        <Link to="/home">
          <img src={logo} alt="logocryptoindex" width="220" />
        </Link>
        <div>
          {/* <FlagsDropdownHeader/> */}
          <Link to="/" style={{
            letterSpacing: '1.2px'
          }} className="font-roboto ci-text-white mb-0 text-gold">{Translate('hberita_kembali')}</Link>
        </div>
      </div>
    </nav>
  );
};
