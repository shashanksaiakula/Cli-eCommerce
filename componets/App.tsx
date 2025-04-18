import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MusicApp from './MusicApp'

const App = () => {
  return (
    <View style={styles.container}>
     <MusicApp/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})