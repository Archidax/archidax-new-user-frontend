import React from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";
import OrderBuy from "./OrderBuy";
import OrderSell from "./OrderSell";

import {useParams} from "react-router-dom";

import {GetOrderBuyAndSell} from "../../stores/pasartrading/functions";

// import {convertNumber} from "../../assets/js";

export default function DepthChartComponents() {

  const {symbol}=useParams();

  const [DataBuy,setDataBuy]=React.useState([]);

  const [DataSell,setDataSell]=React.useState([]);
  
  let [DepthData,setDepthData]=React.useState({});

  React.useEffect(()=>{
    GetOrderBuyAndSell({dispatch:setDataBuy,pair:symbol.toString().replace("_","/"),side:"BUY",limit:500});
    GetOrderBuyAndSell({dispatch:setDataSell,pair:symbol.toString().replace("_","/"),side:"SELL",limit:500});
  },[setDataBuy,setDataSell,symbol]);

  React.useEffect(()=>{
    let BuyList=DataBuy.sort((a,b)=>b.price-a.price).map((item)=>[item.price,item.amount]);
    let SellList=DataSell.sort((a,b)=>a.price-b.price).map((item)=>[item.price,item.amount]);
    
    console.log("BUY",BuyList);
    console.log("SELL",SellList);
    setDepthData({
      backgroundColor: "transparent transparent",
      type: "depth",
      options: {
        palette: ["#1db01d", "#FF6675"],
        currency: "IDR ",
        // curency diganti
        title: {
          color: "white",
        },
        subtitle: {
          text: "BTC/IDR",
          // symbol diganti
          fontSize: "22px",
          color: "white",
        },
        labels: {
          cost: "Total",
        },
      },
    
      series: [
        {
          // values: [
          //   [1168.49, 0],
          //   [1164.69, 12.0211],
          //   [1163.38, 33.0049],
          //   [1160.98, 45.5622],
          //   [1158.64, 60.4819],
          //   [1154.04, 71.5594],
          //   [1146.54, 83.2051],
          //   [1133.37, 106.8834],
          //   [1129.63, 127.1219],
          //   [1126.89, 145.2484],
          //   [1115.14, 155.8074],
          //   [1113.54, 171.8438],
          //   [1110.49, 184.443],
          //   [1106.92, 202.3068],
          //   [1106.7, 224.5185],
          //   [1104.03, 244.5286],
          //   [1101.99, 256.5801],
          //   [1099.57, 272.8992],
          //   [1099.47, 289.2549],
          //   [1095.76, 300.107],
          //   [1091.75, 320.0837],
          //   [1091.37, 334.7523],
          //   [1086.9, 357.9836],
          //   [1086.6, 375.3844],
          //   [1081.13, 387.3668],
          //   [1079.3, 403.3796],
          //   [1074.56, 420.0898],
          //   [1069.69, 438.8176],
          //   [1068.59, 462.0495],
          //   [1056.35, 484.2044],
          //   [1052.93, 507.0559],
          //   [1052.03, 529.1966],
          //   [1047.46, 541.6345],
          //   [1033.06, 551.942],
          //   [1030.42, 569.7072],
          //   [1025.65, 583.7136],
          //   [1023.38, 608.1764],
          //   [1020.04, 620.0944],
          //   [1018.53, 644.661],
          //   [1014.92, 661.6777],
          // ],
          //values:DataBuy,
          values:[...BuyList],
          text: "Price Bid",
        },
        {
          // values: [
          //   [1168.49, 0],
          //   [1172.22, 33.1932],
          //   [1174.28, 50.5177],
          //   [1174.99, 81.8346],
          //   [1189.53, 104.332],
          //   [1191.07, 119.9178],
          //   [1195.62, 146.3812],
          //   [1199.32, 180.9109],
          //   [1201.89, 199.313],
          //   [1204.34, 228.9945],
          //   [1206.47, 251.6454],
          //   [1209.44, 285.6366],
          //   [1221.89, 312.7949],
          //   [1230.48, 328.6889],
          //   [1235.24, 351.3438],
          //   [1248.33, 377.9289],
          //   [1251.24, 409.9444],
          //   [1253.75, 435.5418],
          //   [1257.48, 453.8852],
          //   [1261.01, 483.8769],
          //   [1265.06, 499.7163],
          //   [1268.75, 529.6374],
          //   [1270.2, 552.1779],
          //   [1272.15, 579.5218],
          //   [1274.19, 606.4376],
          //   [1276.17, 638.8508],
          //   [1283.07, 668.7969],
          //   [1285.76, 694.1647],
          //   [1287.89, 709.9417],
          //   [1288.72, 735.6358],
          //   [1295.71, 765.2281],
          //   [1303.26, 784.6807],
          //   [1305.43, 801.1021],
          //   [1307.78, 817.4528],
          //   [1312.76, 836.7914],
          //   [1317.6, 859.4746],
          //   [1322.31, 891.443],
          //   [1324.35, 907.6098],
          //   [1325.7, 931.1996],
          //   [1328.01, 949.3013],
          // ],
          values:DataSell,
          //values:[],
          text: "Price Ask",
        },
      ],
    });
  },[setDepthData,DataBuy,DataSell]);

  
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className="px-4"
      >
        <h5 className="text-white">Market Depth ({symbol?symbol.toString().replace("_","/"):undefined})</h5>
        <select
          className="btn text-white ci-input-select-default py-1 mb-3"
          id="inputGroupSelect01"
          style={{ width: "150px" }}
        >
          <option selected value="BTC">
            BTC/IDR
          </option>
          <option value="BTC/IDR">ETH/IDR</option>
          <option value="BNB/IDR">BNB/IDR</option>
          <option value="WAVES/IDR">TRX/IDR</option>
          <option value="ETH/IDR">WAVES/IDR</option>
        </select>
      </div>
      <ZingChart data={DepthData} className="mt-3"></ZingChart>
      <div className="row mt-3 px-4">
        <div className="col-6">
          <h5 className="text-white">Market Beli</h5>
          <OrderBuy DataBuy={DataBuy} />
        </div>
        <div className="col-6">
          <h5 className="text-white">Market Jual</h5>
          <OrderSell DataSell={DataSell} />
        </div>
      </div>
    </div>
  );
}
