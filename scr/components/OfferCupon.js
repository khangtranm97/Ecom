import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const OfferCupon = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>Use “MEGSL” Cupon For Get 90%off</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OfferCupon;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    height: 80,
    alignSelf: 'center',
    backgroundColor: '#40BFFF',
    borderRadius: 5,
    marginVertical: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    maxWidth: 212,
    margin: 16,
    lineHeight: 24,
  },
});
