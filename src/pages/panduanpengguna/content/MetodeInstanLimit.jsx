import React from 'react'

function MetodeInstanLimit() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Instant Method and Limit Method
                    </h2>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <p className="text-gray2 font-15 text-justify">For the process of buying and selling crypto assets, there are 2 methods provided by our exchange platform, namely the Limit Method and the Instant Method.</p>
                    <ol>
                        <li className="text-gray2 font-16">Instant Method</li>
                        <p className="text-gray2 font-14">The Instant method is the process of buying and selling crypto in a relatively short time, without having to wait for your order to be executed, this is because you have immediately used the price set by market makers. Usually, this instant method is also called a <i>market taker</i>.</p>
                        <p className="text-gray2 font-14 font-weight-bold">You don't need to set the price because you bought the crypto asset at the current selling price. For example, the price of a crypto like Bitcoin touched IDR 700 million, if you use a market taker or instant method, you will buy it at IDR 700 million.</p>
                        <p className="text-gray2 font-14">The advantage of using this method is that you can sell/buy Bitcoin instantly, without having to wait for your order to be executed because you have immediately used the price set by <i>market makers.</i></p>
                        <p className="text-gray2 font-14">The drawback, you will be charged a fee of 0.25% for each transaction (fees include VAT).</p>
                        
                        <li className="text-gray2 font-16">Limit Method</li>
                        <p className="text-gray2 font-14">The Limit method is the process of buying and selling crypto at a price that you set yourself. Usually, the limit method is also called the <i>market maker</i>.</p>
                        <p className="text-gray2 font-14">You can buy crypto assets at a price that you set yourself. For example, the price of Bitcoin is still IDR 700 million. You want to buy it at Rp. 680 million. So, later on, your rupiah balance will be locked at IDR 680 million. Your order will be executed when the Bitcoin asset price touches IDR 680 million.</p>
                        <p className="text-gray2 font-14">The limit method also applies when you want to sell the crypto asset price. For example, you have bought the price of crypto. Then, if you want to set a profit of around 100%, you can use this method to set a limit on the selling price.</p>
                        <p className="text-gray2 font-14">The advantage of using this method is that you are not charged any transaction fees (0% fee) in the crypto trading process and can trade crypto at the price you want. The drawback is, you are forced to wait a while until the Bitcoin price moves to touch the price you want.</p>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default MetodeInstanLimit
