import React, { useEffect, useState, useCallback } from "react";
// import { useSelector, useDispatch } from 'react-redux'

// import { logout } from '../stores'

export default function KeepAlive(props){

    const [isAlive, setAlive] = useState(false)

    const activityChecker = () => {
        if(isAlive){
            console.log('gw masih idup njing')
            setAlive(false)
        } else {
            console.log('mati gw njing')
            // logout
        }
    }

    useEffect(() => {

        const hadActivity = (e) => {
            console.log('ada aktivitas')
            setAlive(true)
        }

        document.addEventListener("mousemove", hadActivity, true)
        document.addEventListener("scroll", hadActivity, true)
        document.addEventListener("keydown", hadActivity, true)

        return () => {
            document.removeEventListener("mousemove", hadActivity, true)
            document.removeEventListener("scroll", hadActivity, true)
            document.removeEventListener("keydown", hadActivity, true)
        }
    },[])

    useEffect(() => {
        const timer = setTimeout(() => {
            activityChecker()
        },5000)

        return () => {
            clearTimeout(timer)
        }
    },[isAlive])
        
    return (
        <>
            {props.children}
        </>
    )
}
