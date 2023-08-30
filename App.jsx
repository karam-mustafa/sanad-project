import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Posts from './src/components/Posts';


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header />
        <Categories />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});
