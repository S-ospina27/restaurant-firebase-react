// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppNavigation } from "./src/navigation/AppNavigation";
import {firebase} from "./src/tools/firebase";
import Toast from "react-native-toast-message";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast/>
    </>
  );
}
