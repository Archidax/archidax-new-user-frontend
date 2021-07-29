import React,{useEffect} from 'react'
import Popup from '../../popUps'
export default function PopupContentBlog(props) {
  useEffect(() => {
    return () => {
        Popup.close()
    }
    }, [])
  return (
    <div className="modal-bounty">
      <div className="modal-inner-bounty contentblog">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Content Blog & Medium Campaign</h2>
            <span  onClick={() => {
                            if(props.onClickOk){
                                Popup.close()
                                props.onClickOk()
                            }else {
                                Popup.close()
                            }
                        }}  className="close-btn">
              {' '}
              X{' '}
            </span>
          </div>
          <div className="row">
            <div className="col-8">
              <span className="font-xs" style={{ color: '#F9BD00' }}>
                This bounty consists of 2 parts :
              </span>
              <span className="d-block font-xs">⓵ Content /article</span>
              <span className="d-block font-xs">⓶ Medium Campaign</span>
              <span className="font-xs" style={{ color: '#F9BD00' }}>
                How to Join Blog Campaign :
              </span>
              <ol type="1" className="font-xs">
                <li>
                  Articles need to have at least 400 words and receive 10
                  likes/comments or 100 views to get paid.
                </li>
                <li>Each participant can write a maximum 3 article only.</li>
                <li>
                  If you produce a high-quality content article we may let you
                  write 5 articles per month.
                </li>
                <li>
                  Content must focus on a relevant topic: Archidax Exchanges
                  features, crypto-assets listed on Archidax Exchange, current
                  Archidax updates, etc.
                </li>
                <li>
                  Only original content will be accepted. A copy from the
                  Archidax website, blogs, or from others' work will be
                  rejected.
                </li>
                <li>Articles should never be removed.</li>
                <li>
                  Removal/deletion of the post before the end of the bounty
                  campaign will result in disqualification.
                </li>
                <li>
                  All articles need to have a link to Archidax exchanges,
                  Facebook page, Medium page, Twitter page, Telegram group, and
                  Bitcointalk thread.
                </li>
                <li>
                  Please provide enough details of the writer (bounty hunter) at
                  the end of the article to ensure authenticity can be verified.
                </li>
                <li>
                  By joining this program, all participants accept that the
                  ARCHIDAX team can use all of these articles as marketing
                  materials.
                </li>
              </ol>
              <span className="font-xs" style={{ color: '#F9BD00' }}>
                How to Join Medium Campaign :
              </span>
              <span className="font-xs">
                <b className="d-block">
                  ❕ Don’t submit the form twice or you will be disqualified
                </b>
                Follow our official Medium page ⇖.
              </span>
              <ul>
                <li>Only one account for one person is allowed.</li>
                <li>
                  You have to Clap 50 times on at least 2 posts on our official
                  page every week (you can use all our posts).
                </li>
                <li>
                  You have to share at least 2 posts on our official page on
                  your Twitter and Facebook every week.◦ Your reports must
                  contain screenshots (use imgur, postimage, radikal, or
                  similar) of your Claps + links with shares from your social
                  pages (Twitter, Facebook).
                </li>
                <li>
                  You have to share at least 2 posts on our official page on
                  your Twitter and Facebook every week.◦ Your reports must
                  contain screenshots (use imgur, postimage, radikal, or
                  similar) of your Claps + links with shares from your social
                  pages (Twitter, Facebook).
                </li>
              </ul>
            </div>
            <div className="col">
              <span className="font-xs" style={{ color: '#F9BD00' }}>
                Rewards
              </span>
              <span className="text-bold d-block">300.000 ARTO($60.000)</span>

              <div className="prize">
                <span className="d-block font-xs">
                  High Quality: <b>550 ARTO</b>{' '}
                </span>
                <span className="d-block font-xs">
                  Good quality: <b>300 ARTO</b>{' '}
                </span>
                <span className="d-block font-xs">
                  Average quality: <b>200 ARTO</b>{' '}
                </span>

                <span className="d-block font-xs mt-2">
                  10 stakes per 2 screenshots with Claps + 2 links from Twitter
                  and 2 links from Facebook
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
