import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sendOTP } from '../../stores'


export default function OTP (props) {
    const { handleData, className} = props
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profileReducer)
    const [min, setMin] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [counter, setCounter] = useState(0)

    const startCD = (sec) => {
      setCounter(sec)
    }


    const send = (e) => {
        e.preventDefault()
        sendOTP(dispatch, profile.telefon, startCD, handleData)
    }
    
    useEffect(() => {
      const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      setMin(Math.floor(counter / 60))
      setSeconds(counter % 60)
      return () => clearInterval(timer);
    }, [counter]);

    return (
        <button 
        onClick={send}
        disabled={counter > 0}
        style={{
            // marginLeft: '15px'
        }} className={`ci-btnOL-secondary w-100 ${className}`}>{counter ? ("0" + min).slice(-2)+":"+("0" + seconds).slice(-2): "Kirim PIN"}</button>
    )
}