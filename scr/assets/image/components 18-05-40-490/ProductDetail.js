import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ProductDetailCarousel from './ProductDetailCarousel';
import ProductDetailInfo from './ProductDetailInfo';
import RecommendedProduct from './RecommendedProduct';
import {shoesData, shirtData, tshirtData} from '../data/productData';

const ProductDetail = ({navigation, route}) => {
  const productData = route.params.data;
  function getType(data) {
    switch (data.type) {
      case 'shoes':
        return shoesData;
        break;
      case 'tshirt':
        return tshirtData;
        break;
      case 'shirt':
        return shirtData;
        break;
    }
  }
  return (
    <ScrollView style={styles.container}>
      <ProductDetailCarousel data={productData} />
      <ProductDetailInfo data={productData} />
      <RecommendedProduct data={getType(productData)} />
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
