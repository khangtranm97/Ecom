import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomizedButton from '../../../components/CustomizedButton';

const userDATA = [
  {
    country: 'Viet Nam',
    firstName: '',
    lastName: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
  },
];
const AddAddress = () => {
  const [currentCountry, setCurrentCountry] = useState(userDATA[0].country);
  const [currentFirstName, setFirstName] = useState(userDATA[0].firstName);
  const [currentLastName, setLastName] = useState(userDATA[0].lastName);
  const [currentstreetAddress, setStreetAddress] = useState(
    userDATA[0].streetAddress,
  );
  const [currentstreetAddress2, setStreetAddress2] = useState(
    userDATA[0].streetAddress2,
  );
  const [currentcity, setcity] = useState(userDATA[0].city);
  const [currentstate, setstate] = useState(userDATA[0].state);
  const [currentzipCode, setzipCode] = useState(userDATA[0].zipCode);
  const [currentphoneNumber, setphoneNumber] = useState(
    userDATA[0].phoneNumber,
  );
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Country or region</Text>
      <TextInput
        style={styles.textInput}
        value={currentCountry}
        onChangeText={setCurrentCountry}
      />
      <Text style={styles.headerText}>First Name</Text>
      <TextInput
        style={styles.textInput}
        value={currentFirstName}
        onChangeText={setFirstName}
      />
      <Text style={styles.headerText}>Last Name</Text>
      <TextInput
        style={styles.textInput}
        value={currentLastName}
        onChangeText={setLastName}
      />
      <Text style={styles.headerText}>Street Address</Text>
      <TextInput
        style={styles.textInput}
        value={currentstreetAddress}
        onChangeText={setStreetAddress}
      />
      <Text style={styles.headerText}>Street Address 2 (Optional)</Text>
      <TextInput
        style={styles.textInput}
        value={setStreetAddress2}
        onChangeText={setStreetAddress2}
      />
      <Text style={styles.headerText}>City</Text>
      <TextInput
        style={styles.textInput}
        value={currentcity}
        onChangeText={setcity}
      />
      <Text style={styles.headerText}>State/Province/Region</Text>
      <TextInput
        style={styles.textInput}
        value={currentstate}
        onChangeText={setstate}
      />
      <Text style={styles.headerText}>Zip Code</Text>
      <TextInput
        style={styles.textInput}
        value={currentzipCode}
        onChangeText={setzipCode}
      />
      <Text style={styles.headerText}>Phone Number</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        value={currentphoneNumber}
        onChangeText={setphoneNumber}
      />
      <CustomizedButton title="Add Address" />
    </ScrollView>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    flex: 1,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#223263',
    marginVertical: 10,
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    height: 48,
  },
});
