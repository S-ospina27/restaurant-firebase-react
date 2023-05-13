import { View, ActivityIndicator } from "react-native";
import React from "react";
import { Overlay, Text } from "react-native-elements";
import { styles } from "./LoadingModalStyle";

export const LoadingModal = ({ show, text }) => {
  return (
    <Overlay
      isVisible={show}
    //   windowBackgroundColor="rba(0,0,0,0,5)"
    //   overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size={"large"} color="#00A680" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
};

LoadingModal.defaultPrps = {
  show: false,
};
