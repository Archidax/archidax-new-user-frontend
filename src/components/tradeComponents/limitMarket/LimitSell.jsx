import React, { useState, useEffect } from "react";
import selllogo from "../../../assets/img/trade/icon/arrowsell.svg";
// import selllogo from "../../../assets/img/trade/sell.png";
import walletlogo from "../../../assets/img/trade/wallet.png";
// import { PercentMath } from "../helpers/trade";
import { useDispatch, useSelector } from "react-redux";
import {
  Orders,
  SET_RX_FORM_DATASELL,
} from "../../../stores/pasartrading/functions";
import Popup from "../../../components/popUps";

import { IoWebSocketTrade } from "../../../configuration/IoWebSocket";
import { convertNumber } from "../../../assets/js";

import { Link, useParams } from "react-router-dom";

export default function Limitsell() {
  let { symbol } = useParams();
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  const { mode } = useSelector((state) => state.daynightReducer);

  const [balance, setBalance] = useState("");
  const { PairSymbol, pairTo } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );
  const { username } = useSelector((state) =>
    state ? (state.profileReducer ? state.profileReducer : {}) : {},
  );
  const { assets } = useSelector((state) => state?.walletReducer);
  const [inputPrice, setInputPrice] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const dispatch = useDispatch();
  const { price, amount } = useSelector(
    (state) => state.pasarTradingReducer.FormDataSell,
  );

  const PostSellLimit = (e) => {
    e.preventDefault();
    if (!Number(inputPrice) || !Number(inputAmount)) {
      Popup.fire({
        text: "price/amount tidak boleh kosong",
        title: "Order error",
      });
    } else {
      dispatch(
        Orders({
          FormData: {
            price: inputPrice,
            amount: inputAmount,
            symbol: PairSymbol ? PairSymbol : null,
            side: "SELL",
            type: "LIMIT",
          },
        }),
      );
    }
  };

  const PostSellLimitDisabled = (e) => {
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
  }, [price, dispatch, amount, pairTo, assets]);

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
      }  col-12 px-0 pt-1 pb-3 height-kanan`}
    >
      <div className="width-trade2">
        <form onSubmit={isLoginPages ? PostSellLimit : PostSellLimitDisabled}>
          <div className="row justify-content-between mx-2">
            <div className="make-middle">
              <img src={selllogo} alt="selllogo" width="22px" />
              <h6 className="text-sell mb-1 ml-2 font-19">Sell</h6>
            </div>
            <div className="make-middle">
              <img src={walletlogo} alt="walletlogo" width="14px" />
              <div className="text-dgrey ml-2 font-14">{pairTo}:</div>
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
            <div
              className="col-3 p-0"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h5
                className="font-14 mt-4"
                style={{ color: mode ? "white" : "black" }}
              >
                Limit Price :{" "}
              </h5>
            </div>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="0"
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              // value={parseFixedNumber(inputPrice)}
              value={inputPrice}
              onChange={(e) => setInputPrice(e.target.value)}
            ></input>
          </div>
          <div className="d-flex">
            <div
              className="col-3 p-0"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h5
                className="font-14 mt-4 "
                style={{ color: mode ? "white" : "black" }}
              >
                Amount :{" "}
              </h5>
            </div>
            <input
              type="number"
              id="fname"
              name="fname"
              placeholder="0"
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
            ></input>
          </div>
          <div
            id={mode ? "grid-trade-percent-dark" : "grid-trade-percent"}
            className="text-center mt-3 col-9 offset-3"
          >
            <div
              class="form-check form-check-inline"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                onClick={() =>
                  setInputAmount(Number(25 / 100) * Number(balance))
                }
              />
              <label
                class="form-check-label font-12 mt-1"
                style={{ color: mode ? "white" : "black" }}
                for="inlineRadio1"
              >
                25%
              </label>
            </div>
            <div
              class="form-check form-check-inline"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                onClick={() =>
                  setInputAmount(Number(50 / 100) * Number(balance))
                }
              />
              <label
                class="form-check-label font-12  mt-1"
                style={{ color: mode ? "white" : "black" }}
                for="inlineRadio2"
              >
                50%
              </label>
            </div>
            <div
              class="form-check form-check-inline"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                onClick={() =>
                  setInputAmount(Number(75 / 100) * Number(balance))
                }
              />
              <label
                class="form-check-label font-12  mt-1"
                style={{ color: mode ? "white" : "black" }}
                for="inlineRadio3"
              >
                75%
              </label>
            </div>
            <div
              class="form-check form-check-inline"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                onClick={() =>
                  setInputAmount(Number(100 / 100) * Number(balance))
                }
              />
              <label
                class="form-check-label font-12  mt-1"
                style={{ color: mode ? "white" : "black" }}
                for="inlineRadio3"
              >
                100%
              </label>
            </div>
          </div>

          <div className="d-flex">
            <div
              className="col-3 p-0"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h5
                className="font-14 mt-4 "
                style={{ color: mode ? "white" : "black" }}
              >
                Estimation :{" "}
              </h5>
            </div>
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
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              disabled
            ></input>
          </div>

          <p
            className={`col-9 offset-3 p-0 mb-0 ${
              mode ? "text-price-dark" : "text-price"
            } font-12  mt-1`}
            style={{ marginTop: "10px" }}
          >
            Fee : Maker <span className="text-sell">0%</span> - Taker{" "}
            <span className="text-sell">0,25%</span>
          </p>

          {isLoginPages ? (
            <button
              type="submit"
              className={`text-center text-price col-9 offset-3 py-2 mt-3 ${
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
            <div className="text-center bg-loginfirst col-9 offset-3 mt-3">
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
