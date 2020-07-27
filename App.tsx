import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/Screens/SplashScreen/SplashScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";

const navigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    HomeScreen: HomeScreen,
  },
  { initialRouteName: "SplashScreen", headerMode: "none" }
);

export default createAppContainer(navigator);
