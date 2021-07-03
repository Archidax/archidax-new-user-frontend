import React from 'react';

export default function PopupTiktok(props) {
  return (
    <div className="modal">
      <div className="modal-inner tiktok">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Tiktok Campaign</h2>
            <span onClick={props.onHide} className="close-btn">
              {' '}
              X{' '}
            </span>
          </div>
          <div className="row">
            <div className="col-8">
              <span style={{ color: '#F9BD00' }}>How to join</span>
              <span className="font-md d-block">
                Discuss and review Archidax Exchanges tells of a new exchange
                that provides convenience and comfort and brings a sense of
                security to trade with features that help traders
              </span>
              <ul>
                <li>Subscribe on our TikTok channel.</li>
                <li>Only one account for one person is allowed. </li>
                <li>
                  Give likes on our videos, left positive and constructive
                  comments.
                </li>
                <li>
                  You can not delete your comments during this campaign. ❕
                  Don’t comment on one post twice, it will be regarded as spam.
                </li>
                <li>
                  Comments must be constructive and to the point. Spam,
                  low-quality posts, copy/paste, and off-topic comments are
                  strictly prohibited. Users found doing so will be immediately
                  and permanently disqualified from all bounty activities.
                </li>
                <li>
                  Your reports must contain screenshots (use imgur, postimage,
                  radikal, or similar) of your likes+comments.
                </li>
                <li>
                  end your progress report weekly by submitting a new post at
                  the end of each week.
                </li>
              </ul>

              <span className="mt-3 font-md">
                Can produce max 3 content per day or 30 content a week
              </span>
              <span className="font-md d-block mb-5 pb-5">
                #cryptoexchanges #archidax #cryptomarket #cryptocurrency
              </span>
            </div>
            <div className="col">
              <span className="font-xs" style={{ color: '#F9BD00' }}>
                Rewards
              </span>
              <span className="text-bold d-block">300.000 ARTO($60.000)</span>
              <span className="font-xs">
                <br />1 post video Min 20 Seconds: <b>50 ARTO</b>
                <br />1 Post Video Min 30 Seconds: <b>75 ARTO</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
