import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Home from './src/Pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarButton: props => (
              <TouchableOpacity
                style={styles.tab}
                onPress={() => null}>
                {/* <FontAwesomeIcon color="#2D2E83" size={30} icon={faHouse} /> */}
                <Text style={{color: 'white', fontSize: 20}}>Home</Text>
              </TouchableOpacity>
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="About"
          options={{
            tabBarButton: props => (
              <TouchableOpacity
                style={styles.tab}
                activeOpacity={1}
                onPress={() => null}>
                {/* <FontAwesomeIcon color="#2D2E83" size={30} icon={faHouse} /> */}
                <Text>Home</Text>
              </TouchableOpacity>
            ),
            unmountOnBlur: true,
          }}
          component={Home}
        />
        
        <Tab.Screen
          name="Search"
          options={{
            tabBarButton: props => (
              <TouchableOpacity
                style={styles.tab}
                activeOpacity={1}
                onPress={() => null}>
                {/* <FontAwesomeIcon color="#2D2E83" size={30} icon={faHouse} /> */}
                <Text>Home</Text>
              </TouchableOpacity>
            ),
            unmountOnBlur: true,
          }}
          component={Home}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  tabBarStyle: {
    backgroundColor: '#16ab75',
    height: 70,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopWidth: 0,
    borderWidth: 0,
    borderRadius: 0,
    elevation: 0,
    borderTopEndRadius: 70,
    borderTopStartRadius: 70,
    position: 'absolute',
  },
  tab: {
    // backgroundColor: 'white',
    // paddingBottom: 6,
    // alignItems: 'center',
    paddingBottom: 6,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
