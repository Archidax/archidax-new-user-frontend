import React from "react";
import { Link } from "react-router-dom";

export default function DownloadPage() {
  return (
    <div>
      <Link
        to="/files/Whitepaper_Archidax_EN.pdf"
        className="d-block clearfix"
        target="_blank"
        download
      >
        <h4>DOWNLOAD WHITEPAPER</h4>
        {/* <h6 className="mt-2">Codeo Gold 200px</h6> */}
      </Link>
    </div>
  );
}
