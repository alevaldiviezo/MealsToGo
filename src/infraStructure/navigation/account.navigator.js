import React from "react";
import {View, Text} from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
    return(
    <Stack.Navigator headerMode='none'>
        <Stack.Screen 
        name='Main'
        component = {AccountScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Login"
        component={LoginScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Register"
        component={RegisterScreen}
        options={{headerShown:false}}
        />
    </Stack.Navigator>
    )};