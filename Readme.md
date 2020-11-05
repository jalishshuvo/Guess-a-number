## 50. Module Introduction

## 51. App Planning

## 52. Adding a custom Header Component

- Componensts folder
  --> Header.js

## 53. Screen Components

- Screen folder
  --> StartGameScreen.js

## 54. Working on the Layout

## 55. Styling the view as card container

Note:

1. Shadow property only works on ios not android
2. <Text> doesn't support flexbox-related properties for example - but I'll dive into this later in the course.

## 57. Extracting a card component(Presentaional component)

1. merging style : card component + StartGameScreen inputContainer style

## 58. Color Themeing wiht contrast

making css color variable

- Constants forder
  --> color.js

## 59. Configuring Styling Text Input

1. forwarding builtin components properties to another component

## 60. Cleaning the User Input & Controlling the soft keyboard

1. useState
2. function for Validate the input and replace
3. regular expression : /[^0-9]/
4. replace method
5. dismissing keyboard: 1. TouchableWithoutFeedback 2. keyboard

## 61. Resetting Confirming User Input

1. resetInputHandler function
2. confirminputHandler function
3. set the confirmed value with useState
4. save the confirmed value with useState
5. parseInt() - convert number into integer
6. showing the confirmed number in JSX

## 62.Showing an alert if something invalid is entered

1. isNaN() method - for checking invalid number
2. Alert - react Native

## 63. Time to finish the Confirmation Box

1. styling the confirmed number
2. NumberContainer component styling
3. dismiss the keyboard after confirming

## 64.Adding Random Number Generation

1. Adding GameScreen

### 2. Recursion Function

- GenerateRandomBetween function

3. useState to track current guess

## 65. Switching between multiple Screen

## 66. Adding Game features Hints Validations

1. adding function for Lower and greater guss

- bind method
- useRef Hook

## 67. Checking the win condition with useEffect

- useEffect()
- GaveOverScreen
- in App.js --> useState to trac the guessRounds
- GameScreen -> useState to track the round

## 68. Finishing the Game logic

## 69. Adding Custom fonts

1. install expo-font
   in App.js

- import \* as Font from 'expo-font'
- creating fetchFonts function
- import { AppLoading } from 'expo' : AppLoading helps to load fonts before the app is startd
- useState for dataLodaed
- if statement for not loading data

## 70. instruction for install expo-fonts

## 71. A synthetic Cascade custom wrapper components global styles

### Option 1:

1. BodyText Component
2. TitleText Component

### Option 2:

constants :
-> default-styles.js

# Adding Image

## 72. Adding Local Image

-GameOverScreen

## 73. Styling Image

## 74. Adding Web Image

# Text Component

## 75. A Closer look at the Text Component

1. nested text inside BodyText

   Note:

-View uses flexbox
-Text dont use flexbox

## 76. View vs Text a summary

## 77. Building a custom button component

## 78. Adding Icons

## 79. Exploring UI libries

## 80. Managing Past Guesses as a list

# Problem

# Not Workig

## 81. Styling List Item

## 82. Flexbox for list

## 83. Using FlatList instead of ScrollView
