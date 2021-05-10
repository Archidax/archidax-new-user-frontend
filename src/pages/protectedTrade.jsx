import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

export default ({children, ...rest}) => {
    const isLogin = useSelector(state => state.userReducer.isLogin)
    return (
        <Route {...rest}>
            {
                !isLogin ?
                children : <Redirect to={"/"} />
            }
        </Route>
    )
    
}