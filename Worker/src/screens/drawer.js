import {
  Animated,
  Button,
  Image,
  Modal,
  OpaqueColorValue,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';

export class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.height = this.props.height;
    this.animated = new Animated.Value(0);
    this.state = {
      modalVisible: true,
    };
    this.translatorXOutputRange = [0, 50, 100, 150, 185];
    this.translatorYOutputRange = [100, 200, 250, 300, 380];

    this.translatorXOutputRangeX = [185, 150, 100, 50, 0];
    this.translatorYOutputRangeX = [380, 300, 250, 200, 100];
  }

  startAnimation = () => {
    this.animated.setValue(0);
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  render() {
    // const scaler = this.animated.interpolate({
    //   inputRange: [0.1, 0.2, 0.3, 0.4, 0.5],
    //   outputRange: [5, 10, 15, 20, 25],
    // });
    const translatorX = this.animated.interpolate({
      inputRange: [0.1, 0.2, 0.3, 0.4, 0.5],
      outputRange: !this.state.modalVisible
        ? this.translatorXOutputRange
        : this.translatorXOutputRangeX,
    });
    const translatorY = this.animated.interpolate({
      inputRange: [0.1, 0.2, 0.3, 0.4, 0.5],
      outputRange: !this.state.modalVisible
        ? this.translatorYOutputRange
        : this.translatorYOutputRangeX,
    });
    changeNavigationBarColor('#00BA88', true);
    showNavigationBar();
    return (
      <View
        style={{
          flex: 1,

          backgroundColor: '#FFF',
          paddingTop: this.height,
        }}>
        {this.state.modalVisible ? (
          <>
            <StatusBar style="dark" />
            <Animated.View
              style={{
                flex: 0.1,
                alignItems: 'baseline',
                paddingEnd: 10,
                backgroundColor: '#FFF',
              }}>
              <Button
                title={'Open'}
                onPress={() => {
                  this.state.modalVisible = false;
                  this.setState(this.state);
                  this.startAnimation();
                }}></Button>
            </Animated.View>
            <Animated.View
              style={{flex: 0.9, backgroundColor: '#FFF'}}></Animated.View>
          </>
        ) : (
          <>
            <StatusBar style="dark" />
            <Animated.View
              style={{
                flex: 1,
                alignItems: 'baseline',
                backgroundColor: '#FFF',
                marginTop: 0,
              }}>
              <Animated.View
                style={[
                  {
                    // marginTop: 5,
                    marginLeft: 5,
                    position: 'absolute',
                    width: translatorX,
                    height: translatorY,
                    backgroundColor: '#009688',
                    borderColor: '#efaddd',
                    borderWidth: 2,
                    opacity: 0.5,
                    borderBottomRightRadius: 50,
                    borderBottomLeftRadius: 10,
                    borderTopEndRadius: 10,
                    borderTopStartRadius: 10,
                  },
                ]}>
                <Animated.View
                  style={[
                    {
                      opacity: 0.5,
                      borderColor: '#000',
                      borderWidth: 2,
                      position: 'absolute',
                      width: translatorX,
                      height: translatorY,
                      // backgroundColor: '#000',
                      borderBottomRightRadius: 50,
                      borderBottomLeftRadius: 10,
                      borderTopEndRadius: 10,
                      elevation: 100,
                    },
                  ]}></Animated.View>

                <TouchableOpacity
                  style={{
                    maxWidth: 80,
                    maxHeight: 80,
                    elevation: 10,
                    paddingStart: 8,
                    // backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}
                  onPress={() => {
                    this.state.modalVisible = true;
                    this.setState(this.state);
                    this.startAnimation();
                  }}>
                  {/* <Text style={{color: '#000'}}>CLOSE</Text> */}
                  {/* <Image
                    resizeMode="contain"
                    style={{
                      marginStart: -90,
                      transform: [
                        {
                          scale: 0.15,
                        },
                        {rotate: '90deg'},
                      ],
                    }}
                    source={require('../images/logo-blank.png')}></Image> */}

                  <Text
                    style={{
                      fontWeight: '500',
                      elevation: 20,
                      color: '#000',
                      backgroundColor: '#000',
                      borderRadius: 25,
                      borderBottomColor: '#000',
                      borderWidth: 1,
                      width: 23,
                      paddingStart: 6.5,
                      transform: [
                        {
                          scale: 1.4,
                        },
                        {
                          translateX: 5,
                        },
                        {
                          translateY: 10,
                        },
                        {
                          skewX: '180deg',
                        },
                      ],
                    }}>
                    X
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </Animated.View>
          </>
        )}
      </View>
    );
  }
}
