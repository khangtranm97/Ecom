import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from './LoginScreen';

const SplashScreen = () => {

  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('Login');
  }, 300);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Login');
      }}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image
          style={styles.icon}
          source={require('../assets/icon/IconWhite.png')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40BFFF',
  },
  icons: {},
});
