import { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font'
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  

  const [fontsLoaded] = useFonts({
    'gen-bb-bold': require('./assets/fonts/GenBkBasB.ttf'),
    'gen-bb-regular': require('./assets/fonts/GenBkBasR.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }  

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber) {
    screen= <GameOverScreen 
               userNumber={userNumber} 
               roundsNumber={guessRounds} 
               OnStartNewGame={startNewGameHandler} 
            />  
  }



  return (
    
    <LinearGradient 
      colors={[Colors.primary700, Colors.accent500]} 
      style={styles.rootScreen}
    >
      <ImageBackground 
        style={styles.rootScreen}
        source={require('./assets/images/dice.jpg')} 
        resizeMode="cover"
        imageStyle={styles.ImageBackground}
      >
        <SafeAreaView style={styles.rootScreen} >
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.15,
  },
});
