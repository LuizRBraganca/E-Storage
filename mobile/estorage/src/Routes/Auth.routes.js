import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../Screens/ProfileScreen';
import DeliveryScreen from '../Screens/DeliveryScreen';
import MarketScreen from '../Screens/MarketScreen';

const App = createStackNavigator();

const AuthRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      
    }}
    initialRouteName="ProfileScreen">
    <App.Screen name="ProfileScreen" component={ProfileScreen} options={{
          animationEnabled: false,
        }}/>
    <App.Screen name="DeliveryScreen" component={DeliveryScreen} options={{
          animationEnabled: false,
        }}/>
    <App.Screen name="MarketScreen" component={MarketScreen} options={{
          animationEnabled: false,
        }}/>
  </App.Navigator>
);

export default AuthRoutes;
