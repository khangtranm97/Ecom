import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import ProductCarousel from './components/ProductCarousel';
import ProductInfo from './components/ProductInfo';
import ProductReview from './components/ProductReview';
import PromotionItemList from './components/PromotionItemList';
import CustomizedButton from '../../components/CustomizedButton';


const ProductDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <ProductCarousel />
      <ProductInfo />
      <ProductReview />
      <PromotionItemList />
      <CustomizedButton title="Add To Cart" />
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
