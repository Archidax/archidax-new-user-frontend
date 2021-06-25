import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetOrderLastPrice } from '../../../stores';

// Import Images
import star from "../../../assets/img/trade/star.png";
import FavoritePair from '../../../components/tradeComponents/listingExchange/FavoritePair';
import CryptoPair from '../../../components/tradeComponents/listingExchange/CryptoPair';
import FiatPair from '../../../components/tradeComponents/listingExchange/FiatPair';

function TraficTradeDerivative({handleShowDropdown, showDropdown, mode}) {
    const dispatch = useDispatch();

    const { PairSymbol, icon, price24H, listingList } = useSelector((state) =>
        state ? state.pasarTradingReducer : {},
    );

    React.useEffect(() => {
        if (PairSymbol) {
            dispatch(GetOrderLastPrice({ pair: PairSymbol }));
        }
    }, [PairSymbol]);

    return (
        <div className="traficTradeDerivative">
            <div className="traficTradeDerivative-left">
                <div className="traficTradeDerivative-dropdown">
                    <div class="ci-dropdown list-coin-responsive">
                        <button
                            className="ci-dropdown-btn ci-dropdown-btn-TradeSymbol py-2 ci-md w-100"
                            type="button"
                            style={{
                                overflow: "hidden",
                                background: mode ? "#232323" : "#00688f",
                            }}
                            onClick={() => handleShowDropdown(showDropdown)}
                        >
                            {/* {PairSymbol ? ( */}
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="text-left mr-2 d-flex align-items-center">
                                        <img
                                            src={icon}
                                            alt="icon"
                                            width="33px"
                                            height="40px"
                                            className="mr-2"
                                        />
                                        <p
                                            className="mb-0 price-title-trade"
                                            style={{
                                                color: mode ? "white" : "white",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {/* {PairSymbol ? PairSymbol : "-"} */}
                                            -
                                        </p>
                                    </div>
                                    <div className="icons">
                                        <i className="fas fa-sort-down d-flex justify-content-center"></i>
                                    </div>
                                </div>
                            {/* ) : (
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="text-left mr-2 d-flex align-items-center">
                                        <ReactLoading
                                            type={"spin"}
                                            color={"#ffffff"}
                                            height={"40px"}
                                            width={"33px"}
                                        />
                                    </div>
                                </div>
                            )} */}
                        </button>
                        <div
                            className={`ci-dropdown-menu-TradeSymbol ${showDropdown} pt-0`}
                            style={{
                                position: "absolute",
                                zIndex: "999",
                                borderRadius: "6px",
                            }}
                        >
                            <div className="w-100">
                                <div
                                    className={mode ? "row tabs-global-dark" : "row tabs-global"}
                                >
                                    <div className="col-12 col-md-12">
                                        <ul
                                            className="nav nav-pills mb-0 font-14"
                                            id="pills-tab"
                                            role="tablist"
                                        >
                                            <li className="nav-item col-4 p-0">
                                                <a
                                                    className="nav-link text-center"
                                                    id="favorite-tabs"
                                                    data-toggle="pill"
                                                    href="#pills-favs"
                                                    role="tab"
                                                    aria-controls="pills-favs"
                                                    aria-selected="true"
                                                    style={{ borderRadius: "6px 0px 0px 0px" }}
                                                >
                                                    <img src={star} alt="star" />
                                                </a>
                                            </li>
                                            <li className="nav-item col-4 p-0">
                                                <a
                                                    className="nav-link text-center active"
                                                    id="crypto-pair"
                                                    data-toggle="pill"
                                                    href="#pills-idrs"
                                                    role="tab"
                                                    aria-controls="pills-idrs"
                                                    aria-selected="false"
                                                >
                                                    BTC
                                                </a>
                                            </li>
                                            <li className="nav-item col-4 p-0">
                                                <a
                                                    className="nav-link text-center"
                                                    id="fiat-pairs"
                                                    data-toggle="pill"
                                                    href="#pills-usdts"
                                                    role="tab"
                                                    aria-controls="pills-usdts"
                                                    aria-selected="false"
                                                    style={{ borderRadius: "0px 6px 0px 0px" }}
                                                >
                                                    USDT
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div
                                                className="tab-pane ci-dropdown-menu-TradeSymbol-scrollbar fade"
                                                id="pills-favs"
                                                role="tabpanel"
                                                aria-labelledby="favorite-tabs"
                                            >
                                                <FavoritePair listingList={listingList} />
                                            </div>
                                            <div
                                                className="tab-pane ci-dropdown-menu-TradeSymbol-scrollbar fade show active"
                                                id="pills-idrs"
                                                role="tabpanel"
                                                aria-labelledby="crypto-pairs"
                                            >
                                                <CryptoPair listingList={listingList} />
                                            </div>
                                            <div
                                                className="tab-pane ci-dropdown-menu-TradeSymbol-scrollbar fade"
                                                id="pills-usdts"
                                                role="tabpanel"
                                                aria-labelledby="fiat-pairs"
                                            >
                                                <FiatPair listingList={listingList} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="traficTradeDerivative-lastPrice">
                    <h3 className="m-0 ax-text-danger">37883.0</h3>
                    <p className="m-0 ax-text-danger">-2.84%</p>
                </div>
                <div className="traficTradeDerivative-price">
                    <div className="">
                        <p className="m-0 font-12 ax-text-gray">Highest in 24h</p>
                        <p className="m-0 font-16 text-white">37883.0</p>
                    </div>
                    <div className="">
                        <p className="m-0 font-12 ax-text-gray">Lowest in 24h</p>
                        <p className="m-0 font-16 text-white">37883.0</p>
                    </div>
                    <div className="">
                        <p className="m-0 font-12 ax-text-gray">24H Vol</p>
                        <p className="m-0 font-16 text-white">37883.0</p>
                    </div>
                    <div className="">
                        <p className="m-0 font-12 ax-text-gray">Funding Rate</p>
                        <p className="m-0 font-16 text-white">37883.0</p>
                    </div>
                    <div className="">
                        <p className="m-0 font-12 ax-text-gray">Settlement Time</p>
                        <p className="m-0 font-16 text-white">37883.0</p>
                    </div>
                    <div className=" d-flex align-items-center">
                        <p className="m-0 font-16 text-gold">Reset</p>
                    </div>
                </div>
            </div>

            <div className="traficTradeDerivative-right">
                <div className="traficTradeDerivative-btnLeft my-2">
                    <button className="d-flex align-items-center justify-content-center ci-btn-custom-3 w-100">
                        <i className="fas fa-exchange-alt mr-2" />
                        <span>Transfer</span>
                    </button>
                </div>
                <div className="traficTradeDerivative-btnRight my-2">
                    <button className="ci-btn-warning w-100">
                        Cross
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TraficTradeDerivative
