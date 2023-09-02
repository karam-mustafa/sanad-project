import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from './../components/Header';
import Posts from './../components/Posts';
import NoData from '../components/NoData';

export default function Search() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://sanad.karam-mustafa.com/api/posts')
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
  }, []);

  const search = value => {
    setLoading(true);
    fetch('https://sanad.karam-mustafa.com/api/posts?search=' + value)
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

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{...styles.container}}>
      <Header />
      <TextInput
        onChangeText={value => search(value)}
        placeholder="ابحث عن ورشة "
        style={styles.input}
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex:1
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
  input: {
    width: '100%',
    height: 50,
    padding: 12,
    borderColor: '#17ab75',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 12,
    direction: 'rtl',
  },
});
