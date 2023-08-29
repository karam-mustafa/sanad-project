import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories';


export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Categories />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 10,
  },
});
