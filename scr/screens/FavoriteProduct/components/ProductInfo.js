import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const productDATA = [
  {
    id: 'shoes001',
    productName: 'Nike Air Max 97 SE',
    rate: 4,
    productPrice: 299.43,
    size: [5, 6, 7, 8, 9],
    specification: 'Laser/ Blue/ Anthracite/ Watermelon/ White ',
    productCode: 'CD0113-400',
  },
];

const renderItem = ({id,index}) => (
  <View style={styles.categoryIcon}>
    <View style={styles.rectangle}>
      <Image source={require('../../../assets/icon/Circle.png')} />
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.sizeSelect}>{productDATA[0].size[index]}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ProductInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.productInfoContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.productName}>{productDATA[0].productName}</Text>
          <Image
            style={styles.icon}
            source={require('../../../assets/icon/Heart.png')}
          />
        </View>
        <Image
          source={require('../../../assets/icon/Rate4Stars.png')}
          style={styles.starRates}
        />
        <Text style={styles.productPrice}>${productDATA[0].productPrice}</Text>
      </View>

      <View>
        <Text style={styles.headerText}>Select Size</Text>
        <FlatList
          data={productDATA[0].size}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false} // Hide scroll bar
        />
      </View>

      <View>
        <Text style={styles.headerText}>Specification</Text>
        <View style={styles.flexRow}>
          <Text style={styles.headerText1}>Show :</Text>
          <View>
            <Text style={styles.specificationText}>
              {productDATA[0].specification}
            </Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.headerText1}>Style :</Text>
          <View>
            <Text style={styles.specificationText}>
              {productDATA[0].productCode}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.descriptionText}>
            The Nike Air Max 270 React ENG combines a full-length React foam
            midsole with a 270 Max Air unit for unrivaled comfort and a striking
            visual experience.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductInfo;

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
  },
});
