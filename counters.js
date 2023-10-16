
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';


const playerCounters = () => {

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
  }
  
  // ---- DEBUT P2 COMPTEUR ----
  
  const playerTwoCounter = () => {
  
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
  }
  
  // ---- DEBUT P3 COMPTEUR ----
  
  const playerThreeCounter = () => {
  
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
  }
  
  // ---- DEBUT P4 COMPTEUR ----
  
  const playerFourCounter = () => {
  
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
  }
  
  // ---- DEBUT P5 COMPTEUR ----
  
  const playerFiveCounter = () => {
  
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
  } 
  
  export default playerCounters;