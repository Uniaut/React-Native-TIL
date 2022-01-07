import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Linking } from "react-native";

var data = [
  {
    tel:"141241241242412412412421",
    description: "Geonwoo Choi"
  },
  {
    tel:"112",
    description: "Police"
  },
  {
    tel:"119",
    description: "Emergency"
  },
]

const TelLink = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <ButtonItem tel={item.tel} description={item.description}/>}
      />
    </View>
  );
}

const ButtonItem = ({tel, description}) => {
  return (
    <TouchableOpacity
      style={[styles.item_container]}
      onPress={() => {
        console.log(tel);
        Linking.openURL("tel:" + tel)
      }}
    >
      <>
        <Text style={styles.text_tel}>{tel}</Text>
        <Text style={styles.text_description}>{description}</Text>
      </>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    padding: 10,
    margin: 10,
    backgroundColor: 'powderblue'
  },
  item_container: {
    height: 50,
    padding: 5,
    margin: 10,
    backgroundColor: 'violet',
    alignContent: "center"
  },
  text_tel: {
    fontSize: 10,
    height: 15,
  },
  text_description: {
    fontSize: 18,
    height: 30,
  }
 });

export default TelLink;
