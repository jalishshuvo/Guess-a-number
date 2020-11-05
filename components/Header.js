import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/color";
import TitleText from "./TitleText";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText> {title} </TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
