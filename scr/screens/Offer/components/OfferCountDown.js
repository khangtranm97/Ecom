import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import CountDown from 'react-native-countdown-component';

const OfferCountDown = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ImageBackground
          source={require('../../../assets/image/PromotionImage.png')}
          style={styles.backgroundImage}>
          <Text style={styles.text}>Super Flash Sale 50% Off</Text>
          <CountDown
            until={28800}
            size={20}
            timeToShow={['H', 'M', 'S']}
            digitStyle={{backgroundColor: '#FFFFFF'}}
            digitTxtStyle={{color: '#223263'}}
            size={16}
            timeLabels={{h: null, m: null, s: null}}
            showSeparator={true}
            separatorStyle={{color: '#FFFFFF'}}
          />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default OfferCountDown;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    borderRadius: 10,
    alignSelf: 'center',
  },
  backgroundImage: {
    height: 206,
  },
  text: {
    fontSize: 24,
    maxWidth: 209,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginVertical: 30,
    marginHorizontal: 20,
  },
});
