import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    title: 'The Best Title',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2014 1:01 PM',
  },
  {
    title: 'SUMMER OFFER 98% Cashback',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    time: 'April 30, 2014 1:01 PM',
  },
  {
    title: 'Special Offer 25% OFF',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    time: 'April 30, 2014 1:01 PM',
  },
];

const NotificationOffer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.rowFlex}>
          <Image
            source={require('../../assets/icon/Offer.png')}
            style={styles.icon}
          />
          <Text style={styles.titleText}>{DATA[0].title}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{DATA[0].content}</Text>
          <Text style={styles.uploadTime}>{DATA[0].time}</Text>
        </View>
      </View>
      <View>
        <View style={styles.rowFlex}>
          <Image
            source={require('../../assets/icon/Offer.png')}
            style={styles.icon}
          />
          <Text style={styles.titleText}>{DATA[1].title}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{DATA[1].content}</Text>
          <Text style={styles.uploadTime}>{DATA[1].time}</Text>
        </View>
      </View>
      <View>
        <View style={styles.rowFlex}>
          <Image
            source={require('../../assets/icon/Offer.png')}
            style={styles.icon}
          />
          <Text style={styles.titleText}>{DATA[2].title}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{DATA[2].content}</Text>
          <Text style={styles.uploadTime}>{DATA[2].time}</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationOffer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  rowFlex: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#223263',
    alignSelf: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    tintColor: '#40BFFF',
    margin: 6,
  },
  contentContainer: {
    marginLeft: 38,
  },
  contentText: {
    fontSize: 12,
    color: '#9098B1',
  },
  uploadTime: {
    marginTop: 5,
    fontSize: 10,
    color: '#223263',
  },
});
