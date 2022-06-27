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
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {tshirtData} from '../../../data/productData';

const WIDTH = Dimensions.get('window').width;
const DATA = tshirtData;

const HomeRecommendedProduct = () => {
  const navigation = useNavigation();
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
          <Pressable style={styles.button}>
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
  r;
};

export default HomeRecommendedProduct;

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
