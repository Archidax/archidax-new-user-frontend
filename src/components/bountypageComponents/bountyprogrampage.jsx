import React from 'react';
import TwitterLogo from '../../assets/img/bounty/twitter.png';
import FacebookLogo from '../../assets/img/bounty/facebook.png';
import TelegramLogo from '../../assets/img/bounty/telegram.png';
import TranslationsLogo from '../../assets/img/bounty/translations.png';
import ContentBlogLogo from '../../assets/img/bounty/contentblog.png';
import YoutubeLogo from '../../assets/img/bounty/youtube.png';
import TiktokLogo from '../../assets/img/bounty/tiktok.png';
const bountyprogrampage = () => {
  return (
    <div
      className="container min-h-100 "
      style={{ paddingBottom: '300px', paddingTop: '40px' }}
    >
      <h1 className="text-center">Bounty Programs</h1>
      <div className="row justify-content-center ">
        {/* twitter */}
        <div className="card-twitter bg-transparent p-4 m-2">
          <img src={TwitterLogo} alt="tw" width="20" />
          <span className="mb-4 d-block">Twitter Campaign</span>
          <span className="d-block">Rewards</span>
          <span className="d-block text-bold">200.000 ARTO ($ 40.000)</span>

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

          <div
            className="button-detail text-center"
            style={{ marginTop: '95px' }}
          >
            <button className="btn bg-transparent border-white text-white rounded px-5">
              Detailed Rules
            </button>
          </div>
        </div>

        {/* facebook */}
        <div className="card-facebook bg-transparent p-4 m-2">
          <img src={FacebookLogo} alt="fb" width="20" />
          <span className="mb-4 d-block">Facebook Campaign</span>
          <span className="d-block">Rewards</span>
          <span className="d-block text-bold">200.000 ARTO ($ 40.000)</span>

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

          <div className="text-center" style={{ marginTop: '115px' }}>
            <button className="btn bg-transparent border-white text-white rounded px-5">
              Detailed Rules
            </button>
          </div>
        </div>

        {/* telegram */}
        <div className="card-telegram bg-transparent p-4 m-2">
          <img src={TelegramLogo} alt="fb" width="20" />
          <span className="mb-4 d-block">Telegram Campaign</span>
          <span className="d-block">Rewards</span>
          <span className="d-block text-bold">300.000 ARTO ($ 60.000)</span>

          <div className="prize">
            <span className="d-block text-bold font-xs">For Channels :</span>
            <span className="d-block font-xs">
              500 - 2500 members: <b>1 Stakes per post</b>{' '}
            </span>
            <span className="d-block font-xs">
              2501 - 5000 members: <b>3 Stakes per post</b>{' '}
            </span>
            <span className="d-block font-xs">
              5001 - Above: <b>5 Stakes per post</b>{' '}
            </span>
            <span className="d-block text-bold mt-2 font-xs">For Groups :</span>
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

          <div className="text-center" style={{ marginTop: '10px' }}>
            <button className="btn bg-transparent border-white text-white rounded px-4">
              Detailed Rules
            </button>
          </div>
        </div>
        {/* translations */}
        <div className="card-translations bg-transparent p-4 m-2">
          <img src={TranslationsLogo} alt="fb" width="20" />
          <span className="mb-4 d-block">Translations Campaign</span>
          <span className="d-block">Rewards</span>
          <span className="d-block text-bold">200.000 ARTO ($ 40.000)</span>

          <div className="prize">
            <span className="d-block font-xs">
              ANN + BOUNTY threads: <b>2 stake + 1 stake per valid post</b>{' '}
            </span>
            <span className="d-block font-xs">
              While paper and docs: <b>up to 10 stakes per doc</b>
            </span>
          </div>

          <div className="text-center" style={{ marginTop: '130px' }}>
            <button className="btn bg-transparent border-white text-white rounded px-4">
              Detailed Rules
            </button>
          </div>
        </div>

        {/* content blog */}
        <div className="card-contentblog bg-transparent p-4 m-2">
          <img src={ContentBlogLogo} alt="fb" width="20" />
          <span className="mb-4 d-block">Content Blog & Medium Campaign</span>
          <span className="d-block">Rewards</span>
          <span className="d-block text-bold">200.000 ARTO ($ 40.000)</span>

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
              10 stakes per 2 screenshots with Claps + 2 links from Twitter and
              2 links from Facebook
            </span>
          </div>

          <div className="text-center" style={{ marginTop: '90px' }}>
            <button className="btn bg-transparent border-white text-white rounded px-4">
              Detailed Rules
            </button>
          </div>
        </div>

        {/* Youtube */}
        <div className="card-youtube bg-transparent p-4 m-2">
          <img src={YoutubeLogo} alt="fb" width="20" />
          <span className="mb-4 d-block">Youtube Campaign</span>
          <span className="d-block">Rewards</span>
          <span className="d-block text-bold">300.000 ARTO ($ 60.000)</span>

          <div className="text-center" style={{ marginTop: '175px' }}>
            <button className="btn bg-transparent border-white text-white rounded px-4">
              Detailed Rules
            </button>
          </div>
        </div>
        {/* Tiktok */}
        <div className="card-tiktok bg-transparent p-4 m-2 ">
          <img src={TiktokLogo} alt="fb" width="20" />
          <span className="mb-4 d-block">Tiktok Campaign</span>
          <span className="d-block">Rewards</span>
          <span className="d-block text-bold">300.000 ARTO ($ 60.000)</span>

          <div className="text-center" style={{ marginTop: '175px' }}>
            <button className="btn bg-transparent border-white text-white rounded px-4">
              Detailed Rules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bountyprogrampage;
