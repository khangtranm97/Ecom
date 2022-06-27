import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';

const PasswordInput = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon/Lock.png')} style={styles.icon} />
      <TextInput placeholder={'Password'} />
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
  },
});
