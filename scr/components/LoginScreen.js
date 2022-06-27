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
} from 'react-native';

import React, {useRef, useState} from 'react';
import OrLine from './OrLine';
import LoginGg from './LoginGg';
import LoginFb from './LoginFb';
import PressableText from './PressableText';
import CustomizedButton from './CustomizedButton';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const txtPassword = useRef(null);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
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
              <Text style={styles.text}>Welcome to E-com</Text>
              <Text style={styles.text1}>Sign in to continue</Text>
            </View>
            <View>
              <View style={styles.textInputContainer}>
                <Image
                  source={require('../assets/icon/Email.png')}
                  style={styles.textInputIcon}
                />
                <TextInput
                  placeholder={'Your Email'}
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  value={userEmail}
                  onChangeText={value => {
                    setUserEmail(value);
                  }}
                  onSubmitEditing={() => {
                    if (userEmail.includes('@') && userEmail.includes('.')) {
                      txtPassword.current.focus();
                    } else {
                      Alert.alert('Your email is invalid !');
                      setUserEmail('');
                    }
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
                  returnKeyType="go"
                  secureTextEntry={true}
                  value={userPassword}
                  onChangeText={value => {
                    setUserPassword(value);
                  }}
                  ref={txtPassword}
                />
              </View>
              <CustomizedButton
                title="Sign In"
                onPress={() => {
                  navigation.navigate('Bottom Tab');
                }}
              />
              <OrLine />
              <LoginGg
                onPress={() => {
                  Alert.alert('Sorry we are not ready now!');
                }}
              />
              <LoginFb
                onPress={() => {
                  Alert.alert('Sorry we are not ready now!');
                }}
              />
              <PressableText titleRightBlue="Forgot Password?" />
              <PressableText
                titleLeft="Don't have an account? "
                titleRightBlue="Register"
                onPress={() => {
                  navigation.navigate('Register');
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
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
    marginVertical: 20,
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
    width: '90%',
    alignSelf: 'center',
  },
  textInputIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
  },
});
