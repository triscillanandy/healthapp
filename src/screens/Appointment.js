

import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const Chat= () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Create an Account</Text>
        {/* Add sign-up form components here */}
      </View>
    </SafeAreaView>
  );
};

export default Chat;