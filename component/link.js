import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'

const Link = (props) => {
  return (
    <View>
        <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Link

const styles = StyleSheet.create({
text:{
    fontSize:13,
    color:'blue',
    margin:10
}
})