import React from "react";
import BountyLogo from "../../assets/img/bounty/bountylogo.png";
import BountyIcon from "../../assets/img/bounty/bounty.png";

const bannerbountypage = () => {
  return (
    <div className="jumbotron-bounty bounty-banner">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-4 col-md-5 col-sm-12">
          <img
            src={BountyLogo}
            alt="bounty logo"
            style={{ width: "100%", maxWidth: "250px", height: "auto" }}
          />
        </div>
        <div className="col-lg-7 col-md-8 col-sm-12">
          <h5 className="info">
            Archidax Exchange invite you to be a part of the Bounty Event held
            in conjunction with the launch of the Archidax trading Platform.
          </h5>
          <div className="row my-5 d-flex justify-content-start">
            <div className="col-lg-2 col-md-2 col-xs-12 col-sm-12 mr-4">
              <img
                src={BountyIcon}
                alt="bounty"
              />
            </div>
            <div className="col-lg-8 col-md-7 col-xs-12 col-sm-12" >
              <table>
                <tr>
                  <td>
                    <span>Token name</span>
                  </td>
                  <td>
                    <span className="text-bold ml-3">ARCHI TOKEN (ARTO)</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Total Prize/Reward</span>
                  </td>
                  <td>
                    <span className="text-bold ml-3">
                      2.000.000 ARTO (400.000 USDT)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Current Token Prized</span>
                  </td>
                  <td>
                    <span className="text-bold ml-3">0.2 USDT</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div classname="info">
            <span className="text-bold">BOUNTY START DATE : JUNE 27, 2021</span>
            <br />
            <span>
              Week Starts on Sunday 00:00 UTC and Ends on Sunday 23: 59 UTC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bannerbountypage;
