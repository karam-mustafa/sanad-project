import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [num, setNum] = useState(0);

  const data = [
    {
      title: 'web design',
      image: require('./src/assets/images/card-1.jpeg'),
      description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        nostrum blanditiis, modi natus deserunt doloribus aliquid,
        mollitia explicabo labore atque repellendus voluptatibus suscipit
        provident rerum unde laborum nesciunt? Sint, consectetur.`,
      start_date: '26/8/2023',
      end_date: '30/8/2023',
      link: 'https://reactnative.dev/docs/image',
    },
    {
      title: 'mobile design',
      image: require('./src/assets/images/card-1.jpeg'),
      description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        nostrum blanditiis, modi natus deserunt doloribus aliquid,
        mollitia explicabo labore atque repellendus voluptatibus suscipit
        provident rerum unde laborum nesciunt? Sint, consectetur.`,
      start_date: '26/8/2023',
      end_date: '30/8/2023',
      link: 'https://reactnative.dev/docs/image',
    },
    {
      title: 'desktop design',
      image: require('./src/assets/images/card-1.jpeg'),
      description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        nostrum blanditiis, modi natus deserunt doloribus aliquid,
        mollitia explicabo labore atque repellendus voluptatibus suscipit
        provident rerum unde laborum nesciunt? Sint, consectetur.`,
      start_date: '26/8/2023',
      end_date: '30/8/2023',
      link: 'https://reactnative.dev/docs/image',
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <View style={styles.counterAreaStyle}>
          <Text style={styles.title}>{num}</Text>

          <TouchableOpacity style={styles.btn} onPress={() => setNum(num + 1)}>
            <Text style={styles.white}>press to add 1</Text>
          </TouchableOpacity>
        </View> */}
        <ScrollView>
          {data.map((item, index) => {
            return (
              <View style={styles.card} key={index}>
                <Image
                  style={{
                    width: '100%',
                    margin: 'auto',
                    height: 250,
                    marginBottom: 15,
                  }}
                  source={item.image}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.para}>{item.description}</Text>
                <View style={styles.cardFooter}>
                  <Text>{item.start_date}</Text>
                  <TouchableOpacity style={styles.btn} onPress={() => console.log(item.link)}>
                    <Text style={styles.white}>Open</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  para: {
    fontSize: 18,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  counterAreaStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  btn: {
    backgroundColor: 'blue',
    borderRadius: 5,
    borderColor: 'black',
    padding: 15,
  },
  white: {
    color: 'white',
  },
  card: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 20,
    paddingBottom:15
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  }
});
