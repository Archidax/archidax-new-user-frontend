import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
//import search from "../../assets/img/magnifying-glass.png";
import Footer from "../footerComponents/footerHomePage/FooterHomePage";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import List from "./listberita";
import Content from "./contentberita";
import Header from "../headerComponents/headerBerita";
import { berita, beritaRecent } from "../../stores/berita/functions";

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
              <h1 className="font-bold text-gold" style={{letterSpacing: "0.1em"}}>Berita</h1>
            </div>
            <div className="col-12 my-3">
              <p className="font-18" style={{letterSpacing: "1px", lineHeight: "1.7em"}}>
                Pelajari tentang Cryptocurrency, Berita, Wawasan Pakar, dan Tips Perdagangan
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
              to="/berita"
              className={`nav-link active berita-nav-item ${path === "/berita" ? "active" : ""}`}
              id="pills-berita-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-berita"
              aria-selected="true"
            >
              Berita
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/berita/pengumuman"
              className={`nav-link berita-nav-item ${path === "/berita/pengumuman" ? "active" : ""}`}
              id="pills-pengumuman-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-pengumuman"
              aria-selected="false"
            >
              Pengumuman
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/berita/artikel"
              className={`nav-link berita-nav-item ${path === "/berita/artikel" ? "active" : ""}`}
              id="pills-artikel-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-artikel"
              aria-selected="false"
            >
              Artikel
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/berita">
          <List title="Berita" data={dataBerita.Berita} />
        </Route>
        <Route exact path="/berita/pengumuman">
          <List title="Pengumuman" data={dataBerita.Pengumuman} />
        </Route>
        <Route exact path="/berita/artikel">
          <List title="Artikel" data={dataBerita.Artikel} />
        </Route>
        <Route path="/berita/:slug">
          <Content />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
