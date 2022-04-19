import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { initializeApp } from 'firebase/app';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';

import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';

import { theme } from './src/infraStructure/theme';
import { Navigation } from './src/infraStructure/navigation';


import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {

  apiKey: "AIzaSyCmiXgchu_Wwb9XrHT0jwgzrzTHcF3Woe0",

  authDomain: "mealstogo-d8fb8.firebaseapp.com",

  projectId: "mealstogo-d8fb8",

  storageBucket: "mealstogo-d8fb8.appspot.com",

  messagingSenderId: "901493205885",

  appId: "1:901493205885:web:aa2d0a10782e31c659fa14"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // useEffect(() => {
  //   setTimeout(() => { 
  //   signInWithEmailAndPassword(auth,'test@meal.com', 'test123')
      
  //     .then((user) => {
  //       console.log(user);
  //       setIsAuthenticated(true);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     })
  //   }, 3000);
  //   }, [])
  
  // const isAndroid = Platform.OS === 'android';
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        
              <Navigation/>
            
      </AuthenticationContextProvider>
    </ThemeProvider>
    
    <ExpoStatusBar style='auto'/>
    </>
    
  );
}


