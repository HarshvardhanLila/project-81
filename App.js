import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from "./navigation/DrawerNavigation";
import BottomTabNavigator from './navigation/TabNavigator';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
    <DrawerNavigator />
    </NavigationContainer>
  );
}


