import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';
const page1 = require('../assets/images/page1.png');
const {width, height} = Dimensions.get('screen');

export default class LoadingScene extends Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate('Loading2');
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={page1}
          style={styles.backgroundImage}></ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumspringgreen',
  },
  backgroundImage: {
    maxHeight: height,
    maxWidth: width,
    flex: 1,
  },
});
