import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

const systemWidth = Dimensions.get('window').width;
const systemHeight = Dimensions.get('window').height;
const DATA = [
  {
    userID: 'user001',
    profileNotification: 3,
    feedNotification: 3,
    activityNotification: 3,
  },
];
const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.flexcontainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Offer')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/icon/Offer.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Offer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Offer')}>
          <View style={styles.notificationNumberContainer}>
            <Text style={styles.notificationNumber}>
              {DATA[0].profileNotification}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.flexcontainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Feed')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/icon/Feed.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Feed</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Feed')}>
          <View style={styles.notificationNumberContainer}>
            <Text style={styles.notificationNumber}>
              {DATA[0].profileNotification}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.flexcontainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Activity')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/icon/Notification.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Activity</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Activity')}>
          <View style={styles.notificationNumberContainer}>
            <Text style={styles.notificationNumber}>
              {DATA[0].profileNotification}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    width: systemWidth,
    height: systemHeight,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  flexcontainer: {
    flexDirection: 'row',
    width: systemWidth,
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    tintColor: '#40BFFF',
    marginHorizontal: 20,
    height: 24,
    width: 24,
  },
  text: {
    fontWeight: 'bold',
    color: '#223263',
  },
  notificationNumberContainer: {
    width: 20,
    height: 20,
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FB7181',
  },
  notificationNumber: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#FFFFFF',
  },
});
