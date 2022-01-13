import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-date-picker';


export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      date: props.date,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          activeOpacity={1}
          onPress={()=>{this.props.modalHandler()}}
          style={styles.background}
        />
        <View style={styles.modal}>
          <Text style={styles.titleText}>설정</Text>
          <TextInput
            value={this.state.title}
            onChangeText={(changedText)=>{this.setState({title: changedText})}}
            style={styles.titleInput}
            placeholder={'이벤트 내용을 입력해주세요'}
          />
          <DatePicker
            date={this.state.date}
            onDateChange={(chDate)=>{this.setState({date: chDate})}}
            mode="date"
          />
          <TouchableOpacity
            onPress={()=>{this.props.settingHandler(this.state.title, this.state.date)}}
          >
            <Text style={styles.doneText}>
              변경
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  background: {
    position: 'absolute',
    height:'100%',
    width:'100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  titleInput: {
    backgroundColor: 'white',
    marginBottom: 20,
    width: '75%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'blue',
  },  
  ddayInput: {
    backgroundColor: 'white',
    marginBottom: 20,
    width: '75%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'blue'
  },
  modal: {
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '50%',
    backgroundColor: 'white',

  },
  doneText: {
    color: 'rgb(1, 100, 255)',
    fontSize: 15,
    margin: 10,
  },
  titleText: {
    fontSize: 18,
    margin: 10,
  }
});