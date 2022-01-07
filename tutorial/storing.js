import React from 'react';
import { Component, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput, View } from "react-native";


const storeData = (value) => {
	try {
		AsyncStorage.setItem('@storage_Key', value)
	} catch (e) {
		console.error(e)
	}
}

const getData = async () => {
  try {
    const value = AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      return value;
    } else {
      return 'Dummy1';
    }
  } catch(e) {
    return 'Dummy2';
  }
}

const StorageTutorial = () => {
  const [saved_text, set_text] = useState('on load...');
  set_text(getData());
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type Something"
        onChangeText={text => storeData(text)}
        value={saved_text}
      />
    </View>
  );
}

export { StorageTutorial };
export default StorageTutorial;