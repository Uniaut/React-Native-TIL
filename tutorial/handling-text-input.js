import React, { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from 'react-native';



const convert2ByteStr = (x_str) => {
  var shiftCharCode = token => c => String.fromCharCode(c.charCodeAt(0) + token);
  return x_str.replace(/[!-~]/g, shiftCharCode(0xFEE0));
}

const AestheticTranslator = () => {
  const [onText, set_onText] = useState('')
  const [sentText, _set_sentText] = useState('')

  const set_sentText = (input_text) => {
    if(sentText == '')
      _set_sentText(onText)
    else
      _set_sentText(sentText + '\n' + onText)
  }

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type Something"
        onChangeText={text => set_onText(text)}
      />
      <Button
        onPress={() => {
          set_sentText(sentText + '\n' + onText)
        }}
        disabled={false}
        title={"Send it!"}
      />
      <ScrollView style={{height:150, margin:10, backgroundColor:"lightgray"}}>
        <Text style={{padding: 10, fontSize: 25}}>
          {convert2ByteStr(sentText)}
        </Text>
      </ScrollView>
    </View>
  );
}

export { AestheticTranslator };
export default AestheticTranslator;