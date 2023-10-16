
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  playerOne: {
    flex: 1,
    backgroundColor : "red",
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
  },
  
  playerTwo: {
    flex: 1,
    backgroundColor : "orange",
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
  },

  playerThree: {
    flex: 1,
    backgroundColor : "purple",
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
  },

  playerFour: {
    flex: 1,
    backgroundColor : "green",
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
  },

  playerFive: {
    flex: 1,
    backgroundColor : "blue",
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
  },

  plusButton: {
    color: "white",
  },

  minusButton: {
    color: "white",
  },

  counter: {
    color: "white",
    fontSize: 24,
  },

  counterContainer: {
    display: "inline",
    alignItems: "center",
    justifyContent: 'center',
  }
  })


export default function App() {


  // ---- DEBUT DES CONST ----


    const [counterPlayerOne, setCounterPlayerOne] = useState(0);
    const [initialCountPlayerOne, setInitialCounterPlayerOne] = useState(0);
    const [commanderCounterPlayerOne, setCommanderCounterPlayerOne] = useState(0);
  
    const handleInitialCountPlayerOneChange = (value) => {
      setInitialCounterPlayerOne(Number(value));
    };
  
    const handleResetPlayerOne = () => {
      setCounterPlayerOne(initialCountPlayerOne);
    };
  
    const handleClickPlayerOneUp = () => {
      setCounterPlayerOne(counterPlayerOne +1);
    };
  
    const handleClickPlayerOneDown = () => {
      setCounterPlayerOne(counterPlayerOne -1);
    };
  
    const commanderDamageClickPlayerOneUp = () => {
        setCommanderCounterPlayerOne(commanderCounterPlayerOne +1),
        setCounterPlayerOne(counterPlayerOne +1);
    };
  
    const commanderDamageClickPlayerOneDown = () => {
      setCommanderCounterPlayerOne(commanderCounterPlayerOne -1),Z
      setCounterPlayerOne(counterPlayerOne -1);
    };
 
  
  // ---- DEBUT P2 COMPTEUR ----
  
  
  
    const [counterPlayerTwo, setCounterPlayerTwo] = useState(0);
    const [initialCountPlayerTwo, setInitialCounterPlayerTwo] = useState(0);
    const [commanderCounterPlayerTwo, setCommanderCounterPlayerTwo] = useState(0);
  
    const handleInitialCountPlayerTwoChange = (value) => {
      setInitialCounterPlayerTwo(Number(value));
    };
  
    const handleResetPlayerTwo = () => {
      setCounterPlayerTwo(initialCountPlayerTwo);
    };
  
    const handleClickPlayerTwoUp = () => {
      setCounterPlayerTwo(counterPlayerTwo +1);
    };
  
    const handleClickPlayerTwoDown = () => {
      setCounterPlayerTwo(counterPlayerTwo -1);
    };
  
    const commanderDamageClickPlayerTwoUp = () => {
        setCommanderCounterPlayerTwo(commanderCounterPlayerTwo +1),
        setCounterPlayerTwo(counterPlayerTwo +1);
    };
  
    const commanderDamageClickPlayerTwoDown = () => {
      setCommanderCounterPlayerTwo(commanderCounterPlayerTwo -1),Z
      setCounterPlayerTwo(counterPlayerTwo -1);
    };
  
  
  // ---- DEBUT P3 COMPTEUR ----
  

  
    const [counterPlayerThree, setCounterPlayerThree] = useState(0);
    const [initialCountPlayerThree, setInitialCounterPlayerThree] = useState(0);
    const [commanderCounterPlayerThree, setCommanderCounterPlayerThree] = useState(0);
  
    const handleInitialCountPlayerThreeChange = (value) => {
      setInitialCounterPlayerThree(Number(value));
    };
  
    const handleResetPlayerThree = () => {
      setCounterPlayerThree(initialCountPlayerThree);
    };
  
    const handleClickPlayerThreeUp = () => {
      setCounterPlayerThree(counterPlayerThree +1);
    };
  
    const handleClickPlayerThreeDown = () => {
      setCounterPlayerThree(counterPlayerThree -1);
    };
  
    const commanderDamageClickPlayerThreeUp = () => {
        setCommanderCounterPlayerThree(commanderCounterPlayerThree +1),
        setCounterPlayerThree(counterPlayerThree +1);
    };
  
    const commanderDamageClickPlayerThreeDown = () => {
      setCommanderCounterPlayerThree(commanderCounterPlayerThree -1),Z
      setCounterPlayerThree(counterPlayerThree -1);
    };
 
  
  // ---- DEBUT P4 COMPTEUR ----
  

  
    const [counterPlayerFour, setCounterPlayerFour] = useState(0);
    const [initialCountPlayerFour, setInitialCounterPlayerFour] = useState(0);
    const [commanderCounterPlayerFour, setCommanderCounterPlayerFour] = useState(0);
  
    const handleInitialCountPlayerFourChange = (value) => {
      setInitialCounterPlayerFour(Number(value));
    };
  
    const handleResetPlayerFour = () => {
      setCounterPlayerFour(initialCountPlayerFour);
    };
  
    const handleClickPlayerFourUp = () => {
      setCounterPlayerFour(counterPlayerFour +1);
    };
  
    const handleClickPlayerFourDown = () => {
      setCounterPlayerFour(counterPlayerFour -1);
    };
  
    const commanderDamageClickPlayerFourUp = () => {
        setCommanderCounterPlayerFour(commanderCounterPlayerFour +1),
        setCounterPlayerFour(counterPlayerFour +1);
    };
  
    const commanderDamageClickPlayerFourDown = () => {
      setCommanderCounterPlayerFour(commanderCounterPlayerFour -1),Z
      setCounterPlayerFour(counterPlayerFour -1);
    };

  
  // ---- DEBUT P5 COMPTEUR ----
  

  
    const [counterPlayerFive, setCounterPlayerFive] = useState(0);
    const [initialCountPlayerFive, setInitialCounterPlayerFive] = useState(0);
    const [commanderCounterPlayerFive, setCommanderCounterPlayerFive] = useState(0);
  
    const handleInitialCountPlayerFiveChange = (value) => {
      setInitialCounterPlayerFive(Number(value));
    };
  
    const handleResetPlayerFive = () => {
      setCounterPlayerFive(initialCountPlayerFive);
    };
  
    const handleClickPlayerFiveUp = () => {
      setCounterPlayerFive(counterPlayerFive +1);
    };
  
    const handleClickPlayerFiveDown = () => {
      setCounterPlayerFive(counterPlayerFive -1);
    };
  
    const commanderDamageClickPlayerFiveUp = () => {
        setCommanderCounterPlayerFive(commanderCounterPlayerFive +1),
        setCounterPlayerFive(counterPlayerFive +1);
    };
  
    const commanderDamageClickPlayerFiveDown = () => {
      setCommanderCounterPlayerFive(commanderCounterPlayerFive -1),Z
      setCounterPlayerFive(counterPlayerFive -1);
    };

  // ---- FIN DES CONST ----
  return (
    <View style={styles.container}>
      <View style={styles.playerOne}>
        <View>
          <Text>Player 1</Text>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={handleClickPlayerOneUp}><Text style={styles.plusButton}>+</Text></TouchableOpacity>
          <Text style={styles.counter}>{counterPlayerOne}</Text>
          <TouchableOpacity onPress={handleClickPlayerOneDown}><Text style={styles.minusButton}>-</Text></TouchableOpacity>
        </View>
      </View>


      <View style={styles.playerTwo}>

        <Text>Player 2</Text>

      </View>
      <View style={styles.playerThree}>

        <Text>Player 3</Text>

      </View>
      <View style={styles.playerFour}>

        <Text>Player 4</Text>

      </View>
      <View style={styles.playerFive}>

          <Text> Player 5</Text>

      </View>
    </View>
  );
}
