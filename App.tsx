import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import PasswordGenerator from './componets/PasswordGenerator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <PasswordGenerator/>
    </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container :{
    flex : 1,
  },
});