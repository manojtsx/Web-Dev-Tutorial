import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Images = () => {
  return (
    <View>
        <Text>adsfadsf</Text>
        <Image source={require('../../assets/favicon.png')} style={styles.imageStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyle : {
        height : 150,
        width : 150,
        borderRadius : 10,
        borderWidth : 1,
        borderStyle : 'solid',
        borderColor : 'red'
    }
})

export default Images