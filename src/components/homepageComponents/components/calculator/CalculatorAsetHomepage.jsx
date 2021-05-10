import React, { useState, useEffect } from "react";
import { baseAxiosTrading } from "../../../../stores";
import { parseFixedNumber } from "../../../../helpers/functions";
import DropdownWithLogo from "../../../dropdownLogo";
import bitcoinIcon from "../../../../assets/img/trade/cryptologo/Bitcoin_BTC.svg"

let nowDate = new Date();

export default function CalculatorAsetHomepage() {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  
  const [activePairFrom, setActivePairFrom] = useState('BTC');
  const [activePairTo, setActivePairTo] = useState('IDR');
  const [pricePairs, setPricePairs] = useState(false);
  const [icons, setIcons] = useState(false);
  

  const handleFromChange = (value) => {
    if (pricePairs) {
      let newValue = value.replace(/[^0-9.,]+/, "");
      setFromText(parseFixedNumber(newValue, 18));
      setToText(
        parseFixedNumber(
          parseFloat(
            newValue.replaceAll(".", "").replace(",", ".") *
              pricePairs[`${activePairFrom}/${activePairTo}`],
          )
            .toString()
            .replace(".", ","), 18
        ),
      );
    }
  };

  const handleToChange = (value) => {
    if (pricePairs) {
      let newValue = value.replace(/[^0-9.,]+/, "");
      setToText(parseFixedNumber(newValue,18));
      setFromText(
        parseFixedNumber(
          parseFloat(
            newValue.replaceAll(".", "").replace(",", ".") /
              pricePairs[`${activePairFrom}/${activePairTo}`],
          )
            .toString()
            .replace(".", ","), 18
        ),
      );
    }
  };

  const fromPair = () => {
    let result = [];
    if (pricePairs&&icons) {
      Object.keys(icons).forEach((pair) => {
        if (!result.some((el) => el.symbol === pair.split("/")[0])) {
          result.push({symbol:pair.split("/")[0],icon:icons[pair]});
        }
      });
    }
    return result;
  };

  const getToPair = () => {
    let result = [];
    if (pricePairs) {
      let temp = Object.keys(pricePairs).filter((key) =>
        key.includes(activePairFrom),
      );
      temp.forEach((pair) => {
        if (!result.some((el)=>el.symbol ===pair.split("/")[1])) {
          result.push({symbol:pair.split("/")[1]});
        }
      });
    }
    return result;
  };

  useEffect(() => {
    baseAxiosTrading({
      method: "GET",
      url: "/home/latest",
    })
      .then(({ data }) => {
        setPricePairs(data.result);
        setIcons(data.icon);
      })
  }, []);

  useEffect(() => {
    setFromText(0);
    setToText(0);
    if(pricePairs) {
      let temp = Object.keys(pricePairs).filter((key) =>
        key.includes(activePairFrom),
      );
      setActivePairTo(temp?temp[0].split("/")[1]:'IDR')
    }
  }, [activePairFrom,pricePairs]);

  return (
    <div>
      <div>
        <div>
          <h6 className="text-center text-white font-apa-itu-responsive2">
            Update Terakhir:{" "}
            <span>
              {
                `${nowDate.getUTCFullYear()}-${
                  nowDate.getMonth() + 1
                }-${nowDate.getDate()} ${nowDate.getHours()}:${nowDate.getMinutes()}`
              }
            </span>
          </h6>
        </div>
        <div className="col-10 offset-1" style={{ marginTop: "40px" }}>
          <div class="form-row">
            <div className="form-group col-md-6 relative-div">
              <div class="form-group col-md-12 px-1">
                <input
                  type="text"
                  class="form-control font-calculator"
                  placeholder="0"
                  value={fromText}
                  disabled={!!!pricePairs}
                  onChange={(e) => handleFromChange(e.target.value)}
                />
              </div>
              <div class="absolute-right" style={{right:'10px', top:'3px'}}>
                <DropdownWithLogo value={activePairFrom} icon={bitcoinIcon} onChange={setActivePairFrom} dataOptions={fromPair()}/>
              </div>
            </div>
            <div className="form-group col-md-6 relative-div">
              <div class="form-group col-md-12 px-1">
                <input
                  type="text"
                  class="form-control border-0 font-calculator"
                  placeholder="0"
                  value={toText}
                  disabled={!!!pricePairs}
                  onChange={(e) => handleToChange(e.target.value)}
                />
              </div>
              <div class="absolute-right " style={{right:'10px', top:'10px'}}>
                <DropdownWithLogo value={activePairTo} onChange={setActivePairTo} dataOptions={getToPair()}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
