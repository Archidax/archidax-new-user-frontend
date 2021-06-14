import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { CancelAllOrderPending } from "../../../stores/pasartrading/functions";

export default function BtnAlertCancelAll() {
  const { PairSymbol } = useSelector((state) =>
    state ? (state.pasarTradingReducer ? state.pasarTradingReducer : {}) : {},
  );
  const Dispatch = useDispatch();

  const OrderCncel = React.useCallback(() => {
    Dispatch(CancelAllOrderPending(PairSymbol));
  }, [Dispatch, PairSymbol]);

  return (
    <div className="text-gold mx-1">
      <button onClick={OrderCncel} className="btn text-danger">
        <i className="fa fa-times" /> Cancel All Order
      </button>
    </div>
  );
}
