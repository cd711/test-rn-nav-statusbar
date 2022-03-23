
import { NavigationContainer } from '@react-navigation/native';
// import {
//   createNativeStackNavigator
// } from '@react-navigation/native-stack'; // statusBarTranslucent not working

import {
  createNativeStackNavigator
} from 'react-native-screens/native-stack'; // work well but recived warring

import React from 'react';
import { View } from 'react-native';


const { Screen, Navigator } = createNativeStackNavigator();


function Main() {
  return <View style={{
    height: 100,
    backgroundColor: "#ffff00"
}} />;
}
export default function App() {
  
  return (
    <>
      <NavigationContainer theme={{
        dark: false,
        colors: {
          primary: "#ffff00",
          background: "#fff",
          card: "#eee",
          text: "#f8f8f8",
          border: "f8f8f8",
          notification: "#f8f8f8"
        }
      }}>
        <Navigator
          initialRouteName="Main"
          screenOptions={{
            headerTranslucent: true, // react-native-screens/native-stack
            headerTransparent: true, // @react-navigation/native-stack
            statusBarStyle: 'dark',
            statusBarTranslucent: true, // whith @react-navigation/native-stack not working
            headerShown: false,
          }}>
          <Screen name="Main" component={Main} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
