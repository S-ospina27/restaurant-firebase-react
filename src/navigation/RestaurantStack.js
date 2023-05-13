import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {AddRestaurant} from "../screens/Restaurants/AddRestaurant";
import {RestaurantsScreen} from "../screens/Restaurants/RestaurantsScreen";

 export const RestaurantStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurantes"
        component={RestaurantsScreen}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name="AddRestaurants"
        component={AddRestaurant}
        options={{ title: "Agregar Restaurantes" }}
      />
    </Stack.Navigator>
  );
};

