import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import StarRating from 'react-native-star-rating';
import Icon, {FontAwesome} from 'react-native-vector-icons/FontAwesome';
import AddImageButton from './components/AddImageButton';
import {useNavigation} from '@react-navigation/native';

const WriteReview = () => {
  const navigation = useNavigation();
  const [currentRate, setCurrentRate] = useState(0);
  const [text, onChangeText] = React.useState('');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>
        Please write Overall level of satisfaction with your shipping / Delivery
        Service
      </Text>
      <View style={styles.flexBox}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={currentRate}
          selectedStar={rating => setCurrentRate(rating)}
          fullStarColor={'#FFC833'}
          emptyStarColor={'#EBF0FF'}
          starSize={30}
          containerStyle={styles.rateContainer}
          buttonStyle={styles.star}
        />
        <Text style={styles.rateText}>{currentRate}/5</Text>
      </View>
      <Text style={styles.headerText}>Write Your Review</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your review here"
          placeholderTextColor="#9098B1"
        />
      </View>
      <Text style={styles.headerText}>Add Photo</Text>
      <AddImageButton onPress={() => navigation.navigate('NotificationFeed')} />
    </ScrollView>
  );
};

export default WriteReview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  headerText: {
    color: '#223263',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  rateContainer: {
    height: 32,
  },
  rateText: {
    color: '#9098B1',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInputContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    height: 160,
    maxHeight: 160,
  },
  input: {
    padding: 10,
    color: '#223263',
  },
});
