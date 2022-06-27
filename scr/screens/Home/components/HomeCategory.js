import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {productList} from '../../../data/productData.js';

const item = productList;

const HomeCategory = ({}) => {
  const navigation = useNavigation();
  const renderItem = React.useCallback(({item, index}) => {
    const onPress = () => {
      navigation.navigate('All Product', {data: item});
    };
    return (
      <View style={styles.categoryIcon}>
        <View style={styles.rectangle}>
          <Image source={require('../../../assets/icon/Circle.png')} />
          <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <Image style={styles.productIcon} source={item.url} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.iconText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryText}>Category </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Category')}>
          <Text style={styles.categoryTouch}>More Category</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Hide scroll bar
      />
    </SafeAreaView>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
  },
  categoryHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#223263',
  },
  categoryTouch: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#40BFFF',
  },
  categoryIcon: {
    marginVertical: 10,
    width: 70,
    height: 108,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  rectangle: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productIcon: {
    position: 'absolute',
  },
  iconText: {
    marginTop: 7,
    fontSize: 10,
    color: '#9098B1',
  },
  touchable: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
