import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchbox}>
            <Image
              style={styles.icon16}
              source={require('../../../assets/icon/Search.png')}
            />
            <TextInput
              style={styles.search}
              placeholder="Search Product"
              placeholderTextColor="#EBF0FF"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('FavoriteProduct')}>
            <Image
              style={styles.icon24}
              source={require('../../../assets/icon/Heart.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
              style={styles.icon24}
              source={require('../../../assets/icon/Notification.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#EBF0FF',
  },
  header: {
    width: Dimensions.get('window').width - 40,
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
  },
  search: {},
  searchbox: {
    borderWidth: 1,
    height: 50,
    width: Dimensions.get('window').width - 150,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon16: {
    marginHorizontal: 16,
  },
  icon24: {
    marginLeft: 24,
  },
});
