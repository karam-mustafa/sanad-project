import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {FlatList, Image, Linking, StyleSheet, Text, View} from 'react-native';

export default function Posts({data}) {
  const openLink = async link => {
    await Linking.openURL(link);
  };

  return (
    <FlatList
      style={{flex: 1, marginBottom: 70}}
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
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => openLink(item.link)}>
                  <FontAwesomeIcon
                    color="#16ab75"
                    size={25}
                    icon={faArrowAltCircleLeft}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      marginHorizontal: 10,
                      fontWeight: 'bold',
                      color: '#16ab75',
                      marginBottom: 5,
                    }}>
                    قراءة المزيد
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    />
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
