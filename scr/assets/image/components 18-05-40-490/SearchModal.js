import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const SearchModal = ({visible}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  return (
    <View>
  
    </View>
  );
};

export default SearchModal;

const styles = StyleSheet.create({

  searchBox: {
    borderWidth: 1,
    height: 48,
    width: Dimensions.get('window').width - 150,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon16: {
    marginHorizontal: 16,
  },
});
