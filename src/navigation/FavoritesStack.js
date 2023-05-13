import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {FavoritesScreen} from "../screens/FavoritesScreen";

export const FavoritesStack = () =>{
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favoritos"
        component={FavoritesScreen}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  )
};
