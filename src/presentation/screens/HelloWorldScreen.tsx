import { StyleSheet, Text, View } from "react-native";

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({ name = 'World' } : Props) => {
  return (
    <View style={ styles.container }>
        <Text numberOfLines={1} ellipsizeMode='middle' style={ styles.title }> Hello, { name } </Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        //flex: 100,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
})
