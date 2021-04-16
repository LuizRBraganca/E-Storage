import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator initialRouteName="HomeScreen">
    <App.Screen name="HomeScreen" component={HomeScreen} />
  </App.Navigator>
);

export default AppRoutes;
