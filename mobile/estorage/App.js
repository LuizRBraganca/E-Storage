import React from 'react';
import AppRoutes from './src/Routes/App.Routes';
import AuthRoutes from './src/Routes/Auth.Routes';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
