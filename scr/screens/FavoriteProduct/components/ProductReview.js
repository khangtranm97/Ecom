import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const reviewDATA = [
  {
    reviewRate: 4,
    reviewerName: 'James Lawson',
    reviewerAvatarUrl: require('../../../assets/image/profilePicture.png'),
    reviewText:
      'Air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
    reviewPictureUrl: [
      require('../../../assets/image/AirMax97.png'),
      require('../../../assets/image/AirMax97_1.png'),
      require('../../../assets/image/AirMax97_2.png'),
    ],
    reviewDate: 'March 10 2022',
    ratePoint: 4.5,
  },
  {
    reviewRate: 3,
    reviewerName: 'Famima Lawson',
    reviewerAvatarUrl: require('../../../assets/image/profilePicture.png'),
    reviewText: 'Air max are always very comfortable fit.',
    reviewPictureUrl: [
      require('../../../assets/image/AirMax97.png'),
      require('../../../assets/image/AirMax97_1.png'),
      require('../../../assets/image/AirMax97_2.png'),
    ],
    reviewDate: 'March 10 2022',
    ratePoint: 4.5,
  },
  {
    reviewRate: 5,
    reviewerName: 'James Lebrons',
    reviewerAvatarUrl: require('../../../assets/image/profilePicture.png'),
    reviewText: 'Nice !',
    reviewPictureUrl: [
      require('../../../assets/image/AirMax97.png'),
      require('../../../assets/image/AirMax97_1.png'),
      require('../../../assets/image/AirMax97_2.png'),
    ],
    reviewDate: 'March 10 2022',
    ratePoint: 4.5,
  },
];

const ProductReview = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rowFlex}>
        <Text style={styles.headerTitle}>Review Product</Text>
        <TouchableOpacity onPress={() => navigation.navigate('More Review')}>
          <Text style={styles.headerText}>See More</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/icon/Rate4Stars.png')}
          style={styles.ratingIcon}
        />
        <Text style={styles.ratePoint}>{reviewDATA[0].ratePoint}</Text>
        <Text style={styles.totalRate}>(5 Review)</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Image
          style={styles.userAvatar}
          source={require('../../../assets/image/profilePicture.png')}
        />
        <View style={{height: 48, justifyContent: 'space-around'}}>
          <Text style={styles.headerTitle}>{reviewDATA[0].reviewerName}</Text>
          <Image
            style={styles.ratingIcon}
            source={require('../../../assets/icon/Rate4Stars.png')}
          />
        </View>
      </View>
      <View>
        <Text style={styles.reviewText}>{reviewDATA[0].reviewText}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.reviewPicture}
          source={reviewDATA[0].reviewPictureUrl[0]}
        />
        <Image
          style={styles.reviewPicture}
          source={reviewDATA[0].reviewPictureUrl[1]}
        />
        <Image
          style={styles.reviewPicture}
          source={reviewDATA[0].reviewPictureUrl[2]}
        />
      </View>
      <Text style={styles.reviewText}>{reviewDATA[0].reviewDate}</Text>
    </View>
  );
};

export default ProductReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerTitle: {
    color: '#223263',
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerText: {
    color: '#40BFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ratingIcon: {
    height: 16,
    width: 96,
  },
  ratePoint: {
    color: '#9098B1',
    fontWeight: 'bold',
    fontSize: 10,
    marginHorizontal: 10,
  },
  totalRate: {
    color: '#9098B1',
    fontSize: 10,
  },
  userAvatar: {
    height: 48,
    width: 48,
    marginRight: 20,
  },
  reviewText: {
    fontSize: 12,
    color: '#9098B1',
    marginBottom: 10,
  },
  reviewPicture: {
    width: 72,
    height: 72,
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
