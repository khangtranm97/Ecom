import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const PressableText = ({titleLeft, titleRightBlue, onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.leftText}>{titleLeft}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.rightText}>{titleRightBlue}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PressableText;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  leftText: {
    fontSize: 12,
    color: '#9098B1',
  },
  rightText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#40BFFF',
  },
});
