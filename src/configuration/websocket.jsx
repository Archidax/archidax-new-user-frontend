import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import {IoWebSocketTrade, IoWebSocket} from "./IoWebSocket";
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
            IoWebSocket(email).on('ArchidaxSocketEvent', ({type, data}) => {
                switch(type){
                    case 'NOTIFICATION':
                        dispatch({
                            type: "NEW_NOTIFICATION",
                            data
                        })
                        break;
                    case 'LOGOUT':
                        logout(dispatch)
                        break;
                    default:
                        break;

                }
            })
        } else {
            IoWebSocket(email).removeListener('ArchidaxSocketEvent')
        }
        return () => IoWebSocket(email).removeListener('ArchidaxSocketEvent')
    },[email,dispatch])
    
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}
