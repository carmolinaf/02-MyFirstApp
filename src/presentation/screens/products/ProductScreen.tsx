import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { RootStackParams } from "../../routes/StackNavigator";
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";

export const ProductScreen = () => {
 
 const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
 const navigation = useNavigation();

 useEffect( () =>{
  navigation.setOptions({
    title: params.name

  })

 }, [] )
 
 console.log(params);

  return (
    <View style= {globalStyles.container}>
        <Text> ProductScreen</Text>
        <Text style =  {{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20
        }}> 
        { params.id } - { params.name }
        </Text>
    </View>
  )
}
