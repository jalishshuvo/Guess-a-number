import React from "react";
import { Dimensions, StyleSheet, Text, View, Platform } from "react-native";
import Color from "../constants/color";
import TitleText from "./TitleText";

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}> {title} </TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    // height: Dimensions.get("window").height > 400 ? 90 : 50,
    paddingTop: 36,

    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: Color.primary,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: "white",
  },

  title: {
    color: Platform.OS === "ios" ? Color.primary : "white",
  },
});
