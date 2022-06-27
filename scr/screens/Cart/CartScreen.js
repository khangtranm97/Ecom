import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import actions from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

import CartProduct from './components/CartProduct';
import CouponInput from './components/CouponInput';
import CartTotal from './components/CartTotal';
import CheckOutButton from './components/CheckOutButton';
import CustomizedButton from '../../components/CustomizedButton';

const CartScreen = ({route}) => {
  const dispatch = useDispatch();
  const getCartItem = useSelector(state => state.getCartItem);
  const getOderInformation = useSelector(state => state.getOderInformation);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CartProduct data={getCartItem} />
        <CouponInput />
        <CartTotal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: '#FFFFFF', flex: 1},
});
