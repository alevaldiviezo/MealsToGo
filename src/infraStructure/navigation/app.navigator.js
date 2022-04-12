import React from 'react';
import {Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';

import { SafeArea } from '../../components/utility/safe-area-component';
import {RestaurantsNavigator} from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Maps: 'md-map',
  Settings: 'md-settings'
}



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

export const AppNavigator = () => {
    return(

        
        <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions ={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        }}
        >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} 
        options={{headerShown:false}}
        />
        <Tab.Screen name="Maps" component={MapScreen}
        options={{headerShown:false}}
        />
        <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
    
};

