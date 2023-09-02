import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import NoData from '../components/NoData';

export default function About() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://sanad.karam-mustafa.com/api/about')
      .then(res => res.json())
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          marginBottom: 70,
        }}>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : data.length ? (
          data.map(item => {
            return (
              <View style={styles.aboutSection}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            );
          })
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
