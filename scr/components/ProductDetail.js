import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ProductDetailCarousel from './ProductDetailCarousel';
import ProductDetailInfo from './ProductDetailInfo';
import RecommendedProduct from './RecommendedProduct';


const ProductDetail = ({navigation, route}) => {

  return (
    <ScrollView style={styles.container}>
      <ProductDetailCarousel data={route.params.data} />
      <ProductDetailInfo data={route.params.data} />
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
