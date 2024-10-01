import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'



export default function characterGenerator() {
  let randomNumber = null;

  // Generates a 'roll' of 2d10 + 20
  function generateCharacteristic() {
    const min = 1;
    const max = 20;
    return (Math.floor(Math.random() * max + min + 20));
}

  return (
    <View>
      <Text>Who are You?</Text>
      <Button title='Generate Characteristic Roll' onPress={function () {
        randomNumber = generateCharacteristic();
        console.log('running onpress: ' + randomNumber)
      }}/>
      {/* Console.log works but Text display does not. Because it is already rendered? */}
      <Text>Result: {randomNumber}</Text>
    </View>
  )
}