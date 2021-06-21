import React, { useState, useEffect } from "react";
import buylogo from "../../../assets/img/trade/buy.png";
import buylogo2 from "../../../assets/img/trade/keranjanghitam.svg";
import walletlogo from "../../../assets/img/trade/wallet.png";
import walletlogo2 from "../../../assets/img/trade/wallet2.svg";
import { PercentMath } from "../helpers/trade";
import { useDispatch, useSelector } from "react-redux";
import {
  Orders,
  SET_RX_FORM_DATABUY,
} from "../../../stores/pasartrading/functions";
import Popup from "../../../components/popUps";

import { convertNumber } from "../../../assets/js";

import NumberFormat from "react-number-format";

import { Link } from "react-router-dom";

export default function MarketBuy({balanceAsset}) {
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  const { mode } = useSelector((state) => state.daynightReducer);
  const { PairSymbol, pairTo, price24H } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );
  const [inputAmount, setInputAmount] = useState("");
  const dispatch = useDispatch();
  const { price, amount } = useSelector(
    (state) => state.pasarTradingReducer.FormDataBuy,
  );

  const PostBuyMarket = (e) => {
    e.preventDefault();
    if (!Number(inputAmount)) {
      Popup.fire({ text: "amount tidak boleh kosong", title: "Order error" });
    } else {
      dispatch(
        Orders({
          FormData: {
            amount: inputAmount,
            symbol: PairSymbol ? PairSymbol : null,
            side: "BUY",
            type: "INSTANT",
          },
        }),
      );
    }
  };

  const PostBuyInstantDisabled = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (price > 0) {
      setInputAmount(amount);
      dispatch(
        SET_RX_FORM_DATABUY({
          price: 0,
          amount: 0,
        }),
      );
    }

  }, [amount, dispatch, price]);

  return (
    <div
      className={`${
        mode ? "bg-trade-dark" : "bg-trade"
      }  col-12 px-0 py-3 height-kanan`}
    >
      <form onSubmit={isLoginPages ? PostBuyMarket : PostBuyInstantDisabled}>
        <div className="width-trade2">
          <div className="row justify-content-between mx-2">
            <div className="make-middle">
              <img src={mode ? buylogo : buylogo2} width="22px" alt="buylogo" />
              <div className="text-buy ml-2 font-20 font-bolder2">Buy</div>
            </div>
            <div className="make-middle">
              <img
                src={mode ? walletlogo : walletlogo2}
                alt="walletlogo"
                width="14px"
              />
              <div className="text-dgrey ml-2 font-14 font-bolder2">
                {pairTo ? pairTo : "-"}:
              </div>
              <div
                className={`${
                  mode ? "text-price-dark" : "text-price"
                } ml-2 font-14`}
              >
                <span><NumberFormat value={balanceAsset} decimalScale={8} displayType={'text'} thousandSeparator={true} /></span>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <span
              className={
                mode ? "input-label-trade4-dark" : "input-label-trade4"
              }
            >
              Total Amount
            </span>
            {/* <input
              type="number"
              name="amount"
              placeholder="0"
              className={`col-12 py-2 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              value={inputAmount}
              onKeyDown={(evt) => ["e", "E", "+", "-",","].includes(evt.key) && evt.preventDefault()}
              onChange={(e) => setInputAmount(e.target.value)}
            ></input> */}
            <NumberFormat 
              // prefix={pairFrom?pairFrom+" : ":null}
              thousandSeparator={true}
              inputMode="decimal"
              placeholder="0"
              className={`col-12 py-2 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              onKeyDown={(evt) => ["e", "E", "+", "-",","].includes(evt.key) && evt.preventDefault()}
              value={inputAmount}
              onValueChange={(values) => {
                const {value} = values;
                setInputAmount(value);
              }}
            />
          </div>

          <div
            id={mode ? "grid-trade-percent-dark" : "grid-trade-percent"}
            className="text-center mt-3"
          >
            <button
              type="button"
              onClick={() =>
                setInputAmount(
                  PercentMath({
                    select: 0,
                    value: balanceAsset,
                  }).result,
                )
              }
            >
              25%
            </button>
            <button
              type="button"
              onClick={() =>
                setInputAmount(
                  PercentMath({
                    select: 1,
                    value: balanceAsset,
                  }).result,
                )
              }
            >
              50%
            </button>
            <button
              type="button"
              onClick={() =>
                setInputAmount(
                  PercentMath({
                    select: 2,
                    value: balanceAsset,
                  }).result,
                )
              }
            >
              75%
            </button>
            <button
              type="button"
              onClick={() =>
                setInputAmount(
                  PercentMath({
                    select: 3,
                    value: balanceAsset,
                  }).result,
                )
              }
            >
              100%
            </button>
          </div>
          <p
            className={`mb-0 ${
              mode ? "text-price-dark" : "text-price"
            } font-12`}
            style={{ marginTop: "10px" }}
          >
            Fee : <span className="text-sell ml-1">0,25%</span>
          </p>
          <div className="d-flex">
            <span
              className={
                mode ? "input-label-trade5-dark" : "input-label-trade5"
              }
            >
              Estimation
            </span>
            <input
              type="number"
              id="fname"
              name="fname"
              placeholder="0"
              className={`col-12 py-2 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              value={inputAmount / price24H.Close}
            ></input>
          </div>
          {isLoginPages ? (
            <button
              type="submit"
              className={`text-center text-price col-12 py-2 mt-3 ${
                mode ? "bg-buy-dark" : "bg-buy"
              }`}
            >
              <h5
                className={`mb-0 font-16 ${
                  mode ? "font-weight-bold" : "text-white font-bolder2"
                }`}
              >
                Buy
              </h5>
            </button>
          ) : (
            <div className="text-center bg-loginfirst col-12 mt-3">
              <h5 className="mb-0 font-13 font-weight-bold">
                <Link to="/login" className="mr-2">
                  Login
                </Link>
                or
                <Link to="/login" className="ml-2">
                  Register
                </Link>
              </h5>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
