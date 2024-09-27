import { Text, View, StyleSheet, Image, Dimensions, ImageBackground } from "react-native";
import { Keyframe } from 'react-native-reanimated';

// define animation
const keyframe = new Keyframe({
  0: {
    transform: [{ translateY: 0}],
  },
  100: {
    transform: [{ translateY: 100}]
  }
})

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Cogitator</Text>
        <Image style={styles.logo} source={require("./../assets/images/manIcon.png")} />
        <Text style={styles.subHeader}>Imperium Maledictum</Text>
      </View>
      <ImageBackground source={require('./../assets/images/scanlines.png')} style={styles.scanlines}>
        <View style={styles.overlay}></View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    backgroundColor: 'rgba(17, 207, 57, 0.9)',
    // borderWidth: 40,
    // borderTopWidth: 60,
    // borderBottomWidth: 70,
    // borderColor: 'rgba(17, 207, 57, 1)'
  },
  overlay: {
  },
  scanlines: {
    resizeMode: 'cover',
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    zIndex: 10,
    padding: 1800,
    opacity: 0.2
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: "requiem"
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: "requiem"
  },
  logo: {
    width: 120,
    height: 50,
    margin: 5
  }
})