import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'


const PrimaryButton = ({children, onPressbtn }) => {

  return (
    <View style={styles.buttonOuterContainer} >
        <Pressable 
         style={styles.buttonInnerContainer} 
         onPress={onPressbtn} 
         android_ripple={{color: Colors.primary600,  }} 
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>    
    
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin:4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
})