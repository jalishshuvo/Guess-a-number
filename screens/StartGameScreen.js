import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";

import Color from "../constants/color";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);

    // Cleanup function
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    // check for invalid chracter
    const chooseNumber = parseInt(enteredValue);
    if (isNaN(chooseNumber) || chooseNumber > 99 || chooseNumber < 1) {
      Alert.alert("Invalid Number!", "Number need to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chooseNumber);
    setEnteredValue("");
    Keyboard.dismiss();
    console.log(confirmed);
    console.log(selectedNumber);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text> You Selected </Text>
        <NumberContainer> {selectedNumber} </NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Strat Game
        </MainButton>
      </Card>
    );
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}> Start A New Game </TitleText>
            <Card style={styles.inputContainer}>
              <BodyText> Seclect a number </BodyText>
              <Input
                placeholder="number"
                style={styles.input}
                blurOnSubmit
                autoCapitalization="none"
                autoCorrect={false}
                keyboardType="numeric"
                maxLength={2}
                value={enteredValue}
                onChangeText={numberInputHandler}
              />
              <View style={styles.buttonContainer}>
                <View style={buttonWidth}>
                  <Button
                    title="Reset"
                    onPress={resetInputHandler}
                    color={Color.accent}
                  />
                </View>
                <View style={buttonWidth}>
                  <Button
                    title="Confirm"
                    onPress={confirmInputHandler}
                    color={Color.primary}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },

  inputContainer: {
    width: "80%",
    minWidth: 300,
    // maxWidth: "80%",
    maxWidth: "95%",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  // button: {
  //   // width: 100,
  //   // width: '40%'
  //   width: Dimensions.get("window").width / 4,
  // },

  input: {
    width: 50,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
