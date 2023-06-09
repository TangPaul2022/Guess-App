import { Alert, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {useState, useEffect} from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstText from '../components/ui/InstText';



const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;


 if (rndNum === exclude) {
  return generateRandomBetween(min, max, exclude);
 } else {
   return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(
    1, 
    100, 
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  
 /* useEffect(() => {
    if (currentGuess === userNumber)
  
    return () => {
      second
    }
  }, [third])
*/
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  

  const nextGuessHandler = (direction) => { // direction => 'lower', 'greater'
    if(
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that is wrong...", [
        {text: "Sorry!", style: 'cancel'}
      ])
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    //console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
       <NumberContainer>{currentGuess}</NumberContainer>
       <Card>
        <InstText style={styles.insText}>Higher Or Lower</InstText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}> 
            <PrimaryButton onPressbtn={nextGuessHandler.bind(this, 'lower')}><Ionicons name='md-remove' size={25} color='white' /></PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressbtn={nextGuessHandler.bind(this, 'greater')}><Ionicons name='md-add' size={25} color='white' /></PrimaryButton>
          </View>
        </View>
       </Card>
    </View>
     
  )
}




export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    buttonsContainer: {
      flexDirection: 'row'
  },
  buttonContainer: {
      flex: 1,
  },
  insText: {
    marginBottom: 15
  }
})