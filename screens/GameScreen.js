import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import DefaltStyles from "../constants/default-styles";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/BodyText";
// import { ScreenOrientation } from "expo-screen-orientation";

// Recursion Function: dont generate everyting when the app load
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ranNum = Math.floor(Math.random() * (max - min)) + min;
  // excluding the existing number
  if (ranNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return ranNum;
  }
};
// Works fo scrollView List
// const renderListItem = (value, numOfRound) => (
//   <View key={value} style={styles.listItem}>
//     <Text> # {numOfRound} </Text>
//     <Text> {value} </Text>
//   </View>
// );

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText> # {listLength - itemData.index} </BodyText>
    <BodyText> {itemData.item} </BodyText>
  </View>
);

const GameScreen = (props) => {
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  const initalGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  const [pastGuesses, setPastGuesses] = useState([initalGuess.toString()]);

  // const [avaiableDeviceWidth, setAvaiableDeviceWidth] = useState(
  //   Dimensions.get("window").width
  // );
  const [avaiableDeviceHeight, setAvaiableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  // Array destructing is not working
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    const updateLayout = () => {
      setAvaiableDeviceHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuess === userChoice) {
      // Game over screen
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont Lie", "You know that is wrong ...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    // setRounds((currentRounds) => currentRounds + 1);
    setPastGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };

  if (avaiableDeviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text style={DefaltStyles.title}> Opponent's Guess </Text>

        <Card style={styles.controls}>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            {/* LOWER */}
            <Ionicons name="md-remove-circle" size={24} color="white" />
          </MainButton>
          <NumberContainer> {currentGuess} </NumberContainer>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            {/* GREATER */}
            <Ionicons name="ios-add-circle" size={24} color="white" />
          </MainButton>
        </Card>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item) => item}
            data={pastGuesses}
            renderItem={renderListItem.bind(this, pastGuesses.length)}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={DefaltStyles.title}> Opponent's Guess </Text>
      <NumberContainer> {currentGuess} </NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          {/* LOWER */}
          <Ionicons name="md-remove-circle" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          {/* GREATER */}
          <Ionicons name="ios-add-circle" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginTop: 20,
    // marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
    width: 400,
    maxWidth: "90%",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },

  listContainer: {
    flex: 1,
    width: Dimensions.get("window").width > 350 ? "60%" : "80%",
    width: "60%",
  },

  list: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },

  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
