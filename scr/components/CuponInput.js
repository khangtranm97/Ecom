import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';

const CuponInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Cupon Code" style={styles.textInput} />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CuponInput;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 87,
    backgroundColor: '#40BFFF',
    justifyContent: 'center',
  },
  textInput: {
    marginHorizontal: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});
