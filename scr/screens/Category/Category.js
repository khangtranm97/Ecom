import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {productList} from '../../data/productData.js';

const DATA = productList;

const Category = () => {
  const navigation = useNavigation();

  const Item = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('All Product', {data: item})}>
      <View style={styles.flexcontainer}>
        <Image source={item.url} style={styles.icon} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={Item} keyExtractor={item => item.id} />
    </View>
  );
};
export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  flexcontainer: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
  },
  icon: {
    tintColor: '#40BFFF',
    marginHorizontal: 20,
    height: 24,
    width: 24,
  },
  text: {
    fontWeight: 'bold',
    color: '#223263',
  },
});
