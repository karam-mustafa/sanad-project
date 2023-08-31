import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Categories({data}) {
  const [activeItem, setActiveItem] = useState(null);

  const toogleActiveItem = index => {
    if (index == activeItem) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <ScrollView style={{direction: 'rtl'}} horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={
              activeItem == index
                ? styles.categoryAreaActive
                : styles.categoryArea
            }
            onPress={() => toogleActiveItem(index)}>
            <Text style={activeItem == index ? styles.textActive : styles.text}>
              {item.title}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryArea: {
    width: 100,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#16ab75',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
    marginBottom: 17,
    direction: 'rtl'
  },
  categoryAreaActive: {
    width: 100,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#16ab75',
    backgroundColor: '#16ab75',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#16ab75',
  },
  textActive: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
