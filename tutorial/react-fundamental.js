import React, { Component, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Image, ScrollView, TextInput } from 'react-native';

// Component Class
class Cat extends Component {
  render() {
    return (
      <Text>Hello, I am your cat!</Text>
    );
  }
}

// Props
const Dog = (props) => {
    return(
      <View>
        <Text>I am not your {props.name}</Text>
      </View>
    );
}


const Thunder = () => {
  const jsxstring = 'ashdf;lkjghilsjdkgs'
  return (
    <Dog name={jsxstring}></Dog>
  );
}

// Status
const Computer = () => {
  const [computerPowerStatus, set_computerPowerStatus] = useState(true)
  return (
    <View>
      <Text>
        Computer is {computerPowerStatus ? "on" : "off"}. please press button to turn it {computerPowerStatus ? "off": "on"}
      </Text>
      <Button
        onPress={() => {
          set_computerPowerStatus(!computerPowerStatus)
        }}
        disabled={false}
        title={computerPowerStatus ? "Turn off" : "Turn on"}
      />
    </View>
  )
}

export { Thunder, Computer }
export default Thunder