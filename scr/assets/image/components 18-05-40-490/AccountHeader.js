import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const AccountHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account</Text>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#EBF0FF',
  },
  header: {
    fontWeight: 'bold',
    color: '#223263',
    marginHorizontal: 20,
    marginVertical: 30,
  },
});
