import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CartHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#EBF0FF',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 20,
  },
});
