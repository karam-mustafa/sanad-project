import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Categories({data, searchForPostsByCategoryId}) {
  const [activeItem, setActiveItem] = useState(null);

  const toogleActiveItem = id => {
    if (id == activeItem) {
      setActiveItem(null);
      searchForPostsByCategoryId(null);
    } else {
      setActiveItem(id);
      searchForPostsByCategoryId(id);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'flex-end',
      }}
      style={{marginRight: 10, transform: [{scaleX: -1}]}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {data.map(item => {
        return (
          <Pressable
            key={item.id}
            style={
              activeItem == item.id
                ? styles.categoryAreaActive
                : styles.categoryArea
            }
            onPress={() => toogleActiveItem(item.id)}>
            <Text
              style={activeItem == item.id ? styles.textActive : styles.text}>
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
    direction: 'rtl',
    transform: [{scaleX: -1}],
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
    transform: [{scaleX: -1}],
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
