import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../../redux/actions';
import {useNavigation} from '@react-navigation/native';

const CheckOutButton = ({data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getInformationUser = useSelector(state => state.getInformationUser);
  const getCartItem = useSelector(state => state.getCartItem);
  const getOderInformation = useSelector(state => state.getOderInformation);

  var oderId = Math.floor(Math.random() * 1000);

  var oderDate = new Date().getDate();
  var oderMonth = new Date().getMonth();
  var oderYear = new Date().getFullYear();
  var oderTime = oderDate + '-' + oderMonth + '-' + oderYear;

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch({
            type: 'SET_ODER',
            payload: {
              oderTotalPrice: data,
              oderId: oderId,
              oderDate: oderTime,
              oderItem: getCartItem.numberCart,
              oderDetails: getCartItem.Carts,
            },
          });
          dispatch({
            type: 'ADD_PRICE',
            payload: {
              cartPrice: data,
            },
          });
          navigation.navigate('Ship To');
        }}>
        <Text style={styles.buttonText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOutButton;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
    height: 57,
    backgroundColor: '#40BFFF',
    borderRadius: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
