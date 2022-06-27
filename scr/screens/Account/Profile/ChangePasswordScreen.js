import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
const WIDTH = Dimensions.get('window').width;
import actions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const ChangePasswordScreen = ({route, data}) => {
  const [password, setPassword] = useState(route.params.data.password);

  const [check, setCheck] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkNewPassword, setCheckNewPassword] = useState('');

  const getInformationUser = useSelector(state => state.getInformationUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Old Password</Text>
      <View style={styles.textInputContainer}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/Lock.png')}
        />
        <TextInput
          placeholder={'Input your password'}
          style={styles.placeholderText}
          secureTextEntry={true}
          onChangeText={value => {
            setCheck(value);
          }}
        />
      </View>
      <Text style={styles.headerText}>New Password</Text>
      <View style={styles.textInputContainer}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/Lock.png')}
        />
        <TextInput
          placeholder={'Input your new password'}
          style={styles.placeholderText}
          secureTextEntry={false}
          onChangeText={value => {
            setNewPassword(value);
          }}
        />
      </View>
      <Text style={styles.headerText}>New Password Again</Text>
      <View style={styles.textInputContainer}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/Lock.png')}
        />
        <TextInput
          placeholder={'Input again your new password'}
          placeholderTextColor="#9098B1"
          style={styles.placeholderText}
          secureTextEntry={false}
          onChangeText={value => {
            setCheckNewPassword(value);
          }}
        />
      </View>
      <View style={styles.flexEnd}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            if (check != password) {
              Alert.alert('Password wrong');
            } else if (newPassword != checkNewPassword) {
              Alert.alert('New password do not match');
            } else {
              dispatch({
                type: actions.SET_PASSWORD,
                data: {
                  passWord: newPassword,
                },
              });
              Alert.alert('Password changed successfully');
            }
          }}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;

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
  placeholderText: {
    width: 200,
    color: '#9098B1',
  },
  icon: {
    marginHorizontal: 10,
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
  buttonText: {
    color: '#FFFFFF',
  },
});
