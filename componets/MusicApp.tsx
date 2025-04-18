import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SoundPlayer from "react-native-sound-player";

const MusicApp = () => {
    
  const playSound = () => {
    SoundPlayer.playSoundFile("beep", "mp3");
    SoundPlayer.addEventListener('FinishedPlaying', () => {
      console.log('Finished playing sound');
    });
    SoundPlayer.addEventListener('Error', (error) => {
      console.log('Error playing sound:', error);
    });
  }
  return (
    <View style= {styles.container}>
        <TouchableOpacity onPress={playSound} style={{padding: 10}}>
            <Text>Play</Text>
            </TouchableOpacity>
    </View>

  )
}

export default MusicApp

const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})