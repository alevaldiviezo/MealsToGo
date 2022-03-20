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

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();



const Maps = () => 
  <SafeArea><Text>Maps</Text></SafeArea>

const Settings = () => 
<SafeArea><Text>Settings</Text></SafeArea>


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
      
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color, size }) => {
          let iconName;

          if (route.name === 'Restaurants') {
            iconName = 'md-restaurant';
          } else if (route.name === 'Settings') {
            iconName = 'md-settings';
          }else if (route.name === 'Maps') {
            iconName = 'md-map';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
      <Tab.Screen name="Restaurants" component={RestaurantScreen} />
      <Tab.Screen name="Maps" component={Maps}/>
      <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    
    <ExpoStatusBar style='auto'/>
    </>
    
  );
}


