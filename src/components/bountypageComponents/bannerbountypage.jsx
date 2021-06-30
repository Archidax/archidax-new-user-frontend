import React from 'react';
import BountyLogo from '../../assets/img/bounty/bountylogo.png';
const bannerbountypage = () => {
  return (
    <div className="jumbotron-bounty bounty-banner">
      <div className="row d-flex justify-content-center">
        <div className="col">
          <div>
            <img src={BountyLogo} alt="bounty logo" />
          </div>
        </div>
        <div className="col">
          <h2>
            Archidax Exchange invite you to be a part of the Bounty Event held
            in conjunction with the launch of the Archidax trading Platform.
          </h2>
          <div className="row">
            <div className="col">
              <img src="" alt="" />
            </div>
            <div className="col">
              <table>
                <tr>
                  <td>
                    <span>Token name</span>
                  </td>
                  <td>
                    <span>ARCHI TOKEN (ARTO)</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Total Prize/Reward</span>
                  </td>
                  <td>
                    <span>2.000.000 ARTO (400.000 USDT)</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Current Token Prize</span>
                  </td>
                  <td>
                    <span>0.2 USDT</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <h1>BOUNTY START DATE : JUNE 27, 2021</h1>
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
