import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './../components/Header';
import Categories from './../components/Categories';
import Posts from './../components/Posts';
import NoData from '../components/NoData';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const onRefresh = (url = 'https://sanad.karam-mustafa.com/api/posts') => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setPosts(
          res.data.map(item => {
            item.start_date = new Date(item.start_date).toLocaleDateString();
            item.end_date = new Date(item.end_date).toLocaleDateString();
            return item;
          }),
        ),
          setLoading(false);
      });
  };

  const searchForPostsByCategoryId = id => {
    onRefresh(
      id
        ? 'https://sanad.karam-mustafa.com/api/posts?category_id=' + id
        : 'https://sanad.karam-mustafa.com/api/posts',
    );
  };

  useEffect(() => {
    onRefresh();
    fetch('https://sanad.karam-mustafa.com/api/categories')
      .then(res => res.json())
      .then(res => setCategories(res.data));
  }, []);

  return (
    <ScrollView
      style={{...styles.container}}
      contentContainerStyle={{flexGrow: 1}}>
      <Header />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {categories.length ? (
          <Categories
            data={categories}
            searchForPostsByCategoryId={searchForPostsByCategoryId}
          />
        ) : (
          <ActivityIndicator size={'large'} />
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : posts.length ? (
          <Posts data={posts} />
        ) : (
          <NoData />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    height: '100%',
  },
});
