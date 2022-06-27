import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import CustomizedButton from './CustomizedButton';

const cardDATA = {
  cardNumber1: '5600',
  cardNumber2: '4587',
  cardNumber3: '8954',
  cardNumber4: '4455',
  cardHolderName: 'Dominic Ovo',
  cardSave: '02/2026',
};

const PendingPayment = () => {
  const oderData = useSelector(state => state.getOderInformation);
  const cardData = useSelector(state => state.getInformationUser).creditCard;
  const navigation = useNavigation();
  const cardItem = ({item}) => {
    return (
      <TouchableOpacity opacity="0.8">
        <View style={styles.cardContainer}>
          <View>
            <Image
              style={styles.logo}
              source={require('../assets/icon/MasterCard.png')}
            />
          </View>
          <View style={styles.cardNumberContainer}>
            <Text style={styles.cardNumber}>{item.cardNumber1}</Text>
            <Text style={styles.cardNumber}>{item.cardNumber2}</Text>
            <Text style={styles.cardNumber}>{item.cardNumber3}</Text>
            <Text style={styles.cardNumber}>{item.cardNumber4}</Text>
          </View>
          <View style={styles.holderContainer}>
            <Text style={styles.holderText}>CARD HOLDER</Text>
            <Text style={styles.holderText}>CARD SAVE</Text>
          </View>
          <View style={styles.holderContainer}>
            <Text style={styles.holderName}>{item.cardHolder}</Text>
            <Text style={styles.holderName}>{item.cardSave}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={cardItem}
        keyExtractor={item => item.cardId}
      />
      <View style={styles.buttonContainer}>
        <CustomizedButton
          title={'Pay $' + oderData.oderTotalPrice}
          onPress={() => {
            navigation.navigate('Oder Success');
          }}
        />
      </View>
    </View>
  );
};

export default PendingPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  cardContainer: {
    height: 190,
    backgroundColor: '#40BFFF',
    borderRadius: 15,
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  logo: {
    marginLeft: 10,
  },
  cardNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  holderContainer: {
    flexDirection: 'row',
  },
  holderText: {
    fontSize: 10,
    color: '#FFFFFF',
    marginLeft: 25,
  },
  holderName: {
    fontSize: 10,
    color: '#FFFFFF',
    marginLeft: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
