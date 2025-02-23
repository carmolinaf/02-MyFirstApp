import { useState } from "react"
import { View, Text, StyleSheet, Pressable, Platform } from "react-native"


export const CounterScreen = () => {

const [count, setCount] = useState(10)

  return (
    <View style={ styles.container}>
        <Text style= {styles.title}>{ count }</Text>

        <Pressable
    onPress= { () => setCount(count +1) }
    onLongPress={ () => setCount(0) }
    style= { ({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed
    ]}
    >
        <Text style={{
            color: Platform.OS === 'android' ? 'white' : '#4746AB'
            }}>Incrementar</Text>
        </Pressable>
    </View>
    
    
  )
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    },
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6': 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white'
    }
  })