import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Posts from './src/components/Posts';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://sanad.karam-mustafa.com/api/posts')
      .then(res => res.json())
      .then(res => setPosts(res.data));

    fetch('https://sanad.karam-mustafa.com/api/categories')
      .then(res => res.json())
      .then(res => setCategories(res.data));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        style={{...styles.container, height: posts.length ? '' : '100%'}}>
        <Header />
        {categories.length ? (
          <Categories data={categories} />
        ) : (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
        {posts.length ? (
          <Posts data={posts} />
        ) : (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
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
