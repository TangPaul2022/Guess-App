import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const InstText = ({children, style}) => {
  return <Text style={[styles.instText, style]} >{children}</Text>
}

export default InstText

const styles = StyleSheet.create({
    instText: {
        fontFamily: 'gen-bb-regular',
        color: Colors.accent500,
        fontSize: 24,
      },
})