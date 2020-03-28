import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image
} from 'react-native'
import { scaleSizeW, scaleSizeH, setSpText } from '@/util/screen';


export default ({ navigation }) => {
  const [username, setName] = useState('');
  const [password, setPwd] = useState('');


  const onSubmit = () => {
    
    navigation.navigate('Tab');
  }

  const onForget = () => {

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', position: 'relative' }}>
      <Image style={styles.backgroundImage} resizeMode='cover' source={{
        uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3719114522,1223307235&fm=11&gp=0.jpg',
      }} >
      </Image>
      <View style={styles.mask}></View>

      <Text style={styles.title}>MACVON</Text>

      <View style={{ marginTop: scaleSizeH(140) }}>
        <TextInput
          style={styles.input}
          placeholder="E-Mail"
          onChangeText={text => setName(text)}
          defaultValue={username}
          placeholderTextColor={'#fff'}
        />

        <TextInput
          style={styles.input_pwd}
          placeholder="Password"
          onChangeText={text => setPwd(text)}
          defaultValue={password}
          placeholderTextColor={'#fff'}
          secureTextEntry
          returnKeyType={'done'}
        />
        <TouchableOpacity
          onPress={onForget}
          style={styles.forget}
        >
          <Text style={styles.forget_text}> Forgot password? </Text>
        </TouchableOpacity>


      </View>
      <TouchableOpacity
        onPress={onSubmit}
        style={styles.submit}
      >
        <Text style={styles.login}> LOGIN </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: null,
    width: null,
    zIndex: -1,
  },
  mask: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.7
  },
  title: {
    marginTop: scaleSizeH(300),
    fontSize: setSpText(80),
    color: '#ffffff',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  input: {
    width: scaleSizeW(540),
    height: scaleSizeH(60),
    marginBottom: scaleSizeH(60),
    color: '#fff',
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    fontSize: setSpText(32)
  },
  input_pwd: {
    width: scaleSizeW(540),
    height: scaleSizeH(60),
    marginBottom: scaleSizeH(20),
    color: '#fff',
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    fontSize: setSpText(32)
  },
  submit: {
    width: scaleSizeW(400),
    height: scaleSizeH(90),
    backgroundColor: '#fff',
    borderRadius: scaleSizeH(45),
    alignItems: "center",
    justifyContent: 'center',
    marginTop: scaleSizeH(120)
  },
  forget: {
    alignItems: 'flex-end',

  },
  login: {
    fontSize: setSpText(32),
    color: '#000000'
  },
  forget_text: {
    color: '#AAAAAA',
    fontSize: setSpText(24)
  }
})