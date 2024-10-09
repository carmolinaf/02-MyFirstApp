import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AboutScreen } from '../screens/about/AboutScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}