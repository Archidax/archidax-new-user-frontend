import React from "react";

export default function FooterDashboard() {
  return (
    <div className="bg-homepage2 py-4">
      <div className="container pl-0 pr-0">
        <hr className="hr-copyright" />
        <div className="d-flex justify-content-between">
          <p className="text-white mb-0 py-2 font-14">
            Copyright © 2021 CryptoIndex. All Rights Reserved
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" target="_blank" title="twitter">
                  <i className="fa fa-twitter text-gray2"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="facebook">
                  <i className="fa fa-facebook text-gray2"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="instagram">
                  <i className="fa fa-instagram text-gray2"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="pinterest">
                  <i className="fa fa-pinterest text-gray2"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="vimeo">
                  <i className="fa fa-vimeo text-gray2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
