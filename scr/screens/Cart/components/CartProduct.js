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
import actions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

import ItemCountEditor from '../components/ItemCountEditor';

const CartProduct = ({data}) => {
  const DATA = data.Carts;
  const dispatch = useDispatch();
  const getCartItem = useSelector(state => state.getCartItem);

  const renderItem = ({item}) => {
    var key = getCartItem.Carts.findIndex(function (items) {
      return items.id == item.id;
    });
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Image style={styles.productImage} source={item.url} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.brandName}>{item.brandname}</Text>
          <View style={styles.nameContainer}>
            <TouchableOpacity>
              <Text style={styles.productName}>{item.name}</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: 'DELETE_CART',
                    payload: {
                      key: key,
                    },
                  });
                }}>
                <Image
                  source={require('../../../assets/icon/Trash.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <ItemCountEditor data={{quantity: item.quantity, id: item.id}} />
          </View>
        </View>
      </View>
    );
  };
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
    resizeMode: 'contain',
  },
  nameContainer: {
    flexDirection: 'row',
    marginVertical: 10,
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
    color: '#223263',
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
  brandName: {
    marginTop: 5,
  },
});
