import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const SelectPaymentMethod = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => navigation.navigate('Choose Card')}>
        <Image
          source={require('../assets/icon/CreditCard.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>Credit Cart Or Debit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => {
          Alert.alert(
            'This payment method is not ready yet. Please try again later',
          );
        }}>
        <Image
          source={require('../assets/icon/Paypal.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>Paypal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => {
          Alert.alert(
            'This payment method is not ready yet. Please try again later',
          );
        }}>
        <Image
          source={require('../assets/icon/Bank.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>Bank Transfer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectPaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 58,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#223263',
    marginLeft: 10,
  },
});
