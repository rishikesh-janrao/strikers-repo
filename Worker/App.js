// import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import {LogoSplash} from './src/screens/Logo';
import {Drawer} from './src/screens/drawer';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  // changeNavigationBarColor('#009688', false);
  changeNavigationBarColor('transparent', true);
  showNavigationBar();
  // hideNavigationBar();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={LogoSplash}
          initialParams={{
            animated: true,
            waitime: 3,
            redirectTo: 'Drawer',
          }}
        />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={[styles.container]}>
    //   <StatusBar style="auto" />

    // </View>
    // <LogoSplash animated={true} waittime={3} redirectTo={'Drawer'} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    // fontFamily: '',
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    fontSize: 30,
    color: '#FFF',
  },
  Vision: {
    fontSize: 20,
    color: '#FFF',
  },
});
