import { StyleSheet, View } from 'react-native'
import React from 'react'
import TickTacTo from './componets/TickTacTo'

export default function App() {
  return (
    <View style={styles.container}>
      <TickTacTo/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})