import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from '../screens/SearchScreen';
export const SearchStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Searchs"
      component={SearchScreen}
      options={{ title: "Buscar" }}
    />
  </Stack.Navigator>
  )
}
