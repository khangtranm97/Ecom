import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

import ItemCountEditor from './ItemCountEditor';

const DATA = [
  {
    id: 1,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    url: require('../assets/image/ProductImage.png'),
    likestatus: true,
    price: '$299',
    productCount: 1,
  },
  {
    id: 2,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    url: require('../assets/image/ProductImage1.png'),
    likestatus: true,
    price: '$299',
    productCount: 1,
  },
];

const renderItem = ({item}) => (
  <View style={styles.container}>
    <View>
      <TouchableOpacity>
        <Image style={styles.productImage} source={item.url} />
      </TouchableOpacity>
    </View>
    <View>
      <View style={styles.nameContainer}>
        <TouchableOpacity>
          <Text style={styles.productName}>{item.name}</Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icon/RedHeart.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/icon/Trash.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <ItemCountEditor />
      </View>
    </View>
  </View>
);

const CartProduct = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false} // Hide scroll bar
      />
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
    height: 104,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
  },
  productImage: {
    height: 72,
    width: 72,
    margin: 15,
  },
  nameContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    maxWidth: Dimensions.get('window').width - 237,
    marginRight: 15,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    height: 24,
    width: 24,
    marginLeft: 15,
  },
  itemPrice: {
    fontWeight: 'bold',
    color: '#40BFFF',
  },
});
