import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  rateBox: {
    height: 50,
    width: 62,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  rateStar: {
    width: 16,
    height: 16,
    margin: 5,
  },
  rateNumber: {
    color: '#9098B1',
    fontSize: 12,
  },
  rateBoxAll: {
    height: 50,
    width: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: 'rgba(64,191, 255, 0.2)',
  },
});

const ratePoint = [
  {
    id: 1,
    rate: 'All Review',
    style: styles.rateBoxAll,
  },
  {
    id: 2,
    rate: 1,
    style: styles.rateBox,
  },
  {
    id: 3,
    rate: 2,
    style: styles.rateBox,
  },
  {
    id: 4,
    rate: 3,
    style: styles.rateBox,
  },
  {
    id: 5,
    rate: 4,
    style: styles.rateBox,
  },
  {
    id: 6,
    rate: 5,
    style: styles.rateBox,
  },
];
const Item = ({item}) => (
  <View style={item.style}>
    <Image
      source={require('../../../assets/icon/Star.png')}
      style={styles.rateStar}
    />
    <Text style={styles.rateNumber}>{item.rate}</Text>
  </View>
);

const SortReviewByStar = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.rateBoxAll}>
        <Image
          source={require('../../../assets/icon/Star.png')}
          style={styles.rateStar}
        />
        <Text style={styles.rateNumber}>{ratePoint[0].id}</Text>
      </View> */}
      <FlatList
        data={ratePoint}
        renderItem={Item}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Hide scroll bar
      />
    </View>
  );
};

export default SortReviewByStar;
