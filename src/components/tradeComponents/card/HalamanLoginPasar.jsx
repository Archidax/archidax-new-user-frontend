import React from "react";

import {useSelector} from "react-redux";

export default function IsLoginPasar({children}) {
    
    const isLoginPages = useSelector(state => state.userReducer.isLogin);

    if(isLoginPages){
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
    return null;
}