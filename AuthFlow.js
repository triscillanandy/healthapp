import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigate/MainNavigator';
import AuthNavigator from './src/navigate/AuthNavigator';
const AuthFlow = () => {
  const [isLogin, setIsLogin] = useState(false);

  // You can replace this useEffect with actual authentication logic
  useEffect(() => {
    // Check if the user is authenticated (e.g., check AsyncStorage, etc.)
    const isAuthenticated = true; // Replace with your authentication logic
    setIsLogin(isAuthenticated);
  }, []);

  return (
    <NavigationContainer>
      {!isLogin ? <AuthNavigator  /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default AuthFlow;
