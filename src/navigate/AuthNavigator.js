import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import ResetPasswordScreen from '../screens/ResetPasswordScreen';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />

      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
     
      <Stack.Screen name="SignUp" component={SignUpScreen}options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }}/>
   
    </Stack.Navigator>
  );
};

export default AuthNavigator;
