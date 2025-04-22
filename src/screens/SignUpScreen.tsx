import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SignUpScreen() {

    const navigation = useNavigation()
  return (
    <View>
        <TouchableOpacity onPress={()=>{navigation.navigate("SignIn")}}>
      <Text>SignUpScreen</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})