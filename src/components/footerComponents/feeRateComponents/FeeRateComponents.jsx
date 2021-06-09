import React from "react";

import aavelogo from "../../../assets/img/feelogo/Aave_AAVE.svg";
import aoalogo from "../../../assets/img/feelogo/Aurora_AOA.svg";
import bnblogo from "../../../assets/img/feelogo/Binance_BNB.svg";
import btclogo from "../../../assets/img/feelogo/Bitcoin_BTC.svg";
import bttlogo from "../../../assets/img/feelogo/Bittorent_BTT.svg";
import cgoldlogo from "../../../assets/img/feelogo/Cgold_CGOLD.svg";
import cotilogo from "../../../assets/img/feelogo/Coti_COTI.svg";
import ethlogo from "../../../assets/img/feelogo/Ethereum_ETH.svg";
import linklogo from "../../../assets/img/feelogo/Chainlink_LINK.svg";
import ltclogo from "../../../assets/img/feelogo/Litecoin_LTC.svg";
import sushilogo from "../../../assets/img/feelogo/Sushi_SUSHI.svg";
import trxlogo from "../../../assets/img/feelogo/Tron_TRX.svg";
import unilogo from "../../../assets/img/feelogo/Uniswap_UNI.svg";
import usdtlogo from "../../../assets/img/feelogo/Tether_USDT.svg";
import waveslogo from "../../../assets/img/feelogo/Waves_WAVES.svg";
import xlmlogo from "../../../assets/img/feelogo/Stellar_XLM.svg";
// import readXlsxFile from 'read-excel-file'
// import Excel from '../../../assets/SCHEDULE_FEE.xlsx'
export default function FeeRateComponents() {

  // React.useEffect(() => {
  //   console.log("AAAA")
  //   readXlsxFile(Excel,{ sheet: 1 }).then((rows) => {
  //     console.log(rows)
  //   })
  // }, [])
  return (
    <>
      <div className="feesbanners">
        <h4
          className="text-center font-40 text-gold font-weight-bold"
          style={{ paddingTop: "120px" }}
        >
          Fee Deposit &amp; Withdraw
        </h4>
      </div>

      <div className="bg-homepage pt-4 pb-5">
        <div className="container">
          <p className="p-0 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            soluta. Cupiditate omnis aut consequuntur excepturi aliquam
            necessitatibus exercitationem recusandae. Temporibus sint enim,
            placeat adipisci dicta est odit quasi, facere soluta unde possimus
            accusamus dolore consequatur deleniti repudiandae totam sed! Cumque.
          </p>
          <table class="table mt-4" id="feerate">
            <tr class="d-flex ">
              <th class="col-2">Nama Koin</th>
              <th class="col-2">Nama Lengkap Koin</th>
              <th class="col-2">Jaringan</th>
              <th class="col-2">Minimum Withdraw</th>
              <th class="col-2">Fee Deposit</th>
              <th class="col-2">Fee Withdraw</th>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={aavelogo} alt="aavelogo" className="mr-2" />
                AAVE
              </td>
              <td class="col-2 ">Aave</td>
              <td class="col-2 ">
                <span className="jaringan-bg">ERC-20</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 "></td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={aoalogo} alt="aoalogo" className="mr-2" />
                AOA
              </td>
              <td class="col-2 ">Aurora</td>
              <td class="col-2 ">
                <span className="jaringan-bg">ERC-20</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 "></td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={bnblogo} alt="bnblogo" className="mr-2" />
                BNB
              </td>
              <td class="col-2 ">Binance</td>
              <td class="col-2 ">
                <span className="jaringan-bg">BNB</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 ">0.01 BNB</td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={btclogo} alt="btclogo" className="mr-2" />
                BTC
              </td>
              <td class="col-2 ">Bitcoin</td>
              <td class="col-2 ">
                <span className="jaringan-bg">BTC</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 "> BTC</td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={bttlogo} alt="bttlogo" className="mr-2" />
                BTT
              </td>
              <td class="col-2 ">Bittorent</td>
              <td class="col-2 ">
                <span className="jaringan-bg">TRC-20</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 "></td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={cgoldlogo} alt="cgoldlogo" className="mr-2" />
                CGOLD
              </td>
              <td class="col-2 ">Codeo Gold</td>
              <td class="col-2 ">
                <span className="jaringan-bg">TRC-20</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 ">0.01 CGOLD</td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={cotilogo} alt="cotilogo" className="mr-2" />
                COTI
              </td>
              <td class="col-2 ">Coti</td>
              <td class="col-2 ">
                <span className="jaringan-bg">ERC-20</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 "></td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={ethlogo} alt="ethlogo" className="mr-2" />
                ETH
              </td>
              <td class="col-2 ">Ethereum</td>
              <td class="col-2 ">
                <span className="jaringan-bg">ETH</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 ">Fee Dinamis</td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={linklogo} alt="linklogo" className="mr-2" />
                LINK
              </td>
              <td class="col-2 ">ChainLink</td>
              <td class="col-2 ">
                <span className="jaringan-bg">ERC-20</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 "></td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={ltclogo} alt="ltclogo" className="mr-2" />
                LTC
              </td>
              <td class="col-2 ">Litecoin</td>
              <td class="col-2 ">
                <span className="jaringan-bg">LTC</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 ">0.02 LTC</td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={sushilogo} alt="sushilogo" className="mr-2" />
                SUSHI
              </td>
              <td class="col-2 ">Sushi</td>
              <td class="col-2 ">
                <span className="jaringan-bg">ERC-20</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 "></td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={trxlogo} alt="trxlogo" className="mr-2" />
                TRX
              </td>
              <td class="col-2 ">TRON</td>
              <td class="col-2 ">
                <span className="jaringan-bg">TRON</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 ">1 TRX</td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={unilogo} alt="unilogo" className="mr-2 img-fluid" />
                UNI
              </td>
              <td class="col-2 ">Uniswap</td>
              <td class="col-2 ">
                <span className="jaringan-bg">ERC-20</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 "></td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={usdtlogo} alt="usdtlogo" className="mr-2" />
                USDT
              </td>
              <td class="col-2 ">Tether</td>
              <td class="col-2 ">
                <span className="jaringan-bg">TRC-20</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 "></td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={waveslogo} alt="waveslogo" className="mr-2" />
                WAVES
              </td>
              <td class="col-2 ">Waves</td>
              <td class="col-2 ">
                <span className="jaringan-bg">WAVES</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 ">0.05 Waves</td>
            </tr>
            <tr class="d-flex">
              <td class="col-2 ">
                <img src={xlmlogo} alt="xlmlogo" className="mr-2" />
                XLM
              </td>
              <td class="col-2 ">Stellar Lumens</td>
              <td class="col-2 ">
                <span className="jaringan-bg">XLM</span>
              </td>
              <td class="col-2 ">0.001</td>
              <td class="col-2 ">Free</td>
              <td class="col-2 ">0.0001 XLM</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
