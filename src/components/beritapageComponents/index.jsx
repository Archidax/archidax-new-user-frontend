import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Jumbotron } from "react-bootstrap";
//import search from "../../assets/img/magnifying-glass.png";
import Footer from "../footerComponents/footerHomePage/FooterHomePage";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import List from "./listberita";
import Content from "./contentberita";
import Header from "../headerComponents/headerBerita";
import { berita, beritaRecent } from "../../stores/berita/functions";
import Translate from "../../i18n/Translate";

export default function Index () {
  const path = useLocation()
  const dispatch = useDispatch();

  useEffect(() => {
    berita(dispatch);
    beritaRecent(dispatch);
  }, [dispatch]);

  const dataBerita = useSelector((state) => state.beritaReducer);

  return (
    <div className="berita">
      <Header />
      <Jumbotron className="berita-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h1 className="font-bold text-gold" style={{letterSpacing: "0.1em"}}>{Translate('br_berita')}</h1>
            </div>
            <div className="col-12 my-3">
              <p className="font-18" style={{letterSpacing: "1px", lineHeight: "1.7em"}}>
                {Translate('br_text_banner')}
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="input-group ci-inputDefault-border col-12 col-md-7">
              <input type="text" className="form-control ci-inputDefault-border-input ci-pd" placeholder="Search" name="search" required="" />
              <div className="ci-inputDefault-border-appendR" style={{cursor: "pointer"}}>
                <i className="fas fa-search ci-inputDefault-border-appendR-icon text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div style={{ background: "#151933" }} className="mb-5">
        <ul
          className="container nav nav-pills mb-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <Link
              to="/news"
              className={`nav-link active berita-nav-item ${path === "/news" ? "active" : ""}`}
              id="pills-berita-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-berita"
              aria-selected="true"
            >
              {Translate('br_berita')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/news/announcement"
              className={`nav-link berita-nav-item ${path === "/news/announcement" ? "active" : ""}`}
              id="pills-pengumuman-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-pengumuman"
              aria-selected="false"
            >
              {Translate('br_pengumuman')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/news/article"
              className={`nav-link berita-nav-item ${path === "/news/artikel" ? "active" : ""}`}
              id="pills-artikel-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-artikel"
              aria-selected="false"
            >
              {Translate('br_artikel')}
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/news">
          <List title={Translate('br_berita')} data={dataBerita.Berita} />
        </Route>
        <Route exact path="/news/announcement">
          <List title={Translate('br_pengumuman')} data={dataBerita.Pengumuman} />
        </Route>
        <Route exact path="/news/article">
          <List title={Translate('br_artikel')} data={dataBerita.Artikel} />
        </Route>
        <Route path="/news/:slug">
          <Content />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
