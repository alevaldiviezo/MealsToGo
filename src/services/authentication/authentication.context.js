import React, {useState, createContext} from "react";
import { initializeApp } from "firebase/app";

import {loginRequest} from './authentication.service'

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(false);
    const[user, setUser] = useState(null);
    const[error, setError] = useState(null);

    const onLogin = (email,password) => {
        setIsLogin(true);
        loginRequest(email,password)
        .then((u) => {
            setUser(u);
            setIsLogin(false);
        }).catch((e) => {
            setIsLogin(false);
            setError(e);
        })
    }

    return(
        <AuthenticationContext.Provider
            value={{
                isLogin,
                user,
                error,
                onLogin,
            }}
        >{children}</AuthenticationContext.Provider>
    )
}