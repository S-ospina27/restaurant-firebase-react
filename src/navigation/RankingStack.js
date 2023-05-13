import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {RankingScreen} from "../screens/RankingScreen";


 export const RankingStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rankings"
        component={RankingScreen}
        options={{ title: "Ranking" }}
      />
    </Stack.Navigator>
  )
};