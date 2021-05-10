import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

import { paypalSuccess } from '../../../../../stores'

export default function PaypalButton(props) {

    const history = useHistory();
    const dispatch = useDispatch();

    const { onPaypalApprove, onPaypalError, amount } = props

    const [{isPending}] = usePayPalScriptReducer()

    let paypalId = null


    const createOrder = async (data, actions) => {
        const order = await actions.order.create({
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                "currency_code": "USD",
                value: Number.parseFloat((amount/14436.80)).toFixed(2),
              },
            },
          ],
        })
        paypalId = order
        return order
    }

    const onApprove = async (data, actions) => {
        let result = await actions.order.capture()
        paypalSuccess(props.withdrawId, paypalId, dispatch, history)
      return result
    }

    const onError = async (data, actions) => {
        let result = await actions.order.capture()
      return result;
    }
    
    return (
        <>
         {
            isPending?
                <>Loading ...</>
            :
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                    onError={onError} 
                />
        }
        </>
    )
}
// Contoh data Sukses
// {
//     "ack":"success",
//     "data": {
//         "create_time":"2021-04-28T03:36:40Z",
//         "update_time":"2021-04-28T03:38:50Z",
//         "id":"74M72440XE115493X",
//         "intent":"CAPTURE",
//         "status":"COMPLETED",
//         "payer": {
//             "email_address":"sb-jta47p3839026@personal.example.com",
//             "payer_id":"CZ2QZPFFT5YHC",
//             "address":{"country_code":"ID"},
//             "name":{"given_name":"John","surname":"Doe"}},
//             "purchase_units":[
//                 {
//                     "reference_id":"default",
//                     "soft_descriptor":"PAYPAL *JOHNDOESTES",
//                     "amount":{
//                         "value":"3.45",
//                         "currency_code":"USD"
//                     },
//                     "payee":{
//                         "email_address":"sb-door433838166@business.example.com",
//                         "merchant_id":"YLVYJC4N3KYS4"
//                     },
//                     "shipping":{
//                         "name":{"full_name":"John Doe"},
//                         "address":{
//                             "address_line_1":"Jl Senopati 1",
//                             "admin_area_2":"Jakarta",
//                             "admin_area_1":"Jakarta",
//                             "postal_code":"12110",
//                             "country_code":"ID"
//                         }
//                     },
//                     "payments":{
//                         "captures":[
//                             {
//                                 "status":"PENDING",
//                                 "id":"5XH30627AD195482C",
//                                 "final_capture":true,
//                                 "create_time":"2021-04-28T03:38:50Z",
//                                 "update_time":"2021-04-28T03:38:50Z",
//                                 "amount":{
//                                     "value":"3.45",
//                                     "currency_code":
//                                     "USD"
//                                 },
//                                 "seller_protection":{
//                                     "status":"NOT_ELIGIBLE"
//                                 },
//                                 "status_details":{
//                                     "reason":"PENDING_REVIEW"
//                                 },
//                                 "links":[
//                                     {
//                                         "href":"https://api.sandbox.paypal.com/v2/payments/captures/5XH30627AD195482C",
//                                         "rel":"self",
//                                         "method":"GET",
//                                         "title":"GET"
//                                     },
//                                     {
//                                         "href":"https://api.sandbox.paypal.com/v2/payments/captures/5XH30627AD195482C/refund",
//                                         "rel":"refund",
//                                         "method":"POST",
//                                         "title":"POST"
//                                     },
//                                     {
//                                         "href":"https://api.sandbox.paypal.com/v2/checkout/orders/74M72440XE115493X",
//                                         "rel":"up",
//                                         "method":"GET",
//                                         "title":
//                                         "GET"
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 }
//             ],
//             "links":
//             [
//                 {
//                     "href":"https://api.sandbox.paypal.com/v2/checkout/orders/74M72440XE115493X",
//                     "rel":"self",
//                     "method":"GET",
//                     "title":"GET"
//                 }
//             ]
//         },
//         "meta":{
//             "calc":"6e3e33e9707cf",
//             "rlog":"rZJvnqaaQhLn%2FnmWT8cSUueWscmrtUHe5Y1Bd%2FeqyvyOTq66rSXAcoHt23K4aX7r7RV0T%2BAtZVLHG%2FvY24WQLvqnEzl2oChCPLYQbruoJIg_179168ed133"
//         },
//         "server":"PJ2Hqe8OojMiIbZKYFxjEwyprWn8ggFPPVyTeblcYIyzEWu4nPiPZigNaa8wHD7UC0niR-RGOzofHFoE1cbGpcMoFzI6NKS3yzntsRH5p8y7tJsIv8ZTPc0WXvxe-hAOz-h64Q65xC_FKrMKioTnr0RkjZ7UcD6SNDNkwGqhb0onZ68kZCAjN6RdK4GovjuyE5_mEK3jtf1ZKSRfxSO4_W_zlY7WLFfXrCKJONa39W4_1mI1CBbFdT8am10gP96sR-9_k7_O9BJHgZU6FTo9cm"
// }