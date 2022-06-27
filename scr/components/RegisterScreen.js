import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StatusBar,
  Alert,
  TouchableOpacity,
} from 'react-native';

import React, {useRef, useState} from 'react';
import OrLine from './OrLine';
import LoginGg from './LoginGg';
import LoginFb from './LoginFb';
import PressableText from './PressableText';
import CustomizedButton from './CustomizedButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const [userFullName, setUserFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordAgain, setUserPasswordAgain] = useState('');
  const [userId, setUserId] = useState(randomId);
  const [userData, setUserData] = useState([]);
  var randomId = Math.floor(Math.random() * 1000);
  var newUser = {
    userId: userId,
    userFullName: userFullName,
    userEmail: userEmail,
    userPassword: userPassword,
    userData: [],
  };
  var userDATA = [];
  const storeNewUser = async () => {
    try {
      let user = {
        userId: userId,
        userFullName: userFullName,
        userEmail: userEmail,
        userPassword: userPassword,
        userData: [],
      };
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem('User', jsonValue);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const getUserData = async () => {
    try {
      const jsonValueString = await AsyncStorage.getItem('User');
      const value = JSON.parse(jsonValueString);
      console.log(value);
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  const navigation = useNavigation();
  const txtEmail = useRef(null);
  const txtPassword = useRef(null);
  const txtPasswordAgain = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.Os === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.topContent}>
              <Image
                style={styles.icon}
                source={require('../assets/icon/Icon.png')}
              />
              <Text style={styles.text}>Let's Get Started</Text>
              <Text style={styles.text1}>Create an new account</Text>
            </View>
            <View>
              <View style={styles.textInputContainer}>
                <Image
                  source={require('../assets/icon/User.png')}
                  style={styles.textInputIcon}
                />
                <TextInput
                  placeholder={'Your Full Name'}
                  returnKeyType="next"
                  autoCorrect={false}
                  value={userFullName}
                  onChangeText={value => {
                    setUserFullName(value);
                  }}
                  onSubmitEditing={() => {
                    txtEmail.current.focus();
                  }}
                />
              </View>
              <View style={styles.textInputContainer}>
                <Image
                  source={require('../assets/icon/Email.png')}
                  style={styles.textInputIcon}
                />
                <TextInput
                  placeholder={'Your Email'}
                  autoCorrect={false}
                  returnKeyType="next"
                  keyboardType="email-address"
                  ref={txtEmail}
                  value={userEmail}
                  onChangeText={value => {
                    setUserEmail(value);
                  }}
                  onSubmitEditing={() => {
                    txtPassword.current.focus();
                  }}
                />
              </View>
              <View style={styles.textInputContainer}>
                <Image
                  source={require('../assets/icon/Lock.png')}
                  style={styles.textInputIcon}
                />
                <TextInput
                  placeholder={'Password'}
                  autoCorrect={false}
                  returnKeyType="next"
                  secureTextEntry
                  ref={txtPassword}
                  value={userPassword}
                  onChangeText={value => {
                    setUserPassword(value);
                  }}
                  onSubmitEditing={() => {
                    txtPasswordAgain.current.focus();
                  }}
                />
              </View>
              <View style={styles.textInputContainer}>
                <Image
                  source={require('../assets/icon/Lock.png')}
                  style={styles.textInputIcon}
                />
                <TextInput
                  placeholder={'Password Again'}
                  autoCorrect={false}
                  returnKeyType="go"
                  secureTextEntry
                  value={userPasswordAgain}
                  onChangeText={value => {
                    setUserPasswordAgain(value);
                  }}
                  onSubmitEditing={() => {
                    userPasswordAgain != userPassword
                      ? Alert.alert('Your password do not match')
                      : undefined;
                  }}
                  ref={txtPasswordAgain}
                />
              </View>
            </View>
            <CustomizedButton
              title="Sign Up"
              onPress={() => {
                storeNewUser('User', newUser);
                Alert.alert('Sign Up Successful');
              }}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => {
                getUserData('User');
              }}>
              <Text>Get</Text>
            </TouchableOpacity>
            <PressableText
              titleLeft="Have an account? "
              titleRightBlue="Sign In"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  topContent: {
    paddingTop: 50,
    alignItems: 'center',
  },
  text: {
    marginVertical: 10,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text1: {
    marginBottom: 20,
    fontSize: 12,
    color: '#9098B1',
  },
  icon: {
    width: 72,
    height: 72,
  },
  textInputContainer: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInputIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
  },
});
