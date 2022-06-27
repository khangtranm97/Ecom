import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OfferHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Offer</Text>
    </View>
  );
};

export default OfferHeader;

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
    color: '#223263',
  },
});
