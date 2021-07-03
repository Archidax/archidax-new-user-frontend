import React from 'react';

export default function Popuptranslations(props) {
  return (
    <div className="modal">
      <div className="modal-inner translations">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Translations Campaign</h2>
            <span onClick={props.onHide} className="close-btn">
              {' '}
              X{' '}
            </span>
          </div>
          <div className="row">
            <div className="col col-8">
              <span style={{ color: '#F9BD00' }}>
                This bounty consists of 2 parts :
              </span>
              <span className="d-block font-md">
                ⓵ Translation of ANN + BOUNTY threads & moderation
              </span>
              <div className="d-block font-md mb-3">
                ⓶ Translation of documents Whitepaper
              </div>
              <span style={{ color: '#F9BD00' }}>
                Whitepaper language translate :
              </span>
              <ol type="a">
                <div className="d-flex">
                  <div className="mr-5">
                    <li>Russia</li>
                    <li>Francais</li>
                    <li>Vietnam</li>
                    <li>Malay</li>
                  </div>

                  <div className="mr-5">
                    <li>Bahasa</li>
                    <li>Czech</li>
                    <li>Spanish</li>
                    <li>Greek</li>
                  </div>

                  <div className="mr-5">
                    <li>Arabic</li>
                    <li>Korean</li>
                    <li>Japan</li>
                    <li>Tagalog</li>
                  </div>
                  <div className="mr-5">
                    <li>Hebrew</li>
                    <li>Portuguise</li>
                    <li>Mandarin</li>
                  </div>
                </div>
              </ol>

              <span style={{ color: '#F9BD00' }}>Rules :</span>
              <ul className="mb-5 pb-5">
                <li>
                  Only participants with prior experience will be accepted.
                </li>
                <li>
                  Google translation or similar tools will not be accepted,
                  translation quality will be verified.
                </li>
                <li>
                  If you did ANN thread or BOUNTY thread please maintain the
                  thread, we do not need any dead threads.
                </li>
                <li>
                  If we find any thread neglected and not maintained properly
                  the rewards will reduce to 50% of the actual payment or simply
                  be disqualified.
                </li>
                <li>
                  Unnecessary or repeated posts shall be rejected for stake
                  counting{' '}
                </li>
                <li>Do not copy/paste our website to increase your reward </li>
                <li>
                  Posts must be constructive and to the point. Spam, low-quality
                  posts, copy/paste, and off-topic posts are strictly
                  prohibited. Users found doing so will be immediately and
                  permanently disqualified from all bounty activities.
                </li>
              </ul>
            </div>
            <div className="col">
              <span className="font-xs" style={{ color: '#F9BD00' }}>
                Rewards
              </span>
              <span className="text-bold d-block">200.000 ARTO($40.000)</span>
              <div className="prize">
                <span className="d-block font-xs">
                  ANN + BOUNTY threads: <b>2 stake + 1 stake per valid post</b>{' '}
                </span>
                <span className="d-block font-xs">
                  While paper and docs: <b>up to 10 stakes per doc</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
