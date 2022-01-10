import React from 'react';
import {
  Image,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  settingView: {
    backgroundColor:'lightgray',
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
  },
  settingIconTouch: {
    backgroundColor:'gray',
    margin:10,
  },
  settingIcon: {
    height:50,
    width:50,
  },
  ddayView: {
    backgroundColor:'lightyellow',
    flex:3,
    justifyContent:'center',
    paddingHorizontal:80,
  },
  ddayDateText: {
    fontSize:20,
    alignSelf:'flex-end',
  },
  ddayEventText: {
    fontSize:25,
    alignSelf:'flex-start',
  },
  ddayDayText: {
    fontSize:70,
    alignSelf:'center',
    fontStyle:'normal',
  },
  chatView: {
    backgroundColor:'lightgreen',
    flex:6,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:30,
  },
  chatLogView: {
    backgroundColor: 'powderblue',
    borderWidth:1,
    borderColor:'steelblue',
    borderRadius:10,
    height:'80%',
    width:'90%',
  },
  chatInputBarView: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    margin:10,
  },
  chatInputView: {
    backgroundColor:'lightyellow',
    borderRadius:10,
    height: 40,
    width:'75%',
    marginRight:5,
    alignSelf:'center',
    fontSize:10,
  },
  chatButtonView: {
    backgroundColor:'lime',
    borderRadius:10,
    borderWidth:1,
    borderColor:'green',
    height:40,
    width:'20%',
    marginLeft:5,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
});

const settingIconUri = 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-gear-2.png';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(2027, 0, 3),
      title: 'PH.D'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingView}>
          <TouchableOpacity style={styles.settingIconTouch}>
            <Image
              source={{uri:settingIconUri}}
              style={styles.settingIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ddayView}>
          <Text style={styles.ddayDateText}>
            {this.state.date.toDateString()}
          </Text>
          <Text style={styles.ddayEventText}>
            {this.state.title}까지
          </Text>
          <Text style={styles.ddayDayText}>
            {}일
          </Text>
        </View>
        <View style={styles.chatView}>
          <View style={styles.chatLogView}>
            <ScrollView>
              <Text>
                {'히히 못가'}
              </Text>
            </ScrollView>
          </View>
          <View style={styles.chatInputBarView}>
            <TextInput style={styles.chatInputView}/>
            <TouchableOpacity style={styles.chatButtonView}>
              <Text>
                논문 제출
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
};