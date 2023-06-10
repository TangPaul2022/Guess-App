import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.ItemText} >#{roundNumber}</Text>
      <Text style={styles.ItemText} >Opponents Guess: {guess}</Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 7, 
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4
    },
    ItemText: {
        fontFamily: 'gen-bb-regular'
    }
})