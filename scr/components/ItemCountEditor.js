import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';

const ItemCountEditor = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../assets/icon/Minus.png')}
        />
      </TouchableOpacity>
      <View style={styles.textInput}>
        <TextInput>1</TextInput>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../assets/icon/Plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ItemCountEditor;
const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 24,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  icon: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    marginVertical: 4,
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
    width: 40,
    backgroundColor: '#EBF0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
