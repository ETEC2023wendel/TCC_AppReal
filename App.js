import { AppRegistry } from 'react-native';
import 'firebase/database';
import {AppReal } from './app.json'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./src/routes/index";
disableYellowBox = true;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Routes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
AppRegistry.registerComponent(AppReal, () => App);