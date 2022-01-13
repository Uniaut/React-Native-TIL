import React from 'react';
import {
  Image,
  ImageBackground,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlightBase,
  Dimensions
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Setting from './Setting.js';


const settingIconUri = 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-gear-2.png';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
      title: '수능',
      text: '',
      log: [],
      settingModal: false,
    }
  }

  async componentDidMount() {
    try {
      const savedString = await AsyncStorage.getItem('@saved-data');
      if (savedString == null) {
        this.setState(
          {
            date: new Date(),
            title: '수능',
          }
        );
      } else {
        const saved = JSON.parse(savedString);
        this.setState(
          {
            date: new Date(saved.date),
            title: saved.title,
          }
        );
      }
      const chatLogString = await AsyncStorage.getItem('@chat');
      if (chatLogString == null) {
        this.setState({
          log: [],
        });
      } else {
        const chatLog = JSON.parse(chatLogString);
        this.setState({
          log: chatLog,
        });
      }
    } catch(e) {
      console.error(e);
    }
  }

  toggleSettingModal() {
    this.setState({settingModal: !this.state.settingModal})
  }

  async settingHandler(changedTitle, changedDate) {
    this.setState({
      title: changedTitle,
      date: changedDate
    });

    try {
      const toSave = {
        date: changedDate,
        title: changedTitle,
      };
      const savedString = JSON.stringify(toSave);
      await AsyncStorage.setItem('@saved-data', savedString);
    } catch (e) {
      console.error(e);
    }

    this.toggleSettingModal();
  }

  chatAdd () {
    const sentTime = new Date().toDateString();
    const log_item = sentTime.toString() + ' : ' + this.state.text;
    this.setState({
      log: [...this.state.log, log_item],
      text: '',
    }, async () => {
      const chatLogString = JSON.stringify(this.state.log)
      await AsyncStorage.setItem('@chat', chatLogString);
    });
  }

  dateText(){
    return this.state.date.getFullYear() + '년 ' + (this.state.date.getMonth() + 1) + '월 ' + this.state.date.getDate() + '일'
  }

  dateDeltaText(){
    const dist = new Date().getTime() - this.state.date.getTime();
    console.log(new Date(), this.state.dday, dist / (1000 * 60 * 60 * 24) )
    const delta = Math.floor(dist / (1000 * 60 * 60 * 24))
    if (delta < 0) {
      return 'D-'+ Math.abs(delta);
    } else if (delta > 0) {
      return 'D+'+ Math.abs(delta);
    } else {
      return 'D-DAY'
    }
  }

  logText() {
    return this.state.log.join('\n');
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./resources/bonobono.jpg')}
        />
          <View style={styles.settingView}>
            <TouchableOpacity 
              style={styles.settingIconTouch}
              onPress={() => {this.toggleSettingModal()}}
            >
              <Image
                source={{uri:settingIconUri}}
                style={styles.settingIcon}
                />
            </TouchableOpacity>
          </View>
          <View style={styles.ddayView}>
            <Text style={styles.ddayDateText}>
              {this.dateText()}
            </Text>
            <Text style={styles.ddayEventText}>
              {this.state.title}까지
            </Text>
            <Text style={styles.ddayDayText}>
              {this.dateDeltaText()}
            </Text>
          </View>
          <View style={styles.chatView}>
            <View style={styles.chatLogView}>
              <ScrollView>
                <Text style={styles.chatLogText}>
                  {this.logText()}
                </Text>
              </ScrollView>
            </View>
            <View style={styles.chatInputBarView}>
              <TextInput 
                style={styles.chatInputView}
                placeholder='당신의 생각을 기록하세요!'
                value={this.state.text}
                onChangeText={(text)=>{this.setState({text:text})}}
              />
              <TouchableOpacity 
                style={styles.chatButtonView}
                onPress={()=>{this.chatAdd()}}
              >
                <Text>
                  전송
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {this.state.settingModal ? 
            <Setting
              title={this.state.title}
              date={this.state.date}
              modalHandler={()=>{this.toggleSettingModal()}}
              settingHandler={(chTitle, chDate)=>{this.settingHandler(chTitle, chDate)}}
            />
          : <></>}
        </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height:'100%',
    width:'100%',
    flex:1,
  },
  backgroundImage: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  settingView: {
    height:70,
    justifyContent:'center',
    alignItems:'flex-end',
  },
  settingIconTouch: {
    margin:10,
  },
  settingIcon: {
    height:50,
    width:50,
  },
  ddayView: {
    backgroundColor:'rgba(255, 255, 100, 0.4)',
    height:200,
    justifyContent:'center',
    paddingHorizontal:20,
    margin:30,
    borderRadius:30,
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
    flex:6,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:30,
  },
  chatLogView: {
    flex: 1,
    backgroundColor: 'powderblue',
    borderWidth:1,
    borderColor:'steelblue',
    borderRadius:10,
    width:'90%',
  },
  chatLogText: {
    fontSize: 15,
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