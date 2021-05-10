import React from 'react'
import { Route,  Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function ProtectedRoute({children, ...rest}){
    const isLogin = useSelector(state => state.userReducer.isLogin)
    const isGAuth = useSelector(state => state.keamananReducer.isGAuth)
    const isGAuthLogin = useSelector(state => state.keamananReducer.isGAuthLogin)
    return (
        <Route {...rest}>
            {
                // (isLogin && !isGAuth) || (isLogin && isGAuth && isGAuthLogin) ?
                // children : <Redirect to={"/home"} />
                !isLogin ?
                <Redirect to={"/home"} /> : isGAuth && !isGAuthLogin && isLogin ?
                <Redirect to={"/gauth"} /> : children
            }
        </Route>
    )
}