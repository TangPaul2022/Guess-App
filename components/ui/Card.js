import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginHorizontal: 16,
        borderRadius: 8,
        marginTop: 5,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 8
    },
})