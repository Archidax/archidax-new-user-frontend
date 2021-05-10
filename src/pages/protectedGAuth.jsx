import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function ProtectedGAuth ({children, ...rest}) {
    const isGAuth = useSelector(state => state.keamananReducer.isGAuth)
    const isGAuthLogin = useSelector(state => state.keamananReducer.isGAuthLogin)
    return (
        <Route {...rest}>
            {
                isGAuth && isGAuthLogin ?
                <Redirect to={"/"} /> : children
            }
        </Route>
    )
}