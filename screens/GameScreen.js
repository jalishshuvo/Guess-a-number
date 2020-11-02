import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Recursion Function: dont generate everyting when the app load
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ranNum = Math.floor(Math.random() * (max - min) + 1);
  // excluding the existing number
  if (ranNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return ranNum;
  }
};
const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.useChoice)
  );
  return (
    <View>
      <Text> </Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
