import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const AddImageButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={require('../../../assets/icon/Plus.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default AddImageButton;

const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 72,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
