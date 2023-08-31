import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

export default function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://sanad.karam-mustafa.com/api/about')
      .then(res => res.json())
      .then(res => setData(res.data));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {data.length ? (
        ''
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

      {data.map(item => {
        return (
          <View style={styles.aboutSection}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    marginBottom: 70,
    flex: 1,
    height: '100%'
  },
  aboutSection: {
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    color: '#16ab75',
  },
  description: {
    fontSize: 20,
  },
});
