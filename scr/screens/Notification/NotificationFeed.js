import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    title: 'New Product',
    url: require('../../assets/image/ProductImage.png'),
    name: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    time: 'June 3, 2015 5:06 PM',
  },
  {
    title: 'Best Product',
    url: require('../../assets/image/ProductImage2.png'),
    name: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    time: 'June 3, 2015 5:06 PM',
  },
  {
    title: 'New Product',
    url: require('../../assets/image/ProductImage4.png'),
    name: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    time: 'June 3, 2015 5:06 PM',
  },
];

const NotificationFeed = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rowFlex}>
        <View>
          <Image source={DATA[0].url} style={styles.icon} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{DATA[0].title}</Text>
          <Text style={styles.contentText}>{DATA[0].name}</Text>
          <Text style={styles.uploadTime}>{DATA[0].time}</Text>
        </View>
      </View>
      <View style={styles.rowFlex}>
        <View>
          <Image source={DATA[1].url} style={styles.icon} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{DATA[1].title}</Text>
          <Text style={styles.contentText}>{DATA[1].name}</Text>
          <Text style={styles.uploadTime}>{DATA[1].time}</Text>
        </View>
      </View>
      <View style={styles.rowFlex}>
        <View>
          <Image source={DATA[2].url} style={styles.icon} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{DATA[2].title}</Text>
          <Text style={styles.contentText}>{DATA[2].name}</Text>
          <Text style={styles.uploadTime}>{DATA[2].time}</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationFeed;
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
  },
  icon: {
    height: 48,
    width: 48,
    margin: 12,
  },
  contentContainer: {
    marginVertical: 12,
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
