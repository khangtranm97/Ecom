import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';

const WIDTH = Dimensions.get('window').width;
const orderDATA = [
  {
    orderId: 'GHTK001HCMHG',
    orderTime: 'March 21 2022',
    orderStatus: 'Shipping',
    orderItems: 2,
    orderPrice: '$349',
    shippingDate: 'January 18, 2020',
    shippingMethod: 'POS Regular',
    shippingTrackingNumber: '000192848574',
    shippingAddress: '297 Vo Thi Sau Q1 HCM',
  },
  {
    orderId: 'GHTK002HCMCT',
    orderTime: 'March 21 2022',
    orderStatus: 'Shipping',
    orderItems: 3,
    orderPrice: '$549',
    shippingDate: 'January 16, 2020',
    shippingMethod: 'POS Regular',
    shippingTrackingNumber: '000192848573',
    shippingAddress: '299 Vo Thi Sau Q1 HCM',
  },
];

const Item = ({id}) => {
  return (
    <View style={styles.orderContainer}>
      <View style={styles.rowFlex}>
        <Text style={styles.order}>Date Shipping</Text>
        <Text style={styles.orderEnd}>{orderDATA[id].shippingDate}</Text>
      </View>
      <View style={styles.rowFlex}>
        <Text style={styles.order}>Shipping Method</Text>
        <Text style={styles.orderEnd}>{orderDATA[id].shippingMethod}</Text>
      </View>
      <View style={styles.rowFlex}>
        <Text style={styles.order}>Tracking Number</Text>
        <Text style={styles.orderEnd}>
          {orderDATA[id].shippingTrackingNumber}
        </Text>
      </View>
      <View style={styles.rowFlex}>
        <Text style={styles.order}>Address</Text>
        <Text style={styles.orderEndBlue}>{orderDATA[id].shippingAddress}</Text>
      </View>
    </View>
  );
};
const ShippingDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Shipping Details</Text>
      <Item id={0} />
    </View>
  );
};

export default ShippingDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  //Item style
  orderContainer: {
    width: WIDTH - 40,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    padding: 10,
  },
  headerText: {
    color: '#223263',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  rowFlex: {
    flexDirection: 'row',
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
    marginVertical: 10,
  },
});
