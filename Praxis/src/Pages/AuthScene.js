import React, {Component} from 'react';
import {View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export class AutheScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  button: {
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  buttonHover: {
    marginTop: 10,
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: {width: 1, height: 13},
    backgroundColor: '#2EE59D',
    color: '#FFFFFF',
  },
});
