import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { styles } from './RegisterStyle'
import { RegisterForm } from '../../../components/Auth/RegisterForm/RegisterForm'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
export const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView>
       <Image
        source={require("../../../../assets/img/login.jpeg")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
}

