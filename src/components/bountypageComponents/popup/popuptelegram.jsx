import React,{useEffect} from 'react';
import Popup from '../../popUps'

export default function PopupTelegram(props) {
  useEffect(() => {
    return () => {
        Popup.close()
    }
    }, [])
  return (
    <div className="modal-bounty">
      <div className="modal-inner-bounty telegram">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Telegram Campaign</h2>
            <span onClick={() => {
                            if(props.onClickOk){
                                Popup.close()
                                props.onClickOk()
                            }else {
                                Popup.close()
                            }
                        }} className="close-btn">
              {' '}
              X{' '}
            </span>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <span style={{ color: '#F9BD00' }}>How to join</span>
              <span className="font-md d-block">
                1. Every participant must follow the ARCHIDAX EXCHANGES Official
                Facebook Page and follow our telegram ARCHIDAX EXCHANGES,
              </span>
              <span className="font-md d-block">
                Spread the word in your Telegram channel/group about ARCHIDAX
                EXCHANGES and earn tokens. The member's number is fixed and
                won't be changed after you filled out the form.
              </span>
              <ul>
                <li>
                  A maximum of 1 post per day is allowed in each channel/group.
                </li>
                <li>
                  Channels/groups with fake/bot members (invited without
                  permission) will be disqualified immediately.
                </li>
                <li>
                  There should be appropriate activity in the channel/group both
                  now and in history, corresponding to its size of course.
                </li>
                <li>
                  Posts must be constructive and to the point. Spam, low-quality
                  posts, copy/paste, and off-topic posts are strictly
                  prohibited. Users found doing so will be immediately and
                  permanently disqualified from all bounty activities. All your
                  own posts must contain our hashtags #ARCHIDAX #digital asset
                  #tecosystem#blockchain #bounty #cryptotrading and link
                  https://archidax.net
                </li>
                <li>
                  Send your progress report weekly by submitting a new post at
                  the end of each week.
                </li>
              </ul>
            </div>
            <div className="col">
              <span className="font-xs" style={{ color: '#F9BD00' }}>
                Rewards
              </span>
              <span className="text-bold d-block">300.000 ARTO($60.000)</span>

              <div className="prize">
                <span className="d-block text-bold font-xs">
                  For Channels :
                </span>
                <span className="d-block font-xs">
                  500 - 2500 members: <b>1 Stakes per post</b>{' '}
                </span>
                <span className="d-block font-xs">
                  2501 - 5000 members: <b>3 Stakes per post</b>{' '}
                </span>
                <span className="d-block font-xs">
                  5001 - Above: <b>5 Stakes per post</b>{' '}
                </span>
                <span className="d-block text-bold mt-2 font-xs">
                  For Groups :
                </span>
                <span className="d-block font-xs">
                  (the posts has to be pinned for 48 hours and your reports must
                  include screenshots to prove it)
                </span>
                <span className="d-block font-xs">
                  500 - 2500 members: <b>0.5 Stakes per post </b>{' '}
                </span>
                <span className="d-block font-xs">
                  2501 - 5000 members: <b>1 Stakes per post</b>{' '}
                </span>
                <span className="d-block font-xs">
                  5001 - above members: <b>3 Stakes per post</b>{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
