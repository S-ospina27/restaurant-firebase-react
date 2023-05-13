import { View, ScrollView } from "react-native";
import React from "react";
import { Image, Text } from "react-native-elements";
import { styles } from "./LoginStyle";
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "../../../components/Auth/LoginForm/LoginForm";

export const LoginScreen = () => {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <ScrollView centerContent={true}>
      <Image
        source={require("../../../../assets/img/login.jpeg")}
        style={styles.image}
      />

      <Text style={styles.register}>
        ¿Aun no tienes cuenta?
        <Text style={styles.bntregister} onPress={goToRegister}>
          Registrarse
        </Text>
      </Text>
      
      <View style={styles.content}>
        <LoginForm />
      </View>
    </ScrollView>
  );
};
