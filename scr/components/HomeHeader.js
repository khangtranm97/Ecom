import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import SearchDropdown from './SearchDropdown';

const WIDTH = Dimensions.get('window').width;
const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <TouchableOpacity
            style={styles.searchBox}
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Image
              style={styles.icon16}
              source={require('../assets/icon/Search.png')}
            />
            <Text style={{color: '#9098B1'}}>Search</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorite Product')}>
          <Image
            style={styles.icon}
            source={require('../assets/icon/Heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image
            style={styles.icon}
            source={require('../assets/icon/Notification.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: WIDTH,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
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
  modalContainer: {
    flex: 1,
    marginTop: 50,
  },
});
