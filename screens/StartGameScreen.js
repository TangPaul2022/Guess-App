import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors'
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstText from '../components/ui/InstText';




const StartGameScreen = ({onPickedNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText)
    
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }

  const comfirmInputHandler = () => {
    const choseNumber = parseInt(enteredNumber)

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99 ) {
      Alert.alert(
        "Invalide Number", 
        "Numer has to be a number between 1 and 99.",
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
    );
        return;
    }
    console.log('Valid Number');
    onPickedNumber(choseNumber);
  }

  return (
    <View style={styles.rootContainer} >
      <Title>Guess My Number</Title>
    <Card>
      <InstText>Enter A Number</InstText>
        <TextInput 
          style={styles.numberInput} 
          maxLength={2} 
          keyboardType="number-pad"
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber} 
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPressbtn={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton 
                  onPressbtn={comfirmInputHandler}
                >
                  Confirm
                </PrimaryButton>
            </View>
        </View>
        
    </Card>
    </View>
  );
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      marginTop: 100,
      alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    },
    
})