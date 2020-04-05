/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Whatsapp, TextMessage, ShareMobile} from './components/Main';

export default function App(props) {
  console.disableYellowBox = true;
  const [view, setview] = useState(<Whatsapp />);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.container}>
        <View style={[styles.touchableopacitystyle, {marginTop: 20}]}>
          <TouchableOpacity
            onPress={() => setview(<Whatsapp />)}
            style={[
              styles.loginBtn,
              {backgroundColor: '#138D75', marginLeft: 10},
            ]}>
            <Text style={styles.loginText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setview(<TextMessage />)}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setview(<ShareMobile />)}
            style={[
              styles.loginBtn,
              {backgroundColor: '#138D75', marginRight: 10},
            ]}>
            <Text style={styles.loginText}>Share</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.logo}>Send Message</Text>
        {view}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
    textAlign: 'center',
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
    width: '30%',
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
  buttonstyle: {
    width: '80%',
  },
  touchableopacitystyle: {
    backgroundColor: '#003f5c',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
