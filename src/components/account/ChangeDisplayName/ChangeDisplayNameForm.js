import React, { useState } from "react";
import { View } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import { styles } from "./DsiplayNameformStyle";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeDisplaNameData";
import { getAuth, updateProfile } from "firebase/auth";
import { Toast } from "react-native-toast-message/lib/src/Toast";
export const ChangeDisplayNameForm = ({close,onReload}) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit:async (formValue) => {
      try {
        const { displayName } = formValue;
        const currentUser = getAuth().currentUser;
        await updateProfile(
          currentUser,{displayName}
        );
        onReload();
          close(false)
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al cambiar el nombre y apellido",
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y apellido"
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name="account-circle-outline"
            iconStyle={styles.icon}
          />
        }
        // value={name}
        onChangeText={(text) => formik.setFieldValue("displayName", text)}
        errorMessage={formik.errors.displayName}
      />
      <Button
        title={"cambiar nombre y apellidos"}
        containerStyle={styles.btn}
        buttonStyle={styles.btnButton}
        onPress={formik.handleSubmit}
      />
    </View>
  );
};
