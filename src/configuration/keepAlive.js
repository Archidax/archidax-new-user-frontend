import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { logout } from '../stores'
import Popup from '../components/popUps'
import { IoUserWebSocket } from "./IoWebSocket";

export default function KeepAlive(props){

    const dispatch = useDispatch()
    const history = useHistory()
    const { email } = useSelector((state) => state.profileReducer)

    const [isAlive, setAlive] = useState(false)
    const [isInactive, setInactive] = useState(false)

    const activityChecker = () => {
        if(isAlive){
            if(email){
                IoUserWebSocket(email).emit('refreshToken')
            }
            localStorage.setItem('lastAlive', JSON.stringify({ isAlive: false, time: new Date().getTime() }))
            setAlive(false)
        } else {
            setInactive(true)
            localStorage.removeItem('lastAlive')
            Popup.fire({
                title: "System Message",
                text: 'You have been idle for the last 1 hours and for security reassons we have logged you out. \nPlease log in again',
                onClickOk: () => {
                    logout(dispatch, IoUserWebSocket, email)
                    // history.replace('/home')
                }
            })
        }
    }

    useEffect(() => {

        let lsItem = localStorage.getItem('lastAlive') 

        if(!lsItem){
            let time = new Date().getTime()
            lsItem = { isAlive: true, time }
            localStorage.setItem('lastAlive', JSON.stringify(lsItem))
        } else {
            lsItem = JSON.parse(lsItem)
            if((new Date().getTime() - lsItem.time) >= 7200000 ){
                if(email){
                    logout(dispatch)
                }
            }
        }


        const hadActivity = (e) => {
            setAlive((prev)=> {
                document.removeEventListener("mousemove", hadActivity, true)
                document.removeEventListener("keydown", hadActivity, true)
                localStorage.setItem('lastAlive', JSON.stringify({ isAlive: true, time: new Date().getTime() }))
                return true
            })
        }

        const timer = setTimeout(() => {
            activityChecker()
        }, isAlive? 600000 : 3000000)

        if(!isInactive){
            document.addEventListener("mousemove", hadActivity, true)
            document.addEventListener("keydown", hadActivity, true)
        } else {
            clearTimeout(timer)
        }

        return () => {
            clearTimeout(timer)
            document.removeEventListener("mousemove", hadActivity, true)
            document.removeEventListener("keydown", hadActivity, true)
        }

    },[isAlive])
        
    return (
        <>
            {props.children}
        </>
    )
}