import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function about() {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionView}>
        <Text style={styles.header}>Welcome to Cogitator:</Text>
        <Text style={styles.subHeader}>A Warhammer 40k App Companion</Text>
        <Text style={styles.tertHeader}>For the Imperium Maledictum TTRPG</Text>
        <Text style={styles.descText}>
          This app is under heavy construction. 
          Features are being added as quickly as possible. 
          Existing features may break at any point, but we will work quickly to fix any bugs as they arise.
          Please contact us with any bug reports, feature requests, and rules issues that need addressed at our contact page.
        </Text>
        <Image style={styles.icon} source={require('./../../assets/images/manIcon.png')}/>
      </View>
      <View style={styles.characterCreationView}>
        <Text style={styles.ccHeader}>For new players:</Text>
        <Text style={styles.ccSubHeader}>Create your character</Text>
        <Link style={styles.ccLink} href='./generator/characterGenerator' asChild>
          <Pressable style={styles.ccButton}>
            <Text style={styles.ccButtonText}>Character Creator</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  descriptionView: {
    flex: 2
  }, 
  header: {
    fontSize: 30,
    fontFamily: 'requiem',
    textAlign: 'center'
  },
  subHeader: {
    fontSize: 18,
    fontFamily: 'requiem',
    textAlign: 'center'
  },
  tertHeader: {
    fontSize: 16,
    fontFamily: 'requiem',
    textAlign: 'center'
  },
  descText: {
    fontSize: 14,
    textAlign: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  icon: {
    width: 300,
    height: 100,
    alignSelf: 'center'
  },
  characterCreationView: {
    flex: 1
  },
  ccHeader: {
    fontSize: 20,
    textAlign: 'center'
  },
  ccSubHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5
  },
  ccLink: {
    alignSelf: 'center',
    marginTop: 10
  },
  ccButton: {
    backgroundColor: 'rgb(214, 176, 52)',
    padding: 15,
    marginTop: 20,
    borderRadius: 5
  },
  ccButtonText: {
    fontSize: 16,
    fontFamily: 'requiem'
  }
})