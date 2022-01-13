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
  TouchableHighlightBase
} from 'react-native';

import Setting from './Setting.js';



const settingIconUri = 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-gear-2.png';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
      title: '수능',
      log: '',
      settingModal: false,
    }
  }

  toggleSettingModal() {
    this.setState({settingModal: !this.state.settingModal})
  }

  settingHandler(changedTitle, changedDate) {
    this.setState({
      title: changedTitle,
      date: changedDate
    });
    this.toggleSettingModal();
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

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('./resources/bonobono.jpg')}
        >
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
                  {this.state.log}
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
          
          {this.state.settingModal ? 
            <Setting
              title={this.state.title}
              date={this.state.date}
              modalHandler={()=>{this.toggleSettingModal()}}
              settingHandler={(chTitle, chDate)=>{this.settingHandler(chTitle, chDate)}}
            />
          : <></>}
        
        </ImageBackground>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  settingView: {
    height:70,
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
    backgroundColor:'rgba(100, 255, 100, 0.4)',
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
    fontSize: 50,
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