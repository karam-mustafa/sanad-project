import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse, faQuestion, faSearch} from '@fortawesome/free-solid-svg-icons';
import About from './../Pages/About';
import Search from './../Pages/Search';
import Home from './../Pages/Home';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const nav = useNavigation();

  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Search"
        options={{
          tabBarButton: props => (
            <TouchableOpacity
              style={styles.tab}
              onPress={() => {
                nav.navigate('Search');
              }}>
              <FontAwesomeIcon color="white" size={25} icon={faSearch} />
            </TouchableOpacity>
          ),
        }}
        component={Search}
      />
      <Tab.Screen
        name="About"
        options={{
          tabBarButton: props => (
            <TouchableOpacity
              style={styles.tab}
              onPress={() => {
                nav.navigate('About');
              }}>
              <FontAwesomeIcon color="white" size={25} icon={faQuestion} />
            </TouchableOpacity>
          ),
        }}
        component={About}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarButton: props => (
            <TouchableOpacity
              style={styles.tab}
              onPress={() => {
                nav.navigate('Home');
              }}>
              <FontAwesomeIcon color="white" size={25} icon={faHouse} />
            </TouchableOpacity>
          ),
        }}
        component={Home}
      />
    </Tab.Navigator>
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
    flexDirection: '',
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
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
