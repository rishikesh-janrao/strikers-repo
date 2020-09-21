import React from 'react';
import {View, StyleSheet, Animated, Easing, Image} from 'react-native';
// import Animated, {Easing} from 'react-native-reanimated';

const {SHAPE_DIMENSION, SHAPE_COLOR} = require('../shapes/Constants');

export class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.threshold = this.props.threshold;
    this.state = {
      counter: 0,
    };
    this.bgColor = this.props.color;
    this.animatedValue = new Animated.Value(0);
    this.measurements = {
      point1: {
        outputRangeX: [0, 30, 0, -30, 0],
        outputRangeY: [-30, 0, 30, 0, 0],
      },
      point2: {
        outputRangeX: [-30, 0, 30, 0, -30],
        outputRangeY: [0, -30, 0, 30, 0],
      },
      point3: {
        outputRangeX: [0, -30, 0, 30, 0],
        outputRangeY: [30, 0, -30, 0, 30],
      },
      point4: {
        outputRangeX: [30, 0, -30, 0, 30],
        outputRangeY: [0, 30, 0, -30, 0],
      },
    };
  }

  animate = () => {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.in,
    }).start(() => {
      if (this.state.counter != this.threshold && this.threshold > 0) {
        this.state.counter++;
        var temp = this.measurements.point1;
        this.measurements.point1 = this.measurements.point2;
        this.measurements.point2 = this.measurements.point3;
        this.measurements.point3 = this.measurements.point4;
        this.measurements.point4 = temp;

        this.animate();
      }
    });
  };
  componentDidMount() {
    this.animate();
  }
  render() {
    const x1 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange: this.measurements.point1.outputRangeX,
    });
    const y1 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange: this.measurements.point1.outputRangeY,
    });
    const x2 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange: this.measurements.point2.outputRangeX,
    });
    const y2 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange: this.measurements.point2.outputRangeY,
    });
    const x3 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange: this.measurements.point3.outputRangeX,
    });
    const y3 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange: this.measurements.point3.outputRangeY,
    });
    const x4 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange: this.measurements.point4.outputRangeX,
    });
    const y4 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange: this.measurements.point4.outputRangeY,
    });

    const x = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.2, 0.3, 0.2],
    });

    return (
      <View
        style={{
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 0.5,
          borderStyle: 'solid',
          borderWidth: 2,
          borderColor: '#FFF',
          backgroundColor: '#000',
          maxHeight: 100,
          transform: [
            {
              rotate: '45deg',
            },
            {perspective: 100},
            {scale: 2},
            {skewY: '0deg'},
          ],
        }}>
        <View
          style={{
            width: 90,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: '#FFF',
            backgroundColor: '#009688',
            maxHeight: 90,
            transform: [
              {
                rotate: '90deg',
              },
            ],
          }}>
          <Animated.View
            style={[
              styles.circle1,
              {
                backgroundColor: this.bgColor,
                transform: [
                  {translateX: x1},
                  {perspective: 100},
                  {translateY: y1},
                  {scale: x},
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.circle1,
              {
                backgroundColor: this.bgColor,
                transform: [
                  {translateX: x2},
                  {perspective: 100},
                  {translateY: y2},
                  {scale: x},
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.circle2,
              {
                backgroundColor: this.bgColor,
                transform: [
                  {translateX: x3},
                  {perspective: 100},
                  {translateY: y3},
                  {scale: x},
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.circle2,
              {
                backgroundColor: this.bgColor,
                transform: [
                  {translateX: x4},
                  {perspective: 100},
                  {translateY: y4},
                  {scale: x},
                ],
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

export class LogoSplash extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.props.navigation.getParam('redirectTo', 'Drawer');
    this.animated = this.props.navigation.getParam('animated', true);
    this.wait = this.props.navigation.getParam('waittime', 3) * 1000;
    this.animatedValue = new Animated.Value(0);
    this.animatedValue1 = new Animated.Value(0);
    this.scale = 0.38;
    this.scaleAnimated = 0.3;
  }
  componentDidMount() {
    Animated.timing(this.animatedValue1, {
      toValue: 4,
      duration: this.wait + 1000,
      useNativeDriver: true,
    }).start((finished) => {
      if (finished) {
        // this.props.navigation.navigate('' + this.redirect);
      }
    });
    setInterval(() => {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: this.wait / 2,
        useNativeDriver: true,
      }).start((finished) => {
        if (finished) {
          // console.log('Navigating...............');
        }
      });
    }, this.wait);
  }
  render() {
    this.animatedValue.setValue(0);
    this.animatedValue1.setValue(0);
    const opacity = this.animatedValue.interpolate({
      inputRange: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
      outputRange: [1, 0.9, 0.7, 0.5, 0.3, 0.1, 0],
      extrapolate: 'clamp',
    });
    const opacityAnimated = this.animatedValue.interpolate({
      inputRange: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
      outputRange: [1, 0.9, 0.7, 0.5, 0.3, 0.1, 0],
      extrapolate: 'clamp',
    });
    this.scale = this.animatedValue.interpolate({
      inputRange: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
      outputRange: [0.4, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    });
    this.scaleAnimated = this.animatedValue.interpolate({
      inputRange: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
      outputRange: [0.4, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    });
    const zoomScale = this.animatedValue.interpolate({
      inputRange: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
      outputRange: [0, 10, 20, 30, 50, 100, 150, 2000],
    });

    const scaleFooter = this.animatedValue1.interpolate({
      inputRange: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
      outputRange: [0, 1, 1.8, 2.6, 1.8, 1, 0],
    });
    return (
      <View style={[styles.container]}>
        <View style={{flex: 0.3}}></View>
        {this.animated ? (
          <Animated.View
            style={{
              flex: 0.6,
              // borderColor: '#FFF',
              // borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Animated.View
              style={[
                styles.zoom,
                {
                  // opacity: 10,
                  transform: [
                    {
                      scale: zoomScale,
                    },
                  ],
                },
              ]}></Animated.View>
            <Animated.View
              style={{
                maxWidth: 200,
                maxHeight: 400,
                opacity: opacityAnimated,
                transform: [
                  {
                    scale: this.scaleAnimated,
                  },
                ],
              }}>
              <Logo
                threshold={
                  this.props.waittime - 2 > 0 ? this.props.waittime - 2 : 0
                }
                color={'#FFF'}
              />
              <Logo
                threshold={
                  this.props.waittime - 1 > 1 ? this.props.waittime - 1 : 1
                }
                color={'#FFF'}
              />
              <Logo threshold={this.props.waittime} color={'#FFF'} />
            </Animated.View>
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              flex: 0.6,
              // borderColor: '#FFF',
              // borderWidth: 1,
              justifyContent: 'center',
              // alignItems: 'center',
              transform: [
                {
                  scale: 1.2,
                },
              ],
            }}>
            <Animated.View
              style={[
                styles.zoom,
                {
                  transform: [
                    {
                      scale: zoomScale,
                    },
                  ],
                },
              ]}></Animated.View>
            <Animated.View
              style={{
                opacity: opacity,
                transform: [
                  {
                    scale: this.scale,
                  },
                ],
              }}>
              <Image
                resizeMode="contain"
                source={require('../images/logo-blank.png')}></Image>
            </Animated.View>
          </Animated.View>
        )}
        <Animated.Text style={[styles.Header, {opacity: opacity}]}>
          Worker
        </Animated.Text>
        <Animated.Text style={[styles.Vision, {opacity: opacity}]}>
          New way of working
        </Animated.Text>
        <View style={[styles.footer]}>
          <Animated.View
            style={[
              styles.bar,
              {
                opacity: opacityAnimated,
                transform: [
                  {
                    scaleX: scaleFooter,
                  },
                ],
              },
            ]}></Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle1: {
    position: 'absolute',
    width: SHAPE_DIMENSION,
    height: SHAPE_DIMENSION,
    borderRadius: SHAPE_DIMENSION / 2,
    elevation: 10,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1,
  },
  bar: {
    width: 10,
    height: 2,
    // borderRadius: 10,
    elevation: 10,
    backgroundColor: '#FFF',
  },
  line: {
    position: 'absolute',
    width: 100,
    height: 100,
    elevation: 10,
  },
  circle2: {
    position: 'absolute',
    width: SHAPE_DIMENSION,
    height: SHAPE_DIMENSION,
    borderRadius: SHAPE_DIMENSION / 2,
    elevation: 10,
  },
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
  zoom: {
    width: 0,
    height: 0,
    borderRadius: 50,
    position: 'absolute',
    borderColor: '#FFF',
    borderWidth: 0.1,
    alignSelf: 'center',
    textAlignVertical: 'center',
    marginTop: 130,
    transform: [
      {
        scale: -1,
      },
    ],
  },
});
