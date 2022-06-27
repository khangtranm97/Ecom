import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    text: 'FS - QUILTED MAXI CROS...',
    url: require('../../../assets/image/ProductImage.png'),
    discountPrice: '$199',
    stockPrice: '$299',
    discountPercentage: '20% Off',
  },
  {
    id: 2,
    text: 'FS - Nike Air Max 270 React...',
    url: require('../../../assets/image/ProductImage1.png'),
    discountPrice: '$199',
    stockPrice: '$299',
    discountPercentage: '20% Off',
  },
  {
    id: 3,
    text: 'FS - Nike Air Max 270 React...',
    url: require('../../../assets/image/ProductImage2.png'),
    discountPrice: '$199',
    stockPrice: '$299',
    discountPercentage: '20% Off',
  },
];

const renderItem = ({item}) => (
  <View style={styles.discountProCont}>
    <View style={styles.marginContent}>
      <Image style={styles.discountProImg} source={item.url} />
      <View style={styles.space}>
        <Text style={styles.proName}>{item.text}</Text>
        <Text style={styles.proPrice}>{item.discountPrice}</Text>
        <View style={styles.discountFooter}>
          <Text style={styles.stockprice}>{item.stockPrice}</Text>
          <Text style={styles.discountpercent}>{item.discountPercentage}</Text>
        </View>
      </View>
    </View>
  </View>
);

const PromotionItemList = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryText}>You Might Also Like</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Hide scroll bar
      />
    </SafeAreaView>
  );
};

export default PromotionItemList;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
  },
  categoryHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#223263',
  },
  categoryTouch: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#40BFFF',
  },
  discountProCont: {
    height: 238,
    width: 141,
    borderColor: '#EBF0FF',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  marginContent: {
    margin: (141 - 109) / 2,
  },
  discountProImg: {
    width: 109,
    height: 109,
    backgroundColor: '#EBF0FF',
    borderRadius: 5,
  },
  proName: {
    color: '#223263',
    fontWeight: 'bold',
  },
  proPrice: {
    color: '#40BFFF',
    fontWeight: 'bold',
  },
  discountFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space: {
    justifyContent: 'space-between',
    marginTop: 5,
    height: 92,
    width: 109,
  },
  discountpercent: {
    color: '#FB7181',
    fontWeight: 'bold',
    fontSize: 10,
  },
  stockprice: {
    fontSize: 10,
    color: '#9098B1',
  },
});
