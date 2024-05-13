import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import index from './pages/index'
import calculadora from './pages/calculadora'
import lista from './pages/lista'
import { setStatusBarBackgroundColor } from "expo-status-bar";

import { Entypo, Feather } from '@expo/vector-icons'
import { Image } from 'react-native';


const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#008000',
                    borderTopColor: 'transparent',
                    paddingBottom: 0,
                    paddingTop: 0,
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)'
            }}
        >
            <Tab.Screen
                name="Home"
                component={index}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../assets/home.png') : require('../assets/home.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="lista"
                component={lista}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../assets/lista.png') : require('../assets/lista.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="calculadora"
                component={calculadora}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../assets/lista.png') : require('../assets/calculadora.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}