import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
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

import { convertNumber } from "../../../assets/js";

import { Link, useParams } from "react-router-dom";

export default function LimitBuy({ balanceAsset }) {
  const isLoginPages = useSelector((state) => state.userReducer.isLogin);
  let { symbol } = useParams();
  const { mode } = useSelector((state) => state.daynightReducer);

  const { PairSymbol, pairTo,pairFrom } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );

  const { saldo } = useSelector((state) => state?.walletReducer);
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
  }, [price, dispatch, amount, saldo, pairTo]);

  return (
    <div
      className={`${
        mode ? "bg-trade-dark" : "bg-trade"
      }  col-12 px-0 pt-1 pb-3 height-kanan`}
    >
      <div className="width-trade2">
        <form onSubmit={isLoginPages ? PostBuyLimit : PostBuyLimitDisabled}>
          <div className="row justify-content-between mx-2">
            <div className="make-middle">
              <img src={buylogo} width="22px" alt="buylogo" />
              <h6 className="text-buy mb-1 ml-2 font-19">Buy</h6>
            </div>
            <div className="make-middle">
              <img src={walletlogo} width="14px" alt="walletlogo" />
              <div className="text-dgrey ml-2 lmt-font">
                {pairTo ? pairTo : "-"}:
              </div>
              <div
                className={`${
                  mode ? "text-price-dark" : "text-price"
                } ml-2 lmt-font`}
              >
                <span>
                  <NumberFormat value={balanceAsset} decimalScale={8} displayType={'text'} thousandSeparator={true} />
                </span>
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
              onKeyDown={(evt) => ["e", "E", "+", "-",","].includes(evt.key) && evt.preventDefault()}
              value={inputPrice}
              onChange={(e) => setInputPrice(e.target.value)}
            ></input> */}
            <NumberFormat 
              // prefix={pairTo ? pairTo+" : " : null}
              thousandSeparator={true}
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              inputMode="decimal"
              placeholder="0"
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
              value={inputAmount}
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              onChange={(e) => {
                setInputAmount(e.target.value);
              }}
            ></input> */}
            <NumberFormat 
              thousandSeparator={true}
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              inputMode="decimal"
              placeholder="0"
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
                setInputAmount(
                  PercentMath({
                    select: 0,
                    value: balanceAsset,
                  }).result,
                )
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
                setInputAmount(
                  PercentMath({
                    select: 1,
                    value: balanceAsset,
                  }).result,
                )
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
                setInputAmount(
                  PercentMath({
                    select: 2,
                    value: balanceAsset,
                  }).result,
                )
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
                setInputAmount(
                  PercentMath({
                    select: 3,
                    value: balanceAsset,
                  }).result,
                )
              }
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio4"
              />
              <label
                class="form-check-label font-12  mt-1"
                style={{ color: mode ? "white" : "black" }}
                for="inlineRadio4"
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
                Number.isFinite(inputAmount / inputPrice)
                  ? Number(inputAmount / inputPrice)
                  : 0
              }
              placeholder="0"
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              disabled
            ></input> */}
             <NumberFormat 
              // prefix={pairFrom?pairFrom+" : ":null}
              thousandSeparator={true}
              className={`col-9 py-1 mt-3 ${
                mode ? "border-market-dark" : "border-market"
              }`}
              inputMode="decimal"
              placeholder="0"
              value={
                Number.isFinite(inputAmount / inputPrice)
                  ? Number(inputAmount / inputPrice)
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
                mode ? "bg-buy-dark" : "bg-buy"
              }`}
            >
              <h5
                className={`mb-0 font-16 ${
                  mode ? "font-weight-bold" : " font-bolder2"
                }`}
              >
                Buy
              </h5>
            </button>
          ) : (
            <div className="text-center bg-loginfirst col-9 offset-3 mt-4">
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
