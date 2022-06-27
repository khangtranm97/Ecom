import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import actions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('window').width;

const ChangeNameScreen = ({data, route}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(route.params.data.lastName);
  const [userName, setUserName] = useState(route.params.data.userName);
  const dispatch = useDispatch();
  const getInformationUser = useSelector(state => state.getInformationUser);
  const storeUsername = async () => {
    try {
      const user = {
        userFirstName: firstName,
        userLastName: lastName,
        userName: userName,
      };
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem('User', jsonValue);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const getData = async () => {
    try {
      const jsonValueString = await AsyncStorage.getItem('User');
      const value = JSON.parse(jsonValueString);
      setFirstName(value.userFirstName);
      setLastName(value.userLastName);
      setUserName(value.userName);
    } catch (e) {
      Alert.alert(e.message);
    }
  };
  var testUser = {
    userFirstName: firstName,
    userLastName: lastName,
    userName: userName,
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>First Name</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.placeholderText}
          placeholder={firstName}
          value={firstName}
          onChangeText={value => {
            setFirstName(value);
          }}
        />
      </View>
      <Text style={styles.headerText}>Last Name</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={lastName}
          value={lastName}
          style={styles.placeholderText}
          onChangeText={value => {
            setLastName(value);
          }}
        />
      </View>
      <Text style={styles.headerText}>User Name</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={userName}
          value={userName}
          style={styles.placeholderText}
          onChangeText={value => {
            setUserName(value);
          }}
        />
      </View>
      <View style={styles.flexEnd}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            storeUsername('User', testUser);
            dispatch({
              type: actions.SET_NAME,
              data: {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
              },
            });
            Alert.alert('Name changed');
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            getData('User');
          }}>
          <Text>Get</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeNameScreen;

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
    justifyContent: 'center',
  },
  placeholderText: {
    marginLeft: 15,
    color: '#9098B1',
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
