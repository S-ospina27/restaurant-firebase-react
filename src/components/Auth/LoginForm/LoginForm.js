import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import { styles } from "./LoginFormStyle";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handlesubmit = async () => {
    try {
      const auth= getAuth();
      await signInWithEmailAndPassword(
        auth,email,password
      )
        navigation.navigate("Account",{screen:"Accounts"})
        setEmail("");
        setPassword("");
    } catch (error) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1:"usuario o contraseña incorrectos",
      });
    }
  };

  return (
    <View style={styles.content}>
      <Input
        placeholder="correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="contraseña"
        containerStyle={styles.input}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.icon}
          />
        }
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        title={"iniciar sesion"}
        containerStyle={styles.btnButton}
        buttonStyle={styles.btn}
        onPress={handlesubmit}
      />
    </View>
  );
};
