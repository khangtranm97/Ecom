import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import DashedLine from 'react-native-dashed-line';
import {useNavigation} from '@react-navigation/native';

const orderDATA = [
  {
    orderId: 'GHTK001HCMHG',
    orderTime: 'March 21 2022',
    orderStatus: 'Shipping',
    orderItems: 2,
    orderPrice: '$349',
  },
  {
    orderId: 'GHTK002HCMCT',
    orderTime: 'March 21 2022',
    orderStatus: 'Shipping',
    orderItems: 3,
    orderPrice: '$549',
  },
];
const Item = ({id}) => {
  const navigation = useNavigation();
  var orderTime =
    new Date().getDate().toString() +
    '-' +
    new Date().getMonth().toString() +
    '-' +
    new Date().getFullYear().toString();

  return (
    <View style={styles.orderContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Order Detail')}>
        <Text style={styles.orderIdText}>{orderDATA[id].orderId}</Text>
        <View style={styles.rowFlex}>
          <Text style={styles.order}>Order at E-Comm :</Text>
          <Text style={styles.orderEnd}>{orderDATA[id].orderTime}</Text>
        </View>
        <DashedLine dashColor="#EBF0FF" />
        <View style={styles.rowFlex}>
          <Text style={styles.order}>Order Status</Text>
          <Text style={styles.orderEnd}>{orderDATA[id].orderStatus}</Text>
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.order}>Items</Text>
          <Text style={styles.orderEnd}>{orderDATA[id].orderItems}</Text>
        </View>
        <View style={styles.rowFlex}>
          <Text style={styles.order}>Price</Text>
          <Text style={styles.orderEndBlue}>{orderDATA[id].orderPrice}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const WIDTH = Dimensions.get('window').width;
const OrderScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Item id={0} />
      <Item id={1} />
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF', width: WIDTH},
  orderContainer: {
    width: WIDTH - 40,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    padding: 10,
  },
  rowFlex: {
    flexDirection: 'row',
  },
  borderLine: {
    borderWidth: 1,
    //borderColor: '#EBF0FF',
    borderColor: 'black',
    borderRadius: 1,
    borderStyle: 'dotted',
  },
  orderIdText: {
    color: '#223263',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  order: {
    color: '#223263',
    marginVertical: 10,
    flex: 1,
  },
  orderEnd: {
    color: '#223263',
    marginVertical: 10,
    justifyContent: 'flex-end',
  },
  orderEndBlue: {
    color: '#40BFFF',
    marginVertical: 10,
  },
});
