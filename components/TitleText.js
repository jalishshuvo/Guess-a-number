import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TitleText = ({ children, style }) => {
  return (
    <View>
      <Text style={{ ...styles.title, ...style }}> {children} </Text>
    </View>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
