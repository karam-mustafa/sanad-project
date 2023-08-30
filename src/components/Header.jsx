import {Image, StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.brand}>سند</Text>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  brand: {
    fontSize: 35,
    color: '#16ab75',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
