import React,{useEffect} from 'react';
import Popup from '../../popUps'
export default function PopupFacebook(props) {
  useEffect(() => {
    return () => {
        Popup.close()
    }
    }, [])
  return (
    <div className="modal-bounty">
      <div className="modal-inner-bounty facebook">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Facebook Campaign</h2>
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
            <div className="col-8">
              <span style={{ color: '#F9BD00' }}>How to join</span>
              <ol type="1">
                <li>
                  Every participant must follow the Archidax Official Facebook
                  Page.and follow our telegram ARCHIDAX EXCHANGES
                </li>
                <li>Facebook accounts must have a minimum of 200 friends.</li>
                <li>
                  You must comment, like, and repost at least 5 posts of
                  ARCHIDAX EXCHANGES and create 1 original post weekly. Only
                  like or reposts won’t be rewarded. You need to comment, like,
                  and repost to get paid.
                </li>
                <li>
                  Participants can share a maximum of 1 post/repost in a day.
                </li>
                <li>Participants must use</li>
                <li>
                  5. Participants can share a maximum of 1 tweet/retweet in a
                  day.
                </li>
                <li>6. Participants must use</li>
              </ol>
              <span>
                #ARCHIDAX #cryptocurrency #cryptoexchanges #blockchain
                #crowdfunding #bounty
              </span>
            </div>
            <div className="col">
              <span className="font-xs" style={{ color: '#F9BD00' }}>
                Rewards
              </span>
              <span className="text-bold d-block">200.000 ARTO($40.000)</span>
              <div className="prize">
                <span className="d-block font-xs">
                  250 - 1k Friends: <b>3 Stakes/week</b>{' '}
                </span>
                <span className="d-block font-xs">
                  1001 - 3k Friends: <b>5 Stakes/week</b>{' '}
                </span>
                <span className="d-block font-xs">
                  3001 - Above: <b>10 Stakes/week</b>{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
