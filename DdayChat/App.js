/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  settingView: {
    
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}/>
        <View />
      </View>
    )
  }
};