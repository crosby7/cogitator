import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'



export default function characterGenerator() {
  let [strChar, setStrChar] = useState(0);
  let [wsChar, setWsChar] = useState(0);
  let [bsChar, setBsChar] = useState(0);
  let [intChar, setIntChar] = useState(0);
  let [felChar, setFelChar] = useState(0);
  let [tghChar, setTghChar] = useState(0);
  let [agChar, setAgChar] = useState(0);
  let [perChar, setPerChar] = useState(0);
  let [wilChar, setWilChar] = useState(0);

  // Generates a 'roll' of 2d10 + 20
  function generateCharacteristic() {
    const min = 1;
    const max = 20;
    let randomNumber = Math.floor(Math.random() * max + min + 20);
    setStrChar(randomNumber);
    randomNumber = Math.floor(Math.random() * max + min + 20);
    setWsChar(randomNumber);
    randomNumber = Math.floor(Math.random() * max + min + 20);
    setBsChar(randomNumber);
    randomNumber = Math.floor(Math.random() * max + min + 20);
    setIntChar(randomNumber);
    randomNumber = Math.floor(Math.random() * max + min + 20);
    setFelChar(randomNumber);
    randomNumber = Math.floor(Math.random() * max + min + 20);
    setTghChar(randomNumber);
    randomNumber = Math.floor(Math.random() * max + min + 20);
    setAgChar(randomNumber);
    randomNumber = Math.floor(Math.random() * max + min + 20);
    setPerChar(randomNumber);
    randomNumber = Math.floor(Math.random() * max + min + 20);
    setWilChar(randomNumber);
}

  return (
    <View>
      <Text>Who are You?</Text>
      <Button title='Generate Characteristic Roll' onPress={function () {
        generateCharacteristic();
      }}/>
      {/* Console.log works but Text display does not. Because it is already rendered? */}
      <Text>Strength: {strChar}</Text>
      <Text>Weapon Skill: {wsChar}</Text>
      <Text>Ballistic Skill: {bsChar}</Text>
      <Text>Intelligence: {intChar}</Text>
      <Text>Fellowship: {felChar}</Text>
      <Text>Agility: {agChar}</Text>
      <Text>Willpower: {wilChar}</Text>
      <Text>Perception: {perChar}</Text>
      <Text>Toughness: {tghChar}</Text>
    </View>
  )
}