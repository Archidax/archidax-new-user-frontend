import React from "react";
import { LOCALES } from "../../../../../i18n";

function Flags(props) {
  const { setLocale, flag } = props;

  const language = (type) => {
    // if (type === "english") {
    //   setLocale(LOCALES.ENGLISH);
    //   // setCountry("English");
    // } else if (type === "indonesia") {
    //   setLocale(LOCALES.INDONESIA);
    //   // setCountry("Indonesia");
    // } else if (type === "france") {
    //   // setLocale(LOCALES.FRANCE);
    //   // setCountry("France");
    // } else if (type === "japan") {
    //   // setLocale(LOCALES.JAPAN);
    //   // setCountry("Japan");
    // } else if (type === "russia") {
    //   // setLocale(LOCALES.RUSSIA);
    //   // setCountry("Russia");
    // } else if (type === "germany") {
    //   // setLocale(LOCALES.GERMANY);
    //   // setCountry("Germany");
    // } else if (type === "korea") {
    //   // setLocale(LOCALES.KOREA);
    //   // setCountry("Korean");
    // } else if (type === "vietnam") {
    //   props.setLocale(LOCALES.VIETNAM);
    //   // setCountry("Vietnam");
    // } else if (type === "china") {
    //   // setLocale(LOCALES.CHINA);
    //   // setCountry("China");
    // }

    if (type === "indonesia") {
      setLocale(LOCALES.INDONESIA);
      localStorage.setItem('language', 'ID')
    } else {
      setLocale(LOCALES.ENGLISH);
      localStorage.setItem('language', 'EN')
    }
  };

  return (
    <div className="btn-group d-sm-flex d-none ml-3 mr-3">
      <div
        className="ci-flag-btn"
        type="button"
        id="dropdownMenuButtonFlag"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span
          className={`flag-icon ${flag} flag-icon-squared ci-flag-btn-icon`}
        />
      </div>
      <div
        className="dropdown-menu dropdown-menu-right ci-dropdown-flag pt-0"
        aria-labelledby="dropdownMenuButtonFlag"
      >
        <div
          className="container-fluid"
          style={{ background: "#F9BA42", borderRadius: "4px 4px 0 0" }}
        >
          <div className="w-100">
            <div className="row">
              <div className="col-12 col-md-12 py-2">
                <p className="text-dark font-weight-bold mb-0 lable-title font-12">
                  Pilih Bahasa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 mt-0 mb-2 ci-dropdown-flag-scrollbar">
          <div
            className="dropdown-item ci-dropdown-flag-scrollbar-item py-2"
            onClick={() => language("english")}
          >
            <span className="flag-icon flag-icon-us flag-icon-squared ci-flag-item-icon" />
            <span className="ml-2">English</span>
          </div>
          <div
            className="dropdown-item ci-dropdown-flag-scrollbar-item py-2"
            onClick={() => language("indonesia")}
          >
            <span className="flag-icon flag-icon-id flag-icon-squared ci-flag-item-icon" />
            <span className="ml-2">Indonesia</span>
          </div>
          <div
            className="dropdown-item ci-dropdown-flag-scrollbar-item py-2"
            onClick={() => language("vietnam")}
          >
            <span className="flag-icon flag-icon-vn flag-icon-squared ci-flag-item-icon" />
            <span className="ml-2">Vietnam</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flags;
