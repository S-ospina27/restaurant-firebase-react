import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantStack } from "./RestaurantStack";
import { RankingStack } from "./RankingStack";
import { FavoritesStack } from "./FavoritesStack";
import { AccountsStack } from "./AccountStack";
import { SearchStack } from "./SearchStack";
const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00A680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenIcons(route, color, size),
      })}
    >
      <Tab.Screen
        name={"Restaurants"}
        component={RestaurantStack}
        options={{ title: "Restaurantes", headerShown: false }}
      />
      <Tab.Screen
        name="Ranking"
        component={RankingStack}
        options={{ title: "Ranking", headerShown: false }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{ title: "Favoritos", headerShown: false }}
      />

      <Tab.Screen
        name="Account"
        component={AccountsStack}
        options={{ title: "Cuenta", headerShown: false }}
      />

      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{ title: "Buscar",headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function screenIcons(route, color, size) {
  let iconName;
  if (route.name === "Restaurants") {
    iconName = "compass-outline";
  }
  if (route.name === "Favorites") {
    iconName = "heart-outline";
  }
  if (route.name === "Account") {
    iconName = "home-outline";
  }

  if (route.name === "Ranking") {
    iconName = "star-outline";
  }
  if (route.name === "Search") {
    iconName = "magnify";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
