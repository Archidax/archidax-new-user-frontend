import React from 'react'
import PopupKonfirmasi from './setorTabs/PopupKonfirmasi'
import RiwayatSetorRupiah from './setorTabs/RiwayatSetorRupiah'
import SetorRupiahPilih from './setorTabs/SetorRupiahPilih'


function SetorRupiahTabs() {
    return (
        <div className="container-fluid">
            <div className="row border-top mt-3 border-warning">
                <div className="col-12 col-md-6 font-roboto text-white mt-2">
                    <h3 className="label-title-top">Fiat Deposit</h3>
                    <h4 className="label-title mt-3 font-16">Deposit Requirements :</h4>
                    <ul>
                        <li className="label-title2">The minimum deposit balance is US$ 10.</li>
                        <li className="label-title2">There is no maximum deposit balance.</li>
                        <li className="label-title2">There are various transaction fees charged.</li>
                        <li className="label-title2">The balance will be calculated based on the deposit amount minus the transaction fee.</li>

                    </ul>
                    <h4 className="label-title mt-3 font-16">Steps</h4>
                    <ul>
                        <li className="label-title2">Fill in the amount that you want to deposit.</li>
                        <li className="label-title2">Select a payment method and make sure your balance is sufficient.</li>
                        <li className="label-title2">Then click the "Continue" button.</li>
                        <li className="label-title2">Follow the next instructions to transfer funds according to the amount and payment method selected. If you want to cancel depositing funds then you select "Cancel Deposit".</li>
                    </ul>

                </div>

                <div className="col-12 col-md-6 font-12 font-roboto text-white mt-2">
                    <div className="row my-2 mx-0" style={{ height: "60px" }}>
                        <div>
                            <div className="mx-0 px-3 py-3 ci-setorRupiahStep ci-bg-gold font-bold text-dark h-100 d-flex justify-content-center font-14 align-items-center">
                                Step 1: Amount
                            </div>
                        </div>
                        <div className="arrow-right"></div>
                        <div>
                            <div className="px-3 py-3 mx-0 ci-setorRupiahStep bg-info font-bold text-dark h-100 d-flex justify-content-center font-14 align-items-center">
                                Step 2: Instruction
                            </div>
                        </div>
                        <div className="arrow-right2"></div>
                    </div>
                    <SetorRupiahPilih />
                </div>
            </div>
            <RiwayatSetorRupiah />
            <PopupKonfirmasi />
        </div>
    )
}

export default SetorRupiahTabs
