import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import actions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const userDATA = [
  {
    id: 'user001',
    url: require('../../../assets/image/profilePicture.png'),
    userFirstName: 'Dominic',
    userLastName: 'Ovo',
    userName: '@dominic_ovo',
    gender: 'Male',
    birthday: '12-12-2012',
    email: 'ecomm@gmail.com',
    phoneNumber: '0123-456-789',
    password: '**********',
  },
];
const WIDTH = Dimensions.get('window').width;
const ChangeGenderScreen = ({route, data}) => {
  const [gender, setGender] = useState(route.params.data.gender);
  const getInformationUser = useSelector(state => state.getInformationUser);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Gender</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <View style={styles.flexEnd}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            dispatch({
              type: actions.SET_GENDER,
              data: {
                gender: gender,
              },
            });
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeGenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: WIDTH,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#223263',
    fontWeight: 'bold',
    marginVertical: 15,
  },
  pickerContainer: {
    borderRadius: 5,
    borderColor: '#EBF0FF',
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    width: WIDTH - 20,
    alignSelf: 'center',
  },
  picker: {
    color: '#9098B1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flexEnd: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#40BFFF',
    height: 57,
    width: WIDTH - 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
});
