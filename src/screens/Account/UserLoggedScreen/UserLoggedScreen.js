import { View, Text } from "react-native";
import React, { useState } from "react";
import { InfoUser } from "../../../components/account/infoUser/InfoUser";
import { styles } from "./UserLoggedStyle";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components/shared/LoadingModal/LoadingModal";
import { AcountOptions } from "../../../components/account/AcountOptions";

export const UserLoggedScreen = () => {
  const [_, setReload] = useState(false);
  const onReload = () => setReload((prevState) => !prevState);
  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };
  return (
    <View>
      <InfoUser />
      <AcountOptions onReload={onReload} />
      <Button
        title={"Cerrar sesion "}
        buttonStyle={styles.btnstyles}
        titleStyle={styles.btntextstyle}
        onPress={logout}
      />
    </View>
  );
};
