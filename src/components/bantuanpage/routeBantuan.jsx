import React from 'react';
import { Route, Switch } from "react-router-dom";
import ListBantuan from "./listbantuan";
import BantuanContent from "./bantuancontent/index";
import HubungiKami from "./hubungiKami";
// import Artikel from './bantuancontent/artikelBantuan'
import SearchPage from "./SearchPage";


export default function routeBantuan() {
  return (
    <div>
      <Switch>
        <Route exact path="/bantuan">
          <ListBantuan/>
        </Route>
        <Route exact path="/bantuan/pencarian/:cari">
          <SearchPage/>
        </Route>
        <Route path="/bantuan/hubungi-kami">
          <HubungiKami/>
        </Route>
        <Route path="/bantuan/:categorySlug">
          <BantuanContent/>
        </Route>
      </Switch>
    </div>
  )
}
