import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Account } from "../screens/Account/AccountScreen";
import { LoginScreen } from "../screens/Account/LoginScreen/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen/RegisterScreen";



export const AccountsStack = () =>{
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accounts"
        component={Account}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Iniciar sesion " }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Crear tu cuenta " }}
      />
    </Stack.Navigator>
  )
};
