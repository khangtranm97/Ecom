import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import CustomizedButton from '../../../components/CustomizedButton';

const cardDATA = {
  cardNumber1: '5600',
  cardNumber2: '4587',
  cardNumber3: '8954',
  cardNumber4: '4455',
  cardHolderName: 'Dominic Ovo',
  cardSave: '02/2026',
};

const CreditCard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity opacity="0.8">
        <View style={styles.cardContainer}>
          <View>
            <Image
              style={styles.logo}
              source={require('../../../assets/icon/MasterCard.png')}
            />
          </View>
          <View style={styles.cardNumberContainer}>
            <Text style={styles.cardNumber}>{cardDATA.cardNumber1}</Text>
            <Text style={styles.cardNumber}>{cardDATA.cardNumber2}</Text>
            <Text style={styles.cardNumber}>{cardDATA.cardNumber3}</Text>
            <Text style={styles.cardNumber}>{cardDATA.cardNumber4}</Text>
          </View>
          <View style={styles.holderContainer}>
            <Text style={styles.holderText}>CARD HOLDER</Text>
            <Text style={styles.holderText}>CARD SAVE</Text>
          </View>
          <View style={styles.holderContainer}>
            <Text style={styles.holderName}>{cardDATA.cardHolderName}</Text>
            <Text style={styles.holderName}>{cardDATA.cardSave}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <CustomizedButton title="Add Card" />
      </View>
    </View>
  );
};

export default CreditCard;

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
