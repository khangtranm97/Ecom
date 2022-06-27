import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomizedButton from '../../../components/CustomizedButton.js';
import {useSelector} from 'react-redux';

const AddressScreen = () => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.getInformationUser);

  const UserItem = ({item}) => {
    return (
      <View style={styles.dataContainer}>
        <Text style={styles.userName}>{item.addressName}</Text>
        <Text style={styles.userData}>{item.addressDetail}</Text>
        <View style={styles.typeContainer}>
          <Text style={{color: '#9098B1'}}>Type: </Text>
          <Text style={{color: '#9098B1'}}>{item.type}</Text>
        </View>
        <Text style={styles.userData}>{item.addressPhoneNumber}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('Edit Address')}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icon/Trash.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View>
            {item.default ? (
              <View
                style={{
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={styles.defaultIcon}
                  source={require('../../../assets/icon/SuccessIcon.png')}
                />
                <Text style={{color: '#9098B1'}}>Default Address</Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={userData.address}
        renderItem={UserItem}
        keyExtractor={item => item.id}
      />
      <CustomizedButton
        title="Add Address"
        onPress={() => navigation.navigate('Add Address')}
      />
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  dataContainer: {
    height: 240,
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    padding: 20,
    borderColor: '#EBF0FF',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#223263',
  },
  userData: {
    color: '#9098B1',
  },
  buttonContainer: {
    flexDirection: 'row',

    height: 57,
    alignItems: 'center',
  },
  editButton: {
    maxWidth: 77,
    height: 57,
    backgroundColor: '#40BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#EBF0FF',
    flex: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 12,
  },
  typeContainer: {flexDirection: 'row'},
  defaultIcon: {
    width: 35,
    height: 35,
  },
});
