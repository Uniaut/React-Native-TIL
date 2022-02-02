import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { WebView } from "react-native-webview";
import { ID as nmapID, Key as nmapKey } from './nmap.config.json';
import TelLink from "./telephone_linking.js";
import StorageTutorial from "./storing.js";
import GeoData from './geo.js'


var base64 = require('base-64')
// <img src="https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&center=127.1054221,37.3591614&level=16&X-NCP-APIGW-API-KEY-ID={애플리케이션 등록 시 발급받은 client id값}">


class NMapImage extends Component {
  render() {
    img = fetch('https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&center=127.1054221,37.3591614&level=16', {
    method: 'GET',
      headers: {
        'X-NCP-APIGW-API-KEY-ID': nmapID,
        'X-NCP-APIGW-API-KEY': nmapKey
      }
    }).then((response) => {
      console.log('a')
      console.log(response)
      return response.blob()
    }).then((blob) => {
      return base64.encode(blob)
    }).catch((err) => {
      console.error(err)
    })
    return (
      <Image
        source={{
          uri: 'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&center=127.1054221,37.3591614&level=16',
          method: 'GET',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': nmapID,
            'X-NCP-APIGW-API-KEY': nmapKey
          }
        }}
        onError={(err) => {
          console.error(err)
        }}
        onLoad={() => {
          console.log('what')
        }}
      />
    );
  }
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.storage_area}>
        <StorageTutorial />
        <GeoData />
      </View>
      <View style={styles.geo_area}>
        <GeoData />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  storage_area: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  geo_area: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue'
  }
});

export default App;