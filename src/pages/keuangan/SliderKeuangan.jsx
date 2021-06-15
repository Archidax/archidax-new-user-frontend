import React from 'react';
import Slider from "react-slick";
import {convertNumber} from '../../assets/js'

function SliderKeuangan({MarketData}) {
  let whiteList=["BTC","ETH","BNB","CGOLD","WAVES"]
  let WalletCoin=MarketData?MarketData.filter((el)=>whiteList.includes(el.initialSymbol)?el:null):null


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    arrows:false
  };
  return (
    <div className="text-white ml-5">
      <Slider {...settings}>
         {
           WalletCoin&&WalletCoin.length&&WalletCoin.map((item,index) => {
            return (
              <div index={index}>
                <div 
                style={{
                  cursor: "pointer",
                  display:'flex'
                }}
                >
                  <img src={item.icon} alt="" width={32}/>
                  <p className="font-14 mb-0 ml-2">{item.initialSymbol} tertinggi {convertNumber.toRupiah(item.price24h_high)} terendah {convertNumber.toRupiah(item.price24h_low)} harga terakhir {convertNumber.toRupiah(item.price24h_close)} ({convertNumber.tradeChange(item.price24h_change, 2)})</p>
                </div>
              </div>
            )
          })
         }
      </Slider>
    </div>
  )
}

export default SliderKeuangan
