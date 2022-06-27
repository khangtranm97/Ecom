import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import actions from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const WIDTH = Dimensions.get('window').width;

const ChangeEmailScreen = ({data, route}) => {
  const [email, setEmail] = useState(route.params.data.email);
  const getInformationUser = useSelector(state => state.getInformationUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Email</Text>
      <View style={styles.textInputContainer}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/Email.png')}
        />
        <TextInput
          placeholder={route.params.data.email}
          placeholderTextColor="#9098B1"
          style={styles.placeholderText}
          onChangeText={value => {
            setEmail(value);
          }}
        />
      </View>
      <Text style={styles.footerText}>
        We will send verification to your new email
      </Text>
      <View style={styles.flexEnd}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            email.indexOf('@') == -1
              ? Alert.alert('Email invalid')
              : dispatch({
                  type: actions.SET_EMAIL,
                  data: {
                    email: email,
                  },
                });
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeEmailScreen;

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
  footerText: {
    color: '#40BFFF',
    marginVertical: 10,
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
