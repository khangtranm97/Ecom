import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

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
    reviewerAvatarUrl: require('../../../assets/image/ProfilePicture1.png'),
    reviewText:
      'This is really amazing product, i like the design of product, I hope can buy it again!',
    reviewPictureUrl: [
      require('../../../assets/image/AirMax97.png'),
      require('../../../assets/image/AirMax97_3.png'),
      require('../../../assets/image/AirMax97_4.png'),
    ],
    reviewDate: 'March 10 2022',
    ratePoint: 4.5,
  },
  {
    reviewRate: 5,
    reviewerName: 'James Lebrons',
    reviewerAvatarUrl: require('../../../assets/image/ProfilePicture2.png'),
    reviewText: 'Nice !',
    reviewPictureUrl: [
      require('../../../assets/image/AirMax97.png'),
      require('../../../assets/image/AirMax97_4.png'),
      require('../../../assets/image/AirMax97_1.png'),
    ],
    reviewDate: 'March 10 2022',
    ratePoint: 4.5,
  },
];

const ReviewThread = ({user}) => (
  <View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      <Image style={styles.userAvatar} source={user.reviewerAvatarUrl} />
      <View style={{height: 48, justifyContent: 'space-around'}}>
        <Text style={styles.headerTitle}>{user.reviewerName}</Text>
        <Image
          style={styles.ratingIcon}
          source={require('../../../assets/icon/Rate4Stars.png')}
        />
      </View>
    </View>
    <View>
      <Text style={styles.reviewText}>{user.reviewText}</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.reviewPicture} source={user.reviewPictureUrl[0]} />
      <Image style={styles.reviewPicture} source={user.reviewPictureUrl[1]} />
      <Image style={styles.reviewPicture} source={user.reviewPictureUrl[2]} />
    </View>
    <Text style={styles.reviewText}>{user.reviewDate}</Text>
  </View>
);

const Review = () => {
  return (
    <View>
      <ReviewThread user={reviewDATA[0]} />
      <ReviewThread user={reviewDATA[1]} />
      <ReviewThread user={reviewDATA[2]} />
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
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
  headerText: {
    color: '#40BFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
