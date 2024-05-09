import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthFlow from './AuthFlow';
export default function App() {
  return (
    <AuthFlow />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
