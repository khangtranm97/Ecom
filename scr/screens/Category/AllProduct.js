import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import actions from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

import {
  shoesData,
  tshirtData,
  shirtData,
  pantsData,
  bagData,
  underwearData,
} from '../../data/productData';


const WIDTH = Dimensions.get('window').width;

const AllProduct = ({navigation, route}) => {
  var DATA = [];
  const temp = route.params.data.name.toLowerCase();

  switch (temp) {
    case 'shirt':
      DATA = shirtData;
      break;
    case 'tshirt':
      DATA = tshirtData;
      break;
    case 'pants':
      DATA = pantsData;
      break;
    case 'shoes':
      DATA = shoesData;
      break;
    case 'bag':
      DATA = bagData;
      break;
    case 'underwear':
      DATA = underwearData;
      break;
    default:
      return null;
  }

  const dispatch = useDispatch();
  const getCartItem = useSelector(state => state.getCartItem);
  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          {
            width: (WIDTH - 60) / 2,
            height: 300,
            marginTop: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#EBF0FF',
            padding: 5,
          },
          item.id % 2 === 0 ? {undefined} : {marginRight: 20},
        ]}>
        <Pressable
          onPress={() => navigation.navigate('Product Detail', {data: item})}>
          <Image source={item.url[0]} style={styles.productImage} />
        </Pressable>
        <View style={{marginVertical: 5, height: 80}}>
          <Pressable
            onPress={() => navigation.navigate('Product Detail', {data: item})}>
            <Text style={styles.brandName}>{item.brand}</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Product Detail', {data: item})}>
            <Text style={styles.productName}>{item.name}</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.productPrice}>{item.stockPrice} $</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              dispatch({
                type: 'ADD_TO_CART',
                payload: {
                  id: item.id,
                  name: item.name,
                  url: item.url[0],
                  brandname: item.brand,
                  shippingcost: item.shippingCost,
                  price: item.stockPrice,
                },
              });
            }}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
};

export default AllProduct;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  productImage: {
    borderRadius: 5,
    width: 133,
    height: 133,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  brandName: {
    height: 35,
  },
  productName: {
    color: '#223263',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    color: '#40BFFF',
    fontWeight: 'bold',
  },
  button: {
    width: 120,
    height: 20,
    backgroundColor: '#40BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
