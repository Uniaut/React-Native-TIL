import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Image, ScrollView, TextInput } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}

class HelloWorldClass extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>Hello, world! Mo'fucker</Text>
      </View>
    );
  }
}

/*
const CoreComponents = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}
*/
const CoreComponents = () => {
  return (
    <ScrollView>
      <Text>
        I hate this framework
      </Text>
      <Image
        source={{
          uri: 'https://i.imgur.com/cBVWUpr.jpeg'
        }}
        style = {{
          width: 400,
          height: 400,
          borderRadius: 20
        }}
      />
      <Image
        source={{
          uri: 'https://i.imgur.com/F6v5Wio.jpeg'
        }}
        style = {{
          width: 400,
          height: 600,
          borderRadius: 20
      }}>
      </Image>
      <View>
        <Text style={{
          fontSize: 50
        }}>IS THIS WORK?</Text>
        <TextInput
          style={{
            height: 100,
            borderColor: 'green',
            borderWidth: 9,
            fontSize: 50,
            fontStyle: 'italic'
          }}
        />
      </View>
    </ScrollView>
  );
}

<TextInput
style={{
  height: 40,
  borderColor: 'gray',
  borderWidth: 1
}}
defaultValue="You can type in me"
/>

export { CoreComponents }
export default CoreComponents