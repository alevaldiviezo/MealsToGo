import React, {useState, createContext} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import {loginRequest, registerRequest, authState, logOut} from './authentication.service'

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const[isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const[user, setUser] = useState(null);
    const[error, setError] = useState(null);

    // const onAuthRequest = (usr) => {
        // setIsLoading(true);
        authState((usr) => {
            if(usr){
                setUser(usr);
                setIsLoading(false);
            }else{
                setIsLoading(false);
            }
        })
        
    // }

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

    const onRegister = (email, password, repeatedPassword) => {
        if(password !== repeatedPassword){
            setError('Error: password does not match');
            return;
        }
        setIsLoading(true);
        registerRequest(email, password)
        .then((u) => {
            setUser(u);
            setIsLoading(false);
            setIsAuthenticated(true);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        });
       
        // createUserWithEmailAndPassword(auth, email, password)

        // .then((u) => {
        //     setUser(u);
        //     setIsLoading(false);
        //     setIsAuthenticated(true);
        // }).catch((e) => {
        //     setIsLoading(false);
        //     setError(e.toString());
        // });
    }

    const onLogout = () => {
        setUser(null);
        logOut();
    }


    return(
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout
            }}
        >{children}</AuthenticationContext.Provider>
    )
}