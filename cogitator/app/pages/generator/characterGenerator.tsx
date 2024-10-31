import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'



export default function characterGenerator() {
  // Individual Characteristic values
  const [strChar, setStrChar] = useState(0);
  const [wsChar, setWsChar] = useState(0);
  const [bsChar, setBsChar] = useState(0);
  const [intChar, setIntChar] = useState(0);
  const [felChar, setFelChar] = useState(0);
  const [tghChar, setTghChar] = useState(0);
  const [agChar, setAgChar] = useState(0);
  const [perChar, setPerChar] = useState(0);
  const [wilChar, setWilChar] = useState(0);

  // Array to hold all characteristics once set
  const [characteristics, setCharacteristics] = useState([]);

  // Holder for two stats to be swapped
  const [firstStat, setFirstStat] = useState("");
  const [secondStat, setSecondStat] = useState("");

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

// First stat to be reallocated
function startReallocation(stat: string) {
  if (!firstStat)
  {
    setFirstStat(stat);
  }
  else
  {
    setSecondStat(stat);
    reallocate();
  }
}

function reallocate() {
  // TODO: reallocate + set funct arguments
}

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Who are You?</Text>
        <Text style={styles.subHeader}>First, generate characteristic rolls.</Text>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
          <Text style={styles.buttonText}>Generate Characteristic Roll</Text>
        </Pressable>
        <View>
          <Text style={styles.subHeader}>Characteristic Rolls:</Text>
          <Text style={styles.displayVals}>Weapon Skill: {wsChar}</Text>
          <Text style={styles.displayVals}>Ballistic Skill: {bsChar}</Text>
          <Text style={styles.displayVals}>Strength: {strChar}</Text>
          <Text style={styles.displayVals}>Toughness: {tghChar}</Text>
          <Text style={styles.displayVals}>Agility: {agChar}</Text>
          <Text style={styles.displayVals}>Intelligence: {intChar}</Text>
          <Text style={styles.displayVals}>Perception: {perChar}</Text>
          <Text style={styles.displayVals}>Willpower: {wilChar}</Text>
          <Text style={styles.displayVals}>Fellowship: {felChar}</Text>
        </View>
        <View>
          <Text style={styles.subHeader}>Happy with these results? Keep your random characteristics and receive 50 bonus starting XP. Or, reallocate the order of your scores.</Text>
          <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Keep Characteristics (add 50xp)</Text>
          </Pressable>
          <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Reallocate</Text>
          </Pressable>
        </View>
      </View>
      {/* Allow users to reallocate stats */}
      <View style={styles.hidden}>
        <Text>To reallocate, select two characteristics to swap their values, as many times as you would like.</Text>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Weapon Skill: {wsChar}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Ballistic Skill: {bsChar}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Strength: {strChar}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Toughness: {tghChar}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Agility: {agChar}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Intelligence: {intChar}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Perception: {perChar}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Willpower: {wilChar}</Text>
        </Pressable>
        <Pressable style={styles.mainButton} onPress={generateCharacteristic}>
            <Text style={styles.buttonText}>Fellowship: {felChar}</Text>
        </Pressable>
      </View>
      {/* Allow users to reroll stats */}
    </View>
  )
}

const styles = StyleSheet.create({
  hidden: {
    display: 'none'
  },
  container: {
    flex: 1
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
    fontFamily: 'requiem'
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10
  },
  mainButton: {
    backgroundColor: 'rgb(214, 176, 52)',
    padding: 15,
    marginVertical: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: 'requiem'
  },
  displayVals: {
    textAlign: 'center'
  }
})