
import React from 'react';
import { View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./assets/icon.png')} style={{ width: 100, height: 100 }} />
      <Text>Welcome to CryptoTrail!</Text>
    </View>
  );
}
