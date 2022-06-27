import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProfileScreen = ({data, route}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Change Name', {data: route.params.data})
          }>
          <Image source={route.params.data.url} style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Change Name', {data: route.params.data})
            }>
            <Text style={styles.userFullName}>
              {route.params.data.firstName +" "+ route.params.data.lastName}
            </Text>
            <Text style={styles.userName}>@{route.params.data.userName}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Change Gender', {data: route.params.data})
          }>
          <View style={styles.listItem}>
            <View style={styles.listFlex}>
              <Image
                style={styles.listIcon}
                source={require('../../../assets/icon/Gender.png')}
              />
              <Text style={styles.listText}>Gender</Text>
            </View>
            <View style={styles.listFlex}>
              <Text style={styles.userInformation}>
                {route.params.data.gender}
              </Text>
              <Image
                style={styles.right}
                source={require('../../../assets/icon/Right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Change Birthday', {data: route.params.data})
          }>
          <View style={styles.listItem}>
            <View style={styles.listFlex}>
              <Image
                style={styles.listIcon}
                source={require('../../../assets/icon/Date.png')}
              />
              <Text style={styles.listText}>Birthday</Text>
            </View>
            <View style={styles.listFlex}>
              <Text style={styles.userInformation}>
                {route.params.data.birthday}
              </Text>
              <Image
                style={styles.right}
                source={require('../../../assets/icon/Right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Change Email', {data: route.params.data})
          }>
          <View style={styles.listItem}>
            <View style={styles.listFlex}>
              <Image
                style={styles.listIcon}
                source={require('../../../assets/icon/Email.png')}
              />
              <Text style={styles.listText}>Email</Text>
            </View>
            <View style={styles.listFlex}>
              <Text style={styles.userInformation}>
                {route.params.data.email}
              </Text>
              <Image
                style={styles.right}
                source={require('../../../assets/icon/Right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Change PhoneNumber', {data: route.params.data})
          }>
          <View style={styles.listItem}>
            <View style={styles.listFlex}>
              <Image
                style={styles.listIcon}
                source={require('../../../assets/icon/Phone.png')}
              />
              <Text style={styles.listText}>Phone Number</Text>
            </View>
            <View style={styles.listFlex}>
              <Text style={styles.userInformation}>
                {route.params.data.phoneNumber}
              </Text>
              <Image
                style={styles.right}
                source={require('../../../assets/icon/Right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Change Password', {data: route.params.data})
          }>
          <View style={styles.listItem}>
            <View style={styles.listFlex}>
              <Image
                style={styles.listIcon}
                source={require('../../../assets/icon/Lock.png')}
              />
              <Text style={styles.listText}>Change Password</Text>
            </View>
            <View style={styles.listFlex}>
              <Text style={styles.userInformation}>
                {route.params.data.password}
              </Text>
              <Image
                style={styles.right}
                source={require('../../../assets/icon/Right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: WIDTH,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  profile: {
    flexDirection: 'row',
    margin: 20,
  },
  avatar: {
    width: 72,
    height: 72,
    marginRight: 10,
  },
  nameContainer: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 12,
    color: '#9098B1',
  },
  userFullName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#223263',
    marginBottom: 8,
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  listFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#40BFFF',
  },
  listText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#223263',
  },
  userInformation: {
    fontSize: 12,
    color: '#9098B1',
  },
  right: {
    marginLeft: 5,
  },
});
