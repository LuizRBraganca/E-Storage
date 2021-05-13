import React from 'react';
import AppRoutes from './src/Routes/app.Routes';
import AuthRoutes from './src/Routes/auth.Routes';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
