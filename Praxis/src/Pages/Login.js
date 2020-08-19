import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
} from 'react-native';

import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  Permissions,
} from 'react-native-fbsdk';
const page1 = require('../assets/images/loginbg.png');
const {width, height} = Dimensions.get('window');
GoogleSignin.configure({
  webClientId:
    '858122305750-q7ev5gouocsfvghogd2leq5kacf83n0r.apps.googleusercontent.com',
  scopes: ['email'],
});
async function GoogleLogin() {
  // Get the users ID token
  try {
    const {idToken} = await GoogleSignin.signIn();
    // console.log(idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
    this.props.navigation.navigate('Login');
  }
}

export default class Login extends React.Component {
  FBLogin = () => {
    try {
      LoginManager.logInWithPermissions(['public_profile']).then(
        (result) => {
          if (result.isCancelled) {
            this.props.navigation.navigate('Login');
          } else {
            this.props.navigation.navigate('Prepare');
          }
        },
        function (error) {
          console.log('Login fail with error: ' + error);
        },
      );
    } catch (error) {
      console.log('FB Error: ' + error);
    }
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    StatusBar.setTranslucent(false);
    StatusBar.setBackgroundColor('mediumspringgreen');
    StatusBar.setHidden(false);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    return true;
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground source={page1} style={styles.backgroundImage}>
          <View style={{flex: 1}}>
            <Text style={styles.textstyle}>Hello!</Text>
            <Text style={styles.tagline}>Welcome to your personalized</Text>
            <Text style={styles.tagline}>Study Planner App.</Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  marginTop: '5%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  width: '80%',
                  height: '68%',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,
                  elevation: 4,
                }}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    marginTop: 22,
                    marginLeft: 15,
                  }}>
                  <Text style={styles.navitem1}>Login</Text>
                  <Text style={styles.navitem2}>Signup</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.FBLogin()}
                    style={styles.SignUpBtn}>
                    <Image
                      style={styles.socialIcon}
                      source={require('../assets/images/facebook.png')}
                    />
                    <Text style={styles.FbTitle}>Facebook</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      GoogleLogin().then((user) => {
                        this.props.navigation.navigate('Prepare');
                      })
                    }
                    style={styles.SignUpBtn}>
                    <Image
                      style={styles.socialIcon}
                      source={require('../assets/images/google.png')}
                    />
                    <Text style={styles.GoogleTitle}>Google</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={this.LnLogin}
                    style={styles.SignUpBtn}>
                    <Image
                      style={styles.socialIcon}
                      source={require('../assets/images/linkedin.png')}
                    />
                    <Text style={styles.Linkedin}>Linkedin</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    height: height,
    width: width,
  },

  textstyle: {
    top: '6%',
    left: '10%',
    fontFamily: 'arial',
    fontSize: 29,
    color: 'white',
  },

  tagline: {
    top: '6.5%',
    left: '10%',
    fontFamily: 'arial',
    fontSize: 14,
    color: 'white',
    width: '60%',
  },

  navitem1: {
    color: 'gray',
    marginLeft: 10,
    marginTop: 5,
  },
  navitem2: {
    marginLeft: 10,
    marginTop: 5,
    color: '#129b8e',
    borderBottomWidth: 1,
    borderBottomColor: '#129b8e',
  },

  SignUpBtn: {
    width: 200,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    color: '#3B5998',
    shadowColor: '#000',
    elevation: 1,
    borderRadius: 10,
    borderTopColor: '#FFFFFF',
    borderLeftColor: '#FFFFFF',
    borderRightColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 7},
  },
  FbTitle: {
    color: '#455893',
    fontSize: 18,
    fontWeight: 'bold',
  },

  GoogleTitle: {
    color: '#EA4335',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 18,
  },

  Linkedin: {
    color: '#0077b7',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 1,
  },
  socialIcon: {
    width: '22%',
    height: '60%',
  },
});
