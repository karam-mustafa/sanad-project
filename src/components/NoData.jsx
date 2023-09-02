import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function NoData() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require('./../assets/images/no_data.png')}
      />
      <Text style={styles.text}>لا يوجد بيانات</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#16ab75',
  },
});
