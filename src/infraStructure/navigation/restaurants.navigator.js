import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { TransitionPresets } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {

    return(
        <RestaurantStack.Navigator 
        >
            <RestaurantStack.Screen
            name = 'Restaurants'
            component = {RestaurantsScreen}
            options={{headerShown:false}}
            />

            <RestaurantStack.Screen
            name = 'RestaurantDetail'
            component = {RestaurantDetailScreen}

            />
        </RestaurantStack.Navigator>
    )
}