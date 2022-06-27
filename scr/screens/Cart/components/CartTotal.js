import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../../redux/actions';
import CheckOutButton from './CheckOutButton';

const CartTotal = () => {
  const getCartItem = useSelector(state => state.getCartItem);

  var totalItem = getCartItem.numberCart;
  var totalPrice = 0;
  var totalShippingCost = 0;

  getCartItem.Carts.forEach(item => {
    let itemTotalPrice = item.quantity * item.price;
    let itemTotalShippingCost = item.quantity * item.shippingcost;

    return (
      (totalShippingCost += itemTotalShippingCost),
      (totalPrice += itemTotalPrice + totalShippingCost)
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.rowFlex}>
        <Text style={styles.text}>Items ({totalItem})</Text>
        <Text style={styles.price}>{totalPrice}</Text>
      </View>
      <View style={styles.rowFlex}>
        <Text style={styles.text}>Shipping</Text>
        <Text style={styles.price}>{totalShippingCost}</Text>
      </View>
      <View style={styles.dashedLine}></View>
      <View style={styles.rowFlexTotal}>
        <Text style={styles.totalText}>Total Price</Text>
        <Text style={styles.totalPrice}>{totalPrice}</Text>
      </View>
      <View style={styles.checkOut}>
        <CheckOutButton data={totalPrice} />
      </View>
    </View>
  );
};

export default CartTotal;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    height: 144,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
  },
  text: {
    color: '#9098B1',
  },
  price: {
    color: '#223263',
  },
  totalText: {
    color: '#223263',
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#40BFFF',
    fontWeight: 'bold',
  },
  dashedLine: {
    borderWidth: 1,
    marginHorizontal: 20,
    borderStyle: 'dashed',
    borderColor: '#EBF0FF',
    marginVertical: 10,
  },
  rowFlexTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  checkOut: {
    marginTop: 20,
  },
});
