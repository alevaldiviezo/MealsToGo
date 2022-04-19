import React from 'react';
import { initializeApp } from 'firebase/app';

import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';



export const loginRequest =  (email,password) => {
//     const firebaseConfig = {
//         apiKey: "AIzaSyCmiXgchu_Wwb9XrHT0jwgzrzTHcF3Woe0",
      
//         authDomain: "mealstogo-d8fb8.firebaseapp.com",
      
//         projectId: "mealstogo-d8fb8",
      
//         storageBucket: "mealstogo-d8fb8.appspot.com",
      
//         messagingSenderId: "901493205885",
      
//         appId: "1:901493205885:web:aa2d0a10782e31c659fa14"
      
//       };
      
//       const app = initializeApp(firebaseConfig);
//       const auth = getAuth(app);

    const auth = getAuth();

     return new Promise((resolve,reject) => {
         signInWithEmailAndPassword(auth, email,password)
         .then((res) => {
             resolve(res);
         })
         .catch(reject);
     })
}

export const registerRequest = (email, password) => {
    const auth = getAuth();

    
    return new Promise((resolve,reject) => {
        createUserWithEmailAndPassword(auth, email,password)
        .then((res) => {
            resolve(res);
        })
        .catch(reject);
    }) 
}

export const authState = (usr) => {
    const auth= getAuth();

    return new Promise((resolve,reject) => {
        onAuthStateChanged(auth, usr)
        .then((res) => {
            resolve(res);
        })
        .catch(reject);
        
    })
    
}

export const logOut = () => {
    const auth = getAuth();

    return new Promise((resolve, reject) => {
        signOut(auth)
        .then((res) => {
            resolve(res);
        }).catch(reject);
    })
}