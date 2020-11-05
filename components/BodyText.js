import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BodyText = ({ children, style }) => {
  return (
    <View>
      <Text style={{ ...styles.body, ...style }}> {children} </Text>
    </View>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold",
  },
});
