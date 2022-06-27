import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const OrLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>OR</Text>
      <View style={styles.line}></View>
    </View>
  );
};

export default OrLine;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
    width: (Dimensions.get('window').width - 40) / 2 - 20,
    marginHorizontal: 10,
  },
  text: {
    color: '#9098B1',
    fontSize: 14,
  },
});
