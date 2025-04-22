import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './src/navigation/stack/MyStack'

export default function App() {
  return (
    <View style={styles.container}>
     <NavigationContainer>
      <MyStack/>
     </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})