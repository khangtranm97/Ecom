import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import couponData from '../../../data/couponData';
import {useDispatch, useSelector} from 'react-redux';

const CouponInput = () => {
  const [coupon, setCoupon] = useState('');
  const [isValidCoupon, setValidCoupon] = useState(true);
  const getCartItem = useSelector(state => state.getCartItem);
  var couponValue = 0;
  couponData.map(item => {
    if (item == coupon) {
      return (couponValue = item);
    }
  });

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Cupon Code"
          style={styles.textInput}
          placeholderTextColor="#EBF0FF"
          onChangeText={value => {
            setCoupon(value);
          }}
          value={coupon}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            if (couponValue != 0) {
              setValidCoupon(true);
              Alert.alert('Coupon Added Success !');
            } else setValidCoupon(false);
          }}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 20,
        }}>
        <Text style={{color: 'red', fontWeight: 'bold'}}>
          {isValidCoupon ? '' : 'Your coupon is not correct!'}
        </Text>
      </View>
    </View>
  );
};

export default CouponInput;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 87,
    backgroundColor: '#40BFFF',
    justifyContent: 'center',
  },
  textInput: {
    marginHorizontal: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});
