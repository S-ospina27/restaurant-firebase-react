import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./UserGuestStyle";
import { Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const UserGuestScreen = () => {
  const navigation = useNavigation();
  const goToLogin = () =>{
    navigation.navigate("Login")
  }
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.imagen}
      />
      <Text style={styles.title}>Consultar un perfil de tenedores</Text>
      <Text style={styles.description}>
        ¿Como describirias tu mejor restaurante? buscas y visualizar los mejores
        restaurantes de una forma sencilla,vota cual te ha gustado mas y
         comenta como ha sido tu experiencia
      </Text>
        <Button title="Ver Perfil" onPress={goToLogin} buttonStyle={styles.button}/>
    </ScrollView>
  );
};
