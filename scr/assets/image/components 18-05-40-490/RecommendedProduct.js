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

const RecommendedProduct = ({data}) => {
  const DATA = data;
  const navigation = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.discountProCont}>
        <View style={styles.marginContent}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product Detail', {data: item})}>
            <Image style={styles.discountProImg} source={item.url[0]} />
          </TouchableOpacity>
          <View style={styles.space}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Product Detail', {data: item})
              }>
              <Text style={styles.brandName}>{item.brand}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Product Detail', {data: item})
              }>
              <Text style={styles.proName}>{item.name}</Text>
            </TouchableOpacity>
            <Text style={styles.proPrice}>$ {item.stockPrice}</Text>
          </View>
        </View>
      </View>
    );
  };
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

export default RecommendedProduct;

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
    height: 258,
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
    borderRadius: 5,
    resizeMode: 'contain',
  },
  proName: {
    color: '#223263',
    fontWeight: 'bold',
    height: 55,
  },
  proPrice: {
    color: '#40BFFF',
    fontWeight: 'bold',
    marginTop: 3,
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
  brandName: {
    marginVertical: 5,
    height: 35,
  },
});
