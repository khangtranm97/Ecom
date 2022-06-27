import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import actions from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';


const AccountList = () => {
  const dispatch = useDispatch();
  const getInformationUser = useSelector(state => state.getInformationUser);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: actions.SET_PROFILE,
            data: {
              name: 'Test',
              gender: 'Male',
            },
          });
        }}>
        <View style={styles.flexcontainer}>
          <Image
            source={require('../assets/icon/User.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.flexcontainer}>
          <Image
            source={require('../assets/icon/Bag.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Order</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.flexcontainer}>
          <Image
            source={require('../assets/icon/Gps.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Address</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.flexcontainer}>
          <Image
            source={require('../assets/icon/CreditCard.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Payment</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AccountList;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
  },
  flexcontainer: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
  },
  icon: {
    tintColor: '#40BFFF',
    marginHorizontal: 20,
    height: 24,
    width: 24,
  },
  text: {
    fontWeight: 'bold',
  },
});
