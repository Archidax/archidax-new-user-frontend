import React,{useEffect} from 'react'
import Popup from '../../popUps'
export default function PopupYoutube(props) {
  useEffect(() => {
    return () => {
        Popup.close()
    }
    }, [])
  return (
    <div className="modal-bounty">
      <div className="modal-inner-bounty youtube">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Youtube Campaign</h2>
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
              <ul>
                <li>Subscribe to our Youtube channel ⇖.</li>
                <li>Only one account for one person is allowed. </li>
                <li>
                  Give likes on our videos, left positive and constructive
                  comments.{' '}
                </li>
                <li>
                  You can not delete your comments during this campaign. ❕
                  Don’t comment on one post twice, it will be regarded as spam.{' '}
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
                <li className="pb-5 mb-5">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
