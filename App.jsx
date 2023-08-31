import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './src/Pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Header from './src/components/Header';

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={{backgroundColor: 'white'}}> */}
        <Tabs />
      {/* </View> */}
    </NavigationContainer>
  );
}
