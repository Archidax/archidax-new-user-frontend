import React from 'react'

function TarikInstructions({feeWD}) {
    return (
        <ul>
            <li className="font-14">Minimal Withdraw {feeWD.minimumWithdraw} {feeWD.coin}</li>
            <li className="font-14">Fee is coin fee + Archidax 0.5% fee calculated from withdraw amount</li>
        </ul>
    )
}

export default TarikInstructions
