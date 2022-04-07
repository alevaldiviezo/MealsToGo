import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';

import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';

import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';

import { theme } from './src/infraStructure/theme';
import {SafeArea} from './src/components/utility/safe-area-component';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import {FavouritesContextProvider } from './src/services/favourites/favourites.context'
import { Navigation } from './src/infraStructure/navigation';



export default function App() {

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
    <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantContextProvider>
        <Navigation/>
      </RestaurantContextProvider>
    </LocationContextProvider>
    </FavouritesContextProvider>
    </ThemeProvider>
    
    <ExpoStatusBar style='auto'/>
    </>
    
  );
}


