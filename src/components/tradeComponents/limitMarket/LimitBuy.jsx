import React, { useState, useEffect } from "react";
// import buylogo from "../../../assets/img/trade/buy.png";
import buylogo from "../../../assets/img/trade/icon/arrowbuy.svg";
import walletlogo from "../../../assets/img/trade/wallet.png";
import { PercentMath } from "../helpers/trade";
import { useDispatch, useSelector } from "react-redux";
import {
  Orders,
  SET_RX_FORM_DATABUY,
} from "../../../stores/pasartrading/functions";
import Popup from "../../../components/popUps";
import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";

import { convertNumber } from "../../../assets/js";

import { Link, useParams } from "react-router-dom";
import { parseFixedNumber } from "../../../helpers/functions";

export default function LimitBuy() {
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  let { symbol } = useParams();
  const { mode } = useSelector((state) => state.daynightReducer);

  const [balance, setBalance] = useState("");
  const { PairSymbol, pairFrom } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );

  const { username } = useSelector((state) =>
    state ? (state.profileReducer ? state.profileReducer : {}) : {},
  );

  const { saldo, assets } = useSelector((state) => state?.walletReducer);
  const [inputPrice, setInputPrice] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const dispatch = useDispatch();
  const { price, amount } = useSelector(
    (state) => state.pasarTradingReducer.FormDataBuy,
  );

  const PostBuyLimit = (e) => {
    e.preventDefault();
    if (!Number(inputPrice) || !Number(inputAmount)) {
      Popup.fire({
        text: "Harga atau Jumlah tidak boleh kosong",
        title: "Order error",
      });
    } else {
      dispatch(
        Orders({
          FormData: {
            price: inputPrice,
            amount: inputAmount,
            symbol: PairSymbol ? PairSymbol : null,
            side: "BUY",
            type: "LIMIT",
          },
        }),
      );
    }
  };

  const PostBuyLimitDisabled = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setInputPrice("");
    setInputAmount("");
  }, [symbol]);

  useEffect(() => {
    if (price > 0) {
      setInputPrice(price);
      setInputAmount(amount);
      dispatch(
        SET_RX_FORM_DATABUY({
          price: 0,
          amount: 0,
        }),
      );
    }
    if (pairFrom.toString().toUpperCase() === "IDR") {
      saldo ? setBalance(saldo) : setBalance(0);
    } else {
      const UsdtBalance = assets.find((el) => el.type === "USDT");
      setBalance(UsdtBalance ? UsdtBalance.balance : 0);
    }
  }, [price, dispatch, amount, saldo, pairFrom, assets]);

  React.useEffect(() => {
    if (
      IoWebSocketTrade &&
      IoWebSocketTrade.connected &&
      pairFrom &&
      username
    ) {
      IoWebSocketTrade.on(`WalletBalance-${username}-${pairFrom}`, (data) => {
        if (data) {
          setBalance(data.balance);
        }
      });
      return () =>
        IoWebSocketTrade.removeEventListener(
          `WalletBalance-${username}-${pairFrom}`,
        );
    }
  }, [setBalance, pairFrom, username]);

  return (
    <div
      className={`${
        mode ? "bg-trade-dark" : "bg-trade"
      }  col-12 px-0 py-3 height-kanan`}
    >
      <div className="width-trade">
        <form onSubmit={isLoginPages ? PostBuyLimit : PostBuyLimitDisabled}>
          <div className="row justify-content-between mx-2">
            <div className="make-middle">
              <img src={buylogo} width="22px" alt="buylogo" />
              <h6 className="text-buy mb-1 ml-2 font-19">Buy</h6>
            </div>
            <div className="make-middle">
              <img src={walletlogo} width="14px" alt="walletlogo" />
              <div className="text-dgrey ml-2 font-14">
                {pairFrom ? pairFrom : "-"}:
              </div>
              <div
                className={`${
                  mode ? "text-price-dark" : "text-price"
                } ml-2 font-14`}
              >
                <span>{convertNumber.toRupiah(balance)}</span>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <span
              className={mode ? "input-label-trade-dark" : "input-label-trade"}
            >
              Limit Price
            </span>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="0"
              className={`col-12 py-2 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              // value={parseFixedNumber(inputPrice)}
              value={inputPrice}
              onChange={(e) => setInputPrice(e.target.value)}
            ></input>
          </div>
          <div className="d-flex">
            <span
              className={
                mode ? "input-label-trade2-dark" : "input-label-trade2"
              }
            >
              Total Amount
            </span>
            <input
              type="number"
              id="fname"
              name="fname"
              placeholder="0"
              className={`col-12 py-2 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              value={inputAmount}
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
            Fee : Maker <span className="text-sell">0%</span> - Taker{" "}
            <span className="text-sell">0,25%</span>
          </p>
          <div className="d-flex">
            <span
              className={
                mode ? "input-label-trade3-dark" : "input-label-trade3"
              }
            >
              Estimation
            </span>
            <input
              type="number"
              id="fname"
              name="fname"
              value={
                Number.isFinite(inputAmount / inputPrice)
                  ? Number(inputAmount / inputPrice)
                  : 0
              }
              placeholder="0"
              className={`col-12 py-2 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              disabled
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
        </form>
      </div>
    </div>
  );
}
