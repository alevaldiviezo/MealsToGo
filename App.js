import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';

import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';

import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';

import { RestaurantScreen } from './src/features/restaurants/screens/restaurats.screen';
import { theme } from './src/infraStructure/theme';
import {SafeArea} from './src/components/utility/safe-area-component';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Maps: 'md-map',
  Settings: 'md-settings'
}

const Maps = () => 
  <SafeArea><Text>Maps</Text></SafeArea>

const Settings = () => 
<SafeArea><Text>Settings</Text></SafeArea>


const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    )
  }
}

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
    <LocationContextProvider>
      <RestaurantContextProvider>
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions ={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}
      >
      <Tab.Screen name="Restaurants" component={RestaurantScreen} />
      <Tab.Screen name="Maps" component={Maps}/>
      <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      </NavigationContainer>
      </RestaurantContextProvider>
    </LocationContextProvider>
    </ThemeProvider>
    
    <ExpoStatusBar style='auto'/>
    </>
    
  );
}


