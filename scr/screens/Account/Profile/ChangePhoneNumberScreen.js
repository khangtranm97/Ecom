import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import actions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const WIDTH = Dimensions.get('window').width;

const ChangePhoneNumber = ({route, data}) => {
  const [phoneNumber, setPhoneNumber] = useState(route.params.data.phoneNumber);
  const getInformationUser = useSelector(state => state.getInformationUser);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Phone Number</Text>
      <View style={styles.textInputContainer}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/Phone.png')}
        />
        <TextInput
          placeholder={route.params.data.phoneNumber}
          placeholderTextColor="#9098B1"
          style={styles.placeholderText}
          onChangeText={value => {
            setPhoneNumber(value);
          }}
        />
      </View>
      <View style={styles.flexEnd}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            dispatch({
              type: actions.SET_PHONENUMBER,
              data: {
                phoneNumber: phoneNumber,
              },
            });
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePhoneNumber;

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
  textInputContainer: {
    borderRadius: 5,
    borderColor: '#EBF0FF',
    borderWidth: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  placeholderText: {
    fontSize: 12,
    fontWeight: 'bold',
    width: 200,
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
