import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/color";
const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}> {children} </Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  number: {
    color: Color.accent,
    fontSize: 22,
  },
});
