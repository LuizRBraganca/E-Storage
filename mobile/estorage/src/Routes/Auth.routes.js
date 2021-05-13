import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuScreen from '../Screens/MenuScreen';
import DeliveryScreen from '../Screens/DeliveryScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';

const App = createStackNavigator();

const AuthRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      
    }}
    initialRouteName="MenuScreen">
    <App.Screen name="MenuScreen" component={MenuScreen} options={{
          animationEnabled: false,
        }}/>
    <App.Screen name="DeliveryScreen" component={DeliveryScreen} options={{
          animationEnabled: false,
        }}/>
    <App.Screen name="CategoriesScreen" component={CategoriesScreen} options={{
          animationEnabled: false,
        }}/>
  </App.Navigator>
);

export default AuthRoutes;
