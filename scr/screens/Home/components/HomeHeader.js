import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import React, {useState} from 'react';

const HomeHeader = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchBox}>
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
            style={styles.icon}
            source={require('../../../assets/icon/Heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image
            style={styles.icon}
            source={require('../../../assets/icon/Notification.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchBar: {
    height: 48,
    width: '70%',
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
});
