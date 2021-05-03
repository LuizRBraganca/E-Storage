import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from '../Screens/FirstScreen/FirstScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="FirstScreen">
    <App.Screen name="FirstScreen" component={FirstScreen} />
    <App.Screen name="LoginScreen" component={LoginScreen} />
    <App.Screen name="RegisterScreen" component={RegisterScreen} />
  </App.Navigator>
);

export default AppRoutes;
