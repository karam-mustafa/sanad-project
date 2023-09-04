import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';

export default function App() {
  const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
    messaging.AuthorizationStatus;
    const enabled =
      authStatus == messaging.AuthorizationStatus.AUTHORIZED ||
      messaging.AuthorizationStatus.PROVISIONAL;

    return enabled;
  };

  useEffect(() => {
    if (requestPermission) {
      messaging()
        .getToken()
        .then(token => {
          AsyncStorage.getItem('fcmtoken').then(res => {
            const data = JSON.stringify({
              token: token,
            });
            if (!res) {
              fetch('https://sanad.karam-mustafa.com/api/store-token', {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: data,
              });
              AsyncStorage.setItem('fcmtoken', token);
            }
          });
        });
    }

    PushNotification.createChannel({
      channelId: 'specialid',
      channelName: 'Special messasge',
      channelDescription: 'Notification for special message',
      importance: 4,
      vibrate: true,
    });

    messaging().onMessage(async remoteMessage => {
      PushNotification.localNotification({
        channelId: 'specialid',
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
      });
    });
  }, []);
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
