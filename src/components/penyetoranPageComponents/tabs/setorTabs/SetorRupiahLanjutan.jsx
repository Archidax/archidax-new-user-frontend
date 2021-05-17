import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import popUps from '../../../popUps'
import QRISSetorBank from './qris/QRISSetorBank'

import SetorRupiahAlfamart from './SetorRupiahAlfamart'
import SetorRupiahTransferBank from './SetorRupiahBankTransfer'
import SetorRupiahOvo from './SetorRupiahOvo'
import SetorRupiahTerjadiKesalahan from './SetorRupiahTerjadiKesalahan'
import SetorRupiahPaypal from './SetorRupiahPaypal'


function SetorRupiahLanjutan({ nominal }) {
    const metode = useSelector(state => state.setorRupiahReducer.metode)
    const isExist = useSelector(state => state.setorRupiahReducer.isExist)
    const [method, setMethod] = useState(false)

    useEffect(() => {
        setMethod(metode)
    }, [metode])

    // switch(method){
    //     case 'ALFAMART':
    //         return <SetorRupiahAlfamart nominal={nominal} metode={method} />
    //     case 'OVO':
    //         return <SetorRupiahOvo nominal={nominal} metode={method} /> 
    //     case 'QRIS':
    //         return <SetorRupiahQRIS nominal={nominal} metode={method} />
    //     case 'TRANSFER BANK':
    //         return <SetorRupiahTransferBank nominal={nominal} metode={method} /> 
    //     case 'PAYPAL':
    //         return <SetorRupiahPaypal nominal={nominal} metode={method} /> 
    //     default:
    //         return <></>
    // }
    if (method) {
        return (
            <>
                {isExist && popUps.fire({ title: "Tunggu!", text: "Anda masih punya transaksi deposit yang belum selesai. Silakan lanjutkan ke proses pembayaran." })}
                {method.toUpperCase() === "ALFAMART" ? <SetorRupiahAlfamart nominal={nominal} metode={method} /> :
                    method.toUpperCase() === "OVO" ? <SetorRupiahOvo nominal={nominal} metode={method} /> :
                        method.toUpperCase() === "TRANSFER BANK" ? <SetorRupiahTransferBank nominal={nominal} metode={method} /> :
                            method.toUpperCase() === "PAYPAL" ? <SetorRupiahPaypal nominal={nominal} metode={method} /> :
                                method.toUpperCase() === "CREDIT CARD" ? <SetorRupiahPaypal nominal={nominal} metode={method} /> :
                                    method.toUpperCase().includes("QRIS_") ? <QRISSetorBank nominal={nominal} metode={method} /> :
                                        method === "" ? <SetorRupiahTerjadiKesalahan /> : <SetorRupiahTransferBank nominal={nominal} metode={method} />
                }
            </>
        )
    } else {
        return <></>
    }
}

export default SetorRupiahLanjutan
