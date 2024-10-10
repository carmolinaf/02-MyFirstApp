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
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: globalColors.background,
    }}
    screenOptions={{
      tabBarActiveTintColor: globalColors.primary,
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
      <Tab.Screen 
      name="Tab1" 
      options={{ title: 'Inicio', tabBarIcon: ({color}) => ( <IonIcon name= "home-outline" color={ color }/> ) }} 
      component={Tab1Screen} />

      <Tab.Screen 
      name="Tab2" 
      options={{ title: 'Explorar', tabBarIcon: ({color}) => ( <IonIcon name= "search-outline" color={ color }/>) }} 
      component={Tab2Screen} />

      <Tab.Screen 
      name="Tab3" 
      options={{ title: 'Intento', tabBarIcon: ({color}) => ( <IonIcon name= "add-circle-outline" color={ color }/>) }} 
      component={TopTabNavigator} />

      <Tab.Screen 
      name="Tab4" 
      options={{ title: 'Registro', tabBarIcon: ({color}) => ( <IonIcon name= "file-tray-full-outline" color={ color }/> ) }} 
      component={StackNavigator} />

      <Tab.Screen 
      name="Tab5" 
      options={{ title: 'Perfil', tabBarIcon: ({color}) => ( <IonIcon name= "person-outline" color={ color }/>) }} 
      component={Tab5Screen} />

   
    
    </Tab.Navigator>
  );
}