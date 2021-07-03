import React from 'react';

export default function PopupTwitter(props) {
  return (
    <div className="modal">
      <div className="modal-inner twitter">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Twitter Campaign</h2>
            <span onClick={props.onHide} className="close-btn">
              {' '}
              X{' '}
            </span>
          </div>
          <div className="row">
            <div className="col-8">
              <span style={{ color: '#F9BD00' }}>How to join</span>
              <ol type="1">
                <li>
                  Every participant must follow the official Twitter page of
                  Archidax Exchanges.
                </li>
                <li> Submit the registration here.</li>
                <li>
                  Submit your weekly activity log in this thread using the
                  format below.
                </li>
                <li>
                  The week will close on at Monday 9 AM Our Server Time. A post
                  will be made and any reports that are posted after that post
                  will not be counted.
                </li>
                <li>
                  Twitter account must be original (90% in Twitter audit). If
                  you have less than 90% real followers you will be kicked out
                  of the campaign. Cleaning your Twitter account is useless.
                </li>
                <li>
                  Participants must comment, like, and retweet at least 5 tweets
                  of Archidax Exchanges and create 1 original tweet weekly. Only
                  like or retweet won’t be rewarded. You need to comment, like
                  and retweet in order to get full stakes.
                </li>
                <li>
                  Participants can share a maximum of 1 tweet/retweet in a day.
                </li>
                <li> Participants must use</li>
              </ol>
              <span>
                #Archidax #cryptocurrency #blockchain #cryptoexchanges #IEO
                #crowdfunding
              </span>
            </div>
            <div className="col">
              <span className="font-xs" style={{ color: '#F9BD00' }}>
                Rewards
              </span>
              <span className="text-bold d-block">200.000 ARTO($40.000)</span>
              <div className="prize">
                <span className="d-block font-xs">
                  100 - 300 Followers: <b>12 Stakes/week</b>{' '}
                </span>
                <span className="d-block font-xs">
                  301 - 1k Followers: <b>24 Stakes/week</b>{' '}
                </span>
                <span className="d-block font-xs">
                  1001 - 4k Followers: <b>56 Stakes/week</b>{' '}
                </span>
                <span className="d-block font-xs">
                  4001 - 10k Followers: <b>120 Stakes/week </b>{' '}
                </span>
                <span className="d-block font-xs">
                  10k Above: <b>250 Stakes/week</b>{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
