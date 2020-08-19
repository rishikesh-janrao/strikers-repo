import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Animated,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

import firebase from 'firebase';
import ProgressBar from 'react-native-progress/Bar';
const page1 = require('../assets/images/page1.png');
import logo from '../assets/images/logo.png';
const {width, height} = Dimensions.get('window');

export default class LoadingScene extends Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.checkAuthUser();
    }, 2000);
  }

  checkAuthUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('Prepare');
      } else {
        this.props.navigation.navigate('Login');
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{...StyleSheet.absoluteFill}}>
          <ImageBackground source={page1} style={styles.backgroundImage}>
            <View
              style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.titleName}>Praxis</Text>
              <Text style={styles.tagLine}>Lets plan studies smartly</Text>
              <ProgressBar
                style={styles.progressBar}
                progress={0.4}
                height={1}
                color="white"
                borderWidth={0}
                width={200}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={styles.poweredBy}>Powered By</Text>
              <Text style={styles.TechGarrage}>TechGarrage</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },

  backgroundImage: {
    height: height,
    width: width,
  },

  logo: {
    marginTop: '48%',
    width: '25%',
    height: '29%',
  },

  titleName: {
    fontFamily: 'sans-serif',
    fontSize: 52,
    fontWeight: '500',
    color: 'white',
  },

  tagLine: {
    fontSize: 16,
    color: 'white',
  },

  progressBar: {
    marginTop: '10%',
  },
  poweredBy: {
    color: 'white',
    fontSize: 16,
  },
  TechGarrage: {
    marginBottom: '10%',
    color: 'white',
    fontSize: 28,
  },
});
