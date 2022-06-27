import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

const NumberIcon = ({productnumber}) => {
  return (
    <View
      style={{
        backgroundColor: productnumber > 0 ? '#FB7181' : '#FFFFFF',
        zIndex: productnumber > 0 ? 100 : 0,
        borderRadius: 12,
        position: 'absolute',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        width: 20,
        height: 20,
        left: 12,
        bottom: 30,
        justifyContent: 'center',
      }}>
      <Text style={styles.content}>{productnumber}</Text>
    </View>
  );
};

export default NumberIcon;

const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  },
});
