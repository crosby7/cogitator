import { View, Text, Image, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function about() {
  return (
    <View>
      <View>
        <Text>Welcome to Cogitator:</Text>
        <Text>A Warhammer 40k App Companion</Text>
        <Text>For the Imperium Maledictum TTRPG</Text>
        <Text>
          This app is under heavy construction. 
          Features are being added as quickly as possible. 
          Existing features may break at any point, but we will work quickly to fix any bugs as they arise.
          Please contact us with any bug reports, feature requests, and rules issues that need addressed at our contact page.
        </Text>
        <Image source={require('./../../assets/images/manIcon.png')}/>
      </View>
      <View>
        <Text>For new players:</Text>
        <Text>Create your character</Text>
        <Link href='./pages/generator/characterGenerator'>
          <Pressable>
            <Text>Character Creator</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}