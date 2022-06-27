import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const DATA = [
  {
    total: 3,
    itemPrice: '$600',
    shippingCost: '$40',
    importCharges: '$120',
    totalPrice: '$760',
  },
];

const CartTotal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowFlex}>
        <Text style={styles.text}>Items ({DATA[0].total})</Text>
        <Text style={styles.price}>{DATA[0].itemPrice}</Text>
      </View>
      <View style={styles.rowFlex}>
        <Text style={styles.text}>Shipping</Text>
        <Text style={styles.price}>{DATA[0].shippingCost}</Text>
      </View>
      <View style={styles.rowFlex}>
        <Text style={styles.text}>Import Charges</Text>
        <Text style={styles.price}>{DATA[0].importCharges}</Text>
      </View>
      <View style={styles.dashedLine}></View>
      <View style={styles.rowFlexTotal}>
        <Text style={styles.totalText}>Total Price</Text>
        <Text style={styles.totalPrice}>{DATA[0].totalPrice}</Text>
      </View>
    </View>
  );
};

export default CartTotal;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    height: 164,
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
});
