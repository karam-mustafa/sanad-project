import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './../components/Header';
import Categories from './../components/Categories';
import Posts from './../components/Posts';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://sanad.karam-mustafa.com/api/posts')
      .then(res => res.json())
      .then(res =>
        setPosts(
          res.data.map(item => {
            item.start_date = new Date(item.start_date).toLocaleDateString();
            item.end_date = new Date(item.end_date).toLocaleDateString();
            return item;
          }),
        ),
      );

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
    paddingHorizontal: 16,
    marginBottom: 70,
    // height:'100%'
  },
});
