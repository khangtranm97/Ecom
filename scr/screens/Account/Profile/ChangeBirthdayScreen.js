import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
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
const ChangeBirthdayScreen = ({route, data}) => {
  const getInformationUser = useSelector(state => state.getInformationUser);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Birthday</Text>
      <View>
        <Button title="Change Birthday" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <View style={styles.flexEnd}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            dispatch({
              type: actions.SET_BIRTHDAY,
              data: {
                birthDay: date.toString().substr(4, 11),
              },
            });
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeBirthdayScreen;

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
