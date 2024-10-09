import { SafeAreaView, Text, View } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import React from "react"
import { BottomTabNavigator } from "./src/presentation/routes/BottomTabsNavigator"
import { NavigationContainer } from '@react-navigation/native'

export const App = () => {
  return (

    <NavigationContainer>
      <BottomTabNavigator />

      
    </NavigationContainer>

   )
}



