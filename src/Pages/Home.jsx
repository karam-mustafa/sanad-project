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

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const onRefresh = (url = 'https://sanad.karam-mustafa.com/api/posts') => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(1);
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
    onRefresh(id ? 'https://sanad.karam-mustafa.com/api/posts?category_id=' + id : '')
  };
  
  useEffect(() => {
    onRefresh();
    fetch('https://sanad.karam-mustafa.com/api/categories')
      .then(res => res.json())
      .then(res => setCategories(res.data));
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{...styles.container, height: '100%'}}>
        <Header />
        {categories.length ? (
          <Categories
            data={categories}
            searchForPostsByCategoryId={searchForPostsByCategoryId}
          />
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
        {loading ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : posts.length ? (
          <Posts data={posts} />
        ) : (
          <Text>لا يوجد بيانات</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    flex: 1,
    marginBottom: 70,
  },
});
