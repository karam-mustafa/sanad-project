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
    <SafeAreaView>
      <ScrollView
        style={{...styles.container, height: posts.length ? '' : '100%'}}>
        <Header />
        <TextInput
          onChangeText={value => search(value)}
          placeholder="ابحث عن ورشة "
          style={styles.input}
        />
        {loading ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          (posts.length ? <Posts data={posts} /> : <Text>لا يوجد أي بيانات نتيجة هذا البحث</Text>)
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
