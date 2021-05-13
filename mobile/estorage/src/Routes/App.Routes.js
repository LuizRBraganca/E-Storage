import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import ProductsScreen from '../Screens/ProductsScreen';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="WelcomeScreen">
    <App.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <App.Screen name="LoginScreen" component={LoginScreen} />
    <App.Screen name="RegisterScreen" component={RegisterScreen} />
    <App.Screen name="CategoriesScreen" component={CategoriesScreen} />
    <App.Screen name="ProductsScreen" component={ProductsScreen} />
  </App.Navigator>
);

export default AppRoutes;
