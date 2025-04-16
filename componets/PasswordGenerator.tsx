import { Button, Keyboard, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import { AdvancedCheckbox } from 'react-native-advanced-checkbox';
import React, { useState } from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

export default function PasswordGenerator() {

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
    const[count, setCount] = useState(0) 
    const [checkedLower, setCheckedLower] = useState(false);
    const [checkedUpper, setCheckedUpper] = useState(false);
    const [checkedNumber, setCheckedNumber] = useState(false);
    const [checkedSymble, setCheckedSymble] = useState(false);
    const [genetare, setGenerate] = useState("");
    const [password, setPassword] = useState("")


    function handelClick() {
        if(count > 0) {
            setGenerate('true');
            generateString(count)
        } else {
            setGenerate('false')
        }
        Keyboard.dismiss()
    }
//     useEffect(()=>{
//     generateString(count)
// },[])

function generateString(length : number) {
    let characters = "";
    if (checkedUpper) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (checkedLower) characters += "abcdefghijklmnopqrstuvwxyz";
    if (checkedNumber) characters += "0123456789";
    if (checkedSymble) characters += "!@#$%^&*()_+<>?:'{}~";
  
    if (characters.length === 0) {
      setPassword("Please select at least one option!");
      return;
    }
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    setPassword(result);
    // console.log("result", ref.current);
  }
  Keyboard.dismiss
  
console.log(genetare === 'false' && genetare !== "");
console.log(genetare);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Text style={styles.heading} >Password Generator</Text>
      <View style={styles.passwordLength}>
        <View>
        <Text style={styles.sideText}>Password Length</Text>
        {(genetare === 'false' && genetare !== undefined) ?  <Text style={{color: "red", fontSize: 12}}>please enter max count</Text> : ""}
        </View>
        <TextInput style={styles.inputText} placeholder="Ex. 8" value={count} onChangeText={(e=>{setCount(e)}) }
         numberOfLines={1} keyboardType='numeric' maxLength={2}
         autoFocus
         showSoftInputOnFocus={() => !isPhysicalKeyboard()}
         />
        
        
      </View>
      <View style={styles.passwordLength}>
        <Text style={styles.sideText}>Include Uppercase Letter</Text>
        <AdvancedCheckbox value={checkedUpper} onValueChange={()=>{setCheckedUpper(!checkedUpper)
        }} 
        checkedColor='green' uncheckedColor='green'
            checkBoxStyle={{ borderRadius: 15, borderWidth: 1 }}/>
      </View>
      <View style={styles.passwordLength}>
        <Text style={styles.sideText}>Include Lowercase Letter</Text>
        <AdvancedCheckbox value={checkedLower} onValueChange={()=>{setCheckedLower(!checkedLower)
    
         } } 
        checkedColor='yellow' uncheckedColor='yellow'
            checkBoxStyle={{ borderRadius: 15, borderWidth: 1 }}/>
      </View>
      <View style={styles.passwordLength}>
        <Text style={styles.sideText}>Include Numbers</Text>
        <AdvancedCheckbox value={checkedNumber} onValueChange={()=>{setCheckedNumber(!checkedNumber)
         } }
        checkedColor='blue' uncheckedColor='blue'
            checkBoxStyle={{ borderRadius: 15, borderWidth: 1 }}/>
      </View>
      <View style={styles.passwordLength}>
        <Text style={styles.sideText}>Include Numbers</Text>
        <AdvancedCheckbox value={checkedSymble} onValueChange={()=>{setCheckedSymble(!checkedSymble)
        }}
        checkedColor='red' uncheckedColor='red'
            checkBoxStyle={{ borderRadius: 15, borderWidth: 1  }}/>
      </View>
      <View style={styles.buttonStyle}>
        <Button title='Genetare' onPress={handelClick}/>
        <Button title='Reset' onPress={()=>{
            setCheckedLower(false)
            setCheckedNumber(false)
            setCheckedSymble(false)
            setCheckedUpper(false)
            setCount(0)
            setGenerate("")
            Keyboard.dismiss()
            ReactNativeHapticFeedback.trigger("impactHeavy", options);
        }}/>
      </View>
      {(genetare === 'true' && genetare !== "") ? 
      <View style={styles.passwordView}>
        <Text style={styles.textPassword}>Genetated password is </Text>
        <Text style={styles.textPassword}>{password}</Text>
      </View> :null}
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        padding: 20,
    },
    heading:{
        fontSize: 26,
        fontWeight : 'bold',
        color : 'white',
        justifyContent: 'center',
    },passwordLength :{
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },sideText:{
        fontSize: 18,
        fontWeight : 'bold',
        color : 'white',
    },
    inputText:{
        flex:.2,
        color: "white",
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        margin: 10,   
    },buttonStyle :{
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
    },
    passwordView:{
        height: 150,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5,
    },
    textPassword:{
        textAlign: 'center',
        fontSize: 20,   
    }
    
});