import React, {useState, createContext} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {loginRequest} from './authentication.service'

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const[isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const[user, setUser] = useState(null);
    const[error, setError] = useState(null);

    const onLogin =  (email,password) => {
        setIsLoading(true);
          loginRequest(email,password)
        .then((u) => {
            setUser(u);
            setIsLoading(false);
            setIsAuthenticated(true);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        });
    };

    return(
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
            }}
        >{children}</AuthenticationContext.Provider>
    )
}