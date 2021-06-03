import React, { useState, useEffect } from "react";
import selllogo from "../../../assets/img/trade/sell.png";
import buylogo2 from "../../../assets/img/trade/keranjanghitam.svg";
import walletlogo from "../../../assets/img/trade/wallet.png";
import walletlogo1 from "../../../assets/img/trade/wallet1.svg";
import walletlogo2 from "../../../assets/img/trade/wallet2.svg";
import { PercentMath } from "../helpers/trade";
import { useDispatch, useSelector } from "react-redux";
import {
  Orders,
  SET_RX_FORM_DATASELL,
} from "../../../stores/pasartrading/functions";
import Popup from "../../../components/popUps";

import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";
import { convertNumber } from "../../../assets/js";
import { Link } from "react-router-dom";

export default function MarketSell() {
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  const { mode } = useSelector((state) => state.daynightReducer);

  const [balance, setBalance] = useState("");
  const { PairSymbol, pairTo, price24H } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );
  const { username } = useSelector((state) =>
    state ? (state.profileReducer ? state.profileReducer : {}) : {},
  );
  const { assets } = useSelector((state) => state?.walletReducer);
  const [inputAmount, setInputAmount] = useState("");
  const dispatch = useDispatch();
  const { price, amount } = useSelector(
    (state) => state.pasarTradingReducer.FormDataSell,
  );

  const PostSellMarket = (e) => {
    e.preventDefault();
    if (!Number(inputAmount)) {
      Popup.fire({ text: "amount tidak boleh kosong", title: "Order error" });
    } else {
      dispatch(
        Orders({
          FormData: {
            amount: inputAmount,
            symbol: PairSymbol ? PairSymbol : null,
            side: "SELL",
            type: "INSTANT",
          },
        }),
      );
    }
  };

  const PostSellInstantDisabled = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (price > 0) {
      setInputAmount(amount);
      dispatch(
        SET_RX_FORM_DATASELL({
          price: 0,
          amount: 0,
        }),
      );
    }
    if (assets) {
      const temp = assets.find((item) => item.type === pairTo);
      if (temp) {
        setBalance(temp.balance);
      } else {
        setBalance(0);
      }
    }
  }, [dispatch, amount, assets, pairTo, price]);

  React.useEffect(() => {
    if (IoWebSocketTrade && IoWebSocketTrade.connected && pairTo && username) {
      IoWebSocketTrade.on(`WalletBalance-${username}-${pairTo}`, (data) => {
        if (data) {
          setBalance(data.balance);
        }
      });
      return () =>
        IoWebSocketTrade.removeEventListener(
          `WalletBalance-${username}-${pairTo}`,
        );
    }
  }, [setBalance, pairTo, username]);

  return (
    <div
      className={`${
        mode ? "bg-trade-dark" : "bg-trade"
      }  col-12 px-0 py-3 height-kanan`}
    >
      <form onSubmit={isLoginPages ? PostSellMarket : PostSellInstantDisabled}>
        <div className="width-trade">
          <div className="row justify-content-between mx-2">
            <div className="make-middle">
              <img
                src={mode ? selllogo : buylogo2}
                alt="selllogo"
                width="22px"
              />
              <div className="text-sell ml-2 font-20 font-bolder2">Sell</div>
            </div>
            <div className="make-middle">
              <img
                src={mode ? walletlogo : walletlogo2}
                alt="walletlogo"
                width="14px"
              />
              <div className="text-dgrey ml-2 font-14 font-bolder2">
                {pairTo}:
              </div>
              <div
                className={`${
                  mode ? "text-price-dark" : "text-price"
                } ml-2 font-14`}
              >
                <span>{convertNumber.toRupiah(balance, "CRYPTO")}</span>
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
            <input
              type="number"
              id="fname"
              name="amount"
              placeholder="0"
              className={`col-12 py-2 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              value={inputAmount}
              onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
              onChange={(e) => setInputAmount(e.target.value)}
            ></input>
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
                    value: balance,
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
                    value: balance,
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
                    value: balance,
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
                    value: balance,
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
              value={parseInt(inputAmount * price24H.Close)}
            ></input>
          </div>
          {isLoginPages ? (
            <button
              type="submit"
              className={`text-center text-price col-12 py-2 mt-3 ${
                mode ? "bg-sell-dark" : "bg-sell"
              }`}
            >
              <h5
                className={`mb-0 font-16 ${
                  mode ? "font-weight-bold" : "text-white font-bolder2"
                }`}
              >
                Sell
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
