import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import {IoWebSocketTrade, IoUserWebSocket, IoTradeWebSocket} from "./IoWebSocket";
import { logout } from '../stores'

export default function WsComponent(props){

    const { email } = useSelector((state) => state.profileReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(IoWebSocketTrade&&IoWebSocketTrade.connected){
            console.log(`WebSocket Trade Aktif`);
        }
    },[]);

    useEffect(() => {
        if(email){
            IoUserWebSocket(email).on('ArchidaxSocketEvent', ({type, data}) => {
                switch(type){
                    case 'NOTIFICATION':
                        dispatch({
                            type: "NEW_NOTIFICATION",
                            data
                        })
                        break;
                    case 'REFRESHTOKEN':
                        localStorage.setItem("token", data)
                        break
                    case 'LOGOUT':
                        logout(dispatch)
                        break;
                    default:
                        break;

                }
            })
        } else {
            IoUserWebSocket(email).removeListener('ArchidaxSocketEvent')
        }
        return () => IoUserWebSocket(email).removeListener('ArchidaxSocketEvent')
    },[email,dispatch])

    useEffect(() => {
        if(email){
            IoTradeWebSocket(email).on('ArchidaxSocketTradeEvent', ({type, data}) => {
                switch(type){
                    case 'NOTIFICATION':
                        dispatch({
                            type: "NEW_NOTIFICATION",
                            data
                        })
                        break;
                    default:
                        break;

                }
            })
        } else {
            IoTradeWebSocket(email).removeListener('ArchidaxSocketEvent')
        }
        return () => IoTradeWebSocket(email).removeListener('ArchidaxSocketEvent')
    },[email,dispatch])
    
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}
