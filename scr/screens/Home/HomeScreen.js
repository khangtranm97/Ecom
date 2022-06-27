import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import React from 'react';

import HomeCarousel from '../Home/components/HomeCarousel';
import HomeCategory from '../Home/components/HomeCategory';
import HomeFlashSale from '../Home/components/HomeFlashSale';
import HomeMegaSale from '../Home/components/HomeMegaSale';
import HomeRecommendedImage from '../Home/components/HomeRecommendedImage';
import HomeRecommendedProduct from '../Home/components/HomeRecommendedProduct';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeCarousel />
        <HomeCategory />
        <HomeFlashSale />
        <HomeMegaSale />
        <HomeRecommendedImage />
        <HomeRecommendedProduct />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,

  },
});
