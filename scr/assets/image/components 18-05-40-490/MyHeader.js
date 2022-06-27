import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import React, {useState} from 'react';

const MyHeader = ({title, leftButton, homeScreen}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>{homeScreen}</View>
        <View style={styles.headerStyle}>
          <View>{leftButton}</View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    height: 60,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    color: '#223263',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerStyle: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
