import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';


import OfferCupon from './components/OfferCupon';
import OfferCountDown from './components/OfferCountDown';
import OfferPromotion from './components/OfferPromotion';

const OfferScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <OfferCupon />
        <OfferCountDown />
        <OfferPromotion />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
