import React from "react";
import { Dimensions, StyleSheet, Text, View, Platform } from "react-native";
import Color from "../constants/color";
import TitleText from "./TitleText";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.title}> {title} </TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    // height: Dimensions.get("window").height > 400 ? 90 : 50,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? Color.primary : "white",
    borderBottomColor: Platform.OS === "ios" ? "grey" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: Platform.OS === "ios" ? Color.primary : "white",
  },
});
