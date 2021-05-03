import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';

const App = createStackNavigator();

const AuthRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="ProfileScreen">
    <App.Screen name="ProfileScreen" component={ProfileScreen} />
  </App.Navigator>
);

export default AuthRoutes;
