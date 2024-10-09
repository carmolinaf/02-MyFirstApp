import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { Tab4Screen } from '../screens/tabs/Tab4Screen';
import { Tab5Screen } from '../screens/tabs/Tab5Screen';
import { TopTabNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: globalColors.background,
    }}
    screenOptions={{
      // headerShwon: false,
      tabBarLabelStyle: {
        marginBottom: 5,
      },
      headerStyle: {
        elevation: 0,
        borderColor: 'transparent',
        shadowColor: 'transparent'

      },
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0

      }
    }}
    
    >
      <Tab.Screen name="Tab1" options={{ title: 'Inicio', tabBarIcon: ({color}) => (<Text style= {{color }} > Tab1</Text>) }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title: 'Explorar', tabBarIcon: ({color}) => (<Text style= {{color }} > Tab2</Text>) }} component={Tab2Screen} />
      <Tab.Screen name="Tab3" options={{ title: 'Intento', tabBarIcon: ({color}) => (<Text style= {{color }} > Tab3</Text>) }} component={Tab3Screen} />
      <Tab.Screen name="Tab4" options={{ title: 'Registro', tabBarIcon: ({color}) => (<Text style= {{color }} > Tab4</Text>) }} component={StackNavigator} />
      <Tab.Screen name="Tab5" options={{ title: 'Perfil', tabBarIcon: ({color}) => (<Text style= {{color }} > Tab5</Text>) }} component={TopTabNavigator} />

   
    
    </Tab.Navigator>
  );
}