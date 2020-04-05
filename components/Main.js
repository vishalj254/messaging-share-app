/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Linking,
  TextInput,
  Alert,
  TouchableOpacity,
  StatusBar,
  Share,
} from 'react-native';
import SendSMS from 'react-native-sms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginBtn: {
    width: '90%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 20,
    color: 'white',
  },
});

function Whatsapp() {
  const [mobile, setmobile] = useState('');
  const [msg, setmsg] = useState('Hey!');

  const sendOnWhatsApp = () => {
    if (mobile !== '') {
      if (msg !== '') {
        let url = 'whatsapp://send?text=' + msg + '&phone=91' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            Alert.alert('Make sure Whatsapp installed on your device');
          });
      } else {
        Alert.alert('Please insert message to send');
      }
    } else {
      Alert.alert('Please insert mobile no');
    }
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Text
        style={{
          textAlign: 'center',
          padding: 10,
          fontSize: 30,
          fontWeight: 'bold',
          color: '#fb5b5a',
        }}>
        WhatsApp
      </Text>
      <View style={{marginLeft: '10%'}}>
        <View style={[styles.inputView, {width: '90%'}]}>
          <TextInput
            style={[styles.inputText]}
            placeholder="Mobile No."
            value={mobile}
            keyboardType={'number-pad'}
            placeholderTextColor="#003f5c"
            onChangeText={text => setmobile(text)}
          />
        </View>
        <View style={[styles.inputView, {width: '90%'}]}>
          <TextInput
            style={styles.inputText}
            placeholder="Message"
            value={msg}
            placeholderTextColor="#003f5c"
            onChangeText={text => setmsg(text)}
          />
        </View>
        <TouchableOpacity
          onPress={sendOnWhatsApp}
          style={[styles.loginBtn, {backgroundColor: '#4FCE5D'}]}>
          <Text style={styles.loginText}>Send</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function TextMessage() {
  const [mobile, setmobile] = useState('');
  const [msg, setmsg] = useState('Hey!');

  const sendOnText = () => {
    if (mobile !== '' && msg !== '') {
      SendSMS.send(
        {
          //Message body
          body: `${msg}`,
          //Recipients Number
          recipients: [`${mobile}`],
          //An array of types that would trigger a "completed" response when using android
          successTypes: ['sent', 'queued'],
        },
        (completed, cancelled, error) => {
          if (completed) {
            setmobile();
            setmsg('Hey!');
            console.log('SMS Sent Completed');
            Alert.alert('SMS Sent Completed');
          } else if (cancelled) {
            console.log('SMS Sent Cancelled');
          } else if (error) {
            setmobile();
            setmsg('Hey!');
            console.log('Some error occured');
            Alert.alert('Some error occured');
          }
        },
      );
    } else {
      Alert.alert('Please Fill all fields...');
    }
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Text
        style={{
          textAlign: 'center',
          padding: 10,
          fontSize: 30,
          fontWeight: 'bold',
          color: '#fb5b5a',
        }}>
        Text Message
      </Text>
      <View style={{marginLeft: '10%'}}>
        <View style={[styles.inputView, {width: '90%'}]}>
          <TextInput
            style={[styles.inputText]}
            placeholder="Mobile No."
            value={mobile}
            keyboardType={'number-pad'}
            placeholderTextColor="#003f5c"
            onChangeText={text => setmobile(text)}
          />
        </View>
        <View style={[styles.inputView, {width: '90%'}]}>
          <TextInput
            style={styles.inputText}
            placeholder="Message"
            value={msg}
            placeholderTextColor="#003f5c"
            onChangeText={text => setmsg(text)}
          />
        </View>
        <TouchableOpacity
          onPress={sendOnText}
          style={[styles.loginBtn, {backgroundColor: '#138D75'}]}>
          <Text style={styles.loginText}>Send Directly</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function ShareMobile() {
  const [msg, setmsg] = useState('Hey!');

  const onShare = async () => {
    if (msg !== '') {
      try {
        const result = await Share.share({
          message: msg,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    } else {
      Alert.alert('Please Enter Msg...');
    }
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Text
        style={{
          textAlign: 'center',
          padding: 10,
          fontSize: 30,
          fontWeight: 'bold',
          color: '#fb5b5a',
        }}>
        Share
      </Text>
      <View style={{marginLeft: '10%'}}>
        <View style={[styles.inputView, {width: '90%'}]}>
          <TextInput
            style={styles.inputText}
            placeholder="Message"
            value={msg}
            placeholderTextColor="#003f5c"
            onChangeText={text => setmsg(text)}
          />
        </View>
        <TouchableOpacity
          onPress={onShare}
          style={[styles.loginBtn, {backgroundColor: '#138D75'}]}>
          <Text style={styles.loginText}>Share</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export {Whatsapp, TextMessage, ShareMobile};
