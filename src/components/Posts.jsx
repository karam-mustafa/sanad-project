import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Posts() {
  const data = [
    {
      id: 1,
      title: 'ورشة تطبيقات الويب',
      description:
        ' لقد اخذنا جلسة رائعة واستمتعنا مع المدرب الرائع في المركز الرائع مع المتدربين الرائعين لقد اخذنا جلسة رائعة واستمتعنا مع المدرب الرائع في المركز الرائع مع المتدربين الرائعين لقد اخذنا جلسة رائعة واستمتعنا مع المدرب الرائع في المركز الرائع مع المتدربين الرائعين',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: new Date('2023-08-16 00:00:00').toDateString(),
      end_date: new Date('2023-08-16 00:00:00').toDateString(),
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.post} key={item.id}>
              <Image style={styles.image} source={{uri: item.image}} />
              <View
                style={{
                  padding: 20,
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#16ab75',
                    marginBottom: 5,
                  }}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 15, fontWeight: 800}}>
                  {item.description.substring(0, 200)}
                  {item.description.length > 200 ? ' ...' : ''}
                </Text>
                <View style={styles.dateArea}>
                  <Text style={{fontSize: 15, fontWeight: 500}}>
                    حتى {item.end_date}
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: 500}}>
                    تبدأ في {item.start_date}
                  </Text>
                </View>
                <View style={styles.link}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#16ab75',
                      marginBottom: 5,
                    }}>
                    {item.link}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    borderRadius: 40,
    elevation: 2,
    backgroundColor: 'white',
    marginVertical: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  dateArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },
});
