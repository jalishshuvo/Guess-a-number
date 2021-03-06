import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Color from "../constants/color";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText> Game Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            // source={require("../assets/success.png")}
            source={{
              uri:
                "https://i.hurimg.com/i/hdn/75/0x0/5ce6f4ef7152d816144e600a.jpg",
            }}
            style={styles.image}
            resizeMode="cover"
            fadeDuration={1000}
          />
        </View>

        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed
            <Text style={styles.highlight}> {props.roundsNumber} </Text>
            rounds to guess the number
            <Text style={styles.highlight}> {props.userNumber} </Text>
          </BodyText>
        </View>
        {/* <BodyText> Number of rounds!: {props.roundsNumber} </BodyText>
      <BodyText> Number was: {props.userNumber} </BodyText> */}
        {/* <Button title="New Game"  /> */}
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 10,
  },

  imageContainer: {
    // height: 300,
    // width: 300,
    // borderRadius: 150,
    height: Dimensions.get("window").width * 0.7,
    width: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    overflow: "hidden",
    borderColor: "black",
    // marginVertical: 30,
    marginVertical: Dimensions.get("window").height > 400 ? 30 : 5,
  },

  image: {
    height: "100%",
    width: "100%",
  },

  highlight: {
    color: Color.primary,
    fontSize: 20,
  },

  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height > 400 ? 20 : 5,
  },
  resultText: {
    textAlign: "center",
  },
});
