import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import MenuScreen from '../Screens/MenuScreen';
import DeliveryScreen from '../Screens/DeliveryScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import ProductsScreen from '../Screens/ProductsScreen';
import ListScreen from '../Screens/ListScreen';
import StorageScreen from '../Screens/StorageScreen';
import HistoryScreen from '../Screens/HistoryScreen';



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
    <App.Screen name="MenuScreen" component={MenuScreen} />
    <App.Screen name="DeliveryScreen" component={DeliveryScreen} />
    <App.Screen name="CategoriesScreen" component={CategoriesScreen} />
    <App.Screen name="ProductsScreen" component={ProductsScreen} />
    <App.Screen name="ListScreen" component={ListScreen} />
    <App.Screen name="StorageScreen" component={StorageScreen} />
    <App.Screen name="HistoryScreen" component={HistoryScreen} />
    
    
  </App.Navigator>
);

export default AppRoutes;
