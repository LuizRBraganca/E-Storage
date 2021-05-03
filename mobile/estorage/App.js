import React from 'react';
import AppRoutes from './Routes/App.Routes';
import AuthRoutes from './Routes/Auth.Routes';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
