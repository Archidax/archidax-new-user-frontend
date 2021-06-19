import React, { useState, useEffect } from "react";
import selllogo from "../../../assets/img/trade/icon/arrowsell.svg";
import NumberFormat from "react-number-format";
// import selllogo from "../../../assets/img/trade/sell.png";
import walletlogo from "../../../assets/img/trade/wallet.png";
import { useDispatch, useSelector } from "react-redux";
import {
  Orders,
  SET_RX_FORM_DATASELL,
} from "../../../stores/pasartrading/functions";
import Popup from "../../../components/popUps";

import { convertNumber } from "../../../assets/js";

import { Link, useParams } from "react-router-dom";

export default function Limitsell({ balanceAsset }) {
  let { symbol } = useParams();
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  const { mode } = useSelector((state) => state.daynightReducer);

  const { PairSymbol, pairFrom,pairTo } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );
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
  }, [price, dispatch, amount]);

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
              <div className="text-dgrey ml-2 lmt-font">{pairFrom}:</div>
              <div
                className={`${
                  mode ? "text-price-dark" : "text-price"
                } ml-2 lmt-font`}
              >
                <span>{convertNumber.toRupiah(balanceAsset, "CRYPTO")}</span>
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
                className="lmt-font mt-4"
                style={{ color: mode ? "white" : "black" }}
              >
                Limit Price :{" "}
              </h5>
            </div>
            {/* <input
              type="number"
              id="fname"
              name="fname"
              placeholder="0"
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              value={inputPrice}
              onChange={(e) => setInputPrice(e.target.value)}
            ></input> */}
            <NumberFormat 
              prefix={pairFrom?pairFrom+" : ":null}
              thousandSeparator={true}
              inputMode="decimal"
              placeholder="0"
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              onKeyDown={(evt) => ["e", "E", "+", "-",","].includes(evt.key) && evt.preventDefault()}
              value={inputPrice}
              onValueChange={(values) => {
                const {value} = values;
                setInputPrice(value);
              }}
            />
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
                className="lmt-font mt-4 "
                style={{ color: mode ? "white" : "black" }}
              >
                Amount :{" "}
              </h5>
            </div>
            {/* <input
              type="number"
              id="fname"
              name="fname"
              placeholder="0"
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              onKeyDown={(evt) => ["e", "E", "+", "-",","].includes(evt.key) && evt.preventDefault()}
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
            ></input> */}
            <NumberFormat
              thousandSeparator={true}
              inputMode="decimal"
              placeholder="0"
              className={`col-9 py-1 mt-3 ${
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
            className="text-center mt-3 col-9 offset-3"
          >
            <div
              class="form-check form-check-inline"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() =>
                setInputAmount(Number(25 / 100) * Number(balanceAsset))
              }
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
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
              onClick={() =>
                setInputAmount(Number(50 / 100) * Number(balanceAsset))
              }
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
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
              onClick={() =>
                setInputAmount(Number(75 / 100) * Number(balanceAsset))
              }
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
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
              onClick={() =>
                setInputAmount(Number(100 / 100) * Number(balanceAsset))
              }
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
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
                className="lmt-font mt-4 "
                style={{ color: mode ? "white" : "black" }}
              >
                Estimation :{" "}
              </h5>
            </div>
            {/* <input
              type="number"
              id="fname"
              name="fname"
              value={
                Number.isFinite(inputAmount * inputPrice)
                  ? Number(inputAmount * inputPrice)
                  : 0
              }
              placeholder="0"
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              disabled
            ></input> */}
             <NumberFormat 
              prefix={pairTo?pairTo+" : ":null}
              thousandSeparator={true}
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              inputMode="decimal"
              placeholder="0"
              value={
                Number.isFinite(inputAmount * inputPrice)
                  ? Number(inputAmount * inputPrice)
                  : 0
              }
              disabled
            />
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
        </form>
      </div>
    </div>
  );
}
