import React from 'react';
import { Component, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput, View } from "react-native";
import BouncyCheckbox from 'react-native-bouncy-checkbox';

class StorageTutorial extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  async toggleState(isChecked: boolean) {
    this.setState({
      is_Happy: isChecked,
    });
    await AsyncStorage.setItem('@saved-data', String(isChecked));
  }
  
  async componentDidMount() {
    console.log('component init')
    try {
      const savedBool = await AsyncStorage.getItem('@saved-data');
      console.log(savedBool);
      if (savedBool == null) {
        this.setState({
          is_Happy: false,
        });
      } else {
        this.setState({
          is_Happy: savedBool == 'true' ? true : false,
        });
      }
    } catch(e) {
      console.error(e);
    }
  }
  render() {
    return (
      <View style={{flexDirection:'row'}}>
        <BouncyCheckbox
          onPress={() => {
            console.log(!this.state.is_Happy);
            this.toggleState(!this.state.is_Happy);
          }}
          isChecked={this.state.is_Happy}
          disableBuiltInState={true}
          textComponent={
            <Text>
              { this.state.is_Happy ? 
              "나는 행복합니다~":
              "나는 불행합니다~"
              }
            </Text>
          }
          size={15}
        />
      </View>
    );
  }
}

export default StorageTutorial;