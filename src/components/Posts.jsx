import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

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
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
    {
      id: 1,
      title: 'karam1',
      description: 'karam1',
      category_id: '1',
      image:
        'https://www.thaqfny.com/wp-content/uploads/2021/02/%D8%A7%D9%83%D8%AA%D8%A8-%D8%A7%D8%B3%D9%85%D9%83-%D8%B9%D9%84%D9%89-%D8%B5%D9%88%D8%B1-%D8%B5%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1-3.jpeg',
      link: 'karam1',
      start_date: '2023-08-16 00:00:00',
      end_date: '2023-08-31 00:00:00',
      created_at: '2023-08-25T06:17:47.000000Z',
      updated_at: '2023-08-25T06:17:47.000000Z',
    },
  ];
  return (
    <View>
      {data.map((item, index) => {
        return (
          <View style={styles.post}>
            <Image style={styles.image} source={{uri: item.image}} />
            <View
              style={{
                padding: 20,
                justifyContent: 'flex-end',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}>
              <Text>{item.title}</Text>
              <Text>
                {item.description.substring(0, 200)}
                {item.description.length > 200 ? ' ...' : ''}
              </Text>
              <View style={styles.dateArea}>
                <Text> حتى {item.end_date}</Text>
                <Text>تبدأ في {item.start_date}</Text>
              </View>
              <View style={styles.link}>
                <Text> {item.link}</Text>
              </View>
            </View>
          </View>
        );
      })}
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
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
});
