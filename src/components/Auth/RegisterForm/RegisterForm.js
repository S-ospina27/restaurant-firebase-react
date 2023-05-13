import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./RegisterFormStyle";
import { Button, Icon, Input } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import  Toast from "react-native-toast-message";
export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetpassword, setRepetpassword] = useState("");
  const [show, setShow] = useState(true);
  const [showrepet, setShowrepet] = useState(true);
  const [loading, setloading] = useState(false);
  const navigation = useNavigation();

  const showChangePassword = () => {
    setTimeout(() => setShow(true), 5000);
    setShow(false);
  };
  const showChangeRepetPassword = () => {
    setTimeout(() => setShowrepet(true), 5000);
    setShowrepet(false);
  };

  const handleRegister = async () => {
    setloading(true);
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate("Accounts");
    
    } catch (error) {
      setloading(false)
      Toast.show({type:"error",position:"bottom",text1:"Error al registrarse"})
    }
  };

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        placeholder="Contraseña"
        secureTextEntry={show}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={show ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showChangePassword}
          />
        }
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Input
        placeholder="Repetir contraseña"
        secureTextEntry={showrepet}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={showrepet ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showChangeRepetPassword}
          />
        }
        value={repetpassword}
        onChangeText={(text) => setRepetpassword(text)}
      />
      <Button
        title="unirse"
        containerStyle={styles.btnButton}
        buttonStyle={styles.btn}
        onPress={handleRegister}
        loading={loading}
      />
    </View>
  );
};
