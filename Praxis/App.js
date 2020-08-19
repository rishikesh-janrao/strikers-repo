/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoadingScene from './src/Pages/LoadingScene';
import LoadingScene2 from './src/Pages/LoadingScene2';
import Prepare from './src/Pages/Prapare';
import Login from './src/Pages/Login';
import {firebaseConfig} from './src/AuthConfig/firebaseConfig';
import firebase from 'firebase';
import {SafeAreaProvider} from 'react-native-safe-area-view';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Loading">
            <Stack.Screen
              name="Loading"
              component={LoadingScene}
              options={{
                animationEnabled: false,
              }}
            />
            <Stack.Screen
              name="Loading2"
              component={LoadingScene2}
              options={{
                animationEnabled: false,
              }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Prepare" component={Prepare} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
