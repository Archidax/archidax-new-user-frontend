import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export default function hubungiKami() {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -6.2348849495056, lng: 106.80886229668164 }}
      >
        <Marker position={{ lat: -6.2348849495056, lng: 106.80886229668164 }} />
      </GoogleMap>
    )),
  );

  return (
    <div className="container hubungi-kami" style={{ minHeight: "41vh" }}>
      <h2 className="artikel-bantuan-column-title ci-text-white font-16">
        Hubungi Kami
      </h2>
      <p className="hubungi-kami-message">
        Bila Anda memiliki kendala, kritik maupun saran, jangan sungkan untuk
        mengkontak kami via telepon dan e-mail:
      </p>
      <div className="row">
        <div className="col">
          <MapWithAMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
           
            
          />
        </div>
        <div className="col kolom-kontak">
          <h6>Kontak</h6>
          <div style={{ marginBottom: "2vh" }}>
            <div className="row">
              <div className="col">
                <p className="kontak">Telepon</p>
              </div>
              <div className="col">
                <p className="kontak-info">0811-50525588</p>
              </div>
            </div>
            <div className="row ">
              <div className="col">
                <p className="kontak">Pertanyaan Umum</p>
              </div>
              <div className="col">
                <p className="kontak-info">support@cryptoindex.id</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="kontak">Security Bug Report</p>
              </div>
              <div className="col">
                <p className="kontak-info">bug@cryptoindex.id</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="kontak">Business Development</p>
              </div>
              <div className="col">
                <p className="kontak-info">bizdev@cryptoindex.id</p>
              </div>
            </div>
          </div>
          <h6>Alamat</h6>
          <div>
            <li className="alamat" style={{ listStyle: "none" }}>
              <span className="font-12">KEBAYORAN BARU, JAKARTA</span>
            </li>
            <li className="alamat-deskripsi">
              Jl. Erlangga I No.18RT.1/RW.3, Selong, Kec. Kby. Baru, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12110
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
