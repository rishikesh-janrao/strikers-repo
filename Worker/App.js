import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import {LogoSplash} from './src/screens/Logo';

export default function App() {
  // changeNavigationBarColor('#009688', false);
  changeNavigationBarColor('transparent', true);
  showNavigationBar();
  // hideNavigationBar();

  return (
    <View style={[styles.container]}>
      <StatusBar style="auto" />
      <LogoSplash animated={true} waittime={2} />
    </View>
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
