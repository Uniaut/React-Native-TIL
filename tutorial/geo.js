import React, { Component } from "react";
import { StyleSheet, Text, View, Image, PermissionsAndroid } from "react-native";
import Geolocation from 'react-native-geolocation-service'

Geolocation.getCurrentPosition(
  (position) => {
      console.log(position);
  },
  (error) => {
      // See error code charts below.
      console.log(error.code, error.message);
  },
  { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
);
class GeoData extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      location: {
        latitude: 0.1,
        longitude: 0.2
      }
    }
  }
  async componentDidMount () {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'I need your location hehehe',
          message: 'HEHEHEHEHEHEHE',
          buttonPositive: 'I am naive',
          buttonNegative: 'I cannot trust you',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("YAY!");
      } else {
        console.log("NAH");
      }
    } catch (err) {
      console.error(err);
    }
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        this.setState({
          location: {
            latitude: latitude,
            longitude: longitude
          }
        });
      },
      error => {
        console.warn(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000},
    );
  }
  render () {
    return (
      <View>
        <Text>
          {this.state.location.latitude}, {this.state.location.longitude}
        </Text>
      </View>
    );
  }
};

export default GeoData;