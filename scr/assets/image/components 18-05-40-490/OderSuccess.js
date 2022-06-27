import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomizedButton from './CustomizedButton';
import {useNavigation} from '@react-navigation/native';
import actions from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const OderSuccess = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require('../assets/icon/SuccessIcon.png')} />
      </View>
      <Text style={styles.headerText}>Success</Text>
      <Text style={{color: '#9098B1', marginVertical: 10}}>
        Thank you for shopping with Ecom
      </Text>
      <CustomizedButton
        title="Back to Home"
        onPress={() => {
          navigation.navigate('Your Cart');
          dispatch({
            type: 'RESET_CART',
          });
          dispatch({
            type: 'RESET_ODER',
          });
        }}
      />
    </View>
  );
};

export default OderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    with: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
