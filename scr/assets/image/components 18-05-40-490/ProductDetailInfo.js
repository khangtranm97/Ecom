import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ProductDetailInfo = ({data, route}) => {
  const renderItem = ({id, index}) => {
    return (
      <View style={styles.categoryIcon} key={data.size[index].toString()}>
        <View style={styles.rectangle}>
          <Image source={require('../assets/icon/Circle.png')} />
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.sizeSelect}>{data.size[index]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const details = ({index}) => {
    return (
      <View>
        <Text style={styles.specificationText}>* {data.details[index]}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.productInfoContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.productName}>{data.productName}</Text>
        </View>
        <Text style={styles.productPrice}>${data.stockPrice}</Text>
      </View>

      <View>
        <Text style={styles.headerText}>Select Size</Text>
        <FlatList
          data={data.size}
          renderItem={renderItem}
          keyExtractor={item => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false} // Hide scroll bar
        />
      </View>

      <View>
        <Text style={styles.headerText}>Specification</Text>
        <View style={styles.flexRow}>
          <Text style={styles.headerText1}>Product Details </Text>
          <View>
            <FlatList
              data={data.details}
              renderItem={details}
              keyExtractor={item => item}
              showsHorizontalScrollIndicator={false} // Hide scroll bar
            />
          </View>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.headerText1}>Material </Text>
          <View>
            <Text style={styles.specificationText}>{data.specification}</Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.headerText1}>Colour Shown </Text>
          <View>
            <Text style={styles.specificationText}>{data.color}</Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.headerText1}>Product Code </Text>
          <View>
            <Text style={styles.specificationText}>{data.code}</Text>
          </View>
        </View>

        <View style={styles.flexRow}>
          <View>
            <Text style={styles.descriptionText}>{data.descriptionText}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  productInfoContainer: {},
  flexRow: {
    flexDirection: 'row',
  },
  starRates: {
    width: 96,
    height: 16,
    marginVertical: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#223263',
    maxWidth: '90%',
    marginRight: 20,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#40BFFF',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#223263',
  },
  //Size List Style
  categoryIcon: {
    marginVertical: 10,
    width: 70,
    height: 108,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  rectangle: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productIcon: {
    position: 'absolute',
  },
  iconText: {
    marginTop: 7,
    fontSize: 10,
    color: '#9098B1',
  },
  touchable: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeSelect: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#223263',
  },
  headerText1: {
    color: '#223263',
    marginVertical: 10,
    flex: 1,
  },
  specificationText: {
    maxWidth: 200,
    marginTop: 10,
    color: '#9098B1',
  },
  descriptionText: {
    color: '#9098B1',
    marginVertical: 10,
  },
  details: {
    maxWidth: 190,
  },
});
