import React from "react";
import { Link } from "react-router-dom";

export default function CopyrightDashboard() {
  return (
    <div className="bg-homepage2 container-fluid py-3">
      <div className="row text-white">
        <div className="col-12 col-md-4">
          <div className="">
            <h6 className="mb-0 font-14">
              All rights reserved by{" "}
              <span className="text-gold">Cryptoindex</span>
            </h6>
          </div>
        </div>
        <div className="col-12 col-md-8 mt-sm-0 mt-2">
          <div className="row justify-content-sm-end justify-content-center">
            <div className="col-4 col-md-2">
              <Link to="/syara-pengguna" target="_blank">
                <h6 className="mb-0 font-14">Syarat Pengguna</h6>
              </Link>
            </div>
            <div className="col-4 col-md-2">
              <Link to="/kebijakan-privasi" target="_blank">
                <h6 className="mb-0 font-14">Kebijakan Privasi</h6>
              </Link>
            </div>
            <div className="col-4 col-md-2">
              <Link to="/hubungi-kami" target="_blank">
                <h6 className="mb-0 font-14">Hubungi Kami</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
