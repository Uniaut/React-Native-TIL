import React, { useState } from "react";
import { Button, FlatList, StyleSheet, ScrollView, Text, TextInput, View} from "react-native";


const styles = StyleSheet.create({
 container: {
   height: 200,
   padding: 10,
   margin: 10,
   backgroundColor: 'powderblue'
 },
 item: {
   padding: 10,
   fontSize: 18,
   height: 44,
   alignContent: "center"
 }
});

const MyList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          '1', '2', '3', '4', '5'
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}




export { MyList };
export default MyList;