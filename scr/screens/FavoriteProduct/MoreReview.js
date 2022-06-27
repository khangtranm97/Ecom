import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SortReviewByStar from './components/SortReviewByStar';
import Review from './components/Review';
import CustomizedButton from '../../components/CustomizedButton.js';
import {useNavigation} from '@react-navigation/native';

const MoreReview = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <SortReviewByStar />
      <Review />
      <CustomizedButton
        title="Write Review"
        onPress={() => navigation.navigate('Write Review')}
      />
    </ScrollView>
  );
};

export default MoreReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
});
