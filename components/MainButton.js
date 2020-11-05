import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Colors from "../constants/color";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}> {props.children} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    marginHorizontal: 30,
    marginVertical: 12,
    borderRadius: 25,
    padding: 10,
  },

  buttonText: {
    fontFamily: "open-sans",
    color: "white",
  },
});
