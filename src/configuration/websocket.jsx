import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import {IoWebSocketTrade, IoWebSocket} from "./IoWebSocket";

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
            IoWebSocket(email).on('Notification', (data) => {
                dispatch({
                    type: "NEW_NOTIFICATION",
                    data: data.data
                })
            })
        }
        return () => IoWebSocket(email).removeListener('Notification')
    },[email,dispatch])
    
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}
