import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import StepIndicator from 'react-native-step-indicator';

import ShippingDetail from './ShippingDetail';
import CustomizedButton from '../../../components/CustomizedButton';

const WIDTH = Dimensions.get('window').width;
const orderDATA = [
  {
    orderId: 'GHTK001HCMHG',
    orderTime: 'March 21 2022',
    orderStatus: 'Shipping',
    orderItems: 2,
    orderPrice: 299,
    shippingStatus: 3,
    shippingDate: 'January 18, 2020',
    shippingMethod: 'POS Regular',
    shippingTrackingNumber: '000192848574',
    shippingAddress: '297 Vo Thi Sau Q1 HCM',
    shippingFee: 20,
    importChanges: 28,
  },
  {
    orderId: 'GHTK002HCMCT',
    orderTime: 'March 21 2022',
    orderStatus: 'Shipping',
    orderItems: 3,
    orderPrice: 299,
    shippingStatus: 2,
    shippingDate: 'January 16, 2020',
    shippingMethod: 'POS Regular',
    shippingTrackingNumber: '000192848573',
    shippingAddress: '299 Vo Thi Sau Q1 HCM',
    shippingFee: 20,
    importChanges: 38,
  },
];
const productDATA = [
  {
    id: 1,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    url: require('../../../assets/image/ProductImage.png'),
    likestatus: true,
    price: '$299',
    productCount: 1,
  },
  {
    id: 2,
    name: 'Nike Air Zoom Pegasus 36 Miami',
    url: require('../../../assets/image/ProductImage1.png'),
    likestatus: true,
    price: '$299',
    productCount: 1,
  },
];
const labels = ['Packing', 'Shipping', 'Arriving', 'Success'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

const renderItem = ({item}) => (
  <View style={styles.productContainer}>
    <View>
      <TouchableOpacity>
        <Image style={styles.productImage} source={item.url} />
      </TouchableOpacity>
    </View>
    <View style={styles.nameContainer}>
      <TouchableOpacity>
        <Text style={styles.productName}>{item.name}</Text>
      </TouchableOpacity>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
    <View style={styles.iconContainer}>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/icon/RedHeart.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  </View>
);
let totalPrice = () => {
  var result = 0;
  for (let i = 0; i < orderDATA.length; i++) {
    result += orderDATA[i].orderPrice;
  }
  return result;
};
let totalShipping = () => {
  var result = 0;
  for (let i = 0; i < orderDATA.length; i++) {
    result += orderDATA[i].shippingFee;
  }
  return result;
};
let totalImportChanges = () => {
  var result = 0;
  for (let i = 0; i < orderDATA.length; i++) {
    result += orderDATA[i].importChanges;
  }
  return result;
};

const OrderDetailScreen = () => {
  //const [currentPosition, setCurrentPosition] = useState(1);
  totalPrice();
  return (
    <ScrollView style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={orderDATA[0].shippingStatus}
        labels={labels}
        stepCount={4}
        // onPress={position => {
        //   setCurrentPosition(position);
        // }}
      />
      <Text style={styles.headerText}>Product</Text>
      <FlatList
        data={productDATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false} // Hide scroll bar
      />
      <ShippingDetail />
      <Text style={styles.headerText}>Payment Details</Text>
      <View>
        <View style={styles.orderContainer}>
          <View style={styles.rowFlex}>
            <Text style={styles.order}>
              Items ({Object.keys(orderDATA).length})
            </Text>
            <Text style={styles.orderEnd}>{totalPrice()}</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.order}>Shipping</Text>
            <Text style={styles.orderEnd}>{totalShipping()}</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.order}>Import Changes</Text>
            <Text style={styles.orderEnd}>{totalImportChanges()}</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.orderTotal}>Totals</Text>
            <Text style={styles.orderEndBlue}>
              {totalPrice() + totalShipping() + totalImportChanges()}
            </Text>
          </View>
        </View>
      </View>
      <CustomizedButton title="Notify Me"/>
    </ScrollView>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: WIDTH,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#223263',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  //Item image style
  productContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    marginVertical: 5,
  },
  productImage: {
    height: 72,
    width: 72,
    margin: 15,
  },
  nameContainer: {
    marginVertical: 15,
    justifyContent: 'space-between',
    width: 200,
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    maxWidth: Dimensions.get('window').width - 237,
    marginRight: 15,
    color: '#223263',
  },
  iconContainer: {
    marginVertical: 15,
  },
  icon: {
    height: 24,
    width: 24,
  },
  itemPrice: {
    fontWeight: 'bold',
    color: '#40BFFF',
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
  rowFlex: {
    flexDirection: 'row',
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
    color: '#40BFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orderTotal: {
    marginVertical: 10,
    flex: 1,
    color: '#223263',
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
