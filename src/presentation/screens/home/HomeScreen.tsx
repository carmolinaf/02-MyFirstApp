import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { type NavigationProp, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import type { RootStackParams } from '../../routes/StackNavigator';
import React from "react";

export const HomeScreen = () => {

  const navgation = useNavigation<NavigationProp<RootStackParams>> ();

  return (
    <View style= { globalStyles.container}>

        {/*<Pressable 
        onPress={ () => navgation.navigate('Products' as never)  }
        style={ globalStyles.primaryButton} >
          <Text style={ globalStyles.buttonText}> Productos</Text>
        </Pressable>*/}
        
        <PrimaryButton
        onPress={ () => navgation.navigate('Products') }
        label= "Productos"
        />


        <PrimaryButton
        onPress={ () => navgation.navigate('Settings') }

        label= "Settings"
        />










    </View>
  )
}
