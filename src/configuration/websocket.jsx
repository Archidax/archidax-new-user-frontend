import React, { useEffect, useCallback, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { IoWebSocketTrade, IoUserWebSocketContext, IoTradeWebSocket } from "./IoWebSocket";
import { logout } from '../stores'

export default function WsComponent(props){

    const { IoUserWebSocket } = useContext(IoUserWebSocketContext)

    const { email } = useSelector((state) => state.profileReducer)
    const dispatch = useDispatch()
    
    const socketFn = useCallback(({type, data}) => {
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
    },[])

    useEffect(()=>{
        if(IoWebSocketTrade&&IoWebSocketTrade.connected){
            console.log(`WebSocket Trade Aktif`);
        }
    },[]);

    useEffect(() => {
        if(email){
            IoUserWebSocket(email).on('ArchidaxSocketEvent', socketFn)
        }
        return () => IoUserWebSocket(email).removeListener('ArchidaxSocketEvent', socketFn)
    },[email,dispatch])

    useEffect(() => {
        const socketFn = ({type, data}) => {
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
        }
        if(email){
            IoTradeWebSocket(email).on('ArchidaxSocketTradeEvent', socketFn)
        } else {
            IoTradeWebSocket(email).removeListener('ArchidaxSocketTradeEvent', socketFn)
        }
        return () => IoTradeWebSocket(email).removeListener('ArchidaxSocketTradeEvent', socketFn)
    },[email,dispatch])
    
    return (
        <IoUserWebSocketContext.Provider value={IoUserWebSocket}>
            {props.children}
        </IoUserWebSocketContext.Provider>
    )
}
