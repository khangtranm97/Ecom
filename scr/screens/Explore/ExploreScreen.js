import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import MenCategory from './components/MenCategory';
import WomenCategory from './components/WomenCategory';

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MenCategory />
        <WomenCategory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    flex: 1,
  },
});
